'use client';
import '../hamburger.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className='container'>
      <nav className='navbar'>
        
        <ul
          className={
            isOpen === false
              ? 'navMenu'
              : 'navMenu' + ' ' + 'active'
          }
        >
          <li className='navItem'>
            <Link href="../swipe-north">
              <span className='navLink'>Hitta jobb</span>
            </Link>
          </li>
          <li className='navItem'>
            <Link href="../profile">
              <span className='navLink'>Profil</span>
            </Link>
          </li>
          <li className='navItem'>
            <Link href="../matched-jobs">
              <span className='navLink'>Sparade jobb</span>
            </Link>
          </li>
          <li className='navItem'>
            <Link href="../skelleftea">
              <span className='navLink'>Skellefteå</span>
            </Link>
          </li>
          <li className='navItem'>
            <Link href="../login">
              <span className='navLink'>Logga in</span>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? 'hamburger'
              : 'hamburger' + ' ' + 'active'
          }
          onClick={openMenu}
        >
          <span className='navbarButton'></span>
          <span className='navbarButton'></span>
          <span className='navbarButton'></span>
        </button>
      </nav>
    </div>
  );
}