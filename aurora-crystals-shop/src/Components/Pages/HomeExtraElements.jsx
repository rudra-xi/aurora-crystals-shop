import "../Style/Home.css";
import crystal1 from "../../Assets/Images/crystal-1.jpg";
import crystal2 from "../../Assets/Images/crystal-2.jpg";
import crystal3 from "../../Assets/Images/crystal-3.jpg";
import crystal4 from "../../Assets/Images/crystal-4.jpg";

function HomeExtraElements() {
	return (
				/* ===== EXTRA TEXT AND IMAGES CONTAINER ===== */
		<section className="extra">
			<div className="extra-wrapper">
				{/* ===== EXTRA HEADING TEXT ===== */}
				<div className="extra-heading">
					<span id="left">2024</span>
					<span id="right">CrysN°1/5</span>
				</div>

				{/* ===== IMAGES GALLERY FOR THE PROJECT ===== */}
				<div className="extra-gallery">
					<div className="extra-gallery-items">
						<img src={crystal1} alt="crystal" className="extra-gallery-items-img"/>
					</div>
					<div className="extra-gallery-items">
						<img src={crystal2} alt="crystal" className="extra-gallery-items-img"/>
					</div>
					<div className="extra-gallery-items">
						<img src={crystal3} alt="crystal" className="extra-gallery-items-img"/>
					</div>
					<div className="extra-gallery-items">
						<img src={crystal4} alt="crystal" className="extra-gallery-items-img"/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeExtraElements;
