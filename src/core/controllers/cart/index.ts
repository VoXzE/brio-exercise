import { App } from "../../pulse"
import * as state from "./state"
import * as actions from "./actions"

const cart = App.Controller({
	state,
	actions,
})

export default cart
