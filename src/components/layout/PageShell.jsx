export default function PageShell({ title, subtitle, actions, children }) {
  return (
    <div className="flex-1 min-h-screen flex flex-col">
      <div className="px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-3">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-base-100">{title}</h1>
            {subtitle && <p className="text-sm text-base-400 mt-1">{subtitle}</p>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      </div>
      <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-10 animate-fadeIn">{children}</div>
    </div>
  )
}
