const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: [], 
		selectedContact: [], 
	  },
	  actions: {
		seeContact: (contact) => {
		  setStore({ selectedContact: contact });
		},
	
	  },
	};
  };
  
  export default getState;