const getState = ({getStore, getActions, setStore})=>{

    return{
        store:{
            rut: "",
            password: "",
            isAuth: false,
            currentUser: {
                access_token: "",
                user: {
                    id: 1,
                    name: "Sergio",
                    lastname: "Pereira",
                    rut: "16670557-6",
                    activo: true,
                    profile: {},
                    role: [{
                        id: 1,
                        name: "Usuario"
                    }]
                }
            },
            usuarios: ["user:{id: 1, name: 'Sergio', lastname: 'Pereira', rut: '16670557-6', role: [{id: 1, name:'usuario'}]", "user:{id:1, name: 'Sergio', lastname: 'Pereira', rut: '16670557-6', role: [{id:1, name:'usuario'}]"],

        },
        actions: {
            onSubmit: data => console.log({...data}),
            onChange: e =>{}
        }
    }
}
export default getState;