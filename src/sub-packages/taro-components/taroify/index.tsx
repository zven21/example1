import type { FC } from 'react'

import { PageLayout } from '@/layouts/PageLayout'

import './index.less'
import { App } from './App'

const Page: FC = () => (
  <PageLayout>
    <App />
  </PageLayout>
)

export default Page
