import {EventEmitter} from "events";
import dispatcher from "../dispatcher/Dispatcher";

class HomeStore extends EventEmitter { 
	constructor(){
		super();
		this.items = []
	}

	loadAllContact(){

		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact');
		this.firebaseRef.once("value", function (snapshot){
			this.items = []; // fix the duplicate item when click an item then go back home with cancle button, I need to clear the items array first

			snapshot.forEach(function(data){
				const item = {
					id: data.val().id ? data.val().id : null,
					firstName: data.val().firstName ? data.val().firstName : null,
					lastName: data.val().lastName ? data.val().lastName : '',
					email: data.val().email ? data.val().email : '',
					phone: data.val().phone ? data.val().phone : '',
					gender: data.val().gender ? data.val().gender : '',
					address : {
						address1: data.val().address.address1 ? data.val().address.address1 : '',
						address2: data.val().address.address2 ? data.val().address.address2 : '',
						postalCode: data.val().address.postalCode ? data.val().address.postalCode : '',
						isActive: data.val().address.isActive ? data.val().address.isActive : false
					}
				};

				item['.key'] = data.key();
				this.items.push(item);

			}.bind(this));
			this.emit("change");
		}.bind(this));	
	}
	loadIt(){
		return this.items;
	}
	handleAction(action){
		switch(action.type){
			case 'LOAD_ALL_CONTACT' :{
				this.loadAllContact();
				break;
			}
			
		}
	}

}

const homeStore = new HomeStore;
dispatcher.register(homeStore.handleAction.bind(homeStore));

export default homeStore;