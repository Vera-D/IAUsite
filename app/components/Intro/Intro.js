"use client";

import { useRef, useState, useEffect } from "react";
import BandIdentity from "../BandIdentity/BandIdentity";
import Container from "@/app/global-components/Container/Container";
import IntroPage from "../IntroPage/IntroPage";
import NewAlbum from "../NewAlbum/NewAlbum";
import BackToTop from "../BackToTop/BackToTop";
import { useInView } from "framer-motion";
import CookieConsent from "react-cookie-consent";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0,
};

export default function Intro() {
	const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef);

	useEffect(() => {
		const { scrollY } = window;
		if (scrollY > 50 && !isInView) {
			setIsScrollTopVisible(true);
		} else {
			setIsScrollTopVisible(false);
		}
	}, [isInView]);

	return (
		<section
			id="intro"
			className={`relative flex flex-col items-center h-[100svh] w-full overflow-hidden max-h-[93rem] min-h-[43rem] lg:h-screen lg:flex-row lg:justify-start`}
			ref={sectionRef}>
			<BandIdentity />
			<div className="absolute w-full h-full top-0 left-0">
				<div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-purple-500 to-pink-500 opacity-10"></div>
				<div className="absolute w-full h-full top-0 left-0 bg-hero-pattern bg-repeat"></div>
				<video
					autoPlay
					muted
					loop
					poster="/frame-band.jpg"
					className="object-cover w-full h-full z-10 video-pan-right"
					playsInline>
					<source src="./video-band.mp4" type="video/mp4" />
					<source src="./video-band.mp4" type="video/mp4" />
					<p>
						Your browser doesn&#8217;t support HTML video. Here is a
						<a href="./video-band.mp4">link to the video</a> instead.
					</p>
				</video>
			</div>
			<Container customClasses="flex flex-col justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:justify-end lg:items-end">
				<IntroPage />
				
			</Container>
			<NewAlbum customClasses="mt-auto z-50 lg:hidden" />
			<BackToTop customClasses={`reveal${isScrollTopVisible ? " visible" : ""}`} />
			<CookieConsent
				disableStyles={true}
				buttonText="Consent"
				cookieName="cookie_consent"
				buttonClasses="bg-yellow-btn-primary rounded-full p-1 px-3 text-sm text-xs text-white"
				containerClasses="w-full fixed !bottom-0 bg-fluo-green p-3 z-[50] lg:bg-stone-300/70 lg:backdrop-blur-lg lg:left-8 lg:!bottom-2 lg:rounded-md lg:max-w-md"
				contentClasses="text-sm leading-none mb-1 lg:text-white"
				expires={20}>
				This website uses cookies to enhance the user experience.
			</CookieConsent>
		</section>
	);
}
