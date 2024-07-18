import { Box } from "lucide-react"


const FeatureCards = [
    {
        title :"Integration Ecosystem",
        description : "Enhance your productivity by connecting with your tools, keeping your essentials in one place."
    },
    {
        title :"Goal Setting and Tracking",
        description : "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
    },
    {
        title :"Secure Data Encryption",
        description : "With end-to-end encryption, your data is securely stored and protected from unauthorized access."
    }
]

export const Features = ()=> {
    return <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="px-4 md:px-[88px]">
            <h2 className="font-bold text-5xl sm:text-6xl text-center tracking-tighter">Everything you need</h2>
            <div className="max-w-xl mx-auto">

            <p className="text-center text-xl mt-5">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
            </div>
            <div className="mt-16 gap-4 flex flex-col sm:flex-row">
                {
                    FeatureCards.map(({title, description})=> (
                        <div key={title} className="border border-white/30 rounded-xl flex flex-col justify-center items-center px-5 py-10 sm:flex-1">
                            <div className="h-14 w-14 flex justify-center items-center bg-white rounded-lg">
                                <Box color="black" size={20}/>
                            </div>
                            <h3 className="font-bold text-base text-center mt-6 ">{title}</h3>
                            <p className="text-center text-white/70">{description}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
}