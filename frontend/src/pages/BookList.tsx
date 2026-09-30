import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'

const books = [
  { id: '1', title: 'React Essentials', category: 'Tecnologia' },
  { id: '2', title: 'TypeScript in Practice', category: 'Programació' },
  { id: '3', title: 'Advanced Web Routing', category: 'Web' },
  { id: '4', title: 'Modern CSS Design', category: 'Disseny' }
]

export function BookList(){
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  
  const categoryFilter = searchParams.get('category') || ''
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams({ search: searchTerm })
  }
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ category: e.target.value })
  }
  
  const filteredBooks = books.filter(book => {
    const matchesSearch = searchTerm 
      ? book.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true
      
    const matchesCategory = categoryFilter
      ? book.category === categoryFilter
      : true
      
    return matchesSearch && matchesCategory
  })
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Llistat de Llibres</h1>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <form onSubmit={handleSearch} className="flex gap-2 w-full sm:w-auto">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cercar per títol..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Cercar
          </button>
        </form>
        
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <label className="text-sm font-medium text-gray-700">Categoria:</label>
          <select 
            value={categoryFilter} 
            onChange={handleCategoryChange}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            <option value="">Totes</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Programació">Programació</option>
            <option value="Web">Web</option>
            <option value="Disseny">Disseny</option>
          </select>
        </div>
      </div>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredBooks.map(book => (
          <li key={book.id}>
            <Link 
              to={`/books/${book.id}`}
              className="block p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-300 transition-all group"
            >
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {book.title}
              </h2>
              <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full">
                {book.category}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500 py-8">No s'han trobat llibres.</p>
      )}
    </div>
  )
}
