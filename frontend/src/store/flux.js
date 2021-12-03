const getState = ({getStore, getActions, setStore})=>{

    return{
        store:{
            email: "antoniobellom14@gmail.com"
        },
        actions: {
            onSubmit: data => console.log({...data}),
            onChange: e =>{}
        }
    }
}
export default getState;