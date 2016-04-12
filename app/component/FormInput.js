import React from "react";

class FormInput extends React.Component{
	render(){ 
		return(
			<div class="form-group">
				<input type="text" valueLink={linkState(this, 'items.firstName')}  class="form-control"  id="first-name" placeholder="First Name"  />
			</div>
			<div class="form-group">
				<input type="text" valueLink={linkState(this, 'items.lastName')}  class="form-control"  id="last-name" placeholder="Last Name"  />
			</div>
			<div class="form-group">
				<input type="text" valueLink={linkState(this, 'items.phone')}  class="form-control"  id="phone" placeholder="Phone"  />
			</div>
			<div class="form-group">
				<input type="email" valueLink={linkState(this, 'items.email')} class="form-control" id="email" placeholder="Email"  />
			</div>
			<div class="form-group">
				<input type="text" valueLink={linkState(this, 'items.gender')} class="form-control"  id="gender" placeholder="Gender"  />
			</div>
			<div class="form-group">
				<input type="text"  valueLink={linkState(this, 'items.address.address1')} class="form-control" id="address1" placeholder="Address Line 1"  />
			</div>
			<div class="form-group">
				<input type="text"  valueLink={linkState(this, 'items.address.address2')} class="form-control" id="address2" placeholder="Address Line 2" />
			</div>
			<div class="form-group">
				<input type="text" valueLink={linkState(this, 'items.address.postalCode')} class="form-control" id="postal-code" placeholder="Postal Code"  />
			</div>
			<div class="checkbox">
				<label>
				<input type="checkbox" checkedLink={linkState(this, 'items.address.isActive')} /> Is Active?
				</label>
			</div>
		)
	}
}