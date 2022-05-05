import Flash from "../Components/Flash/Flash";
import Kids from "../Components/Flash/Kids";
import Mens from "../Components/Flash/Mens";
import Home from "../Components/Flash/Home";
import Beauty from "../Components/Flash/Beauty";

import React from "react";

import { Route, Routes } from "react-router-dom";
import CreateAcc from "../Components/Navbar/CreateAcc";
import Navbar from "../Components/Navbar/Navbar";
import SignIn from "../Components/Navbar/SignIn";
import Products from "../Components/InnerPages/ProductPages/Products";
import Modals from "../Components/Navbar/Modals";
import Side from "../Components/Navbar/Auth/Side";
import Description from "../Components/InnerPages/Description/Description";
import Checkout from "../Components/InnerPages/Checkout/Checkout";
import Payment from "../Components/InnerPages/Payment/Payment";
import { RequiredAuth } from "./RequiredAuth";
import Cart from "../Components/Navbar/Auth/Cart";
import Purchase from "../Components/Navbar/Auth/Purchase";
import WishList from "../Components/Navbar/Auth/WishList";
import ShippingAddress from "../Components/Navbar/Auth/ShippingAddress";
import PaymentMethods from "../Components/Navbar/Auth/PaymentMethod";
import Password from "../Components/Navbar/Auth/Password";
import Descpage from "../Components/home/descrip/Descpage";

const MainRoutes = () => {
  return (
    <>
      <Navbar />

      {/* <Checkout/> */}

      <Routes>
        <Route path="checkout" element={<Checkout />} />

        <Route path="payment" element={<Payment />} />

        <Route path="signin" element={<SignIn />} />
        <Route path="createacc" element={<CreateAcc />} />
        <Route
          path="cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />
        <Route
          path="purchase"
          element={
            <RequiredAuth>
              <Purchase />
            </RequiredAuth>
          }
        />
        <Route
          path="wishlist"
          element={
            <RequiredAuth>
              <WishList />
            </RequiredAuth>
          }
        />
        <Route
          path="shippingaddress"
          element={
            <RequiredAuth>
              <ShippingAddress />
            </RequiredAuth>
          }
        />
        <Route
          path="paymentmethods"
          element={
            <RequiredAuth>
              <PaymentMethods />
            </RequiredAuth>
          }
        />

        <Route
          path="password"
          element={
            <RequiredAuth>
              <Password />
            </RequiredAuth>
          }
        />

        <Route path="products/:id" element={<Products />} />
        <Route path="description" element={<Descpage />} />
        <Route path="flash/women" element={<Flash />} />
        <Route path="flash/kids" element={<Kids />} />
        <Route path="flash/mens" element={<Mens />} />
        <Route path="flash/home" element={<Home />} />
        <Route path="flash/beauty" element={<Beauty />} />
      </Routes>
    </>
  );
};
export default MainRoutes;
