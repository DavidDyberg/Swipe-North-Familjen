'use client'
import React from 'react'
import Link from 'next/link'
import './styles/globals.css'

export default function notFound() {
	return (
		<div className="not-found">
			<h1 className="notFoundHeader">
				Oj, vad pinsamt,
				<br /> nu blev det fel
			</h1>
			<button className="button">
				<Link href="/">Ladda om</Link>
			</button>
		</div>
	)
}
