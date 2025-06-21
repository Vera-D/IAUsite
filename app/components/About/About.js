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
			className={`relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56 bg-black text-fluo-green`}>
			<Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
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
						<span className="font-bold">South Central/Los Angeles/CALIFORNIA - Tesoma/Tampere/Finland <br />
					 </span> 
					</p>
					<p className="italic text-yellow-btn-primary pb-8">
						Two worlds, one pulse. <br />
						
						IAU!
						
					</p>
					
				</div>
			</Container>
			<Image
				className="w-full mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-xl"
				src="/about.png"
				width={750}
				height={533}
				alt="Its About Us band photo"
				
			/>
		</section>
	);
}
