import PropTypes from 'prop-types';


FeatureCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,

};
function FeatureCard({ imageUrl, headerText, bodyText }) {
    
    return (
        <div className="flex flex-col items-center p-8 justify-start gap-6">
            <img src={imageUrl} alt="Feature" className="w-full h-auto rounded-md" />
            <h2 className="text-2xl font-bold">{headerText}</h2>
            <p className="text-lg">{bodyText}</p>
        </div>
    );
}

export default FeatureCard;