import React from "react";
import Search from "../component/Search";

export default class MainContainer extends React.Component{
	render(){ 	
		return(
			<div class="container">
				<div class="row" style="position:relative">
					<br />
					<h2 class="text-center title-text">Contact Book</h2>
					<AddButton />
				</div>
				
				<Search />

				{this.props.children}
			</div>
		)
	}
}