import AppShowcase from "../ui/AppShowcase";


function HowItWorks() {
    return (
        <section className="flex flex-col items-center justify-start p-8 gap-16 h-auto w-full ">

           <div className="flex flex-col items-center justify-start gap-6 p-8">
           <h1 className="text-4xl font-bold mb-4">How It Works</h1>
           <p className="text-lg mb-8 w-full">Stride is designed to simplify your fitness journey. Whether you’re new to working out or a seasoned athlete, we’ve made it easy to plan, track, and visualize your progress—all in one place.</p>
        </div>
          
      
      
       <AppShowcase 
       imageUrl="/Context Menu - iPhone.png"
       headerText="Create Your Routine"  
       bodyText="Build your custom workout plan by selecting your preferred exercises and scheduling them throughout the week."
       direction="flex-row"
       />

       <AppShowcase 
       imageUrl="/Context Menu - iPhone.png"
       headerText="Log Your Exercises"  
       bodyText="Quickly record sets, reps, and notes each time you work out. No more guesswork—every detail is stored for easy reference."
       direction="flex-row-reverse"
       />

       <AppShowcase 
       imageUrl="/Context Menu - iPhone.png"
       headerText="Track Your Progress"  
       bodyText="Watch your stats transform into engaging charts and graphs, so you can see exactly how you’re improving over time."
       direction="flex-row"
       />     

       <AppShowcase
       imageUrl="/Context Menu - iPhone.png"
       headerText="Share Your Achievements"  
       bodyText="Celebrate your milestones with friends and family. Stride’s social-sharing features let you post progress visuals directly to your favorite platforms."
       direction="flex-row-reverse"
       />  




       </section>)


}    

export default HowItWorks;