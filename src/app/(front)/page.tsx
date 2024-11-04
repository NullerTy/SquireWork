import Link from 'next/link'
const Page: React.FC = () => {
  return <div>
<div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">  
       <main className="max-w-[60ch] mx-auto w-full space-y-6">
          <h1 className="font-medium pt-12 transition-element">Dovydas Povilaitis</h1>
          <p className="text-gray-800 leading-snug">I am a specialist developer, i work with javascript/react/next.js and some other lanquages.
             I also enjoy editing videos and posting them on <a href="https://www.youtube.com/@holyauth" className="text-red-500 hover:text-red-800">youtube</a> I have great english communication skills.</p>
          <h2 className="text-gray-800 font-medium mt-8 mb-3">Writing</h2>
          <ul className="text-gray-800 list-disc pl-5 space-y-1">
            <li className="pl-1"><Link href="/dh" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-800">Development History</Link></li>
            <li className="pl-1"><a href="https://www.youtube.com/@holyauth" className="text-red-500 hover:text-red-800">Previous projects</a></li>
            <li className="pl-1"><a href="https://www.youtube.com/@holyauth" className="text-red-500 hover:text-red-800">Some niche things</a></li>
            <li className="pl-1"><a href="https://www.youtube.com/@holyauth" className="text-red-500 hover:text-red-800">Editing projects</a></li>
          </ul>
          <h2 className="text-gray-800 font-medium mt-8 mb-3">Code</h2>
          <ul className="text-gray-800 list-disc pl-5 space-y-1">
            <li className="pl-1"><Link href="/dh" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-800">next-css-starter</Link></li>
            <li className="pl-1"><Link href="/dh" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-800">something something</Link></li>
            <li className="pl-1"><Link href="/dh" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-800">Will be added later</Link></li>
          </ul>
        </main>
         <footer className="mt-12 text-center">
          <div className="flex justify-center space-x-4 tracking-tight">
            <a className="text-gray-400 hover:text-red-800 transition-colors duration-200">Nefbook</a>
            <a href="https://www.youtube.com/@holyauth" className="text-gray-400 hover:text-red-800 transition-colors duration-200">Youtube</a>
            <a className="text-gray-400 hover:text-red-800 transition-colors duration-200">linkedin</a>
            <a className="text-gray-400 hover:text-red-800 transition-colors duration-200">github</a>
          </div>
         </footer>
        </div> 

  </div>
}
export default Page
