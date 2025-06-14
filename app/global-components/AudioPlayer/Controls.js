import { useState, useEffect, useRef, useCallback } from "react";
import { PreviousSong, NextSong, Play, Pause } from "@/app/svg-icons/svg-icons";
export default function Controls({ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const playAnimationRef = useRef();

	const togglePlayPause = () => {
		setIsPlaying((prev) => !prev);
	};

	const repeat = useCallback(() => {
		const currentTime = audioRef.current.currentTime;
		setTimeProgress(currentTime);
		progressBarRef.current.value = currentTime;

		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	const handlePrevious = () => {
		if (trackIndex === 0) {
			let lastTrackIndex = tracks.length - 1;
			setTrackIndex(lastTrackIndex);
			setCurrentTrack(tracks[lastTrackIndex]);
		} else {
			setTrackIndex((prev) => prev - 1);
			setCurrentTrack(tracks[trackIndex - 1]);
		}
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, repeat]);

	return (
		<div className="flex items-center pt-8 pb-4 gap-8">
			<button onClick={togglePlayPause} className="bg-fluo-green hover:bg-white transition-all rounded-full p-3 shadow-lg">
				{isPlaying ? <Pause extraClasses="fill-yellow-btn-primary w-8 h-8" /> : <Play extraClasses="fill-yellow-btn-primary w-8 h-8" />}
			</button>
			{/* <button
				className="ml-auto bg-fluo-green hover:bg-white transition-all rounded-full p-2 shadow-lg flex items-center gap-2"
				onClick={() => setLikeCount(likeCount + 1)}
			>
				<HeartOutline extraClasses="fill-yellow-btn-primary w-6 h-6" />
				<span className="text-yellow-btn-primary font-bold text-lg select-none">{likeCount}</span>
			</button> */}
			<button onClick={handlePrevious} className="px-3">
				<PreviousSong extraClasses="fill-fluo-green hover:fill-white transition-all" />
			</button>
			<button onClick={handleNext} className="px-3">
				<NextSong extraClasses="fill-fluo-green hover:fill-white transition-all" />
			</button>
		</div>
	);
}
