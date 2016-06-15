import React from "react";
import linkState from "react-link-state";

export default class Input extends React.Component{
	constructor(props){
		super();
		this.state = props.state;

	}
	render(){ 
		return(
			<div>
				<div class="form-group">
					<input type="text" valueLink={this.props.linkState(this, 'items.firstName')}  class="form-control"   placeholder="First Name"  />
				</div>
				<div class="form-group">
					<input type="text" valueLink={this.props.linkState(this, 'items.lastName')}  class="form-control"  placeholder="Last Name"  />
				</div>
				<div class="form-group">
					<input type="text" valueLink={this.props.linkState(this, 'items.phone')}  class="form-control"   placeholder="Phone"  />
				</div>
				<div class="form-group">
					<input type="email" valueLink={this.props.linkState(this, 'items.email')} class="form-control"  placeholder="Email"  />
				</div>
				<div class="form-group">
					<input type="text" valueLink={this.props.linkState(this, 'items.gender')} class="form-control"   placeholder="Gender"  />
				</div>
				<div class="form-group">
					<input type="text"  valueLink={this.props.linkState(this, 'items.address.address1')} class="form-control"  placeholder="Address Line 1"  />
				</div>
				<div class="form-group">
					<input type="text"  valueLink={this.props.linkState(this, 'items.address.address2')} class="form-control"  placeholder="Address Line 2" />
				</div>
				<div class="form-group">
					<input type="text" valueLink={this.props.linkState(this, 'items.address.postalCode')} class="form-control" placeholder="Postal Code"  />
				</div>
				<div class="checkbox">
					<label>
					<input type="checkbox" checkedLink={this.props.linkState(this, 'items.address.isActive')} /> Is Active?
					</label>
				</div>
			</div>
		)
	}
}