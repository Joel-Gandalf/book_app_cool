import { Outlet} from 'react-router';
import { Footer } from './Footer';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
        
        <Footer/>
    </div>
  )
}