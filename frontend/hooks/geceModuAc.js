import { useState } from "react";
import {localStorageKullan} from "./localStorageKullan";

export function geceModuAc(durum) {
    //const [geceModu, setGeceModu] = useState(durum);
    const [storage, setStorage] = localStorageKullan("geceModu", durum);

    const handleChanges = (uValue) => {
        setStorage(uValue);
    }
    
    return [storage, handleChanges];
}