import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
//import Listen from "./components/Listen/Listen";
//import Shows from "./components/Shows/Shows";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import TextParallax from "./components/TextParallax/TextParallax";
export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-black">
				<Intro />
				<About />
				<PhotoGallery />
				{/* <Listen />*/}
				{/* <Shows />*/}
				<ContactUs />
				<TextParallax />
				
			</main>
		</>
	);
}
