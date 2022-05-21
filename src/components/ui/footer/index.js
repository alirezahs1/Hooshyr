import { Player } from '@lottiefiles/react-lottie-player';
import LottieWin from 'static/img/lottie-win.json';

export const Footer = () => {
	return (
		<footer className="bg-neutral-900 py-20">
			<div className="max-w-6xl mx-auto flex items-center text-sm space-x-10">
				<div className="flex-1">
					&copy; 2022 No rights reserved.
				</div>
				<div className="flex-1">
					Actually, share, steal (like a pro) and get inspiration as much as you want.
				</div>
				<div className="flex-1 flex items-center">
					<span className="mr-2">
						We live in a free world!
					</span>

					<Player
						autoplay
						loop
						src={LottieWin}
						className="w-12"
					/>
				</div>
			</div>
		</footer>
	)
}