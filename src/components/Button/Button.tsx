import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
	const mode = primary ? styles.button_primary : styles.button_secondary;
	return (
		<button
			type="button"
			className={clsx(styles.button, styles[`button_${size}`], mode)}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};

export default Button;
