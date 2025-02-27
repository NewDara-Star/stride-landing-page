import AccordionItem from "../ui/AccordionItem";


function FAQ() {
    return (
        <section className="flex flex-col items-center p-8 justify-start gap-8 h-auto mx-auto w-full">

        <div className="flex flex-col items-center justify-start gap-4 w-full"> 
           <h1 className="text-4xl font-bold mb-4">FAQ</h1>
           <p className="text-lg mb-8">Do you have a question? check our frequently asked questions.</p>
        </div>
                
            

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