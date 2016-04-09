import React from "react";

export default class Create extends React.Component{
	render(){ 
		return(
			<div class="row">
				<form id="new-form">
					<div class="form-group">
						<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
					</div>
					<div class="form-group">

						<input type="text" class="form-control" id="exampleInputPassword1" placeholder="First Name" />
					</div>
					<div class="form-group">

						<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Last Name" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Gender" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Phone" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address Line 1" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address Line 2" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Postal Code" />
					</div>
					<div class="checkbox">
						<label>
						<input type="checkbox"> Is Ative?
						</label>
					</div>
					<div class="form-group text-right">
						<button type="submit" class="btn btn-default">Done</button>
					</div>
					<div class="form-group ">
						<a href="#">Delete This Contact</a>
					</div>
				</form>
			</div>
		)
	}
}