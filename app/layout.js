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
	appleWebApp: {
		title: 'Apple Web App',
		statusBarStyle: 'black-translucent',
		startupImage: [
		  '/assets/startup/apple-touch-startup-image-768x1004.png',
		  {
			url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
			media: '(device-width: 768px) and (device-height: 1024px)',
		  },
		  ]
		}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
