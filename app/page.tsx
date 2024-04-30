import Image from "next/image";
import { Montez, Dosis } from "next/font/google";

const montez = Montez({ subsets: ['latin'], weight: ['400'] });
const dosis = Dosis({ subsets: ['latin'], weight: ['400'] });


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <h1 className={montez.className + " text-9xl flex flex-col items-center justify-center"}>Maria Elena <br/><span className={dosis.className + " text-2xl"}>by Milan Creations</span></h1>    
    </main>
  );
}
