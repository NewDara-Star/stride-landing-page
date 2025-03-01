import PriceCard from "../ui/PriceCard";
import SectionTitle from "../ui/SectionTitle";

function PriceSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 p-8 h-auto mx-auto">
                    <SectionTitle title="Choose Your Plan" text="Whether you’re just starting your fitness journey or you’re a seasoned athlete, 
                Stride has a plan to fit your goals. Pick a subscription that works best for you, and get ready to take your workouts to the next level."/>

            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 md:flex-row">
                <PriceCard
                    title="Basic"
                    price="Free"
                    frequency="/forever"
                    description="Perfect for those just starting out. Enjoy essential workout logging and progress tracking features."
                    features={[
                        "Access to basic workout planner",
                        "Log unlimited exercises",
                        "Community Support"
                    ]}
                    buttonText={"Get Started"}
                />
                <PriceCard
                    title="Pro"
                    price="$1.99"
                    frequency="/month"
                    description="Ideal for fitness enthusiasts who want more advanced analytics and personalization."
                    features={[
                        "Everything in Basic",
                        "Advanced progress analytics",
                        "Priority support",
                        "Early access to new features"
                    ]}
                    buttonText={"Go Pro"}
                />
                <PriceCard
                    title="Ultimate"
                    price="$3.99"
                    frequency="/month"
                    description="For serious athletes and fitness professionals seeking the most comprehensive experience."
                    features={[
                        "Everything in Pro",
                        "Personalized workout recommendations",
                        "Premium social sharing templates",
                        "1-on-1 coaching insights"
                    ]}
                    buttonText={"Go Ultimate"}
                />
            </div>
        </section>
    );          
}

export default PriceSection