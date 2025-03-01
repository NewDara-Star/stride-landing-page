import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

ScrollFadeIn.propTypes = {
    children: PropTypes.node.isRequired,
    slideDirection: PropTypes.oneOf(["up", "left", "right"]) // Allow different slide directions
};

function ScrollFadeIn({ children, slideDirection = "up" }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // 30% of the element must be visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    // Determine slide effect based on direction
    const slideClass = slideDirection === "up" 
        ? "translate-y-[100px]" 
        : slideDirection === "left" 
        ? "translate-x-[100px]" 
        : "translate-x-[100px]"; // Moves right

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${slideClass}`
            }`}
        >
            {children}
        </div>
    );
}

export default ScrollFadeIn;