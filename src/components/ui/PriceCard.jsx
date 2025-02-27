import Button from "./Button";
import PropTypes from "prop-types";

function PriceCard({ 
  title, 
  price, 
  frequency, 
  description, 
  features = [], 
  buttonText 
}) 

{
  return (
    <div className="p-6 rounded-lg shadow text-center space-y-4 w-full max-w-sm h-full">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-3xl font-bold">
        {price}
        <span className="text-base font-normal"> {frequency}</span>
      </p>
      <p className="text-600">{description}</p>
      <ul className="text-left space-y-2">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mr-2 text-green-500">✔</span>
            {item}
          </li>
        ))}
      </ul>
       <Button variant="primary" >
       {buttonText}
        </Button>
        
     
    </div>
  );
}

PriceCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    frequency: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    buttonText: PropTypes.string
  };
  
  PriceCard.defaultProps = {
    frequency: "",
    description: "",
    features: [],
    buttonText: "Click Me"
  };

export default PriceCard;