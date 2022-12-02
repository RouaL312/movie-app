import axios from "axios";
import { Link } from 'react-router-dom';

const PayButton = () => {

  const handleCheckout = () => {
    console.log('helo');
    axios
      .post(`http://localhost:8080/create-checkout-session`, {
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
     <li onClick={() => handleCheckout()}>
    <Link>S'abonner</Link> 
                            </li>
    </>
  );
};

export default PayButton;
