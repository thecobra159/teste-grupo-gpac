'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Bebas_Neue } from 'next/font/google'
import { useEffect, useState } from 'react'
import { InternalLinks } from '@/utils/Utils'
import '@/styles/header.css'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export function Header(): JSX.Element {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false)
  const [isScrolled, setScrolled] = useState(false)

  function handleSearchBoxState() {
    setIsSearchBoxOpen(!isSearchBoxOpen)
  }

  function changeBackgroundColor() {
    if (window.scrollY > 70) setScrolled(true)
    else setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)
  })

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <button className="header-icon">
        <FontAwesomeIcon icon={faBars} size={'3x'} />
      </button>

      <a href={InternalLinks.home}>
        <button className={`${bebasNeue.className} header-title`}>faun</button>
      </a>

      <div className="header-search-area">
        <input
          type="text"
          className={`header-search-input ${
            !isSearchBoxOpen ? 'invisible' : ''
          }`}
          placeholder="Pesquisa"
        />
        <button className="header-icon" onClick={handleSearchBoxState}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={'3x'} />
        </button>
      </div>
    </header>
  )
}
