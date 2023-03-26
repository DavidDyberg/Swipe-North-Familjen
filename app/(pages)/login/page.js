import styles from '../../styles/login.module.css'
import Image from 'next/image'
import linkedin from '../../../public/linkedin.png'
import google from '../../../public/google.png'
import facebook from '../../../public/facebook.webp'

export default function Login() {
	return (
		<main>
			<div className={styles['login-card']}>
				<h1>Logga in</h1>
				
				<div className={styles['form-container']}>
					<form>
						<input className={styles['login-form']} type="email" name="email" placeholder="Email" required/>
                    	<input   className={styles['login-form']} type='password' name="password" placeholder="Lösenord" required/>
						<p className={styles['forgot-password']}>Glömt lösenord?</p>
						<button className={styles['login-button']}>Logga in</button>
					</form>
					<div className={styles['social-media-container']}>
						<button className={styles['social-media-login-buttons']}> <Image className={styles['social-media-icons']} src={linkedin}></Image>Logga in med Linkedin</button> 
						<button className={styles['social-media-login-buttons']}> <Image className={styles['social-media-icons']} src={google}></Image>Logga in med Google</button>
						<button className={styles['social-media-login-buttons']}> <Image className={styles['social-media-icons']} src={facebook}></Image>Logga in med Facebook</button>
					</div>
				</div>
				
			</div>
			
		</main>
	)
}
