import { useParams, useNavigate } from 'react-router'

export function BookDetails(){
  const { bookId } = useParams()
  const navigate = useNavigate()
  
  const books = [
    { id: '1', title: 'React Essentials', author: 'Alex Johnson' },
    { id: '2', title: 'TypeScript in Practice', author: 'Maria Garcia' },
    { id: '3', title: 'Advanced Web Routing', author: 'Sam Wilson' }
  ]
  
  const book = books.find(b => b.id === bookId)
  
  if (!book) return (
    <div className="text-center py-12">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Llibre no trobat</h2>
      <button 
        onClick={() => navigate('/books')}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Tornar al llistat
      </button>
    </div>
  )
  
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900">{book.title}</h1>
      <p className="text-lg text-gray-600">Autor: <span className="font-medium text-gray-900">{book.author}</span></p>
      
      <button 
        onClick={() => navigate('/books')}
        className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
      >
        ← Tornar al llistat
      </button>
    </div>
  )
}