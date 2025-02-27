
import PropTypes from 'prop-types';

AppShowcase.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    direction: PropTypes.bool
};
function AppShowcase  ({ imageUrl, headerText, bodyText, direction }) {
    return (
        <section className={`flex flex-col items-center p-8 justify-around gap-16 mx-8 md:${direction ? 'flex-row-reverse' : 'flex-row'}`} >
            <img src={imageUrl} alt="App showcase" className=' w-1/2 md:w-1/4'/>
            
                <div className="flex flex-col items-start justify-start min-w-28w-full md:w-1/2 ">
                    <h2 className="text-3xl text-left font-bold mb-4 justify-start">{headerText}</h2>
                    <p className="text-xl text-left mb-8">{bodyText}</p>
                </div>
            
        </section>
    );
};



export default AppShowcase;