'use client'
import '../hamburger.css'
import Link from 'next/link'
import { useState } from 'react'
import Logga from '../../public/Swipe-North-logga-svart.png'
import Ske from '../../public/skelleftea.png'
import Image from 'next/image'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const openMenu = () => setIsOpen(!isOpen)

	return (
		<div className="container">
			<nav className="navbar">
				<Image src={Ske} className="Ske"></Image>
				<Image src={Logga} className="Logga"></Image>
				<ul
					className={
						isOpen === false
							? 'navMenu'
							: 'navMenu' + ' ' + 'active'
					}
				>
					<li className="navItem">
						<Link href="../swipe-north">
							<span className="navLink">Hitta jobb</span>
						</Link>
					</li>
					<li className="navItem">
						<Link href="../profile">
							<span className="navLink">Profil</span>
						</Link>
					</li>
					<li className="navItem">
						<Link href="../matched-jobs">
							<span className="navLink">Sparade jobb</span>
						</Link>
					</li>
					<li className="navItem">
						<Link href="../skelleftea">
							<span className="navLink">Skellefteå</span>
						</Link>
					</li>
					<li className="navItem">
						<Link href="../login">
							<span className="navLink">Logga in</span>
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
					<span className="navbarButton"></span>
					<span className="navbarButton"></span>
					<span className="navbarButton"></span>
				</button>
			</nav>
		</div>
	)
}
