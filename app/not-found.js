'use client'
import React from 'react'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div>
			<h1 className="notFoundHeader">Oj, vad pinsamt</h1>
			<h2 className="notFoundSubHeader">Nu blev det fel</h2>
			<button>
				<Link href="/">Ladda om</Link>
			</button>
		</div>
	)
}
