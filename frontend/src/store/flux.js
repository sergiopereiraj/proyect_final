const getState = ({getStore, getActions, setStore})=>{

    return{
        store:{
            email: ""
        },
        actions: {
            onSubmit: data => console.log({...data}),
            onChange: e =>{}
        }
    }
}
export default getState;