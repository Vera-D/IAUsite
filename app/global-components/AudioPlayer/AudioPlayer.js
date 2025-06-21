"use client";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";

import Image from "next/image";
import { useRef, useState } from "react";
import { tracks } from "./Tracks";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

export default function AudioPlayer() {
	const [trackIndex, setTrackIndex] = useState(0);
	const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
	const [timeProgress, setTimeProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	const audioRef = useRef();
	const progressBarRef = useRef();

	const handleNext = () => {
		if (trackIndex >= tracks.length - 1) {
			setTrackIndex(0);
			setCurrentTrack(tracks[0]);
		} else {
			setTrackIndex((prev) => prev + 1);
			setCurrentTrack(tracks[trackIndex + 1]);
		}
	};

	return (
 
        <div className="relative w-full max-w-[135rem] my-auto bg-transparent rounded-xl border-solid border-4 border-fluo-green p-5 ">
            <ScrollTo toId="about" duration={1200}>
                <ButtonPrimary customClasses="mb-4">
                    It's About Us!
                </ButtonPrimary>
            </ScrollTo>
            <Controls audioRef={audioRef} progressBarRef={progressBarRef} setTimeProgress={setTimeProgress} duration={duration} tracks={tracks} trackIndex={trackIndex} setTrackIndex={setTrackIndex} setCurrentTrack={setCurrentTrack} handleNext={handleNext} />
            <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} progressBarRef={progressBarRef} setDuration={setDuration} handleNext={handleNext} trackIndex={trackIndex} />
            <ProgressBar progressBarRef={progressBarRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration} />
        </div>
    );
}
