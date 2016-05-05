import React from "react";
import EmptyList from "../component/EmptyList";
import List from "../component/List";
import * as HomeAction from "../action/HomeAction";
import HomeStore from "../store/HomeStore";
import '../sass/home.scss';



export default class Home extends React.Component{
	constructor(){
		super();
		this.fetchIt = this.fetchIt.bind(this);
		this.state = {
			items : []
		};
	}
	componentWillMount(){
		HomeAction.loadAllContact();
		HomeStore.on('change',this.fetchIt);
	}
	componentWillUnmount() {
		// this.firebaseRef.off();
		HomeStore.removeListener('change', this.fetchIt);
	}
	fetchIt(){
		this.setState({
			items: HomeStore.loadIt()
		})
		console.log(HomeStore.loadIt());
	}
	render(){ 
		return(
			<List userList={this.state.items} />
		)
	}
}



