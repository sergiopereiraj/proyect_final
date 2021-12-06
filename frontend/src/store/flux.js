const getState = ({getStore, getActions, setStore})=>{

    return{
        store:{
            email: "",
            password: "",
        },
        actions: {
            onSubmit: data => console.log({...data}),
            onChange: e =>{}
        }
    }
}
export default getState;