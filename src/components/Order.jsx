import BrowserProduct from "./BrowserProduct";
import Newnavbar from "./Newnavbar";
import Services from "./Services";

const Order = () => {
    return (
         <>
         <div>
         <Newnavbar></Newnavbar>
         </div>

            <div>
        <BrowserProduct></BrowserProduct>
        </div>
        <div>
            <Services></Services>
        </div>
         </>
    );
};

export default Order;