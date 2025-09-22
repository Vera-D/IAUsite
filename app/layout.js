import Footer from "./components/Footer/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


export const metadata = {
	title: "ITS ABOUT US",
	description: "LA, HELSINKI, FINLAND, SYNTHWAVE, ROCK, METAL, PUNK, INDIE, DARKWAVE, D.I.Y, HARDCORE, MUSIC, TAMPERE, HELSINKI",
	verification: {
		google: "",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-poppins font-rendering text-2xl xl:text-3xl">
				{children}
				 <Footer /> 
				 <Analytics />
			</body>
		</html>
	);
}
