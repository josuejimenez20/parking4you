import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { UsersReducer } from '../slices/users/indexUser';
// import { ProductsReducer } from '../slices/managmentProducts/products';
// import { ShoppingCartSliceReducer } from '../slices/managmentProducts/shoppingCart';

// import { ProductsManagmentReducer } from '../slices/managmentProducts';

// Te falta acceder al reducer padre te los productos
// El index que esta en products managment

const combineReducer = combineReducers({
    users: UsersReducer,
    // products: ProductsReducer,
    // shopping_cart: ShoppingCartSliceReducer,
    // products: ProductsManagmentReducer, Asi debe de ser
});

const rootReducer = (state, action) => {
    return combineReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer,
})