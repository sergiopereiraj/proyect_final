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
                        name: "Admin"
                    }]
                }
            },
            
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

                    });
                    //console.log(body);
                    const response = await fetch(store.apiUrl + "/api/register",{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json"

                        },
                        body : body


                        
                    })
                    const data = await response.json();
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            },
            loginUser: async user_data => {
                try {
                    console.log(user_data)
                    const store = getStore()
                    const response = await fetch(store.apiUrl + "/api/login",{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json"

                        },
                        body :JSON.stringify({
                            email: user_data.email,
                            password: user_data.password,
                        })


                        
                    })
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
            getUserById: async (url,id) => {
                try {
                    const response = await fetch(url + "/api/users" +id);
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
                    const response = await fetch(url + "/api/users" + user.id, {
                        method: 'PUT',
                        body: JSON.stringify(user),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (!response.ok) throw new Error("Error al consultar el usuarios")
                    const data = await response.json();

                    setStore({
                        user: data
                    })
                } catch (error) {
                    console.log(error)
                }

            },
            handleChangeUser: e => {
                const {user} = getStore();
             let profile = {
                 ...user.profile,
                 [e.target.id]: e.target.value
             };
                setStore({
                    user: {...user, profile: profile}
                })
            },
            handleSubmitUser: e =>{
                e.preventDefault();
                const {apiURL, user} = getStore();
                const{updateUser} = getActions();
                updateUser(apiURL, user)

            },
            setUser: (user) => {
                setStore({
                    user
                })
            }
        }
    }
}
export default getState;