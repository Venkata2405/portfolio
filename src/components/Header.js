import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-5 py-2 bg-primary shadow-md">
      
      <a href="/" className="font-hero-font font-semibold text-black text-lg">
        Venkata Karthick
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white font-hand-font">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="#About" className="hover:text-gray-300">About</a></li>
          <li><a href="#Projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#Resume" className="hover:text-gray-300">Resume</a></li>
          <li><a href="#Contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="absolute top-full left-0 w-full font-hand-font bg-slate-800 md:hidden">
          <ul className="flex flex-col text-white text-center h-fit space-y-4 py-0">
            <li className="border-b-2"><a onClick={() => setToggleMenu(false)} href="/">Home</a></li>
            <li className="border-b-2"><a onClick={() => setToggleMenu(false)} href="#About">About</a></li>
            <li className="border-b-2"><a onClick={() => setToggleMenu(false)} href="#Projects">Projects</a></li>
            <li className="border-b-2"><a onClick={() => setToggleMenu(false)} href="#Resume">Resume</a></li>
            <li className="border-b-2"><a onClick={() => setToggleMenu(false)} href="#Contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="h-6 text-white" />
      </button>

    </header>
  )
}
