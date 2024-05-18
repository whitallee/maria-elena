import { Dosis, Montez } from "next/font/google";

const montez = Montez({ subsets: ['latin'], weight: ['400'] });
const dosis = Dosis({ subsets: ['latin'], weight: ['400'] });

export default function Footer() {
    return(
        <div className={dosis.className + " flex w-full justify-center items-center gap-4 sm:gap-16 py-4 bg-[var(--dark-purple)] text-[var(--light-tan)] flex-col-reverse sm:flex-row"}>
          <div className="text-center">
            <h3 className="font-semibold decoration-solid decoration-1 decoration-[var(--light-tan)]">Mailing Address</h3>
            <p className="">6789 Main Rd<br></br>PO Box #321<br></br>Austin, TX 78730</p>
          </div>
          <div className="flex flex-col justify-center">
            <span>Email: <a className="text-[var(--light-purple)]" href='mailto:mariaelenamilan00@gmail.com'>mariaelenamilan00@gmail.com</a></span>
            <span>Instagram: <a className="text-[var(--light-purple)]" href='https://www.instagram.com/_elenamilan_/?hl=en'>@_elenamilan_</a></span>
            <a className="text-[var(--light-purple)]" href='/faq'>Frequently Asked Questions</a>
          </div>
        </div>
    );
};