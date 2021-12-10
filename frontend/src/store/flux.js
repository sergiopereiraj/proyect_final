const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            apiUrl: "http://127.0.0.1:5000",
            contacts: null,
            users: null,
            email: "",
            password: "",
            rut: "",
            name: "",
            lastname: "",
            phone: "",
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
            onSubmit: data => console.log({ ...data }),
            onChange: e => { },
            getUsers: async (url) => {
                try {
                    const response = await fetch(url + "/api/users")
                    if (!response.ok) throw new Error("Error al consultar usuarios")
                    const data = await response.json();

                    setStore({
                        users: data
                    })
                } catch (error) {
                    console.log(error)
                }

            }
        }
    }
}
export default getState;