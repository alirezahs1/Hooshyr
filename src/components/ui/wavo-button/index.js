export const WavoButton = ({className, children, ...rest}) => {
	return (
		<button className={`
					relative overflow-hidden
					border-2
					py-2 sm:py-3 px-4 sm:px-6
					uppercase
					tracking-[3px]
					transition-all duration-500 ease-[cubic-bezier(1, 0, 0.55, 1)]
					text-white hover:text-black

					after:absolute after:contents-['']
					after:-inset-x-2 after:-top-2 after:bottom-full
					after:bg-white
					after:rounded-br-
					after:transition-all after:duration-500 after:delay-300 after:ease-[cubic-bezier(1, 0, 0.55, 1)]

					hover:after:bottom-0
					${className}`
				}
				{...rest}
			>
			<span className="relative inline-block z-10">
				{children}
			</span>
		</button>
	)
}