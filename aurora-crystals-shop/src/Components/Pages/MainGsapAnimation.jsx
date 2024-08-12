import React, { useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import HomeExtraElements from "./HomeExtraElements";

//? ===== IMPORTING GSAP =====
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function MainGsapAnimation() {
	const container = useRef();
	const timelineGsap = useGSAP();

	useGSAP(() => {

		//? ===== SETTING THE STARTING POSITION OF THE ELEMENTS =====
		gsap.set(".title", { yPercent: -150 });
		gsap.set(".hero-paragraph", { yPercent: 150 });
		gsap.set(".extra-gallery-items", {
			yPercent: 150,
		});
		gsap.set(".extra-heading #left", { xPercent: -150 });
		gsap.set(".extra-heading #right", { xPercent: 150 });

		//? ===== ANIMATING THE ELEMENTS =====
		timelineGsap.current = gsap
			.timeline({ defaults: { duration: 2, ease: "back.out" } })
			.addLabel("hero")
			.to(".title", {
				yPercent: 0,
				stagger: { each: 0.05, grid: "auto", from: "edges" },
			})
			.to(".hero-paragraph", { yPercent: 0 }, 0)
			.addLabel("extra")
			.to(".extra-heading #left", { xPercent: 0 }, 0)
			.to(".extra-heading #right", { xPercent: 0 }, 0)
			.to([".extra-gallery-items"], {
				yPercent: 0,
				stagger: { each: 0.1, grid: "auto", from: "edges" },
			});
	});
	return (
		<main ref={container}>
			<Navbar />
			<Home />
			<HomeExtraElements />
		</main>
	);
}

export default MainGsapAnimation;
