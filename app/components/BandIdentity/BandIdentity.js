"use client";

import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import NewAlbum from "../NewAlbum/NewAlbum";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

export default function BandIdentity() {
	return (
		<>
			{/* Mobile */}
			<div className="w-full py-3 z-50 lg:hidden">
				<Container customClasses="px-2.5 flex items-center justify-between font-sm">
					<Image className="max-w-[6rem] h-auto" src="/logo-portrait.png" width={324} height={236} alt="Panic Panini logo" />
				</Container>
				<PhotoGallery />
			</div>
			
			{/* Desktop */}
			<div className="hidden h-full flex-col justify-between grow-0 shrink-0 bg-black z-10 bg-opacity-30 lg:flex">
				<div className="logo-container border-y-[1.25rem] border-fluo-green py-4 opacity-1">
					<Image className="px-12 py-3 max-w-[18.75rem] h-auto" src="/logo-portrait.png" width={324} height={236} alt="Panic Panini logo" />
				</div>
				<PhotoGallery />
				<NewAlbum />
			</div>
		</>
	);
}
