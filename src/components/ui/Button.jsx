const VARIANTS = {
  primary: 'bg-accent text-base-black hover:bg-accent-300 shadow-glow',
  secondary: 'bg-base-800 text-base-100 hover:bg-base-700 border border-base-600',
  ghost: 'bg-transparent text-base-200 hover:bg-base-800 hover:text-base-100',
  danger: 'bg-danger/90 text-white hover:bg-danger',
  outline: 'bg-transparent border border-accent/50 text-accent hover:bg-accent/10',
}

const SIZES = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3.5 text-base gap-2',
  icon: 'p-2.5',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  as: As = 'button',
  ...rest
}) {
  const extra = As === 'button' ? { type, disabled } : {}
  return (
    <As
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...extra}
      {...rest}
    >
      {children}
    </As>
  )
}
