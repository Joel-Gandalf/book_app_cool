import { NavLink } from "react-router";

export const NavBar = () => {

    return (
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg text-indigo-600 tracking-wide">📚 BiblioApp</span>
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors font-medium ${
                  isActive ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-gray-600 hover:text-indigo-500'
                }`
              }
            >
              Inici
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                `transition-colors font-medium ${
                  isActive ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-gray-600 hover:text-indigo-500'
                }`
              }
            >
              Llibres
            </NavLink>
          </div>
        </nav>
    )
}