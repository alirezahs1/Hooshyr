import { Timeline } from "components/ui"

export const Achivments = ({...rest}) => {

	return (
		<section {...rest}>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-6xl font-bold mb-24">
					Latest achivments
					<span className="text-pink-600">.</span>
				</h2>
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