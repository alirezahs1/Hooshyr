import { useState, useEffect, useMemo } from 'react'

import Image from "next/image";
import LogoImg from 'static/img/hooshyar.svg'

export const Header = () => {

	const [scrolled, setScrolled] = useState(false);

	const checkScroll = () => {
		if (window.scrollY > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}

	useEffect(() => {

		window.addEventListener('scroll', checkScroll);

		return () => {
			window.removeEventListener('scroll', checkScroll);
		}

	}, [])

	return (
		<header className={`fixed top-0 inset-x-0 px-6 py-3 lg:px-12 lg:py-6 z-50 transition-colors duration-700 ${scrolled ? "bg-neutral-900" : ""}`}>
			<div className="w-32 lg:w-40 h-10 relative">
				<Image src={LogoImg} alt="Hooshyar" layout="fill" />
			</div>
		</header>
	)
}