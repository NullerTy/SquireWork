
import { TopBar } from '@/components/layout/navs/top-bar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}
export default Layout
