import { createSlice } from '@reduxjs/toolkit';
import { removeProductCount, updateProductCount } from '../../util/mainUtil';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const id = action.payload.id;
            updateProductCount(state, id)
        },
        removeItem: (state, action) => {
            const id = action.payload.id;
            removeProductCount(state, id);
        },
    },
});
export const getItemById = (state, id) => {
    return state.cart.items.find(item => item.id === id) || null
};

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;