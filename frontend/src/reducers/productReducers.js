import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  LIST_PRODUCT_DETAIL_REQUEST,
  LIST_PRODUCT_DETAIL_SUCCESS,
  LIST_PRODUCT_DETAIL_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        // products: action.payload.products,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// product detail reducer
export const listProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case LIST_PRODUCT_DETAIL_REQUEST:
      return { loading: true, product: {} };
    case LIST_PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        // products: action.payload.products,
        product: action.payload,
      };
    case LIST_PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
