import { useState } from "react";
import { StorageItem } from "../type";

export const useLocalStorage = (keyName:string, defaultValue:StorageItem |null) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
            }
            else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });
    const setValue = (newValue:StorageItem) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {
            console.log(err);
        }
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};

