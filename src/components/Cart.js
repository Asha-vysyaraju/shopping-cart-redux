import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {useDispatch,useSelector} from "react-redux";
import { REMOVE_FROM_CART,CHANGE_CART_QTY } from '../redux/CartSlice';

const Cart = () => {
    const cartData=useSelector((state)=>state.CartReducer);
    const dispatch=useDispatch()
    
    const [total, setTotal] = useState();
    useEffect(() => {
        setTotal(
            cartData.cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0)
        );
    }, [cartData.cart]);
    const navigate = useNavigate();
    const changeQuantity = (item, newQuantity) => {
        console.log(newQuantity)
        console.log(item)
        dispatch(CHANGE_CART_QTY({ id: item.id, qty: newQuantity }));
      };
    const [open, setOpen] = useState(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    return (
        <>
            {cartData.cart.length === 0 ? (
                <h3 className="empty">
                    <b>Your Cart is Empty...😉</b>
                </h3>
            ) : (
                <div className="d-flex  w-100 h-100">
                    <div className="col-xs-12 col-md-9 mt-4">
                        <ul class="list-group list-group-flush">
                            {cartData.cart.map((item) => (
                                <li class="list-group-item">
                                    <div className="card mb-3">
                                        <div className="row g-0 ">
                                            <div className="col-md-5 d-flex justify-content-center align-items-center">
                                                <img
                                                    src={item.images}
                                                    className="img-fluid product-img"
                                                    alt={item.title}
                                                    style={{ borderRadius: "30px" }}
                                                />
                                            </div>
                                            <div className="col-md-7 ">
                                                <div className="row g-0">
                                                    <div className="col-md">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <h5 className="card-title">{item.title}</h5>
                                                                </div>
                                                                <div className="col">
                                                                    <h5 className="card-title d-flex justify-content-end ">
                                                                        ${item.price}
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-2">
                                                                <div className="col d-flex">
                                                                    <p className="card-text">
                                                                        <b>Brand : </b>
                                                                        {item.brand}
                                                                    </p>
                                                                </div>
                                                                <div className="col d-flex justify-content-end">
                                                                    <h5 className="card-text text-success ">
                                                                        ⭐ {item.rating}
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-2">
                                                                <div className="col d-flex">
                                                                    <p className="card-text">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                                <div className="col d-flex justify-content-end align-items-center">
                                                                    <Button
                                                                        variant="contained"
                                                                        color="error"
                                                                        onClick={() =>
                                                                            dispatch(REMOVE_FROM_CART(item))
                                                                        }
                                                                    >
                                                                        Remove
                                                                    </Button>
                                                                </div>
                                                            </div>

                                                            <div className="row mt-2">
                                                                <div className="col d-flex">
                                                                    <p className="card-text text-danger">
                                                                        In Stock :{item.stock}
                                                                    </p>
                                                                </div>
                                                                <div className="col d-flex align-items-center justify-content-end">
                                                                    <div>
                                                                        <IconButton
                                                                            size="small"
                                                                            color="error"
                                                                            onClick={() =>
                                                                                   
                                                                                 changeQuantity(item, item.qty - 1)
                                                                            }
                                                                        >
                                                                            -
                                                                        </IconButton>
                                                                        <b> {item.qty}</b>
                                                                        <IconButton
                                                                            size="small"
                                                                            color="error"
                                                                            onClick={() =>
                                                                                
                                                                                changeQuantity(item, item.qty + 1)
                                                                            }
                                                                        >
                                                                            +
                                                                        </IconButton>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col"></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-text d-flex align-items-center ">
                                                                    <small className="text-muted d-flex align-items-center">
                                                                        Last updated 10 mins ago
                                                                    </small>
                                                                </div>
                                                                <div className="col"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row g-0 p-4 subtotal">
                                                    <div className="col ">
                                                        <div className="row">
                                                            <div className="card-title col">
                                                                Original Price (1 item) :
                                                            </div>
                                                            <div className="card-title col text-end">
                                                                {item.price}
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="card-title col d-flex align-items-center">
                                                                Sub-Total Amount (Final price * Quantity) : {item.price}*{item.qty}
                                                            </div>
                                                            <div className="card-title col text-end fs-4 fw-normal">
                                                                ${item.price * item.qty}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-xs-12 col-md-3  mt-4  justify-cotent-center align-item-center">
                        <h4 className="title">Total items: {cartData.cart.length} </h4>
                        <h4>Total: ₹{total} </h4>
                        <Button
                            variant="contained"
                            color="error"
                            disabled={cartData.cart.length === 0}
                            onClick={() => setOpen(true)}
                        >
                            Proceed to Checkout
                        </Button>
                        <Modal
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={{ ...style, width: 500 }}>
                                <h2 id="child-modal-title">Ordered Successfully</h2>

                                <Button onClick={() => navigate("/")}>GO TO HOMEPAGE</Button>
                            </Box>
                        </Modal>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
