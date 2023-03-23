'use client'
import { useState, useEffect } from 'react'
import card from '../../styles/card.module.css'
import Link from 'next/link'
import imgArr from './imgArray.js'

function swipeNorthApp() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [number, setNumber] = useState(0)
	const [jobId, setJobId] = useState('')

	useEffect(() => {
		setIsLoading(true)
		async function fetchData() {
			try {
				const response = await fetch(
					`https://links.api.jobtechdev.se/joblinks?municipality=kicB_LgH_2Dk${jobId}`
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
	}, [jobId])

	if (isLoading) {
		return <h1 className="loading">Vi far norrut ...</h1>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}


//TEST

	// Define an array to store objects
	let listArray = [];

	// Define an object to add to array
	//const savedJob = {name: 'John', age: 30};

	// Add object to array
	// listArray.push(`https://links.api.jobtechdev.se/joblinks?municipality=kicB_LgH_2Dk&occupation-field=${data.hits[number].id}`);

	// Save array in local storage
	// localStorage.setItem('listArray', JSON.stringify(listArray));

	// Retrieve array from local storage
	const retrievedArray = JSON.parse(localStorage.getItem('listArray'));

	// Verify if retrieval was successful
	// console.log(retrievedArray);




	function back() {
		//Max tio pga någon sorts begränsing i APIn
		setNumber((prevNumber) => (prevNumber != 0 ? prevNumber - 1 : 9))
	}

	function next() {
		//Max tio pga någon sorts begränsing i APIn
		setNumber((prevNumber) => (prevNumber < 9 ? prevNumber + 1 : 0))
	}

	function swipeNorth() {
		{
			data &&
				(setJobId(
					`&occupation-field=${data.hits[number].occupation_field.concept_id}`
				),
				listArray.push(`${data.hits[number].id}`),
				localStorage.setItem('listArray', JSON.stringify(listArray)),
				console.log(listArray),
				console.log(retrievedArray)
				// console.log(data.hits[number].occupation_field.concept_id),
				// console.log(
				// 	`https://links.api.jobtechdev.se/joblinks?municipality=kicB_LgH_2Dk&occupation-field=${data.hits[number].occupation_field.concept_id}`)
				)
		}
	}

	function swipeDown() {
		setJobId('')
	}



	





	return (
		<>
			<div className={card.container}>
				<div className={card.temporary}>
					<button onClick={swipeNorth}>Swipe Upp (spara)</button>
					<br />
					<button onClick={back}>Vänster Swipe</button>
					<button onClick={next}>Höger Swipe</button>
					<br />
					<button onClick={swipeDown}>Swipe Ner (ladda om)</button>
				</div>

				{data && (
					<div className={`shadow ${card.card}`}>
						<h1 className={card.headline}>
							{data.hits[number].headline}
						</h1>
						<h2 className={card.employer}>
							{data.hits[number].employer.name}
						</h2>
						{imgArr[data.hits[number].id.match(/[0-9]/)]}
						<div className={card.brief}>
							{data.hits[number].brief}
						</div>
						<Link href={data.hits[number].source_links[0].url}>
							<button className={card.annonsKnapp}>
								ÖPPNA ANNONS
							</button>
						</Link>
					</div>
				)}
			</div>
		</>
	)
}

export default swipeNorthApp
