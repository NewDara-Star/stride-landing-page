import FeatureCard from "../ui/FeatureCard";
import SectionTitle from "../ui/SectionTitle";



function Features() {
    return (
        <section className="w-full bg-gradient-to-b from-white via-indigo-50/30 to-white
            dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900
            transition-colors duration-300">
            <div className="flex flex-col items-center justify-center gap-8 p-8 pt-28 h-auto mx-auto max-w-7xl">
                <SectionTitle 
                    title="Features" 
                    text="At Stride, we believe that your fitness journey should be as dynamic and personalized as you are. Our key features are designed to empower you every step of the way:"
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 sm:grid-cols-1 w-full">
                    <FeatureCard 
                        imageUrl="/images/a-4-3-aspect-ratio-image-of-a-ui-element_VIh9wZzqQqmUmi-aE9iydg_Tzu9OYQuSYev6Eu-mP4CDQ.jpeg"
                        headerText="Workout Planner"  
                        bodyText="Organize your week effortlessly. Create custom workout routines that fit your lifestyle—whether you're focused on strength, cardio, or flexibility."
                    />
                    <FeatureCard 
                        imageUrl="/images/a-user-interface-element-for-exercise-lo_AJRGNc6yRx6AC0X2q-E2Sw_5DNxivzpQViAIStvIbpYmQ.jpeg"
                        headerText="Exercise Logging"  
                        bodyText="Capture every detail of your progress. Record your sets, reps, weights, and notes for each exercise, so you can see your improvements over time."
                    />
                  
                    <FeatureCard
                        imageUrl="/images/a-4-3-aspect-ratio-illustration-of-a-pro_MTP69lydTwqgALkeM069QQ_yGaZe-f2SLO54PaodVGk6g.jpeg"
                        headerText="Progress Tracking"  
                        bodyText="Visualize your journey. Transform your workout data into engaging charts and graphs that highlight your milestones and motivate you to push further."   
                    />  
                    <FeatureCard
                        imageUrl="/images/an-illustration-of-a-social-media-app-in_s8wFaUflSkCyPAekU24KIg_T3gf4g6OTc63iYZO8Eq37g.jpeg"
                        headerText="Social Sharing"  
                        bodyText="Inspire and be inspired. Share your fitness achievements and progress visuals directly on social media, connecting you with a community of like-minded enthusiasts."   
                    />
                    <FeatureCard
                        imageUrl="/images/a-4-3-aspect-ratio-illustration-of-a-use_TF0r8zlKSpytCGbzOXw8-Q_eh6F4002SXOvHMtAXKWpIA.jpeg"
                        headerText="Customizable Goals"  
                        bodyText="Set and conquer your personal targets. Define your fitness goals—whether it's running a faster mile, lifting heavier, or shedding pounds—and track your progress with precision."   
                    />
                </div>
            </div>
            
            {/* Gradient fade out at bottom */}
            <div className="h-24 bg-gradient-to-t from-white via-white/80 to-transparent
                dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent">
            </div>
        </section>
    )
}           

export default Features