export function Input({ label, className = '', ...rest }) {
  return (
    <label className="flex flex-col gap-1.5">
      {label && <span className="text-xs font-medium text-base-300">{label}</span>}
      <input
        className={`bg-base-800 border border-base-600 rounded-xl px-3.5 py-2.5 text-sm text-base-100 placeholder:text-base-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 ${className}`}
        {...rest}
      />
    </label>
  )
}

export function Textarea({ label, className = '', ...rest }) {
  return (
    <label className="flex flex-col gap-1.5">
      {label && <span className="text-xs font-medium text-base-300">{label}</span>}
      <textarea
        className={`bg-base-800 border border-base-600 rounded-xl px-3.5 py-2.5 text-sm text-base-100 placeholder:text-base-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 resize-none ${className}`}
        {...rest}
      />
    </label>
  )
}

export function Select({ label, children, className = '', ...rest }) {
  return (
    <label className="flex flex-col gap-1.5">
      {label && <span className="text-xs font-medium text-base-300">{label}</span>}
      <select
        className={`bg-base-800 border border-base-600 rounded-xl px-3.5 py-2.5 text-sm text-base-100 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 ${className}`}
        {...rest}
      >
        {children}
      </select>
    </label>
  )
}
