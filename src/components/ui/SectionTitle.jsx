import PropTypes from 'prop-types';

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

function SectionTitle({title, text}) {
    return (
<div className="flex flex-col items-center p-8 justify-start gap-4 ">       
           <h1 className="text-4xl font-bold mb-4">{title}</h1>
           <p className="text-lg mb-8">{text}</p>

        </div>
    );
}   

export default SectionTitle;