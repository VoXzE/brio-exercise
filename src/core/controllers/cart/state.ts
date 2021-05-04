import { CartItem } from "../../../types"
import { App } from "../../pulse"

export const cart = App.State<CartItem[]>([]).persist("CART_ITEMS")
export const showCart = App.State<boolean>(false)