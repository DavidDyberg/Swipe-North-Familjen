'use client'
import { useState, useEffect } from 'react'

function SavedJobs() {
	const [savedIds, setSavedIds] = useState([])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('savedIds'))
		setSavedIds(data)
	}, [])

	return (
		<div>
			<h1>Sparade jobb</h1>
			<br />
			<br />
			{savedIds.map((job) => (
				<div key={job.id}>
					<h2>{job.headline}</h2>
					<p>{job.employerName}</p>
					<br />
					<br />
				</div>
			))}
		</div>
	)
}

export default SavedJobs
