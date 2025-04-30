import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="Web">


			
			<Navbar />
			<div className="mb-5">
                <Jumbotron />
            </div>
			<div className="row g-4">
                <Card img="https://mlin.es/wp-content/uploads/2024/08/marcas-de-coches-de-lujo-poco-conocidas-e1723484807706.jpg" title="Car1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore quisquam ipsam cum delectus sint culpa enim, eaque rerum eveniet exercitationem doloribus esse quia expedita obcaecati tempore! Quod, dicta voluptas." />
                <Card img="https://mlin.es/wp-content/uploads/2024/08/W-Motors-marca-de-lujo-1024x576.webp" title="Car2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi recusandae, id voluptatibus vel consectetur laudantium soluta cumque suscipit quis harum, assumenda quae excepturi necessitatibus repellendus dolorum." />
                <Card img="https://mlin.es/wp-content/uploads/2024/08/Marca-de-coche-Rimac-1024x576.jpg" title="Car3" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aliquid facere obcaecati, aliquam saepe maiores aut suscipit ducimus ipsum! Soluta nisi, obcaecati possimus perspiciatis deleniti consectetur impedit expedita est officiis." />
                <Card img="https://mlin.es/wp-content/uploads/2024/08/Marcas-raras-de-coches-pagani-1024x576.webp" title="Car4" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi corporis aut soluta eveniet cupiditate ea, inventore cum vero labore magni, nihil, delectus doloribus distinctio animi sed fugiat quas. Tenetur, nobis!" />
            </div>
			
		</div>
	);
};

export default Home;
