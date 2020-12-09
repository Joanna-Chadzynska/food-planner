export interface ButtonProps {
	onClick: () => void;
	disabled?: boolean;
	isCurrent?: boolean;
}

export interface ImageProps {
	alt?: string;
	src: string;
	current?: number;
	direction?: string;
}
