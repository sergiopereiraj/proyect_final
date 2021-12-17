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
            currentUser: null,
            roles: null,

        },



        actions: {
            onSubmit: async user_data => {
                try {
                    console.log(user_data)
                    const store = getStore()
                    const body = JSON.stringify({
                        rut: user_data.rut,
                        email: user_data.email,
                        password: user_data.password,
                        names: user_data.nombre,
                        father_lastname: user_data.apellido,

                    });
                    console.log(body);
                    const response = await fetch(store.apiUrl + "/api/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"

                        },
                        body: body

                    })
                    const data = await response.json();
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            },
            loginUser: async (user_data, history) => {
                try {
                    console.log(user_data)
                    const store = getStore()
                    const response = await fetch(store.apiUrl + "/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"

                        },
                        body: JSON.stringify({
                            rut: user_data.rut,
                            password: user_data.password,
                        })

                    })
                    const data = await response.json();
                    console.log(data)
                    history.push("/usuario/perfil")
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
            getUserById: async (url, id) => {
                try {
                    const response = await fetch(url + "/api/users" + id);
                    if (!response.ok) throw new Error("Error al consultar el usuarios")
                    const data = await response.json();

                    setStore({
                        user: data
                    })
                } catch (error) {
                    console.log(error)
                }

            },
            updateUser: async (url, user) => {
                try {
                    const response = await fetch(url + "/api/users/" + user.id, {
                        method: 'PUT',
                        body: JSON.stringify(user),
                        headers: {
                            'Content-Type': 'appliscation/json'
                        }
                    });
                    if (!response.ok) throw new Error("Error al consultar el usuarios")
                    const data = await response.json();

                    getActions().getUsers(url)
                    setStore({
                        user: data
                    })
                } catch (error) {
                    console.log(error)
                }

            },
            handleChangeUser: e => {
                const { user } = getStore();
                let profile = {
                    ...user.profile,
                    [e.target.id]: e.target.value
                };
                setStore({
                    user: { ...user, profile: profile }
                })
            },
            handleSubmitUser: e => {
                e.preventDefault();
                const { apiUrl, user } = getStore();
                const { updateUser } = getActions();
                updateUser(apiUrl, user)

            },
            getRoles: async url => {
                try {
                    console.log(url)
                    const response = await fetch(url + "/api/roles", {
                        method: "GET",
                        headers: {
                            "Content-Type": "aplication/json"
                        }
                    })
                    const data = await response.json();
                    setStore({ roles: data })

                }
                catch (error) { console.log(error) }
            },
            /* isAunthenticated: ()=>{
                if(sessionStorage,getItem("isAuth")){
                    setStore({
                        isAuth: sessionStorage.getItem("isAuth"),
                        currentUser: Json.parse(sessionStorage.getItem("currentUser"))
                    })
                }
            }, */
            setUser: (user) => {
                setStore({
                    user
                })
            }
        }
    }
}
export default getState;