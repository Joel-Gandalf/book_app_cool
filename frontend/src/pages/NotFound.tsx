export function NotFound(){
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-6xl font-black text-indigo-600 mb-4">404</h1>
      <p className="text-xl font-semibold text-gray-800 mb-2">Pàgina no trobada</p>
      <p className="text-gray-500 mb-6">Ho sentim, la pàgina que busques no existeix.</p>
      <a href="/"
        className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">Tornar a l'Inici</a>
    </div>
  )
}