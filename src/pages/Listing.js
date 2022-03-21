import { useEffect, useState } from 'react'

import ProductItem from '../components/ProductItem'

const Listing = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setItems(data)
            setIsLoading(false)
        }
        fetchProducts()
    }, [])

    let content
    if (items.length === 0 && isLoading) {
        content = <p>Loading...</p>
    }
    if (items.length > 0) {
        content = items.map(item => (
            <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
            />
        ))
    }

    if (items.length === 0 && !isLoading) {
        content = <p>No product found</p>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Listing