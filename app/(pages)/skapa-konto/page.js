import styles from '../../styles/login.module.css'
import Image from 'next/image'
import linkedin from '../../../public/linkedin.png'
import google from '../../../public/google.png'
import facebook from '../../../public/facebook.webp'

export default function SkapaKonto() {
	return (
		<main>
			<div className={styles['login-card']}>
				<h1>Skapa konto</h1>

				<div className={styles['form-container']}>
					<form>
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
							></Image>
							Skapa konto med Linkedin
						</button>
						<button className={styles['social-media-login-button']}>
							{' '}
							<Image
								className={styles['social-media-icon']}
								src={google}
							></Image>
							Skapa konto med Google
						</button>
						<button className={styles['social-media-login-button']}>
							{''}
							<Image
								className={styles['social-media-icon']}
								src={facebook}
							></Image>
							Skapa konto med Facebook
						</button>
					</div>
				</div>
			</div>
		</main>
	)
}