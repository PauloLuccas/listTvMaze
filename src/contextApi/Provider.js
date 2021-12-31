import React, { createContext, useEffect, useState } from 'react'
import api from '../services/Api';

export const Context = createContext()

export default function Provider({children}) {
    const [listShow, setListShow] = useState([]);

    useEffect(() => {
        api.get("/show")
            .then((response) => {
                setListShow(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [listShow.length === 0])

    return (
        <Context.Provider
            value={{listShow, setListShow}}
        >
            {children}
        </Context.Provider>
    )
}