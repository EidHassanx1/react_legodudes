import ProductCategory from "./productCategory";
import ProductPrice from "./productPrice";
import ProductTitle from "./productTitle";
import ShoppingButton from "./shoppingButton";

export default function Product({name, cat, price}){
    return (
        <article className="product-card">
            <ProductTitle name="Dragon Zane" />
            <ProductCategory cat="NinjaGo" />
            <ProductPrice price="89 kr" />
            <ShoppingButton/>
        </article>
    )
}