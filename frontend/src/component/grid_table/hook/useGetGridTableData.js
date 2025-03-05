import { useState, useEffect } from 'react';

const useGridTableLoadData = (loadItemApi) => {
    const [items, setItems] = useState([]);

    async function fetchItems() {
        try {
            const result = await loadItemApi()
            //console.log(loadItemApi)
            setItems(result)
        }

        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => { fetchItems()}, [loadItemApi])

    return {items,fetchItems,setItems};
}

export default useGridTableLoadData