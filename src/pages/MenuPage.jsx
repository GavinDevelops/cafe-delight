import { useState, useEffect } from 'react'
import menuData from '@/data/menu.json'
import SectionHeading from '@/components/ui/SectionHeading'
import MenuCategory from '@/components/menu/MenuCategory'

export default function MenuPage() {
  useEffect(() => { document.title = 'Menu — Cafe Delight' }, [])
  const { categories } = menuData
  const [activeTab, setActiveTab] = useState(categories[0].name)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SectionHeading title="Our Menu" subtitle="Handcrafted with love, served with a smile" />

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-10" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.name}
            role="tab"
            aria-selected={activeTab === cat.name}
            onClick={() => setActiveTab(cat.name)}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
              activeTab === cat.name
                ? 'bg-caramel text-coffee-900'
                : 'bg-coffee-100 text-coffee-600 hover:bg-coffee-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Active category */}
      {categories
        .filter((cat) => cat.name === activeTab)
        .map((cat) => (
          <MenuCategory key={cat.name} {...cat} />
        ))}
    </section>
  )
}
