import dispatcher from "../dispatcher/Dispatcher";

export function loadAllContact(){
	dispatcher.dispatch({
		type: 'LOAD_ALL_CONTACT'
	})
}