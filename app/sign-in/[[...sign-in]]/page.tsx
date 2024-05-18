import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return(
        <div className="w-screen flex justify-center items-center">
            <SignIn path="/sign-in" />
        </div>
    );
}