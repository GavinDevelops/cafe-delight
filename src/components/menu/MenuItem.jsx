export default function MenuItem({ name, price, description }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3 border-b border-coffee-50 last:border-0">
      <div>
        <h4 className="font-medium text-espresso">{name}</h4>
        {description && <p className="text-sm text-coffee-400 mt-0.5">{description}</p>}
      </div>
      <span className="text-coffee-600 font-semibold whitespace-nowrap">
        ${price.toFixed(2)}
      </span>
    </div>
  )
}
