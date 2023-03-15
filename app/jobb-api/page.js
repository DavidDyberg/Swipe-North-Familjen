'use client'
import { useState, useEffect } from 'react'

function JobApi() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [number, setNumber] = useState(0)

	useEffect(() => {
		setIsLoading(true)
		async function fetchData() {
			try {
				const response = await fetch(
					'https://links.api.jobtechdev.se/joblinks?municipality=kicB_LgH_2Dk'
				)
				const data = await response.json()
				setData(data)
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
		setNumber(0)
	}, [])

	if (isLoading) {
		return <div>Vi far norrut ...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	function next() {
		setNumber(+1)
	}

	return (
		<>
			<div>
				<h1>EXEMPEL PÅ API</h1>

				<button onClick={next}>
					Nästa
				</button>

				{data && (
					<>
						<h2>{data.hits[number].headline}</h2>
						<p>{data.hits[number].brief}</p>
					</>
				)}
			</div>
		</>
	)
}

export default JobApi
