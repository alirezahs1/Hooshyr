export const Highlighter = ({children, ...rest}) => 
	<span className="
			relative inline-block
			
			before:absolute before:contents-['']
			before:-left-4 before:-top-4 before:right-8 before:bottom-8
			before:bg-pink-600
			">
		<span className="relative">
			{children}
		</span>
	</span>
