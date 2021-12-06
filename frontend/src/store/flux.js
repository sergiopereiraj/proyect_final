const getState = ({getStore, getActions, setStore})=>{

    return{
        store:{

            email: "",
            password: "",
            email: ""
        },
        actions: {
            onSubmit: data => console.log({...data}),
            onChange: e =>{}
        }
    }
}
export default getState;