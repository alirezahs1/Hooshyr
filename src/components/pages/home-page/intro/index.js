import Image from 'next/image';
import BGImg from 'static/img/header.jpg'
import { WavoButton } from '../../../ui/wavo-button';

import LottieHello from 'static/img/lottie-hello.json';
import LottieArrow from 'static/img/lottie-arrow.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Highlighter } from 'components/typography';


export const Intro = () => {
	return (
		<section className="h-screen pt-20 min-h-[900px] relative">
			<div className="absolute inset-0">
				<Image src={BGImg} alt="Hooshyar" layout="fill" objectFit="cover" objectPosition="right bottom" />
			</div>
			<div className="max-w-6xl mx-auto flex flex-col justify-center relative h-full">
				<div className="max-w-4xl">
					<h3 className="text-2xl mb-14 flex items-end text-gray-200">
						<span className="mr-3">
							Hey! I'm Alireza
						</span>
						<Player
								autoplay
								loop
								src={LottieHello}
								className="w-14 h-14"
							/>
					</h3>
					<h2 className="text-8xl font-bold mb-8">
						<Highlighter>Front-end</Highlighter> Developer based in Tehran, Iran.
					</h2>
					<div className="mb-16 text-xl text-gray-400">
						Coding Since 2016.
					</div>
					<a href="#achivments">
						<WavoButton>
							Take a look
							<FontAwesomeIcon className='ml-3' icon={faArrowDown} />
						</WavoButton>
					</a>
					<div className="w-max ml-32">
						<Player
							autoplay
							loop
							src={LottieArrow}
							className="w-80"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}