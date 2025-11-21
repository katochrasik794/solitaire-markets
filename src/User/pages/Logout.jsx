import PageShell from '../components/PageShell'

export default function Logout() {
  return (
    <PageShell title="Logout">
      <p className="text-sm">
        Triggering logout will end your session across all OxoFunded products. Add your auth logic here when connecting
        to the backend.
      </p>
    </PageShell>
  )
}

