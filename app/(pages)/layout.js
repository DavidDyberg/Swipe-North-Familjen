import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/hamburger'

const inter = Inter({ subsets: ['latin'] })

export default function pageLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	)
}