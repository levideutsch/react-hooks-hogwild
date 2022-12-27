import React from "react";
// import Nav from "./Nav";
import HogCards from "./HogCards";
import hogs from "../porkers_data";

function App() {
	return (
		<div className="ui grid container">
			
			{hogs.map((hog) => {
				return <HogCards 
					key={hog.name} 
					name={hog.name} 
					img={hog.image} 
					specialty={hog.specialty} 
					weight={hog.weight} 
					medal={hog['highest medal achieved']}/>
			})}
			
			
			{/* <Nav /> */}
		</div>
	);
}

export default App;
