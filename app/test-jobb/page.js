import jobs from './jobArray.js'

function jobsList() {
	return (
		<>
			<div>
				<p>EXEMPEL LISTA ALLA JOBBA</p>
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
			<br />
			<br />
			<div>
				<p>EXEMPEL LISTA ETT JOBB</p>
				<h1>{jobs[0].job}</h1>
				<p>{jobs[0].info}</p>
			</div>
		</>
	)
}

export default jobsList
