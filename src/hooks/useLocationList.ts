import React, { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { v4 as uuidv4 } from 'uuid';

uuidv4();

interface ListItem {
    id: string;
    title: string;
    value: string;
  }

export const useLocationList = () => {
    const [list, setList] = useState<ListItem[]>([]);
    const {getItem, setItem, removeItem} = useAsyncStorage('locationList');


    useEffect(() => {
        removeItem()
        const init = async () => {
            const storageItems = await getItem()
            if (storageItems) {
                setList(JSON.parse(storageItems))
            }
        }
        init()
    },[])

    const addToList = (item: Omit<ListItem, 'id'>) => {
        const newList = [...list, {...item, id:uuidv4() }]
        setList(newList)
        setItem(JSON.stringify(newList));
    };

    const removeFromList = (item: ListItem) => {
        const newList = [...list]
        const toRemoveIndex = list.findIndex((listElement) => listElement.id === item.id)

        if(toRemoveIndex !== -1){
            newList.splice(toRemoveIndex, 1);
            setList(newList)
            setItem(JSON.stringify(newList));
        }
    }

    return {
        list,
        addToList,
        removeFromList,
    }
}