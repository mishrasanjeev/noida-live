interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, title, subtitle, icon, children }: SectionWrapperProps) {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            {icon && <span className="text-3xl">{icon}</span>}
            <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
          </div>
          {subtitle && <p className="text-slate-500 text-base mt-1 max-w-2xl">{subtitle}</p>}
          <div className="mt-4 h-1 w-16 rounded-full bg-indigo-500" />
        </div>
        {children}
      </div>
    </section>
  );
}
