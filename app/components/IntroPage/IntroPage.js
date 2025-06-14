"use client";

import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";

export default function IntroPage() {
	return (
		<div className="fixed top-1/2 left-1/3 -translate-y-1/2 flex pointer-events-auto w-1/2 h-[1vh] flex-col items-center justify-center bg-transparent z-50">
			<AudioPlayer />
		</div>
	);
}
