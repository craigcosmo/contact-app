import React from "react";
import {PropTypes} from "react";

export default class AddButton extends React.Component{


	navigate () { 
		this.context.router.push('/create');
	}
	componentWillMount(){
		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact');
	}
	render(){ 
		return(
			<button class="btn btn-default" type="button" id="search-btn" onClick={this.navigate.bind(this)}>
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
			</button>
		)
	}
}
AddButton.contextTypes = {
    router: PropTypes.object.isRequired
}