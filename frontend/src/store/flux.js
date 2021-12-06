const getState = ({getStore, getActions, setStore})=>{

    return{
        store:{
<<<<<<< HEAD

            email: "",
            password: "",
=======
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
                        name: "Usuario"
                    }]
                }
            }
>>>>>>> 7a7c1662994745f8085c8cd91a756628891969a0
        },
        actions: {
            onSubmit: data => console.log({...data}),
            onChange: e =>{}
        }
    }
}
export default getState;