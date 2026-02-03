/* eslint-disable react/prop-types */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

export const FoodItem = ({ id, name, description, price, gram, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Optimized image with quality and auto-format
  const optimizedImage = image.replace("/upload/", "/upload/q_auto,f_auto,w_400/");

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={optimizedImage}
          alt={name}
          width="300"
          height="200"
          decoding="async"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        {description && description !== name && <p className="food-item-desc">{description}</p>}
        <div className="food-item-price-gram">
          <p className="food-item-price">$ {price}</p>
          {gram && <p className="food-item-gram">{gram}</p>}
        </div>
      </div>
    </div>
  );
};
