"use client";

import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";

export default function IntroPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto py-6 bg-transparent z-50">
            <div className="flex flex-col items-center w-full bg-black/80 rounded-lg p-4 gap-4 min-h-[260px]">
                <AudioPlayer />
                <div className="flex flex-col items-center gap-2 w-full">
                    <h4 className="text-white font-rockSalt text-base">01. Battle Cry!</h4>
                    <h4 className="text-white font-rockSalt text-base">02. Mana Mana</h4>
                    <h4 className="text-white font-rockSalt text-base">03. Alone/Forever/For Good</h4>
                </div>
            </div>
        </div>
    );
}