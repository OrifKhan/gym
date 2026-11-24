export default function Card({ children, className = '', padded = true, glow = false, as: As = 'div', ...rest }) {
  return (
    <As
      className={`rounded-2xl bg-base-900 border border-base-700 shadow-card ${padded ? 'p-5' : ''} ${
        glow ? 'shadow-glow' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </As>
  )
}
