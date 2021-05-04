/* eslint-disable import/no-anonymous-default-export */
import { App } from "./pulse"
import cart from "./controllers/cart"

export const API = App.API({
	options: {},
})

export default {
	controllers: {
		cart,
	},
	API,
}
