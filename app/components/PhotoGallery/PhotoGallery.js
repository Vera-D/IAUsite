"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

const galleryThumbnails = [
    {
        id: 1,
        src: "/gallery/thumbnails/thumbnail-1.jpg",
        title: "Band Practice",
        description: "First rehearsal in Astral Studios - Tampere",
    },
    {
        id: 2,
        src: "/gallery/thumbnails/thumbnail-2.jpg",
        title: "Studio Session",
        description: "Recording our debut EP",
    },
    {
        id: 3,
        src: "/gallery/thumbnails/thumbnail-3.jpg",
        title: "Promo Shoot",
        description: "Photoshoot for our website",
    },
    {
        id: 4,
        src: "/gallery/thumbnails/thumbnail-4.jpg",
        title: "Songwriting",
        description: "Writing new material together",
    },
];

export default function PhotoGallery() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section
            id="photo-gallery"
            className="w-full mt-16 pb-14 lg:mt-56 lg:pb-56 lg:mb-[22.5rem] text-purple-500"
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={sectionRef}
        >
            <Container>
                <div className="overflow-hidden">
                    <h2
                        className={`font-bold text-6xl pb-6 translate-y-24 ${
                            isInView ? "animate-slideUp" : ""
                        }`}>
                        Gallery
                    </h2>
                </div>
                <p>What we have been up to, band moments.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                    {galleryThumbnails.map((item) => (
                        <div className="flex flex-col mb-5 leading-none" key={item.id}>
                            <div className="w-full aspect-square rounded-lg overflow-hidden bg-fluo-green">
                                <Image
                                    className="w-full h-full object-cover rounded-lg"
                                    src={item.src}
                                    width={400}
                                    height={400}
                                    alt={item.title}
                                />
                            </div>
                            <h5 className="text-sm md:text-lg xl:text-xl font-medium mt-2">{item.title}</h5>
                            <p className="text-xs md:text-sm text-purple-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}