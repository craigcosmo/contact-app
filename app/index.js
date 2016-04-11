import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory, IndexRoute } from "react-router";

import MainContainer from "./component/MainContainer";
import Home from "./component/Home";
import Search from "./component/Search";
import Create from "./component/Create";
import Delete from "./component/Delete";
import Update from "./component/Update";



const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={MainContainer}>
			<IndexRoute component={Home} />
			<Route path="search" component={Search} />
			<Route path="create" component={Create} />
			<Route path="create" component={Delete} />
			<Route path="update" component={Update} />
		</Route>
	</Router>, app);