'use client'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<Link className="links" href="#">
						Home
					</Link>
					<Link className="links" href="/swipe-north">
						Jobb api
					</Link>
					<Link className="links" href="/skelleftea">
						Skellefteå
					</Link>
					<Link className="links" href="/profile">
						Profile
					</Link>
					<Link className="links" href="/matched-jobs">
						Matched jobs
					</Link>
					<Link className="links" href="/login">
						Log in
					</Link>
				</nav>

				<main>{children}</main>
			</body>
		</html>
	)
}
