import { Link } from 'react-router'
import { siteInfo } from '@/data/siteInfo'
import { getTodayDayName } from '@/utils/dateUtils'
import Card from '@/components/ui/Card'

export default function HoursLocationPreview() {
  const today = getTodayDayName()
  const todayHours = siteInfo.hours.find((h) => h.day === today)

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <Card className="text-center">
        <h3 className="font-heading text-xl font-semibold text-espresso mb-3">Today's Hours</h3>
        {todayHours ? (
          <>
            <p className="text-2xl font-bold text-coffee-700">{todayHours.open} – {todayHours.close}</p>
            <p className="text-coffee-400 text-sm mt-1">{todayHours.day}</p>
          </>
        ) : (
          <p className="text-coffee-500">Closed today</p>
        )}
        <Link to="/hours" className="text-caramel hover:text-coffee-700 text-sm font-medium mt-3 inline-block transition-colors">
          View All Hours &rarr;
        </Link>
      </Card>

      <Card className="text-center">
        <h3 className="font-heading text-xl font-semibold text-espresso mb-3">Visit Us</h3>
        <p className="text-coffee-600">{siteInfo.address.street}</p>
        <p className="text-coffee-600">{siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}</p>
        <Link to="/location" className="text-caramel hover:text-coffee-700 text-sm font-medium mt-3 inline-block transition-colors">
          Get Directions &rarr;
        </Link>
      </Card>
    </div>
  )
}
