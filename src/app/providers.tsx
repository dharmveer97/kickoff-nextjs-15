'use client'

import { Suspense, ReactNode } from 'react'

import { Loading } from '@/components/elements'

export function Providers({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}
