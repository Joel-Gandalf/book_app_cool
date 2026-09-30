export function Home(){
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
        Benvingut a la Biblioteca Digital
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Explora el nostre catàleg de llibres, cerca per títol o filtra per categories per trobar la teva propera lectura.
      </p>
      <a
        href="/books"
        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition-colors"
      >
        Veure Llibres
      </a>
    </div>
  )
}