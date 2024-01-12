import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, onClick, className, ...props }: ButtonProps) => {
    return (
        <button
            className={`min-h-12 min-w-32 px-8 bg-anzac-600 hover:bg-anzac-700 text-white rounded-lg ${className}`}
            onClick={onClick}
            {...props}
        >
            {title}
        </button>
    );
};

export default Button;
