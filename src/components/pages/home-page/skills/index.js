import { WavoTitle } from "../../../typography/wavoTitle"

export const Skills = () => {

	const skills = [
		{
			title: 'Server-side',
			items: [
				'Python | Django',
				'PHP | WordPress',
				'SQL | NoSQL',
				'Celery | RabbitMQ',
				'Nginx | Apache',
			]
		},
		{
			title: 'Client-side',
			items: [
				'React Js',
				'Next.Js | SSR',
				'Redux | Context API',
				'React Hooks',
				'TypeScript',
			]
		},
		{
			title: 'Styling',
			items: [
				'Tailwind',
				'SCSS',
				'Styled Components',
				'Bootstrap',
				'Responsive Design',
			]
		},
		{
			title: 'Other',
			items: [
				'Git | Linux',
				'Data Structures',
				'SEO',
				'Agile | Scrum',
				'Photoshop',
			]
		}
	]

	return (
		<section className="py-8 sm:pb-20">
			<div className="max-w-6xl mx-auto my-auto px-5 xl:px-0">
				<WavoTitle>Skills</WavoTitle>
				<div className="text-neutral-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{skills.map((skill, index) => (
						<div key={index} className="">
							<h3 className="text-xl font-semibold mb-4 text-white">{skill.title}</h3>
							<ul className="text-neutral-400 font-light leading-10 text-lg mb-6 lg:mb-0">
								{skill.items.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}