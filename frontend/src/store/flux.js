const getState = ({getStore, getActions, setStore})=>{

    return{
        store:{
            email: "", 
            currentUser: {
                access_token: "",
                user: {
                    id: 1,
                    rut: "16670557-6",
                    activo: true,
                    profile: {},
                    role: [{
                        id: 1,
                        name: "Admin"
                    }]
                }
            }
        },
        actions: {
            onSubmit: data => console.log({...data}),
            onChange: e =>{}
        }
    }
}
export default getState;