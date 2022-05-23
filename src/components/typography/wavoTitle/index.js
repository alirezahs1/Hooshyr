import { useInView } from "react-intersection-observer"
import { WordAnimator } from "../../ui/word-animator"

export const WavoTitle = ({className, children}) => {
	
	const {ref, inView} = useInView({threshold: .1, triggerOnce: true, rootMargin: "-200px"});
	
	return (
		<h2 ref={ref} className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 xl:mb-16 ${className}`}>
			<WordAnimator play={inView} speed={1.5}>
				{children}
			</WordAnimator>
			<span className="text-pink-600">.</span>
		</h2>
	)
}