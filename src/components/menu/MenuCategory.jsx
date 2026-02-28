import Card from '@/components/ui/Card'
import MenuItem from './MenuItem'

export default function MenuCategory({ name, description, items }) {
  return (
    <Card>
      <h3 className="font-heading text-2xl font-semibold text-espresso mb-1">{name}</h3>
      {description && <p className="text-coffee-400 text-sm mb-4">{description}</p>}
      <div>
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </Card>
  )
}
