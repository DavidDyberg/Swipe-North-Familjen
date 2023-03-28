import Image from 'next/image'
import profile from '../../styles/profile.module.css'
import personImg from '../../../public/profileImg.png'

export default function Profile() {
	return (
		<>
			<div className={profile.container}>
				<div className={profile.profileCard}>
					<Image className={profile.personImg} src={personImg} />
					<div className={profile.textContainer}>
						<h4>Sara Larsson</h4>
						<p>
							25 år Stockholm
							<br />
							Användarnamn: SaraLarsson25
							<br />
							Mail: SaraLarsson@gmail.com
							<br />
							<br />
							Är en effektiv och flexibel person som ständigt vill
							utveckla sig och dessutom allmänt nyfiken på vad
							livet har att erbjuda.
							<br />
							Hon är inte rädd för förändringar och tar dom med ro
							då hon är van med att handskas med dessa typer av
							händelser från sitt jobb som entreprenör.
							<br />
							Letar yrken inom: söker brett, lite extra sugen på
							IT, marknadsföring
							<br />
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
