import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
    title: "ITS ABOUT US",
    description: "SyNtH wAvE nOiSe PoP — wreaking havok from LAX to Tampere",
    verification: {
        google: "",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-poppins text-2xl xl:text-3xl">
                {children}
                <Analytics />
            </body>
        </html>
    );
}