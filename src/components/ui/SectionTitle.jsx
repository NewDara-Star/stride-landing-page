import PropTypes from 'prop-types';

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

function SectionTitle({ title, text, className = "" }) {
    return (
        <div className={`flex flex-col items-center gap-4 text-center max-w-3xl ${className}`}>
            <h2 className="text-3xl font-bold text-gray-900 text-center  dark:text-white">{title}</h2>
            <p className="text-lg text-gray-700 text-center dark:text-gray-300">{text}</p>
        </div> 
    );
}

export default SectionTitle;