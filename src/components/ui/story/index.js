import Image from "next/image"

export const Story = ({className, title, image, text, href, meta, ...rest}) => {
	return (
		<a href={href} target="_blank" rel="noreferrer" className={`
					block relative
					p-6
					border-2
					hover:bg-neutral-900 
					transition-colors duration-200

					max-w-sm mx-auto

					before:absolute before:content-['']
					before:top-full before:left-1/2 before:-translate-x-1/2
					before:border-[16px] before:border-t-white before:border-transparent

					after:absolute after:content-[''] after:z-40
					after:top-[calc(100%_+_44px)] after:left-1/2 after:-translate-x-1/2  after:-translate-y-1/2
					after:w-4 after:h-4
					after:rounded-full
					after:transition-colors after:duration-200
					after:bg-white hover:after:bg-pink-600
					after:border-2 after:border-pink-600 hover:after:border-white
					${className}
				`}>
			{/* <a target="_blank" className="block" href={href}> */}
				<div className="mb-2 ">
					<img className="rounded-lg w-full h-full object-cover" src={image} alt={title} />
				</div>
				<h5 className="text-xl font-semibold mb-4 mt-4">
					{title}
				</h5>
				<p className="text-gray-400 mb-4 min-h-[100px]">
					{text}
				</p>
			{/* </a> */}
			{meta && (
				<span className={`
						absolute top-[calc(100%_+_60px)] left-1/2 -translate-x-1/2
						whitespace-nowrap
						text-neutral-400 text-sm font-light
					`}>
					{meta}
				</span>
			)}
		</a>
	)
}