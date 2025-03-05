import GridTable from "../grid_table/GridTable";
import loadProductData from "./api/ProductApi";
import ProductCard from "./child_component/ProductCard";

export default function ProductTable() {
    return (
        <GridTable CardComponent={ProductCard} 
                    loadItemApi={loadProductData}/>
    );
}
