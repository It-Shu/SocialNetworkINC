import React from "react";
import {ReducersStoreType} from "./redux/redux-store";


const StoreContext = React.createContext({} as ReducersStoreType);

type ProviderPropsType = {
    store: ReducersStoreType
    children:  React.ReactNode
}


export const Provider = (props: ProviderPropsType) => {
    return  <StoreContext.Provider value={props.store}>
        {props.children}
        </StoreContext.Provider>
}


export default StoreContext;