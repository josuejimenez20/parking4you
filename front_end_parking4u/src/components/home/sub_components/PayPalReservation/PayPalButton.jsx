import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export function PayPalButton({amount, actionEndPayment}) {

    const dispatch = useDispatch();

    const createOrderHandler = (data, actions) => {
        // Set up the transaction
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount
                    }
                }
            ]
        });
    };

    const onApproveHandler = (data, actions) => {

        const ORDER_ID = data.orderID;
        const PAYER_ID = data.payerID;

        // This function captures the funds from the transaction.
        return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            // Mandar a una pestaña que diga que se hizo su pago

            // dispatch(PaymentProductsNotificationUser({
            //     user_id: USER_ID,
            //     user_name: USER_NAME,
            //     user_email: USER_EMAIL,
            //     order_id: ORDER_ID,
            //     payer_id: PAYER_ID,
            //     id_product_information: id_product_information,
            //     name_product: name,
            //     count_products: countProducts,
            //     value_payment: VALUE_PAYMENT
            // }));

            // navigate(`/PaypalPaymentOneProduct/MessageSuccess`);
            // window.location.reload();

            actionEndPayment({ORDER_ID, PAYER_ID})
        });
    };

    return (
        <PayPalScriptProvider
        options={{
            "client-id": "AdKXV0zRUXY_4Qym50Z9PfIaHTSdKB02zVhG-N0bnF18drXCGTc5jeblbWxpCCcuFYGkiyL9VVWVshDC",
            currency: "MXN",
            intent: "capture"
        }}>
        <PayPalButtons
            createOrder={createOrderHandler}
            onApprove={onApproveHandler}
        />
    </PayPalScriptProvider>
    );
};

export default PayPalButton;