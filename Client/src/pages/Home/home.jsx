import Category from "../../subComponents/Home/category";
import Crousel from "../../subComponents/Home/crousel";
import Customersay from "../../subComponents/Home/customersay";
import Productlist from "../../subComponents/Home/Productlist";

const Home = () => {
  return (
    <>
      <Crousel />
      <Category />
      <Productlist />
      <Customersay />
    </>
  );
};

export default Home;
