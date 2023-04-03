import { useState, useEffect, useMemo } from 'react'

import Image from "next/image";
import LogoImg from 'static/img/hooshyar.svg'
import { SocialLink } from '../social-link';
import { faGithub, faGitlab, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
		<header className={`fixed top-0 inset-x-0 flex items-center px-6 py-3 lg:px-12 lg:py-6 z-50 transition-colors duration-300 ${scrolled ? "bg-neutral-900" : ""}`}>
			<div className="w-32 lg:w-40 h-10 relative">
				<Image src={LogoImg} alt="Hooshyar" layout="fill" />
			</div>
			<div className="ml-auto">
				<SocialLink icon={faGithub} href="https://github.com/alirezahs1/" />
				<SocialLink icon={faLinkedinIn} href="https://www.linkedin.com/in/hooshyr/" />
				<SocialLink icon={faInstagram} href="https://instagram.com/alirezahooshyar1/" />
				<SocialLink icon={faGitlab} href="https://gitlab.com/alirezahs" />
				<SocialLink icon={faWhatsapp} href="https://wa.me/9809388951610" />
			</div>
		</header>
	)
}