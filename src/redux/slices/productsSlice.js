import { createSlice } from "@reduxjs/toolkit";


// type Product = {
// 	id: string,
// 	title: string,
// 	description: string,
// 	status: boolean
// }


// interface ProductSliceState {
// 	items: Product[];
// 	// status: 'loading' | 'success' | 'error';
// }

const initialState = {
	items: [],
	// status: 'loading',
};


const pizzaSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProduct(state, action) {
			state.items.push(action.payload);
		},
		changeStatus(state, action) {
			const { id } = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item) {
				item.status = !item.status;
			}
		}
	}
});

export const { setProduct, changeStatus } = pizzaSlice.actions;

export default pizzaSlice.reducer;