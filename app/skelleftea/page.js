'use client'
import React from 'react'
import Link from 'next/link'

export default function Skelleftea() {
	return (
		<main>
			<div className='text-card'>
				<h1>Skellefteå</h1>
				<p>En av de största fördelarna med Skellefteå är att människor hinner mer utan att behöva skruva upp tempot. Mångsidigheten och de korta avstånden får helt enkelt tillvaron att lättare gå ihop. Här finns förutsättningarna att leva tryggt och samtidigt utforska nya drömmar.</p>
				<button className="button">
				<Link href="https://skelleftea.se/platsen/flytta-hit/flytta-hit">Läs mer på webben</Link></button>
			</div>
		</main>
	)
}
