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
                        name: "Admin"
                    }]
                }
            },
            
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
                const {apiUrl, user} = getStore();
                const{updateUser} = getActions();
                updateUser(apiUrl, user)

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