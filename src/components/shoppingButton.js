export default function shoppingButton(){

    const handleShopping = () => {
        console.log("du har shoppet!!")
    }
    return <button class="shopping-btn" onClick={handleShopping}>Legg i Handlekurven</button>
}