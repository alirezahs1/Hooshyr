import { Story } from "components/ui";

import { Virtual, Navigation, Autoplay, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/virtual';

export const Projects = () => {

	/*
	
	**Amoozesh React & Django**

	alowish.com
	gharar.gharar.ir
	chikara.ir
	bahraman.com
	akamcactus.com
	geloshin
	kavatahlil.ir
	https://admin.rismouna.ir/
	chinomarket.ir
	chinomarket.ir v1
	https://app-admin.chinomarket.ir/
	qc-lab.ir
	hadafplus.ir
	cayload.com
	https://cafebazaar.ir/app/ir.coleo.parkners
	https://zimaapp.ir/
	recolour.org
	luckyhouse.ir
	ferzz
	gaash.ir
	sanegp.ir
	
	https://lernifood.com/new/
	khamiravaran.com
	pestehsho.com
	amirvarasteh.ir
	aminnuts.com
		aminnuts.com/shop/
	karbozorgbread.com
	bamahamrah.ir 
	perimadog.com
	abbaszadehsaffron.com/new/
	rezafood.ir
	https://javanehfard.com/
	marliksaffron.com
	taksun.info 
	takestanfood.com
	riaziatejafarian.com
	mashhadrazilab.com
	toosfood.com
	plastic-injection.ir
	respect-foods.com
	silver925azizi.com
	sanasaff.com
	dibateb-toos.com
	dayan-teb.ir
	golchinstone.com
	http://bornasanattoos.ir/en/
	https://neginbasparshargh.com/
	confce.um.ac.ir
	boxbag.ir
	http://respect-foods.com/
	http://margiltrading.com/
	https://admin2.cayload.com/auth/login/ [Shipping Sales Panel]

	qr-ticket
	farsi-datepicker

	webquery
	*/

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
		<section className="projects flex flex-col">
			<div className="container max-w-6xl mx-auto px-5 xl:px-0">
				<h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-16">
					Older projects
					<span className="text-pink-600">.</span>
				</h2>
				<div className="max-w-full relative">
					<Swiper
						modules={[Navigation, Scrollbar, A11y, Autoplay, Virtual]}
						navigation
						scrollbar={{ draggable: true }}
						autoplay={{ delay: 4000, running: true }}

						spaceBetween={20}
						slidesPerView={1}
						breakpoints= {{
							640: {
								slidesPerView: 2,
								spaceBetween: 20
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 25
							},
							1280: {
								slidesPerView: 4,
								spaceBetween: 25
							}
						}}
						// onSlideChange={() => console.log('slide change')}
						// onSwiper={(swiper) => console.log(swiper)}
					>
						{projects?.map( (proj, index) => 
								<SwiperSlide key={index} virtualIndex={index}>
									<Story {...proj} />
								</SwiperSlide>
							)}
					</Swiper>
				</div>
			</div>
		</section>
	)
}