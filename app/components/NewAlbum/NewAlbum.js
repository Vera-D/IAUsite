import { useRef } from "react";
import { useInView } from "framer-motion";

export default function NewAlbum({ customClasses }) {
    const comingSoonRef = useRef(null);
    const isInView = useInView(comingSoonRef, { once: true });

    return (
        <div
            className={`flex flex-col items-center justify-center p-4 pb-24 pt-16${
                customClasses ? ` ${customClasses}` : ""
            }`}
            ref={comingSoonRef}
            style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
        >
            <div className="relative w-full flex justify-center mb-8">
                <span
                    className="text-5xl font-bold text-fluo-green opacity-70"
                    style={{
                        transform: "translateY(calc(var(--scroll, 0) * 0.3px))",
                        transition: "transform 0.2s",
                    }}
                >
                    IT'S ABOUT US
                </span>
            </div>
            {/* ...other content... */}
        </div>
    );
}