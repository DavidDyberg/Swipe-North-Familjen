'use client'
import { useState, useEffect } from 'react'

function JobApi() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

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
	}, [])

	if (isLoading) {
		return <div>Vi reser norrut ...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<>
			<div>
				<p>EXEMPEL PÅ API</p>
				{data && (
					<>
						<h1>{data.hits[0].headline}</h1>
						<p>{data.hits[0].brief}</p>
					</>
				)}
			</div>
		</>
	)
}

export default JobApi
