import { Menu, ShoppingCart, LogIn } from "lucide-react";

export default function TopNav(){
    return (
        <div className="bg-[color:var(--light-purple)] h-16 fixed top-0 w-full flex items-center justify-between px-4">
            <Menu className=""/>
            <div className="flex gap-4">
                <ShoppingCart/>
                <LogIn/>
            </div>
        </div>
    );
};