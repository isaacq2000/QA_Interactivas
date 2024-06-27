import Percentage from "./percentage"
import React, { useState } from 'react';

export default function PercentageCard({ title }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`flex flex-col 3xl:w-[25rem] w-[20rem]   py-6 items-center justify-center shadow-lg transition-transform transform-gpu hover:scale-105 hover:bg-slate-100`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Percentage />
            <h2 className="text-2xl text-center">{hovered ? title : title.substring(0, 20) + (title.length > 20 ? '...' : '')}</h2>
        </div>
    );
}