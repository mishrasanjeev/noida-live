import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

type FeedbackType = 'General Feedback' | 'Bug Report' | 'Feature Request' | 'Content Correction';
type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  type: FeedbackType;
  message: string;
}

const CONTACT_CARDS = [
  { icon: '🐛', title: 'Bug Report',         desc: 'Something broken or not working right?' },
  { icon: '💡', title: 'Feature Request',    desc: 'Have an idea to make Noida Live better?' },
  { icon: '✏️', title: 'Content Correction', desc: 'Wrong address, hours, or phone number?' },
  { icon: '💬', title: 'General Feedback',   desc: 'Anything else — we love hearing from you.' },
];

export function FeedbackSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    type: 'General Feedback',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('https://formsubmit.co/ajax/mishra.sanjeev@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          type: form.type,
          message: form.message,
          _subject: `Noida Live — ${form.type} from ${form.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });
      const json = (await res.json()) as { success: string | boolean };
      if (json.success === 'true' || json.success === true) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  }

  return (
    <SectionWrapper
      id="feedback"
      title="Contact & Feedback"
      subtitle="Help us make Noida Live better — report a bug, suggest a feature, or just say hi"
      icon="📬"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* Left: contact cards */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONTACT_CARDS.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex gap-3 items-start"
              >
                <span className="text-2xl shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm leading-snug">{c.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
            <p className="font-semibold text-indigo-800 text-sm mb-1">📬 Direct email</p>
            <a
              href="mailto:mishra.sanjeev@gmail.com"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium no-underline break-all"
            >
              mishra.sanjeev@gmail.com
            </a>
            <p className="text-indigo-600/70 text-xs mt-2 leading-relaxed">
              We typically respond within 24–48 hours. For urgent issues use the SOS section.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
              <CheckCircle2 size={48} className="text-green-500" />
              <div>
                <p className="text-xl font-bold text-slate-900 mb-1">Thank you!</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Your message has been sent. We'll get back to you at <span className="font-medium text-slate-700">{form.email}</span> soon.
                </p>
              </div>
              <button
                onClick={() => {
                  setStatus('idle');
                  setForm({ name: '', email: '', type: 'General Feedback', message: '' });
                }}
                className="text-sm text-indigo-600 hover:text-indigo-800 underline underline-offset-2 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { void handleSubmit(e); }} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fb-name" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fb-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fb-email" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fb-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="fb-type" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Type
                </label>
                <select
                  id="fb-type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition bg-white"
                >
                  <option>General Feedback</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Content Correction</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="fb-message" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="fb-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind…"
                  className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <AlertCircle size={15} className="shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white text-sm font-semibold transition-colors shadow-sm shadow-indigo-200"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Feedback
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
