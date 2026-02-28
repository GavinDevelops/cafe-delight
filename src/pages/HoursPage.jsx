import { useEffect } from 'react'
import { siteInfo } from '@/data/siteInfo'
import { getTodayDayName } from '@/utils/dateUtils'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

export default function HoursPage() {
  useEffect(() => { document.title = 'Hours — Cafe Delight' }, [])
  const today = getTodayDayName()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <SectionHeading title="Our Hours" subtitle="We're here when you need your coffee fix" />

      <Card>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-coffee-100">
              <th className="pb-3 text-coffee-500 font-medium text-sm uppercase tracking-wide">Day</th>
              <th className="pb-3 text-coffee-500 font-medium text-sm uppercase tracking-wide text-right">Hours</th>
            </tr>
          </thead>
          <tbody>
            {siteInfo.hours.map((h) => (
              <tr
                key={h.day}
                className={`border-b border-coffee-50 last:border-0 ${
                  h.day === today ? 'bg-coffee-50 font-semibold' : ''
                }`}
              >
                <td className="py-3 text-espresso">
                  {h.day}
                  {h.day === today && (
                    <span className="ml-2 text-xs bg-caramel text-white px-2 py-0.5 rounded-full font-medium">
                      Today
                    </span>
                  )}
                </td>
                <td className="py-3 text-coffee-600 text-right">
                  {h.open} – {h.close}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  )
}
