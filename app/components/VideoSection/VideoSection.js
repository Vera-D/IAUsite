"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";

export default function VideoSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });

	return (
		<section
			id="video"
			className="w-full py-10 lg:py-24 bg-black text-purple-500"
			style={{
				transform: isInView ? "none" : "translateY(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={sectionRef}>
			<Container>
				<h2 className="font-bold text-4xl md:text-6xl pb-6">Live</h2>
				<div className="w-full rounded-lg overflow-hidden">
					<video
						controls
						preload="metadata"
						className="w-full rounded-lg"
						poster="/frame-band.jpg">
						<source src="https://f003.backblazeb2.com/file/iaubandsite/IAU-promo-live.mp4" type="video/mp4" />
					</video>
				</div>
			</Container>
		</section>
	);
}
