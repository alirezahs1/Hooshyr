import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLink = ({icon, href, label}) => (
	<a className="ml-5 hover:text-pink-400 transition-colors duration-200" href={href} target="_blank" rel="noreferrer">
		<FontAwesomeIcon className="text-lg" icon={icon} />
		{label && <span className="ml-2">
			{label}
		</span>}
	</a>
)