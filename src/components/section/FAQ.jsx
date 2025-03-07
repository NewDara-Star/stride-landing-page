import AccordionItem from "../ui/AccordionItem";
import SectionTitle from "../ui/SectionTitle";

function FAQ() {
    return (
        <section className="w-full bg-gradient-to-b from-white via-indigo-50/30 to-white
            dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900
            transition-colors duration-300">
            <div className="flex flex-col items-center justify-center gap-8 p-8 pt-28 h-auto mx-auto max-w-7xl">
                <SectionTitle title="FAQ" text="Do you have a question? check our frequently asked questions."/>

                <div className="flex flex-col items-center justify-start w-full max-w-4xl gap-4">        
                    <AccordionItem title="What is Stride?">
                        Stride is a fitness tracking app that helps you plan and track your workouts, track your progress, and share your results with others.
                    </AccordionItem>
                    <AccordionItem title="How does Stride work?">
                        Stride is a fitness tracking app that helps you plan and track your workouts, track your progress, and share your results with others.
                    </AccordionItem>
                    <AccordionItem title="Is Stride free to use?">
                        Stride is a fitness tracking app that helps you plan and track your workouts, track your progress, and share your results with others.
                    </AccordionItem>
                </div>
            </div>

            {/* Gradient fade out at bottom */}
            <div className="h-24 bg-gradient-to-t from-white via-white/80 to-transparent
                dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent">
            </div>
        </section>
    )
}   

export default FAQ