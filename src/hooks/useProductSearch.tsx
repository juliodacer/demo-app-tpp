import { useEffect, useState } from 'react';

export const useProductSearch = () => {

    const [isFetching, setIsFetching] = useState(true);

    const loadProducts = () => {
        setTimeout(() => {
            setIsFetching(false);
        }, 500)
    }

    useEffect(() => {
        loadProducts();
    }, [])

    return {
        isFetching,
    }

}
