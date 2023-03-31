'use client'
import styles from '../../styles/sparadejobb.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function SavedJobs() {
	let [savedIds, setSavedIds] = useState([])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('savedIds'))
		setSavedIds(data)
	}, [])

    function emptyLocalStorage() {
        localStorage.clear()
        window.location.reload()
    }
	
	function removeJob(id) {
		const savedIds = JSON.parse(localStorage.getItem('savedIds'))
		const newIds = savedIds.filter((job) => job.id !== id)
		localStorage.setItem('savedIds', JSON.stringify(newIds))
		window.location.reload()
	}
	  
	return (
		<>
			<div className="text-card shadow saved-jobs">

				<h1 className={styles.h1}>Sparade jobb</h1>

				<button className={
					savedIds === null
					? 'button removeAll displayNone'
					: 'button removeAll'
					} onClick={emptyLocalStorage}>Radera alla annonser
				</button>

				{savedIds !== null ? (
					savedIds.map((job) => (
						<div key={job.id}>    
							
							<hr className={styles.underline}/>
							
							<div className={styles['sparade-jobb-container']}>
								<h4 className={styles['sparade-jobb-beskrivning']}>{job.headline}</h4>
								<p onClick={() => removeJob(job.id)} className={styles['ta-bort-jobb']}>&nbsp; &nbsp; &#9587;</p>
							</div>

							<div className={styles['employer-name']}>
								<p>{job.employerName}</p>
							</div>

							<div className={styles['button-container']}>
								<Link href={job.link}>
									<button className='button'>ANSÖK NU</button>
								</Link>
							</div>

						</div>
					))
				) : (
					<h2 className='centeredText'>Inga sparade annonser.</h2>
				)}

			</div>
		</>
	)
}

export default SavedJobs