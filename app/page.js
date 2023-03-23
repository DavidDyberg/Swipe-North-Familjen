import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles/startsida.module.css'
import Link from 'next/link'
import photo from '../public/swipe-north-logga-vit.png'
import photo2 from '../public/linkedin.png'
import photo3 from '../public/google.png'
import photo4 from '../public/facebook.webp'
import photo5 from '../public/pilar-image.png'

const inter = Inter({ subsets: ['latin'] })

export default function Startsida() {
	return (
		<main className={styles.main}>
			<div className={styles['logga-container']}>
				<Image
					className={styles['swipe-north-logga']}
					src={photo}
				></Image>

				<Link href="/swipe-north">
					<button className={styles.swipebutton}>
						HITTA DITT DRÖMJOBB
					</button>
				</Link>
			</div>

			<div className={styles['button-container']}>
				<button className={styles.button}>LOGGA IN</button>
				<button className={styles.button}>SKAPA KONTO</button>
			</div>
		</main>
	)
}
