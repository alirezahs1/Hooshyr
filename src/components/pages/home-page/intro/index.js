import Image from 'next/image';
import BGImg from 'static/img/header.jpg'
import { WavoButton } from '../../../ui/wavo-button';
import { useInView } from "react-intersection-observer";

import LottieHello from 'static/img/lottie-hello.json';
import LottieArrow from 'static/img/lottie-arrow.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faHand } from '@fortawesome/free-solid-svg-icons'

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Highlighter } from 'components/typography';
import { WordAnimator } from '../../../ui/word-animator';


export const Intro = () => {

	const {ref, inView} = useInView({triggerOnce: true});

	return (
		<section className="h-screen pt-20 sm:min-h-[700px] lg:min-h-[900px] relative overflow-hidden">
			<div className="absolute left-0 -top-28  bottom-0 -right-72 sm:-right-60 md:-right-40 lg:-right-28 2xl:-right-28">
				<Image src={BGImg} alt="Hooshyar" layout="fill" objectFit="cover" objectPosition="right bottom" />
			</div>
			<div className="max-w-6xl mx-auto flex flex-col justify-end lg:justify-center relative h-full">
				<div ref={ref} className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl pl-5 xl:pl-0">
					<h3 className="text-lg md:text-2xl mb-8 lg:mb-14 flex items-end text-gray-200">
						<span className="mr-3">
							<WordAnimator speed={2}>
								Hey! I&apos;m Alireza	
							</WordAnimator>
						</span>
						<Player
								autoplay
								loop
								src={LottieHello}
								className="w-10 md:w-14"
							/>
					</h3>
					<h2 className="font-bold mb-4 lg:mb-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
						<Highlighter>
							<WordAnimator play={inView} speed={2} delay={500}>
								Front-end
							</WordAnimator>
						</Highlighter>
						&nbsp;
						<div>
							Developer based in Tehran, Iran.
						</div>
					</h2>
					<div className={`mb-8 lg:mb-16 text-md sm:text-xl text-neutral-400 animate__animated animate__delay-2s ${inView ? "animate__fadeIn" : ""}`}>
						Coding Since 2016.
					</div>
					<a href="mailto:hooshyar.net@gmail.com">
						<WavoButton className={`animate__animated animate__delay-1s ${inView ? "animate__fadeInUp" : ""}`}>
							Say Hello
							<FontAwesomeIcon className='ml-3' icon={faHand} />
						</WavoButton>
					</a>
					<div className="w-max ml-24 mb-10">
						<Player
							autoplay
							loop
							src={LottieArrow}
							className="w-60 md:w-80"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}