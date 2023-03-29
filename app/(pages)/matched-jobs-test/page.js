'use client'
import styles from '../../styles/sparadejobb.module.css'
import photo from '../../../public/fika.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'

function SavedJobs() {
	let [savedIds, setSavedIds] = useState([])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('savedIds'))
		setSavedIds(data)
	}, [])

	if (savedIds === null) {
		savedIds = [{ headline: 'Inga sparade annonser' }]
	}

	return (
		<div className="text-card shadow saved-jobs">
			<h1 className={styles.h1}>Sparade jobb</h1>
			{savedIds.map((job) => (
			<div>	
				<div className={styles['sparade-jobb-container']} key={job.id}>
					<Image className={styles['sparade-jobb-image']} src={photo}></Image>
					<h4 className={styles['sparade-jobb-beskrivning']}>{job.headline}</h4>
					<p className={styles['ta-bort-jobb']}>  &#9587;</p>
		    	</div>
	
				<div className={styles['employer-name']}>
					<p>{job.employerName}</p>
				</div>

				<div className={styles['button-container']}>
					<button className={styles.button}>ANSÖK NU</button>
					<hr className={styles.underline}/>
				</div>
		</div>
			))}

		</div>
	)
}

export default SavedJobs




	//<div key={job.id} className={styles['sparade-jobb-container']}>
	//			<Image className={styles['sparade-jobb-image']} src={photo}></Image>
	//			<h4 className={styles['sparade-jobb-beskrivning']}>Redo för nästa steg? Bli automationsingenjör hos detta innovativa företag!</h4>
	//			<p className={styles['ta-bort-jobb']}>  &#9587;</p>
	//			</div>

	//			<div className={styles['employer-name']}>
	//				<p>Skellefteå kommun</p>
	//			</div>

	//		<div className={styles['button-container']}>
	//			<button className={styles.button}>ANSÖK NU</button>
	//			<hr className={styles.underline}/>
	//		</div>