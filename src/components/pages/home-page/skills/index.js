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
		<section className="pb-40">
			<div className="max-w-6xl mx-auto my-auto">
				<h2 className="text-6xl font-bold mb-16">
					Skills
					<span className="text-pink-600">.</span>
				</h2>
				<div className="text-neutral-400 flex">
					{skills.map((skill, index) => (
						<div key={index} className="flex-1">
							<h3 className="text-2xl font-bold mb-4 text-white">{skill.title}</h3>
							<ul className="text-neutral-400 font-light leading-10 text-lg">
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