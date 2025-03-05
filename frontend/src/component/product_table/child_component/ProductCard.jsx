const ProductCard = ({ index, item }) => {
    return (
        <div key={index} 
            className="
                border p-4 m-1 rounded shadow
                hover:border-blue-500
            ">

            <h2 className="text-lg font-bold">{item.name}</h2>
            
            <p>Price: {item.price}</p>
        </div>
    )
}

export default ProductCard
