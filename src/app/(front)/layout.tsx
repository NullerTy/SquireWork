'use client'
import Footer from '@/components/layout/navs/footer'
import { TopBar } from '@/components/layout/navs/top-bar'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname()

  return (
    <>
      <TopBar />
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default Layout
