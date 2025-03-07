import PropTypes from 'prop-types';


FeatureCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,

};
function FeatureCard({ imageUrl, headerText, bodyText }) {
    
    return (
        <main className="flex flex-col items-start p-8 gap-6 rounded-xl
            bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm
            border border-white/10 dark:border-gray-700/30
            shadow-xl hover:shadow-2xl transition-all duration-300
            hover:-translate-y-1">
            
            <div className='text-left'>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{headerText}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">{bodyText}</p>
            </div>

            <div className="w-full overflow-hidden rounded-lg">
                <img 
                    src={imageUrl} 
                    alt="Feature" 
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300" 
                />
            </div>
        </main>
            
    );
}

export default FeatureCard;