import PropTypes from 'prop-types';

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

function Button({ children, variant }) {
    const baseStyles = "px-6 py-2 rounded-lg font-semibold transition-all duration-300 w-full";
    
    const variants = {
        primary: "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl",
        secondary: "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-800/60 text-gray-900 dark:text-white"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </button>
    );
}

export default Button;