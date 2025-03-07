import ScrollFadeIn from "../ui/ScrollFadeIn";
import AppShowcase from "../ui/AppShowcase";
import SectionTitle from "../ui/SectionTitle";

function HowItWorks() {
    return (
        <section className="w-full bg-gradient-to-b from-white via-indigo-50/30 to-white
            dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900
            transition-colors duration-300">
            <div className="flex flex-col items-center justify-center gap-8 p-8 h-auto mx-auto max-w-7xl">
                <SectionTitle 
                    title="How It Works" 
                    text="Stride is a fitness tracking app that helps you plan and track your workouts, track your progress, and share your results with others." 
                />

                <ScrollFadeIn
                slideDirection="left">
                    <AppShowcase 
                        imageUrl="/images/Explore.jpg"
                        headerText="Create Your Routine"  
                        bodyText="Build your custom workout plan by selecting your preferred exercises and scheduling them throughout the week."
                        direction={true}
                    />
                </ScrollFadeIn>

                <ScrollFadeIn
                slideDirection="right">
                    <AppShowcase 
                        imageUrl="/images/Workout.jpg"
                        headerText="Log Your Exercises"  
                        bodyText="Quickly record sets, reps, and notes each time you work out. No more guesswork—every detail is stored for easy reference."
                        direction={false}
                    />
                </ScrollFadeIn>

                <ScrollFadeIn
                slideDirection="left">
                    <AppShowcase 
                        imageUrl="/images/Activity.jpg"
                        headerText="Track Your Progress"  
                        bodyText="Watch your stats transform into engaging charts and graphs, so you can see exactly how you're improving over time."
                        direction={true}
                    />
                </ScrollFadeIn>

                <ScrollFadeIn
                slideDirection="right">
                    <AppShowcase
                        imageUrl="/images/Explore.jpg"
                        headerText="Share Your Achievements"  
                        bodyText="Celebrate your milestones with friends and family. Stride's social-sharing features let you post progress visuals directly to your favorite platforms."
                        direction={false}
                    />
                </ScrollFadeIn>
            </div>
        </section>
    );
}

export default HowItWorks;