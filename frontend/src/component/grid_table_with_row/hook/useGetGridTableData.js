import { useState, useEffect } from 'react';

const useGridTableLoadData = (loadItemApi) => {
    const [items, setItems] = useState([]);

    async function fetchItems() {
        try {
            const result = await loadItemApi()
            setItems(result)
        }

        catch (error) {
            console.error(error)
            
        }

    }
    useEffect(() => { fetchItems()}, [loadItemApi])

    return {items,fetchItems,setItems};
}

export default useGridTableLoadData