import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>
					<p>
						Hej sad asd asd as asd asd asfsaf sdg adg adfg fds dFD
						asd asd as as das dsad as dasd asd as as das as as das
						asd asd as dasd asd asd asddas
					</p>
				</main>
				{children}
			</body>
		</html>
	)
}
