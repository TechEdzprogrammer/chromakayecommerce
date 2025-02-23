import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Footer from "../SubComponents/Footer";
import styles from '../stylesheets/productDetails.module.css';
import NavBar from "../SubComponents/NavBar";

function ProductDetails(){
    
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        async function getProductDetails(){
            const keyboardDetails = await fetch(`http://mechanicalkeyboardapi.mooo.com/keyboard_details?id=${id}`);
            const keyboardData = await keyboardDetails.json();
            setProductDetails(keyboardData);
        }

        getProductDetails();

    })
    
    
    return(
        <>
            <NavBar/>
               <section className={styles.productDetailsContainer}>
                    <div className={styles.productDetails}>
                        <div className={styles.productDetailsImg}><img src={productDetails.keyboard_img_url} alt="keyboard image" width={700} /></div>
                        <h2>{productDetails.keyboard_name}</h2>
                        <div className={styles.details}>
                            <h4>Price: ₱{productDetails.keyboard_price}</h4>
                            <h4>Product Rating: {productDetails.keyboard_rating}</h4>
                            <h4>Product Description</h4>
                            <p>{productDetails.keyboard_description}</p>
                        
                        
                            <h4>Technical Specifications</h4>
                            <ul>
                                <li>{productDetails.keyboard_specs_1}</li>
                                <li>{productDetails.keyboard_specs_2}</li>
                                <li>{productDetails.keyboard_specs_3}</li>
                            </ul>
                        </div>

                        <div className={styles.reviews} > 
                            <h5>Product Review{productDetails.keyboard_rating}k reviews</h5>
                            <p>{productDetails.keyboard_review}</p>
                        </div>

                        <div className={styles.button} > 
                                <button className="btn btn-primary">Buy Now</button>
                                <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>
               </section>
            <Footer/>
        </>
    )
}

export default ProductDetails;