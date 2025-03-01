import AppShowcase from "../ui/AppShowcase";
import SectionTitle from "../ui/SectionTitle";


function HowItWorks() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 p-8 h-auto mx-auto ">

            <SectionTitle title="How It Works" text="Stride is a fitness tracking app that helps you plan and track your workouts,
            track your progress, and share your results with others."/>

      
      
       <AppShowcase 
       imageUrl="/images/Context Menu - iPhone.png"
       headerText="Create Your Routine"  
       bodyText="Build your custom workout plan by selecting your preferred exercises and scheduling them throughout the week."
       direction={true}
       />

       <AppShowcase 
       imageUrl="/images/Context Menu - iPhone.png"
       headerText="Log Your Exercises"  
       bodyText="Quickly record sets, reps, and notes each time you work out. No more guesswork—every detail is stored for easy reference."
       direction={false}
       />

       <AppShowcase 
       imageUrl="/images/Context Menu - iPhone.png"
       headerText="Track Your Progress"  
       bodyText="Watch your stats transform into engaging charts and graphs, so you can see exactly how you’re improving over time."
       direction={true}
       />     

       <AppShowcase
       imageUrl="/images/Context Menu - iPhone.png"
       headerText="Share Your Achievements"  
       bodyText="Celebrate your milestones with friends and family. Stride’s social-sharing features let you post progress visuals directly to your favorite platforms."
       direction={false}
       />  




       </section>)


}    

export default HowItWorks;