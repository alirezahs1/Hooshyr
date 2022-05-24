export const WordAnimator = ({children, play=true, delay=0, speed=1}) => {

	let i =0;

	return (
		<div className="wa">
			{children?.split(" ")?.map((word, wordi) => 
					(
						<span key={wordi}>
							{word?.split("")?.map((char, chari) => {
								i++;
								return (
									<span
										key={i}
										className="wa__char"
										style={{
											"--word-index": wordi,
											"--char-index": chari,
											"animation-name": "waChar",
											animationPlayState: play ? "running" : "paused",
											animationDelay: `${i* (1/speed * 80) + delay}ms`,
										}}
									>{char}</span>
								)
							})}
							&nbsp;
						</span>
					)
				)}
		</div>
	)
}