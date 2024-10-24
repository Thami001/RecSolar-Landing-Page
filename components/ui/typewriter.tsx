"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Let's",
        },
        {
            text: "Go",
        },
        {
            text: "Solar",
        },
        {
            text: "And",
        },
        {
            text: "Prosper"
        },
        {
            text: "With"
        },
        {
            text: "RECSolar",
            className: "text-[#139717] dark:text-[#139717]",
        },
    ];
    return (
        <div className={"py-12"}>
            <p className={"underline font-light"}>
                The road to freedom from power-based stress is here
            </p>
            <TypewriterEffectSmooth words={words} className={" text-center"} cursorClassName={"hidden"} />
            {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button
                    className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Signup
                </button>
            </div> */}
        </div>
    );
}
