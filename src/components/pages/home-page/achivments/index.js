import { Timeline } from "components/ui"
import { WavoTitle } from "../../../typography/wavoTitle"

export const Achivments = ({...rest}) => {

	return (
		<section {...rest}>
			<div className="max-w-6xl mx-auto px-5 xl:px-0 pt-20">
				<WavoTitle className="mb-20">Featured projects</WavoTitle>
				<Timeline items={[
					{
						title: "Technical lead :: Chinomarket",
						date: "Apr 2019 - Sep 2021",
						description: "I was co-founder and the technical lead at ChinoMarket. ChinoMarket was a startup in the field of distribution of goods.",
						url: "https://chinomarket.ir"
					},
					{
						title: "Next.Js Developer :: Chikara",
						date: "Sep 2021 - Jan 2022",
						description: "Developed the new website, the customer's panel, the serviceman's panel, the WordPress blog, and the admin's panel.",
						url: "https://chikara.ir"
					},
					{
						title: "React Developer :: Gharar",
						date: "Dec 2022 - Mar 2022",
						description: "Developed the organizational panel, which companies can hold their meetings, and the landing page.",
						url: "https://gharar.gharar.ir"
					},
					{
						title: "FullStack Developer :: Alowish",
						date: "Apr 2021 - Sep 2021",
						description: "Developed Alowish, a health experience-driven website, using ReactJs and Django.",
						url: "https://alowish.com"
					},
					{
						title: "TypeScript Developer :: QCLab",
						date: "Aug 2019 - Mar 2020",
						description: "Developed QCLab, a documentation software for medical laboratories, using TypeScript and Django.",
						url: "https://qc-lab.ir"
					},
				]} />
			</div>
		</section>
	)
}