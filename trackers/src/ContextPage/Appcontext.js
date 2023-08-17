import { createContext, useReducer } from "react";
const AppReducer=(state,action)=>{
    switch(action.type)
    {
        default:
            return state;
    }
}
const initialState=
{
    budget:3000,
    expenses:[
        {id:12,name:'shopping',cost:150},
        {id:13,name:'Holiday',cost:100}
    ]
}

export const Appcontext=createContext();

export const AppProvider=(props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    return(<Appcontext.Provider value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
    }}>
        {props.children}
    </Appcontext.Provider>)
}