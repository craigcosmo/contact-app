import dispatcher from "../dispatcher/Dispatcher";

export function getIt(id){
	dispatcher.dispatch({
		type: "GET_THIS_CONTACT",
		text: id
	});
}