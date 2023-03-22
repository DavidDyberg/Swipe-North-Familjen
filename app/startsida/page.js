import styles from './styles.module.css'
import photo from '../../public/Swipe-North-logga-vit.png'
import photo2 from '../../public/linkedin.png'
import photo3 from '../../public/google.png'
import photo4 from '../../public/facebook.webp'
import Image from 'next/image'


export default function Startsida() {
	return (
		<body className={styles.body}>
			<main className={styles.main}>
				
				<div className={styles['logga-container']} >
					<Image className={styles['swipe-north-logga']} src={photo}></Image>
				</div>
				<p className={styles['arrow-up-symbol']}>&#8686;</p>
				<h1 className={styles.title} >VÄLKOMMET TILL SWIPE NORTH</h1>
				<p className={styles.text}>SWIPEA UPPÅT FÖR ATT HITTA JUST DITT DRÖMJOBB</p>

				<div className={styles['button-container']}>
					<button className={styles.button} >SKAPA KONTO</button>
					<button className={styles.button} >LOGGA IN</button>
				</div>

				<div className={styles['icon-container']}>
					<Image className={styles.icon} src={photo2}></Image>
					<Image className={styles.icon} src={photo3}></Image>
					<Image className={styles.icon} src={photo4}></Image>
				</div>
				
			</main>
		</body>
	)
}