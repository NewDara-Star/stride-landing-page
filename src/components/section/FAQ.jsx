import AccordionItem from "../ui/AccordionItem";
import SectionTitle from "../ui/SectionTitle";


function FAQ() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 p-8 h-auto">
            <SectionTitle title="FAQ" text="Do you have a question? check our frequently asked questions."/>

       
                
            

            <div className="flex flex-col items-center p-8 justify-start w-full">        
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
        </section>
    )
}   

export default FAQ