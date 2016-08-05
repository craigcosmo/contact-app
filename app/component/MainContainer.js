import React from 'react'
import Search from '../component/Search'
import AddButton from '../component/AddButton'
import '../sass/main.scss'
import '../sass/bootstrap.scss'

export default class MainContainer extends React.Component{
	render(){ 	
		return(
			<div class="container">
				<div class="row pr">
					<h2 class="text-center title-text">Contact Book</h2>
					<AddButton />
				</div>
				{this.props.children}
			</div>
		)
	}
}