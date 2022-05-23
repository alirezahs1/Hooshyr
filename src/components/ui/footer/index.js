import { Player } from '@lottiefiles/react-lottie-player';
import LottieWin from 'static/img/lottie-win.json';

export const Footer = () => {
	return (
		<footer className="bg-neutral-900 py-10 lg:py-20 text-center lg:text-left">
			<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 space-x-0 lg:space-x-12 text-sm px-5 xl:px-0">
				<div className="flex-1">
					&copy; 2022 No rights reserved.
				</div>
				<div className="flex-1">
					Actually, share, steal (like a pro) and get inspiration as much as you want.
				</div>
				<div className="flex-1 lg:w-1/3 flex items-center">
					<span className="mr-2">
						We live in a free world!
					</span>

					<Player
						autoplay
						loop
						src={LottieWin}
						className="w-8 lg:w-12"
					/>
				</div>
			</div>
		</footer>
	)
}