const getState = ({ getStore, getActions, setStore }) => {
	const agenda_johana = "agenda_johana";
	return {
	  store: {
		contacts: [], 
		
		selectedContact: null, 
		
	  },
	  actions: {
		seeContact: (contact) => {
		  setStore({ selectedContact: contact });
		},
		loadContacts: () => {
			fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${agenda_johana}`)
			  .then((response) => response.json())
			  .then((response) => {
				setStore({ contacts: response });
			  })
			  .catch(error => console.log('error', error));
		  
		  
		  },
		  seeContact: (contact) => {
			console.log(contact);
			setStore({contact: contact});
		  
		  },
		  updateContact: async (contact) => {
			try {
			  console.log("Updating contact:", contact); 
			  const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
				method: "PUT",
				body: JSON.stringify({
				  full_name: contact.full_name,
				  email: contact.email,
				  agenda_slug: contact.agenda_slug,
				  address: contact.address,
				  phone: contact.phone,
				}),
				headers: {
				  "Content-Type": "application/json",
				},
			  });
		  
			  if (response.ok) {
				getActions().loadContacts();
			  } else {
				console.error("Error updating contact:", response.status, response.statusText);
			  }
			  
			  return response;
			} catch (error) {
			  console.error("Error updating contact:", error);
			}
			  }
			}
			}
		}
	  
  
  
  export default getState;