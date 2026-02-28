export default function LoadingSpinner({ className = '' }) {
  return (
    <div className={`flex items-center justify-center py-12 ${className}`} role="status">
      <div className="w-8 h-8 border-4 border-coffee-200 border-t-coffee-600 rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
