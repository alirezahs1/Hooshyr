import { useState, useEffect, useRef } from "react"

import { TimelineItem } from "./timeline-item"

export const Timeline = ({items}) => {

	const [scrolledPercent, setScrolledPercent] = useState(0);

	const timelineRef = useRef();

	useEffect(() => {
		
		// calculate scrolled percent from top
		// const scrolledPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
		// setScrolledPercent(scrolledPercent);

		
		const scrollHandler = () => {

			// window height
			const windowHeight = window.innerHeight;

			let percent = ((window.scrollY + windowHeight/2) - timelineRef.current.offsetTop) / 
								timelineRef.current.clientHeight * 100;

			percent = Math.min(100, Math.max(0, percent));

			setScrolledPercent(percent);
		}

		window.addEventListener('scroll', scrollHandler);

		return () => {
			window.removeEventListener('scroll', scrollHandler);
		}

	}, [])

	return (
		<div ref={timelineRef} className="relative flex flex-col">
			<div className={`
					absolute
					left-1/2 top-[4.2rem] bottom-12 -translate-x-1/2
					bg-white
					w-1
					rounded-full
					overflow-hidden
				`}>
					<div className={`
							absolute
							bg-pink-600
							left-0 top-0 right-0
					`} style={{height: scrolledPercent + '%'}}></div>
				</div>
			{items?.map( (item, index) => 
					<TimelineItem key={index} className="mb-20" reverse={index%2} {...item} />
				)}
		</div>
	)
}