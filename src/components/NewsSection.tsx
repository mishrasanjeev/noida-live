import { ExternalLink } from 'lucide-react';
import { newsSources } from '../data/news';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export function NewsSection() {
  return (
    <SectionWrapper
      id="news"
      title="News & Media"
      subtitle="Stay up-to-date with Noida's top news sources — curated local and national coverage"
      icon="📰"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {newsSources.map((source) => (
          <a
            key={source.id}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline group"
          >
            <Card className="p-5 h-full flex flex-col gap-3 group-hover:border-indigo-200 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
                  {source.name}
                </h3>
                <ExternalLink size={14} className="text-slate-300 group-hover:text-indigo-400 flex-shrink-0 mt-0.5 transition-colors" />
              </div>
              <p className="text-sm text-slate-500 flex-1 leading-relaxed">{source.description}</p>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50">
                <Badge variant="default">{source.category}</Badge>
                <span className="text-xs text-slate-400">{source.language}</span>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
