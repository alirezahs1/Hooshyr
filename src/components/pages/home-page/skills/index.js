import { WavoTitle } from "../../../typography/wavoTitle"

export const Skills = () => {

	const skills = [
		{
			title: 'Design & Product',
			items: [
				'UX/UI Design',
				'Product Design',
				'Product Development',
				'Product Management',
				'Product Research',
			]
		},
		{
			title: 'Frontend',
			items: [
				'HTML5',
				'CSS3',
				'JavaScript',
				'React',
				'Redux',
			]
		},
		{
			title: 'Backend',
			items: [
				'Node.js',
				'Express',
				'MongoDB',
				'MySQL',
				'PostgreSQL',
			]
		},
		{
			title: 'Tools',
			items: [
				'Git',
				'GitHub',
				'Webpack',
				'NPM',
				'Babel',
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