"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper, Github } from "@/app/svg-icons/svg-icons";
import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";


const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

const tourDates = [
	{
		id: 1,
		date: "19 Oct",
		dayTime: "Friday 20.30 - 23.00",
		venue: "The O2, Isla Square",
		city: "London",
	},
	{
		id: 2,
		date: "22 Nov",
		dayTime: "Wednesday 20.00 - 22.00",
		venue: "Roundhouse, Chalk Bag Rd",
		city: "Rome",
	},
	{
		id: 3,
		date: "10 Dec",
		dayTime: "Saturday 20.00 - 22.00",
		venue: "200 Camden High St",
		city: "New York",
	},
];

export default function IntroPage() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	return (
		<div
			className={`flex flex-col justify-center items-center lg:justify-end lg:items-end`}
			style={{
				transform: isInView ? "none" : "translateY(-100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={sectionRef}>
			
			<div className="flex  w-full">
					<AudioPlayer />
			</div>
			
			<div className="gap-x-10 lg:flex">
				
				
				<div className="hidden lg:block">
					<ScrollTo toId="shows" duration={1500}>
						<ButtonPrimary>Find out more</ButtonPrimary>
					</ScrollTo>
				</div>
			</div>
		</div>
	);
}
