'use client'
import React from 'react'
import Link from 'next/link'

import ske from '../../styles/skelleftea.module.css'

export default function Skelleftea() {
	return (
		<div className="text-page">
			<div className={`shadow ${ske.textCard}`}>
				<h1 className={ske.logg}>Skellefteå</h1>
				<p>
					En av de största fördelarna med Skellefteå är att människor
					hinner mer utan att behöva skruva upp tempot. Mångsidigheten
					och de korta avstånden får helt enkelt tillvaron att lättare
					gå ihop. Här finns förutsättningarna att leva tryggt och
					samtidigt utforska nya drömmar.
					<br />
					<br />
					Oavsett årstid har Skellefteå mycket att erbjuda. Det finns
					många möjligheter till en aktiv fritid för barn och unga men
					även för dig som är äldre. I Skellefteå finns det något som
					passar alla.
				</p>
				<button className="button">
					<Link href="https://skelleftea.se/flyttahit">
						Läs mer på webben
					</Link>
				</button>
			</div>
		</div>
	)
}
