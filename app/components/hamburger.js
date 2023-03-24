'use client'
import '../styles/hamburger.css'
import Link from 'next/link'
import { useState } from 'react'
import Logga from '../../public/Swipe-North-logga-svart.png'
import Ske from '../../public/skelleftea.png'
import Image from 'next/image'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)
	const closeMenu = () => setIsOpen(false)

	return (
		<div className="container">
			<nav className="navbar">
				<Link href="https://skelleftea.se/">
				<Image src={Ske} className="Ske"></Image>
				</Link>
				<Link href="/">
				<Image src={Logga} className="Logga"></Image>
				</Link>
				<ul  className={`navMenu ${isOpen ? 'active' : ''}`}>
					<li className="navItem">
						<Link href="../swipe-north">
							<span onClick={closeMenu} className="navLink">
								Hitta jobb
							</span>
						</Link>
					</li>
					<li className="navItem">
						<Link href="../profil">
							<span onClick={closeMenu} className="navLink">
								Profil
							</span>
						</Link>
					</li>
					<li className="navItem">
						<Link href="../matched-jobs">
							<span onClick={closeMenu} className="navLink">
								Sparade jobb
							</span>
						</Link>
					</li>
					<li className="navItem">
						<Link href="../skelleftea">
							<span onClick={closeMenu} className="navLink">
								Skellefteå
							</span>
						</Link>
					</li>
					<li className="navItem">
						<Link href="../login">
							<span onClick={closeMenu} className="navLink">
								Logga in
							</span>
						</Link>
					</li>
				</ul>
				<button
				className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
					<span className="navbarButton"></span>
					<span className="navbarButton"></span>
					<span className="navbarButton"></span>
				</button>
			</nav>
		</div>
	)
}
