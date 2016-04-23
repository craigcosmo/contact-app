import {EventEmitter} from "events";
import dispatcher from "../dispatcher/Dispatcher";

class UpdateStore extends EventEmitter {
	constructor(){
		super();
		this.items = {
				id: null,
				firstName: '',
				lastName: '',
				email:  '',
				phone:  '',
				gender:  '',
				address: {
					address1:'',
					address2:'',
					postalCode: '',
					isActive: false 
				}
			}
	}
	getIt(query){

		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact/'+query);
		this.firebaseRef.once("value", function (snapshot){
			const item = {
				id: snapshot.val().id ? snapshot.val().id : null,
				firstName: snapshot.val().firstName ? snapshot.val().firstName : null,
				lastName: snapshot.val().lastName ? snapshot.val().lastName : '',
				email: snapshot.val().email ? snapshot.val().email : '',
				phone: snapshot.val().phone ? snapshot.val().phone : '',
				gender: snapshot.val().gender ? snapshot.val().gender : '',
				address : {
					address1: snapshot.val().address.address1 ? snapshot.val().address.address1 : '',
					address2: snapshot.val().address.address2 ? snapshot.val().address.address2 : '',
					postalCode: snapshot.val().address.postalCode ? snapshot.val().address.postalCode : '',
					isActive: snapshot.val().address.isActive ? snapshot.val().address.isActive : false
				}
			};
			
			
			this.items = item;
			this.emit("change");
		}.bind(this));
	}
	updateIt(data){
		const status = this.firebaseRef.update(data, function (){
			console.log('updated');
			this.emit("change");
		}.bind(this));
	}
	removeIt(){
		this.firebaseRef.remove( function (error){
			!error && this.emit("change");
		}.bind(this));
	}
	loadIt(){
		return this.items;
	}
	handleAction(action) {
		switch(action.type) {
			case "GET_THIS_CONTACT": {
				this.getIt(action.text);
				break;
			}
			case "UPDATE_THIS_CONTACT": {
				this.updateIt(action.text);
				break;
			}
			case "DELETE_THIS_CONTACT": {
				this.removeIt();
				break;
			}
		}
	}
}


const updateStore = new UpdateStore;
dispatcher.register(updateStore.handleAction.bind(updateStore));

export default updateStore;