import { useEffect } from "react";

export default function DisplayTrack({ currentTrack, audioRef, setDuration, progressBarRef, handleNext, trackIndex, isPlaying }) {
	const trackDuration = () => {
		if (!audioRef.current) return;
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		if (progressBarRef.current) progressBarRef.current.max = seconds;
	};

	const handleCanPlay = () => {
		trackDuration();
		if (isPlaying) audioRef.current.play();
	};

	useEffect(() => {
		if (!audioRef.current) return;
		audioRef.current.load();
	}, [currentTrack]);

	return (
		<div className="text-yellow-btn-primary">
			<audio src={currentTrack.src} preload="metadata" ref={audioRef} onEnded={handleNext} onLoadedMetadata={trackDuration} onCanPlay={handleCanPlay} />
			<div className="text-base">
				<p className="font-bold">
					{trackIndex + 1}. {currentTrack.title}
				</p>
				<p>
					Artist: <span className="italic">{currentTrack.author}</span>
				</p>
			</div>
		</div>
	);
}
