import { Dosis, Montez } from "next/font/google";

const montez = Montez({ subsets: ['latin'], weight: ['400'] });
const dosis = Dosis({ subsets: ['latin'], weight: ['400'] });

export default function faq(){
    return(
        <main className="flex flex-col justify-center items-center px-8">
            <div className="w-1/3 min-w-60 h-1 rounded-full bg-[var(--light-purple)]"></div>
            <h2 className="text-4xl py-2">Frequently Asked Questions</h2>
            <section className="max-w-[30rem]">
                Can I request custom jewelry or clay decorations?<br/>Yes! Please message me on social media or send me an email and we can discuss pricing.
                <br/><br/>
                What's your return policy?<br/>I have a 30 day return policy for all of my products. If you have any issues with your product after the 30-day period, please reach out and I will see what I can do.
            </section>
        </main>
    )
};