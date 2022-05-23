export const TimelineItem = ({ className, title, date, description, url, reverse }) => {
	return (
		<div className={`
				relative
				border-[2px]
				w-[calc(100%_-_2.5rem)] lg:w-[calc(50%_-_2.5rem)] p-6

				before:content-['']
				before:absolute before:top-[3rem]
				before:w-0 before:h-0
				before:border-[1.2rem] before:border-transparent

				before:right-full
				before:border-r-white
				${reverse ? `` : `
					lg:before:border-r-transparent
					lg:before:right-auto
					lg:before:left-full
					lg:before:border-l-white
				`}

				after:content-['']
				after:absolute after:top-[4.2rem] after:-translate-y-1/2
				after:w-4 after:h-4
				after:rounded-full
				after:bg-white
				after:border-2 after:border-pink-600
				
				after:translate-x-1/2
				after:right-[calc(100%_+_2.5rem_+_2px)]
				${reverse ? `` : `
						lg:after:right-auto
						lg:after:-translate-x-1/2
						lg:after:left-[calc(100%_+_2.5rem_+_2px)]
					`
				}

				ml-auto
				${reverse ? "" : "lg:ml-0 lg:text-right"}

				${className}
			`}>
			<h4 className="text-xl font-semibold">
				{title}
			</h4>
			<span className={`
						absolute
						lg:top-[4.2rem]
						lg:-translate-y-1/2
						text-pink-600
						whitespace-nowrap

						bottom-[calc(100%_+_1em)] lg:bottom-auto left-0

						${reverse ? `
								lg:left-auto
								lg:right-[calc(100%_+_5rem)]
							` : `
								lg:left-[calc(100%_+_5rem)]
							`
						}
					`}>
				{date}
			</span>
			{description && (
				<p className="text-neutral-400 mt-6">
					{description}
				</p>
			)
			}
			{url && (
				<div className="mt-6">
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						className="
								text-pink-600 hover:text-pink-800 
								transition-colors duration-150 
								underline
							">
						{url}
					</a>
				</div>
			)}
		</div>
	)
}