'use client'
import { React, useState, useEffect } from 'react'
import card from '../../styles/card.module.css'
import '../../styles/hideOverflow.css'
import Link from 'next/link'
import imgArr from './imgArray.js'
import dynamic from 'next/dynamic'
import Pop from '../../components/popup'

const TinderCard = dynamic(() => import('react-tinder-card'), {
	ssr: false,
})

function swipeNorthApp() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [number, setNumber] = useState(0)
	const [jobId, setJobId] = useState('')
	const [key, setKey] = useState(0)
	const [isDataLoaded, setIsDataLoaded] = useState(false)
	const [showBriefText, setShowBriefText] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		async function fetchData() {
			try {
				const response = await fetch(
					`https://links.api.jobtechdev.se/joblinks?municipality=kicB_LgH_2Dk&limit=100${jobId}`
				)
				const data = await response.json()
				setData(data)
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false)
				setIsDataLoaded(true)
			}
		}
		fetchData()
	}, [jobId])

	//Tillagd för att inte visa sparade eller ointessanta annonser som första träff vid omladdning av sidan.
	useEffect(() => {
		async function firstLoad() {
			if (isDataLoaded) {
				setNumber(data.hits.length - 1)
				next()
			}
		}
		firstLoad()
	}, [isDataLoaded, data])

	if (isLoading) {
		return <h1 className="loading">Vi far norrut ...</h1>
	}

	if (error) {
		return (
			<div className="text-card">
				<h1>Oj, så pinsamt. Det blev ett fel:</h1>
				<p>{error.message}</p>
				<button className="button">
					<Link href="/">Ladda om</Link>
				</button>
			</div>
		)
	}

	function back() {
		setShowBriefText(false)
		const lastNotInterestedIds =
			JSON.parse(localStorage.getItem('savedNotInterestedIds')) || []
		const lastSavedIds = JSON.parse(localStorage.getItem('savedIds')) || []

		let currentIndex = number
		let found = false

		while (!found) {
			currentIndex =
				(currentIndex - 1 + data.hits.length) % data.hits.length

			if (
				!lastNotInterestedIds.some(
					(obj) => obj.notInterestedId === data.hits[currentIndex].id
				) &&
				!lastSavedIds.some(
					(obj) => obj.id === data.hits[currentIndex].id
				)
			) {
				found = true
			}
		}

		setNumber(currentIndex)
	}

	function next() {
		setShowBriefText(false)
		const nextNotInterestedIds =
			JSON.parse(localStorage.getItem('savedNotInterestedIds')) || []
		const nextSavedIds = JSON.parse(localStorage.getItem('savedIds')) || []

		let currentIndex = number
		let found = false

		while (!found) {
			currentIndex = (currentIndex + 1) % data.hits.length

			if (
				!nextNotInterestedIds.some(
					(obj) => obj.notInterestedId === data.hits[currentIndex].id
				) ||
				!nextSavedIds.some(
					(obj) => obj.id === data.hits[currentIndex].id
				)
			) {
				found = true
			}
		}

		setNumber(currentIndex)
	}

	function swipeNorth() {
		{
			const id = {
				id: data.hits[number].id,
				headline: data.hits[number].headline,
				employerName: data.hits[number].employer.name,
				link: data.hits[number].source_links[0].url,
			}

			const savedIds = JSON.parse(localStorage.getItem('savedIds')) || []

			if (!savedIds.some((savedId) => savedId.id === id.id)) {
				const newIds = [...savedIds, id]

				data &&
					(setJobId(
						`&occupation-field=${data.hits[number].occupation_field.concept_id}`
					),
					localStorage.setItem('savedIds', JSON.stringify(newIds)))
			} else {
				console.log('Dublett!')
			}
		}
	}

	function swipeDown() {
		if (data) {
			const notInterestedId = { notInterestedId: data.hits[number].id }

			const savedNotInterestedIds =
				JSON.parse(localStorage.getItem('savedNotInterestedIds')) || []

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
			} else {
				console.log('Dublett!')
			}
		}
	}

	const onSwipe = (direction) => {
		if (direction === 'up') {
			swipeNorth()
			next()
		} else if (direction === 'down') {
			swipeDown()
			next()
		} else if (direction === 'left') {
			next()
		} else if (direction === 'right') {
			back()
		}
		reloadTinderSwipe()
	}

	//Ett värde som ändras för att skapa en omladdning.
	function reloadTinderSwipe() {
		setKey(key + 1)
	}

	function showMore() {
		setShowBriefText(true)
	}

	return (
		<div>
			{data && (
				<TinderCard className="pressable" onSwipe={onSwipe} key={key}>
					<div>
						<div className={`shadow ${card.card}`}>
							<div className={card.headlineContainer}>
								<h1 className={card.headline}>
									{data.hits[number].headline}
								</h1>
							</div>

							<div className={card.employerContainer}>
								<h2 className={card.employer}>
									{data.hits[number].employer.name}
								</h2>
							</div>

							<button
								onClick={showMore}
								className={`${card.imageButton} ${
									!showBriefText ? '' : 'displayNone'
								}`}
							>
								{imgArr[data.hits[number].id.match(/[0-9]/)]}
							</button>

							<div
								className={
									card.briefContainer +
									(showBriefText ? '' : ' displayNone')
								}
							>
								<div className={card.brief}>
									{data.hits[number].brief}
								</div>
							</div>

							<div className={card.emptySpaceForButton}></div>
							<Link href={data.hits[number].source_links[0].url}>
								<button className={card.annonsKnapp}>
									ÖPPNA ANNONS
								</button>
							</Link>
						</div>
					</div>
				</TinderCard>
			)}
			<Pop />
		</div>
	)
}

export default swipeNorthApp
