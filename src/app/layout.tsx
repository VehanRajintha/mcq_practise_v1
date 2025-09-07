import './globals.css'
import { Layout } from '@/components/layout/Layout'

export const metadata = {
  title: 'MCQ Practice Platform',
  description: 'Practice multiple choice questions for your exams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
