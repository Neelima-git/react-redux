import React from "react";
import JsonData from "../data/JsonData.json";
import { useDispatch } from "react-redux";
import { incrementCart, decrementCart } from "../redux/reducer/CartReducer";

const Products = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <div className="row">
          {JsonData.products.map((product) => (
            <div className="col" key={product.id}>
              <div
                className="card m-1"
                style={{ width: "18rem", height: "25rem", textAlign: "center" }}
              >
                <img
                  className="card-img-top"
                  src={product.src}
                  alt={product.name}
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>
                  {product.name} | ₹{product.price}
                </p>
                <div className="card-body">
                  <button
                    className="btn btn-primary ml-auto"
                    onClick={() =>
                      dispatch(
                        incrementCart({
                          productName: product.name,
                          productPrice: product.price,
                        })
                      )
                    }
                  >
                    Add
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-primary ml-auto"
                    onClick={() =>
                      dispatch(
                        decrementCart({
                          productName: product.name,
                          productPrice: product.price,
                        })
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
