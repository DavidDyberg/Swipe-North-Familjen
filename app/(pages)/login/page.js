import styles from '../../styles/login.module.css'
import Image from 'next/image'
import Link from 'next/link'
import linkedin from '../../../public/linkedin.png'
import google from '../../../public/google.png'
import facebook from '../../../public/facebook.webp'

export default function Login() {
	return (
			<div className={styles.textCard}>
				<h1 className={styles.logg}>Logga in</h1>

				<div className={styles['form-container']}>
					<form>
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
						<p className={styles['forgot-password']}>
							Glömt lösenord?
						</p>

						<Link href="/skapa-konto">
							<p className={styles['skapa-konto']}>
								Har du inget konto? Skapa konto.
							</p>
						</Link>

						<button className={styles['login-button']}>
							Logga in
						</button>
					</form>
					<div className={styles['social-media-container']}>
						<button className={styles['social-media-login-button']}>
							{' '}
							<Image
								className={styles['social-media-icon']}
								src={linkedin}
							></Image>
							Logga in med Linkedin
						</button>
						<button className={styles['social-media-login-button']}>
							{' '}
							<Image
								className={styles['social-media-icon']}
								src={google}
							></Image>
							Logga in med Google
						</button>
						<button className={styles['social-media-login-button']}>
							{''}
							<Image
								className={styles['social-media-icon']}
								src={facebook}
							></Image>
							Logga in med Facebook
						</button>
					</div>
				</div>
			</div>
	)
}
