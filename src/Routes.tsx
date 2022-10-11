import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/Home";
import {CompleteOrderPage} from "./pages/CompleteOrder";
import {Default} from "./layouts/Default";
import {OrderConfirmedPage} from "./pages/OrderConfirmed";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Default/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/completeOrder" element={<CompleteOrderPage/>}/>
                <Route path="/orderConfirmed" element={<OrderConfirmedPage/>}/>
            </Route>
        </Routes>
    )
}