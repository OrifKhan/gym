export default function Spinner({ size = 24, className = '' }) {
  return (
    <div
      className={`border-2 border-base-600 border-t-accent rounded-full animate-spin ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
