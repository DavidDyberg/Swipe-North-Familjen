import './styles/globals.css'
import { Inter } from 'next/font/google'
// import Link from 'next/link'
// import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Swipe North',
	description: 'Hitta ditt nya drömjobb i Skellefteå',
	icons: {
		icon: './favicon-32x32.png',
	},	
	other: {
		appleMobileWebAppCapable: "yes",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
