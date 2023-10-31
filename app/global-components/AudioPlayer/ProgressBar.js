const formatTime = (time) => {
	if (time && !isNaN(time)) {
		const minutes = Math.floor(time / 60);
		const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(time % 60);
		const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${formatMinutes}:${formatSeconds}`;
	}
	return "00:00";
};

export default function ProgressBar({ progressBarRef, audioRef, timeProgress, duration }) {
	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
	};

	return (
		<div className="flex flex-col progress pt-2">
			<span className="text-base font-bold text-white">{formatTime(timeProgress)}</span>
			<input type="range" ref={progressBarRef} defaultValue="0" onChange={handleProgressChange} />
			<span className="text-base font-bold text-white">{formatTime(duration)}</span>
		</div>
	);
}
