'use client'
import { useState, useEffect, useRef } from 'react'
import card from '../card.module.css'
import Link from 'next/link';

function JobApi() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [number, setNumber] = useState(0);
  const [jobId, setJobId] = useState('');

  useEffect(() => {
	setIsLoading(true);
	async function fetchData() {
	  try {
		const response = await fetch(
			`https://links.api.jobtechdev.se/joblinks?municipality=kicB_LgH_2Dk${jobId}`
		);
		const data = await response.json();
		setData(data);
	  } catch (error) {
		setError(error);
	  } finally {
		setIsLoading(false);
	  }
	}
	fetchData();
	setNumber(0);
  }, [jobId])

  if (isLoading) {
	return <div>Vi far norrut ...</div>;
  }

  if (error) {
	return <div>Error: {error.message}</div>;
  }

  function back() {
	//Max tio pga någon sorts begränsing i APIn
	setNumber((prevNumber) => (prevNumber != 0 ? prevNumber - 1 : 9));
  }

  function next() {
	//Max tio pga någon sorts begränsing i APIn
	setNumber((prevNumber) => (prevNumber < 9 ? prevNumber + 1 : 0));
  }

  function swipeNorth() {
	{data && (
		setJobId(`&occupation-field=${data.hits[number].occupation_field.concept_id}`),
		console.log(data.hits[number].occupation_field.concept_id),
		console.log(`https://links.api.jobtechdev.se/joblinks?municipality=kicB_LgH_2Dk&occupation-field=${data.hits[number].occupation_field.concept_id}}`)
	)}
	}

  function swipeDown() {
		setJobId('')
	}


  return (
	<>
	  <div>
		<div className={card.temporary}>
			<h1>EXEMPEL PÅ API</h1>

			<button onClick={swipeNorth}>Swipe Upp (matcha)</button>
			<br />
			<button onClick={back}>Vänster Swipe</button>
			<button onClick={next}>Höger Swipe</button>
			<br />
			<button onClick={swipeDown}>Swipe Ner (ladda om)</button>
		</div>

		{data && (
		  <div className={card.card}>
			<h2>{data.hits[number].headline}</h2>
			<h3>{data.hits[number].employer.name}</h3>
			<p>{data.hits[number].brief}</p>
			<Link
				href={data.hits[number].source_links[0].url}
			>
				<button>ÖPPNA ANNONS</button>
			</Link>
		  </div>
		)}
	  </div>
	</>
  )
}

export default JobApi