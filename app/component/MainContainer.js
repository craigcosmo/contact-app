import React from "react";
import Search from "../component/Search";
import AddButton from "../component/AddButton";

export default class MainContainer extends React.Component{
	render(){ 	
		return(
			<div class="container">
				<div class="row pr">
					<h2 class="text-center title-text">Contact Book</h2>
					<AddButton />
				</div>
				
				<Search />

				{this.props.children}
			</div>
		)
	}
}