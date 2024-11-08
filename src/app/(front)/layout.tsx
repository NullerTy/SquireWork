import Footer from '@/components/layout/navs/footer'
import { TopBar } from '@/components/layout/navs/top-bar'
import { ThemeProvider } from '@/components/theme-provider'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <TopBar></TopBar>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <Footer></Footer>
    </>
  )
}
export default Layout
