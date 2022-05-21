import { Story } from "components/ui";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export const Projects = () => {

	const projects = [
		{
			title: "Amin Nuts",
			image: "/media/projects/amin.jpg",
			href: "https://aminnuts.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			meta: "Web Development"
		},
		{
			title: "Reza Food",
			image: "/media/projects/reza.jpg",
			href: "https://rezafood.ir",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			meta: "case study"
		},
		{
			title: "Bahraman Saffron",
			image: "/media/projects/bahraman.jpg",
			href: "https://bahraman.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Pestehsho",
			image: "/media/projects/pestehsho.jpg",
			href: "https://pestehsho.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Amin Nuts",
			image: "/media/projects/amin.jpg",
			href: "https://aminnuts.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Reza Food",
			image: "/media/projects/reza.jpg",
			href: "https://rezafood.ir",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Bahraman Saffron",
			image: "/media/projects/bahraman.jpg",
			href: "https://bahraman.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Pestehsho",
			image: "/media/projects/pestehsho.jpg",
			href: "https://pestehsho.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Amin Nuts",
			image: "/media/projects/amin.jpg",
			href: "https://aminnuts.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Reza Food",
			image: "/media/projects/reza.jpg",
			href: "https://rezafood.ir",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Bahraman Saffron",
			image: "/media/projects/bahraman.jpg",
			href: "https://bahraman.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Pestehsho",
			image: "/media/projects/pestehsho.jpg",
			href: "https://pestehsho.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Amin Nuts",
			image: "/media/projects/amin.jpg",
			href: "https://aminnuts.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Reza Food",
			image: "/media/projects/reza.jpg",
			href: "https://rezafood.ir",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Bahraman Saffron",
			image: "/media/projects/bahraman.jpg",
			href: "https://bahraman.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
		{
			title: "Pestehsho",
			image: "/media/projects/pestehsho.jpg",
			href: "https://pestehsho.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
	]

	return (
		<section className="projects">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-6xl font-bold mb-16">
					Older projects
					<span className="text-pink-600">.</span>
				</h2>
				<Swiper
					modules={[Navigation, Scrollbar, A11y]}
					navigation
					scrollbar={{ draggable: true }}

					spaceBetween={25}
					slidesPerView={4}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{projects?.map( (proj, index) => 
							<SwiperSlide key={index}>
								<Story {...proj} />
							</SwiperSlide>
						)}
				</Swiper>
			</div>
		</section>
	)
}