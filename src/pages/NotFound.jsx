import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <PageShell title="Page not found">
      <Link to="/">
        <Button>Back to Dashboard</Button>
      </Link>
    </PageShell>
  )
}
