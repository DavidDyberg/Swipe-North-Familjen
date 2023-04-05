import styles from '../../styles/login.module.css'
import Image from 'next/image'
import linkedin from '../../../public/linkedin.png'
import google from '../../../public/google.png'
import facebook from '../../../public/facebook.webp'

export default function SkapaKonto() {
	return (
		<div className={`shadow ${styles.textCard}`}>
			<h1 className={styles.h1}>Skapa konto</h1>

			<div className={styles['form-container']}>
				<form className={styles['skapa-konto-form']}>
					<input
						className={styles['login-form']}
						placeholder="Ditt namn"
						required
					/>

					<input
						className={styles['login-form']}
						type="email"
						name="email"
						placeholder="E-post"
						required
					/>

					<input
						className={styles['login-form']}
						type="password"
						name="password"
						placeholder="Lösenord"
						required
					/>

					<input
						className={styles['login-form']}
						type="password"
						name="password"
						placeholder="Upprepa lösenord"
						required
					/>

					<button className={styles['login-button']}>
						Skapa konto
					</button>
				</form>
				<div className={styles['social-media-container']}>
					<button className={styles['social-media-login-button']}>
						{' '}
						<Image
							className={styles['social-media-icon']}
							src={linkedin}
							alt="Logga för Linkedin"
						></Image>
						Skapa konto med Linkedin
					</button>
					<button className={styles['social-media-login-button']}>
						{' '}
						<Image
							className={styles['social-media-icon']}
							src={google}
							alt="Logga för Google"
						></Image>
						Skapa konto med Google
					</button>
					<button className={styles['social-media-login-button']}>
						{''}
						<Image
							className={styles['social-media-icon']}
							src={facebook}
							alt="Logga för Facebook"
						></Image>
						Skapa konto med Facebook
					</button>
				</div>
			</div>
		</div>
	)
}
