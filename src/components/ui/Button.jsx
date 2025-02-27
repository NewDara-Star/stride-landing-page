import PropTypes from 'prop-types';

function Button({ variant = "primary", children, ...props }) {

    const classes = {
      primary: "bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700",
      secondary: "bg-gray-600 px-3 py-2 text-white hover:bg-gray-700",
      error: "bg-red-600 px-3 py-2 text-white hover:bg-red-700",
      disable: "bg-gray-600 px-3 py-2 text-white hover:bg-gray-700"
    };

    return (
      <button className= {`w-full ${classes[variant]} `} {...props}  >
        {children || "Click"}
      </button>
    );

  }

  Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'error', 'disable']),
    children: PropTypes.node,
  };

  export default Button;