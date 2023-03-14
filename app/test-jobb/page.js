import jobs from './jobArray.js'

function jobsList() {
	return (
		<>
			<div>
				<h1>Lista på jobb</h1>
				<ul>
					{jobs.map((job, index) => (
						<li key={index}>
							<h2>{job.job}</h2>
							<p>{job.info}</p>
						</li>
					))}
				</ul>
			</div>

			<div>
				<h1>{jobs[0].job}</h1>
				<p>{jobs[0].info}</p>
			</div>
		</>
	)
}

export default jobsList
