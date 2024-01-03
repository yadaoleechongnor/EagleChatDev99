import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
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
        <Route
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
        </PublicRoute>} />
       
        <Route
          path="/"
          element={
            <PublicRoute>
              <Dashboard />
            </PublicRoute>
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
            <PublicRoute>
              <Product />
            </PublicRoute>
          }
        />
        <Route
          path="/addproduct"
          element={
            <PublicRoute>
              <AddProduct />
            </PublicRoute>
          }
        />
        <Route
          path="/productdetail"
          element={
            <PublicRoute>
              <Productdetail />
            </PublicRoute>
          }
        />
        <Route
          path="/productorder"
          element={
            <PublicRoute>
              <ProductOrder />
            </PublicRoute>
          }
        />
        <Route
          path="/productpay"
          element={
            <PublicRoute>
              <ProductPay />
            </PublicRoute>
          }
        />
        <Route
          path="/paychoice"
          element={
            <PublicRoute>
              <PayChoice />
            </PublicRoute>
          }
        />
        <Route
          path="/ewallet"
          element={
            <PublicRoute>
              <Ewallet />
            </PublicRoute>
          }
        />
        <Route
          path="/paysuccess"
          element={
            <PublicRoute>
              <Paysuccess />
            </PublicRoute>
          }
        />
        {/*-------------------------------------------------------------------- Order */}
        <Route
          path="/order"
          element={
            <PublicRoute>
              <Order />
            </PublicRoute>
          }
        />
        <Route
          path="/buy&sale"
          element={
            <PublicRoute>
              <BuySale />
            </PublicRoute>
          }
        />
        <Route
          path="/salehistory"
          element={
            <PublicRoute>
              <SaleHistory />
            </PublicRoute>
          }
        />
        {/* ------------------------------ member ------------------------------ */}
        <Route
          path="/member"
          element={
            <PublicRoute>
              <Member />
            </PublicRoute>
          }
        />
        <Route
          path="/membertable"
          element={
            <PublicRoute>
              <MemberTable />
            </PublicRoute>
          }
        />
        {/* ========================================= bonus ======================================== */}
        <Route
          path="/bonus"
          element={
            <PublicRoute>
              <Bonus />
            </PublicRoute>
          }
        />

        {/* ============================================================ ewallet ======================================= */}
        <Route
          path="/ewalletwithdraw"
          element={
            <PublicRoute>
              <EwalletWithdraw />
            </PublicRoute>
          }
        />
        <Route
          path="/ewalletmoneywithdraw"
          element={
            <PublicRoute>
              <EwalletMoneyWithdraw />
            </PublicRoute>
          }
        />
        <Route
          path="/ewalletmoneyTransfer"
          element={
            <PublicRoute>
              <EwalletMoneyTransfer />
            </PublicRoute>
          }
        />
        {/* ================================ travel ==================================== */}
        <Route
          path="/travel"
          element={
            <PublicRoute>
              <Travel/>
            </PublicRoute>
          }
        />
        <Route
          path="/traveldetail"
          element={
            <PublicRoute>
              <TravelDetail/>
            </PublicRoute>
          }
        />


      </Routes>
    </Router>
  );
};

export default AllRoute;
