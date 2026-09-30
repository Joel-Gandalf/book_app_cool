import { Outlet} from 'react-router'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <>
      <header>
      </header>

      <main>
        <Outlet />
      </main>
      
      <Footer/>
    </>
  )
}