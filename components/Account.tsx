import Link from "next/link";
import { LogIn, User } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
function LoggedInAvatar({children, user}: {children: React.ReactNode, user: any}) {
    return(
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent className="flex-col items-center justify-center w-auto text-[var(--dark-purple)] bg-[var(--light-tan)] border-2 border-[var(--light-purple)]">
                <span className="pb-4">Logged in as {user.emailAddresses[0].emailAddress}</span>
                <div className="w-full bg-transparent h-2"></div>
                <SignOutButton>
                    <div className="rounded-full bg-[var(--dark-purple)] text-[var(--light-tan)] w-auto flex justify-center items-center cursor-pointer">Sign out</div>
                </SignOutButton>
            </PopoverContent>
        </Popover>
    )
}

export default async function Account(){
    const user = await currentUser()
    if (user?.hasImage === true) {
        return(
            <LoggedInAvatar user={user}>
                <img height={32} width={32} className="rounded-full" src={user?.imageUrl}></img>
            </LoggedInAvatar>
        )
    }
    else if (user?.hasImage === false) {
        return(
            <LoggedInAvatar user={user}>
                <div className="h-8 w-8 rounded-full bg-[var(--dark-purple)] text-[var(--light-purple)] flex items-center justify-center">{user.emailAddresses[0].emailAddress.slice(0,1).toUpperCase()}</div>
            </LoggedInAvatar>
        )
    }
    else {
        return(
            <Link href="/sign-in"><User className="h-8 w-8"/></Link>
        );
    }
};