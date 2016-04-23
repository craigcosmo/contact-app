import dispatcher from "../dispatcher/Dispatcher";

export function getIt(id){
	dispatcher.dispatch({
		type: "GET_THIS_CONTACT",
		text: id
	});
}
export function updateIt(data){
	dispatcher.dispatch({
		type: "UPDATE_THIS_CONTACT",
		text: data
	});
}
export function removeIt(){
	dispatcher.dispatch({
		type: "DELETE_THIS_CONTACT",
		text: ''
	});
}