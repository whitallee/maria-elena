import { currentUser } from "@clerk/nextjs/server";
import { Menu, ShoppingCart, LogIn } from "lucide-react";
import Account from "@/components/Account";

export default async function TopNav(){
    const user = await currentUser();
    return (
        <>
            <div className="bg-[color:var(--light-purple)] h-16 fixed top-0 w-full opacity-75 z-40"></div>
            <div className="h-16 fixed top-0 w-full flex items-center justify-between px-4 z-50">
                <Menu className="h-8 w-8"/>
                <div className="flex gap-4">
                    <ShoppingCart className="h-8 w-8"/>
                    <Account/>
                </div>
            </div>
        </>
    );
};