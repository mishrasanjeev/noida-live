import { X, Download, Trash2, TrendingUp } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

interface StoredSearch {
  query: string;
  ts: number;
}

interface GroupedSearch {
  query: string;
  count: number;
  lastSeen: number;
}

const LS_KEY = 'noida_unmatched_searches';

function loadSearches(): StoredSearch[] {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function groupSearches(raw: StoredSearch[]): GroupedSearch[] {
  const map = new Map<string, GroupedSearch>();
  for (const { query, ts } of raw) {
    const key = query.toLowerCase();
    const existing = map.get(key);
    if (existing) {
      existing.count += 1;
      if (ts > existing.lastSeen) existing.lastSeen = ts;
    } else {
      map.set(key, { query, count: 1, lastSeen: ts });
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count || b.lastSeen - a.lastSeen);
}

function exportCSV(rows: GroupedSearch[]) {
  const lines = ['Query,Count,Last Searched', ...rows.map((r) => `"${r.query}",${r.count},"${new Date(r.lastSeen).toLocaleString('en-IN')}"`),];
  const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `noida-unmatched-searches-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export function SearchAnalyticsPanel() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<GroupedSearch[]>([]);

  const refresh = useCallback(() => setRows(groupSearches(loadSearches())), []);

  // Toggle on Ctrl+Shift+D
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        setOpen((v) => !v);
        refresh();
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [refresh]);

  function clearAll() {
    try { localStorage.removeItem(LS_KEY); } catch { /* ignore */ }
    setRows([]);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <TrendingUp size={18} className="text-indigo-600 shrink-0" />
          <div>
            <h2 className="font-bold text-slate-900 text-sm leading-none">Unmatched Searches</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {rows.length === 0
                ? 'No data yet'
                : `${rows.length} unique quer${rows.length === 1 ? 'y' : 'ies'} — use these to add missing content`}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {rows.length > 0 && (
              <>
                <button
                  onClick={() => exportCSV(rows)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
                >
                  <Download size={13} />
                  Export CSV
                </button>
                <button
                  onClick={clearAll}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                >
                  <Trash2 size={13} />
                  Clear
                </button>
              </>
            )}
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {rows.length === 0 ? (
            <div className="px-5 py-12 text-center text-slate-400 text-sm">
              No unmatched searches stored yet.
              <br />
              <span className="text-xs">They appear here after users search for something not on the page.</span>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-slate-50 text-left">
                <tr>
                  <th className="px-5 py-2.5 font-semibold text-slate-500 text-xs uppercase tracking-wide">Query</th>
                  <th className="px-3 py-2.5 font-semibold text-slate-500 text-xs uppercase tracking-wide text-center">Times</th>
                  <th className="px-5 py-2.5 font-semibold text-slate-500 text-xs uppercase tracking-wide">Last Seen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {rows.map((row) => (
                  <tr key={row.query} className="hover:bg-slate-50">
                    <td className="px-5 py-3 font-medium text-slate-800">{row.query}</td>
                    <td className="px-3 py-3 text-center">
                      <span className="inline-block min-w-[1.5rem] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
                        {row.count}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-slate-400 text-xs">
                      {new Date(row.lastSeen).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-5 py-3 border-t border-slate-100 text-xs text-slate-400 text-center">
          Press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">Ctrl+Shift+D</kbd> to toggle · Data stored in localStorage · Also sent to GA4 as <code className="text-indigo-500">search_not_found</code> events
        </div>
      </div>
    </div>
  );
}
