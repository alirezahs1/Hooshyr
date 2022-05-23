import LottieHeartEyes from 'static/img/lottie-heart-eyes.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { WavoTitle } from '../../../typography/wavoTitle';

export const Biography = () => {
	return (
		<section className="pb-28">
			<div className="max-w-6xl mx-auto my-auto px-5 xl:px-0">
				<WavoTitle>My story</WavoTitle>
				<div className="text-neutral-400 leading-8 text-lg">
					<p className="mb-4">
						My journey begins with graphic design, working as a freelancer for clients all over the world for several years.
					</p>
					<p className="mb-4">
						Then I became curious about how programs work on the inside, so I learned how to coding and worked for 3 years in the software architecture department of SISnet.
					</p>
					<p className="mb-4">
						I finally realized I had all the knowledge to build my own product, so I designed, developed and launched Roostfy in more than 80 countries, getting +3 million downloads and +4 stars on Google Play.
					</p>
					<p className="mb-4">
						Thanks to all this journey I was able to get into product design, becoming my greatest passion and, fortunately, also my job. I currently design solutions at Rappi making life easier for more than 50 million people across LATAM.
					</p>
					<div className="mb-4 flex items-center">
						<span className="mr-2">
							I love what I do!
						</span>
						<Player
							autoplay
							loop
							src={LottieHeartEyes}
							className="w-12"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}