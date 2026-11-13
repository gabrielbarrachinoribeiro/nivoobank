import { Landmark } from 'lucide-react'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <Landmark className="mx-auto mb-6 size-12 text-emerald-400" aria-hidden="true" />
        <h1 className="text-4xl font-bold tracking-tight">NivooBank</h1>
        <p className="mt-4 text-slate-400">React, Vite, Tailwind CSS e Lucide prontos para usar.</p>
      </div>
    </main>
  )
}

export default App
