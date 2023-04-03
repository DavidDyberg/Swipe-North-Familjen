import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles/startsida.module.css'
import './styles/hideOverflow.css'
import Link from 'next/link'
import logga from '../public/swipe-north-logga-vit.png'

const inter = Inter({ subsets: ['latin'] })

export default function Startsida() {
	return (
		<main className={styles.main}>
			<div className={styles['logga-container']}>
				<Image
					className={styles['swipe-north-logga']}
					src={logga}
				></Image>

				<Link href="/swipe-test">
					<button className={styles.swipebutton}>
						HITTA DITT DRÖMJOBB
					</button>
				</Link>
			</div>

			<div className={styles['button-container']}>
				<Link href="/login">
					<button className={`${styles.button} ${styles.loggaIn}`}>
						LOGGA IN
					</button>
				</Link>

				<Link href="/skapa-konto">
					<button className={`${styles.button} ${styles.skapaKonto}`}>
						SKAPA KONTO
					</button>
				</Link>
			</div>
		</main>
	)
}
