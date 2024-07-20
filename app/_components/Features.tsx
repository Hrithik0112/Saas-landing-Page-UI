import { Box } from "lucide-react"
import Feature from "./Feature"


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
        <div className="p-4">
            <h2 className="font-bold text-5xl sm:text-6xl text-center tracking-tighter">Everything you need</h2>
            <div className="max-w-xl mx-auto">

            <p className="text-center text-xl mt-5">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
            </div>
            <div className="mt-16 gap-4 flex flex-col sm:flex-row">
                {
                    FeatureCards.map(({title, description})=> (
                        <Feature title={title} description={description} key={title}/>
                    ))
                }
            </div>
        </div>

    </div>
}