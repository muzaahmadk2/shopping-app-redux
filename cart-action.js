import { cartAction } from "./cartSlice";
import { uiAction } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://expense-36902-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("fetch data failed..!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error....!",
          message: "Send Cart Data Failed..!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending....!",
        message: "Sending Cart Data..!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://expense-36902-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed..!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success....!",
          message: "Send Cart Data Successfully..!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error....!",
          message: "Send Cart Data Failed..!",
        })
      );
    }
  };
};
