import { addToCart } from "../features/productSlice";
import { useAppDispatch } from "../hooks/hooks";
import {Button} from "react-bootstrap";

interface IProps {
    image: string;
    title: string;
    price: number;
    description: string;
    rating: {
        rate:number;
        count:number;
    }
  }
  
  export default function Product(props: IProps) {
    const { image, title, price, rating, description } = props;
    const product = props;
    const dispatch = useAppDispatch();


    const handleAddProduct = () => {
        dispatch(addToCart(product))
    }


  
    return (
      <div>
        <section className="Detail">
          <article className="Detail_thumbnail">
            <img style={{ maxWidth: "10%" }} src={image} />
          </article>
          <article className="Detail_content">
            <h2>{title}</h2>
          </article>
          <article className="Detail_info">
            <span className="Detail_price">${price}</span>
       
          </article>
          <article className="Detail_info">
            
            <span className="Detail_rate">{rating.rate}</span>
          </article>
          <article className="Detail_description">
            <p>{description}</p>
          </article>
          <Button onClick = {handleAddProduct}>Add Product to Cart</Button>
        </section>
      </div>
    );
  }