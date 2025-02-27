import FeatureCard from "../ui/FeatureCard";


function Features() {
    return (
        <section className="flex flex-col items-center p-8 justify-start gap-16 h-auto ">
           <div className="flex flex-col items-center justify-start gap-6 p-8">
           <h1 className="text-4xl font-bold mb-4">Features</h1>
           <p className="text-lg mb-8 w-full">At Stride, we believe that your fitness journey should be as dynamic and personalized as you are. Our key features are designed to empower you every step of the way:</p>
            </div>
          
      

            <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1">

                <FeatureCard 
                imageUrl="/character2.gif"
                headerText="Workout Planner"  
                bodyText="Organize your week effortlessly. Create custom workout routines that fit your lifestyle—whether you’re focused on strength, cardio, or flexibility."
                />
                <FeatureCard 
                imageUrl="/character2.gif"
                headerText="Exercise Logging"  
                bodyText="Capture every detail of your progress. Record your sets, reps, weights, and notes for each exercise, so you can see your improvements over time."
                />
                <FeatureCard 
                imageUrl="/character2.gif"
                headerText="Track Your Progress"  
                bodyText="Watch your stats transform into engaging charts and graphs, so you can see exactly how you’re improving over time."
                />
                <FeatureCard
                imageUrl="/character2.gif"
                headerText="Progress Tracking"  
                bodyText="Visualize your journey. Transform your workout data into engaging charts and graphs that highlight your milestones and motivate you to push further."   
                />  
                <FeatureCard
                imageUrl="/character2.gif"
                headerText="Social Sharing"  
                bodyText="Inspire and be inspired.Share your fitness achievements and progress visuals directly on social media, connecting you with a community of like-minded enthusiasts."   
                />
                <FeatureCard
                imageUrl="/character2.gif"
                headerText="Customizable Goals"  
                bodyText="Set and conquer your personal targets. Define your fitness goals—whether it’s running a faster mile, lifting heavier, or shedding pounds—and track your progress with precision."   
                />
                </div>
        </section>
    )
}           

export default Features