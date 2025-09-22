"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

export default function About() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section
			id="about"
			className="relative flex flex-col lg:flex-row items-center lg:items-start justify-end w-full mt-16 mx-auto max-w-[150rem] lg:mt-56 bg-black text-fluo-green gap-x-12">
			<Container customClasses="w-full lg:w-auto">
				<div
					className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl pb-60"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<div className="overflow-hidden">
						<h2
							className={`font-bold text-6xl pb-6 translate-y-20 ${
								isInView ? "animate-slideUp" : ""
							}`}>
							About
						</h2>
					</div>

					<p className="text-xl font-semibold pb-4">
						We are{" "}
						<span className="text-yellow-btn-primary">IT'S ABOUT US (IAU)</span>, darkwave, synthwave, synthpop
						straight edge, d.i.y. <br />
					</p>
					<p className="pb-4">
						<span className="font-bold">From South Central/Los Angeles/CALIFORNIA - Tesoma/Tampere/FINLAND <br />
					 </span> 
					</p>
					<p className="italic text-yellow-btn-primary pb-8">
						Two worlds, one pulse. <br />
						
						IAU!
						
					</p>
					
				</div>
			</Container>
			<Image
				className="object-cover lg:object-contain max-w-full max-h-[80vh] xl:max-w-4xl"
				src="/about.jpg"
				width={1200}
				height={900}
				alt="Its About Us band photo"
				priority
			/>
		</section>
	);
}
