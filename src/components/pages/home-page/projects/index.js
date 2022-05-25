import { Story } from "components/ui";

import { Virtual, Navigation, Autoplay, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/virtual';
import { WavoTitle } from "../../../typography/wavoTitle";
import { useInView } from "react-intersection-observer";

export const Projects = () => {

	const {inView, ref} = useInView();

	/*
	
	**Amoozesh React & Django**

	alowish.com
	gharar.gharar.ir
	chikara.ir
	qc-lab.ir
	chinomarket.ir

	bahraman.com
	akamcactus.com
	geloshin
	kavatahlil.ir
	rismouna.ir
	chinomarket.ir v1
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
			title: "Bahraman Saffron",
			image: "/media/projects/bahraman.jpg",
			href: "https://bahraman.com",
			text: "The official website for the company Bahraman Saffron.",
			meta: "Django Template"
		},

		{
			title: "Akam Cactus",
			image: "/media/projects/akamcactus.jpg",
			href: "https://akamcactus.com",
			text: "The official website for the multi-level marketing company Akam Cactus.",
			meta: "Django | Next.Js"
		},
		{
			title: "Geloshin",
			image: "/media/projects/geloshin.jpg",
			text: "An inventory registration software, connected to the scale, the barcode reader, and the label printer.",
			meta: "Django | React Js"
		},
		{
			title: "Kava Tahlil",
			image: "/media/projects/kavatahlil.jpg",
			text: "A tool for stock market analysis based on Codal's and TSETMC's data reports.",
			meta: "Django | React Js",
			href: "https://kavatahlil.ir"
		},
		{
			title: "Rismouna",
			image: "/media/projects/rismouna.jpg",
			text: "Developed the string-art algorithm and the admin's panel for customer management",
			meta: "Django | React Js",
			href: "https://admin.rismouna.ir"
		},
		{
			title: "Chinomarket V.1",
			image: "/media/projects/chinomarket.jpg",
			text: "The first version of Chinomarket (website-based), a startup in the goods distribution industry.",
			meta: "Django | Next.Js",
		},
		{
			title: "Hadaf Plus",
			image: "/media/projects/hadafplus.jpg",
			text: "Developed the back-end of application HadafPlus, which manages the curriculum of applicants.",
			meta: "Django",
		},
		{
			title: "Cayload (SINAX)",
			image: "/media/projects/cayload.jpg",
			text: "developed 11 maritime sub-services, the forum, the group management, etc.",
			meta: "React",
			href: "https://cayload.com"
		},
		{
			title: "Parkners",
			image: "/media/projects/parkners.jpg",
			text: "Developed the admin's panel of application Parkners, parking place reservation management.",
			meta: "React",
			href: "https://cafebazaar.ir/app/ir.coleo.parkners"
		},

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
			title: "Pestehsho",
			image: "/media/projects/pestehsho.jpg",
			href: "https://pestehsho.com",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
		},
	]

	return (
		<section ref={ref} className="projects flex flex-col py-8">
			<div className="container max-w-6xl mx-auto px-5 xl:px-0">
				<WavoTitle>Other projects</WavoTitle>
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