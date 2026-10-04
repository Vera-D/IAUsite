import { useEffect, useRef, useCallback } from "react";
import { PreviousSong, NextSong, Play, Pause } from "@/app/svg-icons/svg-icons";

export default function Controls({ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext, isPlaying, setIsPlaying }) {
	const playAnimationRef = useRef();

	const repeat = useCallback(() => {
		if (!audioRef.current) return;
		setTimeProgress(audioRef.current.currentTime);
		if (progressBarRef.current) {
			progressBarRef.current.value = audioRef.current.currentTime;
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, setTimeProgress, progressBarRef]);

	const handlePrevious = () => {
		if (trackIndex === 0) {
			setTrackIndex(tracks.length - 1);
			setCurrentTrack(tracks[tracks.length - 1]);
		} else {
			setTrackIndex((prev) => prev - 1);
			setCurrentTrack(tracks[trackIndex - 1]);
		}
	};

	useEffect(() => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.play();
			playAnimationRef.current = requestAnimationFrame(repeat);
		} else {
			audioRef.current.pause();
			cancelAnimationFrame(playAnimationRef.current);
		}
		return () => cancelAnimationFrame(playAnimationRef.current);
	}, [isPlaying, audioRef, repeat]);

	return (
		<div className="flex items-center pt-8 pb-4 gap-8">
			<button onClick={() => setIsPlaying((prev) => !prev)} className="bg-fluo-green hover:bg-yellow-btn-primary transition-all rounded-full p-3 shadow-lg animate-bounce">
				{isPlaying ? <Pause extraClasses="fill-yellow-btn-primary w-8 h-8" /> : <Play extraClasses="fill-yellow-btn-primary w-8 h-8" />}
			</button>
			<button onClick={handlePrevious} className="px-3">
				<PreviousSong extraClasses="fill-fluo-green hover:fill-white transition-all" />
			</button>
			<button onClick={handleNext} className="px-3">
				<NextSong extraClasses="fill-fluo-green hover:fill-white transition-all" />
			</button>
		</div>
	);
}
