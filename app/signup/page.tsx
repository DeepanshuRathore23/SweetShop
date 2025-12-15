import SignupForm from "../ui/signup-from";
import { Suspense } from "react";

export default function Page(){
    return (
        <>
        <Suspense>
            <SignupForm/>
        </Suspense>
        
        </>
    );
}