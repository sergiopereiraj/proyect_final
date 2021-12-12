const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            apiUrl: "http://127.0.0.1:5000",
            contacts: null,
            users: null,
            user: null,
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
            onSubmit: async user_data => {
                try {
                    console.log(user_data)
                    const store = getStore()
                    const response = await fetch(store.apiUrl + "/api/register",{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json"

                        },
                        body :JSON.stringify({
                            rut: user_data.rut,
                            email: user_data.email,
                            password: user_data.password
                        })


                        
                    })
                    /* if (!response.ok) throw new Error("Error al consultar usuarios") */
                    const data = await response.json();
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            },
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

            },
            setUser: (user)=>{
                setStore({
                    user
                })

            }
        }
    }
}
export default getState;