export type ButtonProps = {
    title: string;
    onClick?: () => void;
};

const Button = ({ title, onClick }: ButtonProps) => {
    return (
        <button
            className="min-h-12 min-w-32 px-8 bg-blue-700 hover:bg-blue-500 text-white rounded-lg"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
