import AccordionItem from "../ui/AccordionItem";


function Footer() {
    return (
        <footer className="flex flex-col items-center p-16 justify-start gap-16 h-auto mx-auto">
            <div className="flex flex-col items-center p-16 justify-start gap-6">
                <h1 className="text-4xl font-bold mb-4">FAQ</h1>
                <p className="text-lg mb-8">Frequently Asked Questions</p>
            </div>

            <div className="flex flex-col items-center p-16 justify-start gap-6">        
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
        </footer>
    )
}   

export default Footer