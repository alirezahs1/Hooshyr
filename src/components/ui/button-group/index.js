import { useState, useEffect } from "react";
import { ButtonGroupItem } from "./button-group-item";

export const ButtonGroup = ({className, children, items, onChange, defaultValue, ...rest}) => {

	const [value, setValue] = useState(items?.[0]?.value);

	useEffect(() => {
		if (defaultValue !== undefined) {
			setValue(defaultValue);
		}
	}, [defaultValue]);

	const handleChange = (newValue) => {
		setValue(newValue)
		if (onChange) {
			onChange(newValue);
		}
	}

	return (
		<div className="overflow-auto w-full">
			<div className={`flex flex-row w-full ${className}`}>
				{items?.map((item, index) => (
					<ButtonGroupItem key={index} onClick={() => handleChange(item.value)} active={value===item.value}>
						{item.label}
					</ButtonGroupItem>
				))}
			</div>
		</div>
	)
}