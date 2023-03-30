'use client'
import { React, useState, useEffect } from 'react'
import card from '../../styles/card.module.css'
import '../../styles/hideOverflow.css'
import Link from 'next/link'
import imgArr from './imgArray.js'
import dynamic from 'next/dynamic'

const TinderCard = dynamic(() => import('react-tinder-card'), {
	ssr: false,
})

function swipeNorthApp() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [number, setNumber] = useState(0)
	const [jobId, setJobId] = useState('')
	const [dataArray, setDataArray] = useState('')

	useEffect(() => {
		setIsLoading(true)
		async function fetchData() {
			try {
				const response = await fetch(
					`https://links.api.jobtechdev.se/joblinks?municipality=kicB_LgH_2Dk&limit=20${jobId}`
				)
				const data = await response.json()
				setData(data)
				setDataArray(data.hits)
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
		setNumber(0)
	}, [jobId])

	if (isLoading) {
		return <h1 className="loading">Vi far norrut ...</h1>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	// if (data) {
	// 	console.log(dataArray)
	// 	console.log(number)
	// 	console.log(dataArray[0])
	// 	console.log(dataArray[number])
	// 	console.log(dataArray[number + 1])
	// }

	function back() {
		setNumber((prevNumber) => (prevNumber != 0 ? prevNumber - 1 : 19))
	}

	function next() {
		setNumber((prevNumber) => (prevNumber < 19 ? prevNumber + 1 : 0))
	}

	function swipeNorth() {
		{
			// const id = data.hits[number].id
			const id = {
				id: data.hits[number].id,
				headline: data.hits[number].headline,
				employerName: data.hits[number].employer.name,
			}

			const savedIds = JSON.parse(localStorage.getItem('savedIds')) || []

			if (!savedIds.some((savedId) => savedId.id === id.id)) {
				const newIds = [...savedIds, id]

				data &&
					(setJobId(
						`&occupation-field=${data.hits[number].occupation_field.concept_id}`
					),
					localStorage.setItem('savedIds', JSON.stringify(newIds)),
					console.log(savedIds))
			} else {
				console.log('Dublett!')
			}
		}
	}

	function swipeDown() {
		setJobId('')

		if (data) {
			const notInterestedId = { notInterestedId: data.hits[number].id }

			const savedNotInterestedIds =
				JSON.parse(localStorage.getItem('savedNotInterestedIds')) || []

			// Check if notInterestedId already exists in savedNotInterestedIds
			if (
				!savedNotInterestedIds.some(
					(id) =>
						id.notInterestedId === notInterestedId.notInterestedId
				)
			) {
				const newNotInterestedIds = [
					...savedNotInterestedIds,
					notInterestedId,
				]
				localStorage.setItem(
					'savedNotInterestedIds',
					JSON.stringify(newNotInterestedIds)
				)
				console.log(savedNotInterestedIds)
			} else {
				console.log(
					`notInterestedId ${notInterestedId.notInterestedId} already exists in savedNotInterestedIds array.`
				)
			}
		}
	}

	const onSwipe = (direction) => {
		if (direction === 'up') {
			swipeNorth()
			setNumber(0)
		} else if (direction === 'down') {
			swipeDown()
			next()
		} else if (direction === 'left') {
			next()
		} else if (direction === 'right') {
			back()
		}
		console.log('You swiped: ' + direction)
	}

	return (
		<>
			<div>
				{data &&
					dataArray.map((jobAdvert, index) => (
						<TinderCard onSwipe={onSwipe} key={jobAdvert.id}>
							<div
								className={
									index === number
										? `${card.container} ${card.active}`
										: card.container
								}
							>
								<div className={`shadow ${card.card}`}>
								<div className={card.headlineContainer}>
										<h1 className={card.headline}>
											{jobAdvert.headline}
										</h1>
									</div>

									<div className={card.employerContainer}>
										<h2 className={card.employer}>
											{jobAdvert.employer.name}
										</h2>
									</div>

									{imgArr[jobAdvert.id.match(/[0-9]/)]}

									<div className={card.briefContainer}>
										<div className={card.brief}>
											{jobAdvert.brief}
										</div>
									</div>

									<Link href={jobAdvert.source_links[0].url}>
										<button className={card.annonsKnapp}>
											ÖPPNA ANNONS
										</button>
									</Link>
									{/* <div className={card.headlineContainer}>
										<h1 className={card.headline}>
											{jobAdvert.headline}
										</h1>
									</div>
										<h2 className={card.employer}>
											{jobAdvert.employer.name}
										</h2>
										{
											imgArr[
												data.hits[number].id.match(
													/[0-9]/
												)
											]
										}
										<div className={card.brief}>
											{data.hits[number].brief}
										</div>
										<div className="pressable">
											<Link
												href={
													data.hits[number]
														.source_links[0].url
												}
											>
												<button
													className={card.annonsKnapp}
												>
													ÖPPNA ANNONS
												</button>
											</Link>
										</div> */}
									

									
								</div>
							</div>
						</TinderCard>
					))}
			</div>
		</>
	)
}

export default swipeNorthApp
