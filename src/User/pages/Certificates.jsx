import { Award } from 'lucide-react'

export default function Certificates() {
  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] w-full max-w-full flex-col items-center justify-center gap-4 md:gap-6 overflow-x-hidden px-4 md:px-6 pt-4 md:pt-6 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10 lg:pt-8">
      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-100">
          <Award className="h-16 w-16 text-slate-400 dark:text-slate-400" />
        </div>
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-900">
          No Certificates Yet
        </h2>
        <div className="max-w-md space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-600">
            You haven&apos;t earned any certificates yet.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-600">
            Receive payouts to earn your first certificate!
          </p>
        </div>
      </div>
    </div>
  )
}
