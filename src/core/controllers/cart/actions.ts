// import core from "../../index"

import core from "../.."
import { ProductInfo } from "../../../types";

export const addCartItem = async (item: ProductInfo, quantity: number) => {
	if (quantity < 1) {
		return console.log("Quantity must be more than 1");
	}

	const newArr = core.controllers.cart.state.cart.value;
	const existsIndex = newArr.findIndex(e => e.productId === item.id);

	if (existsIndex === -1) {
		newArr.push({ price: item.price, quantity, productId: item.id, image: item.image });
	}  else {
		newArr[existsIndex].quantity += quantity;
	}
	
	core.controllers.cart.state.cart.set(newArr)
	console.log("Added item to cart!")
}
