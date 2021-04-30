import React, { MouseEventHandler } from "react";

type RoundButtonProps = {
    text: string,
    onClick: MouseEventHandler
}

export default function RoundButton({ text, onClick }: RoundButtonProps) {
    return (
        <button onClick={onClick} className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            >
            {text}
        </button>
    );
}
