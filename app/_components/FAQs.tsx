"use client"
import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqitems = [
  {
    question: "What payment methods do you accept?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

const AccordianItem = ({question , answer} : {question : string , answer : string})=> {

    const [isOpen , setIsOpen] = useState(false)
    return (
        <div className="py-7 border-b border-white/30" onClick={()=> setIsOpen(!isOpen)}>
              <div className="flex items-center ">
                <span className="flex-1 text-lg font-bold">{question}</span>
                {isOpen ? <Minus/> : <Plus/> }
              </div>
              <div className={clsx("mt-4 " , {hidden : !isOpen , 
                "" : isOpen === true
              })}>{answer}</div>
            </div>
    )
}

export const FAQs = () => {
  return (
    <div className="py-[72px] bg-black text-white sm:py-24 bg-gradient-to-b from-[#5D2CA8]  to-black">
      <div className="px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl sm:max-w-[648px] sm:mx-auto">Frequently asked questions</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {faqitems.map(({ question, answer }) => (
            <AccordianItem question={question} answer={answer} key={question}/>
          ))}
        </div>
      </div>
    </div>
  );
};
