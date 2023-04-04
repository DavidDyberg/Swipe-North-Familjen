'use client'
import React from 'react'
import Popup from 'reactjs-popup'
import '../styles/popup.css'

import Image from 'next/image'
import pil from '../../public/popPil.png'
import help from '../../public/help.svg'

export default function PopupGfg() {
	return (
			<Popup
				trigger={
					<button className="popBtn">
						<Image className="help" src={help} alt="help" />
					</button>
				}
				position="top left"
			>
				<div>
					<Image className="pil" src={pil} alt="pil" />
				</div>
			</Popup>
	)
}
