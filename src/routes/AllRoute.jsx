import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute"
import {
  Login,
  Dashboard,
  Product,
  Order,
  SaleHistory,
  BuySale,
  Member,
  Productdetail,
  AddProduct,
  Error,
  Register,
  RegisterPhonenumber,
  RegisterSuccess,
  ProductOrder,
  ProductPay,
  PayChoice,
  Ewallet,
  Paysuccess,
  MemberTable,
  Bonus,
  EwalletWithdraw,
  EwalletMoneyWithdraw,
  EwalletMoneyTransfer,
  Travel,
  TravelDetail,
} from "../pages";
const AllRoute = () => {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/register/otp" element={<RegisterPhonenumber/>}/>
        <Route path="/register/otp/success" element={<RegisterSuccess/>}/>
        ------------------Private Route-----------------
        {/* <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/register/otp" element={<PublicRoute>
          <RegisterPhonenumber/>
        </PublicRoute>} /> */}
       
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PublicRoute>
              <Error />
            </PublicRoute>
          }
        />
        {/* products */}
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/addproduct"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/productdetail"
          element={
            <PrivateRoute>
              <Productdetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/productorder"
          element={
            <PrivateRoute>
              <ProductOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/productpay"
          element={
            <PrivateRoute>
              <ProductPay />
            </PrivateRoute>
          }
        />
        <Route
          path="/paychoice"
          element={
            <PrivateRoute>
              <PayChoice />
            </PrivateRoute>
          }
        />
        <Route
          path="/ewallet"
          element={
            <PrivateRoute>
              <Ewallet />
            </PrivateRoute>
          }
        />
        <Route
          path="/paysuccess"
          element={
            <PrivateRoute>
              <Paysuccess />
            </PrivateRoute>
          }
        />
        {/*-------------------------------------------------------------------- Order */}
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="/buy&sale"
          element={
            <PrivateRoute>
              <BuySale />
            </PrivateRoute>
          }
        />
        <Route
          path="/salehistory"
          element={
            <PrivateRoute>
              <SaleHistory />
            </PrivateRoute>
          }
        />
        {/* ------------------------------ member ------------------------------ */}
        <Route
          path="/member"
          element={
            <PrivateRoute>
              <Member />
            </PrivateRoute>
          }
        />
        <Route
          path="/membertable"
          element={
            <PrivateRoute>
              <MemberTable />
            </PrivateRoute>
          }
        />
        {/* ========================================= bonus ======================================== */}
        <Route
          path="/bonus"
          element={
            <PrivateRoute>
              <Bonus />
            </PrivateRoute>
          }
        />

        {/* ============================================================ ewallet ======================================= */}
        <Route
          path="/ewalletwithdraw"
          element={
            <PrivateRoute>
              <EwalletWithdraw />
            </PrivateRoute>
          }
        />
        <Route
          path="/ewalletmoneywithdraw"
          element={
            <PrivateRoute>
              <EwalletMoneyWithdraw />
            </PrivateRoute>
          }
        />
        <Route
          path="/ewalletmoneyTransfer"
          element={
            <PrivateRoute>
              <EwalletMoneyTransfer />
            </PrivateRoute>
          }
        />
        {/* ================================ travel ==================================== */}
        <Route
          path="/travel"
          element={
            <PrivateRoute>
              <Travel/>
            </PrivateRoute>
          }
        />
        <Route
          path="/traveldetail"
          element={
            <PrivateRoute>
              <TravelDetail/>
            </PrivateRoute>
          }
        />


      </Routes>
    </Router>
  );
};

export default AllRoute;
