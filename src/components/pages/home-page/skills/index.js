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
			<div className="max-w-6xl mx-auto my-auto px-5 xl:px-0">
				<h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 xl:mb-16">
					Skills
					<span className="text-pink-600">.</span>
				</h2>
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