
import SectionTitle from "../ui/SectionTitle";

function VideoSection() {
    return (
        <section className="w-full bg-gradient-to-b from-white via-indigo-50/30 to-white
            dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900
            transition-colors duration-300">
            <div className="flex flex-col items-center justify-center gap-8 p-8 pt-28 h-auto mx-auto max-w-7xl">
                <SectionTitle 
                    title="Watch Our Video" 
                    text="See how Stride can transform your fitness journey"
                />
                <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/MilYefF9DjI?si=O1q3a1KGStm4UmiU" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;