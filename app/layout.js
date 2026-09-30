import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
    title: "ITS ABOUT US",
    description: "LA, Helsinki, Finland, synthwave, rock, synthcore, punk, indie, darkwave, D.I.Y, hardcore, music, Tampere, Helsinki",
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