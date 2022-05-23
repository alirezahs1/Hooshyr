import { Timeline } from "components/ui"
import { WavoTitle } from "../../../typography/wavoTitle"

export const Achivments = ({...rest}) => {

	return (
		<section {...rest}>
			<div className="max-w-6xl mx-auto px-5 xl:px-0 pt-20">
				<WavoTitle>Latest achivments</WavoTitle>
				<Timeline items={[
					{
						title: "First Place in the World",
						date: "Jul 2019",
						description: "I've been the first person to win the World Cup in the World Cup 2018.",
						url: "https://chikara.ir"
					},
					{
						title: "First Place in the World",
						date: "2019",
						description: "I've been the first person to win the World Cup in the World Cup 2018."
					},
					{
						title: "First Place in the World",
						date: "2019",
						description: "I've been the first person to win the World Cup in the World Cup 2018."
					},
					{
						title: "First Place in the World",
						date: "2019",
						description: "I've been the first person to win the World Cup in the World Cup 2018."
					},
					{
						title: "First Place in the World",
						date: "2019",
						description: "I've been the first person to win the World Cup in the World Cup 2018."
					},
					{
						title: "First Place in the World",
						date: "2019",
						description: "I've been the first person to win the World Cup in the World Cup 2018."
					},
				]} />
			</div>
		</section>
	)
}