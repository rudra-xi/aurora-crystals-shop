import "../Style/Home.css";

function Home() {
	return (
			/* ===== TITLE AND PARAGRAPH CONTAINER =====*/
		<section className="hero">
			<div className="hero-wrapper">

				{/* ===== HERO HEADING FOR PROJECT =====*/}
				<div className="hero-heading">
					<h1 className="title">A</h1>
					<h1 className="title">U</h1>
					<h1 className="title">R</h1>
					<h1 className="title">O</h1>
					<h1 className="title">R</h1>
					<h1 className="title">A</h1>
				</div>

				{/* ===== HERO PARAGRAPH FOR THE PROJECT ===== */}
				<div className="hero-paragraph">
					<p>
					Aurora Crystals offers a collection of healing crystals, jewelry, and spiritual tools designed to promote serenity and balance. Each piece carries unique energy, suitable for personal wellness and spiritual practices. The energy of nature's treasures guides individuals towards inner peace and fulfillment. Aurora Crystals help create a sacred space for healing and transformation, allowing the energy to flow through individuals, aligning them with their highest self. Experience the magic of Aurora Crystals and support a more balanced life.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Home;
