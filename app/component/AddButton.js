import React from "react";

export default class AddButton extends React.Component{
	render(){ 
		return(
			<button class="btn btn-default" type="button" id="search-btn">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
			</button>
		)
	}
}