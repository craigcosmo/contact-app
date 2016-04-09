import React from "react";

export default class Search extends React.Component{
	render(){ 
		return(
			<div class="row">
				<br />
				<div class="form-group input-group">
					<input type="text" class="form-control" placeholder="Search for..." />
					<span class="input-group-btn">
					<button class="btn btn-default" type="button">
						<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
					</button>
					</span>
				</div>
				<br />
			</div>
		)
	}
}