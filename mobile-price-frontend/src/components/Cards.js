import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/reducers/productSlice";
import MobileCard from "./Card";
import Skeleton from "./Skeleton";

export default function Cards({ url }) {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // setMobiles(res.data)
        dispatch(setProducts(res.data));
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      dispatch(setProducts([]));
    };
  }, []);

  const products = useSelector((state) => state.product.products);
  const brand = useSelector((state) => state.product.brand);
  const price = useSelector((state) => state.product.price);
  let lowerPrice, upperPrice;
  if (price !== 0 && price !== 60000) {
    lowerPrice = price[0];
    upperPrice = price[1];
  }
  const loading = [1, 2, 3, 4, 5, 6];
  return (
    <div className="cards">
      {products != ""
        ? products
            .filter((product) => {
              if ((brand === "") | (brand === "all")) return product;
              else if (
                product.general.brand.toLowerCase() === brand.toLowerCase()
              )
                return product;
            })
            .filter((product) => {
              // console.log(`filter product ${product.price}`)
              let pprice = parseInt(product.price[0].replace(/,/g, ""));
              if (price === 0) return product;
              else if (
                lowerPrice && upperPrice
                  ? pprice >= lowerPrice && pprice <= upperPrice
                  : pprice >= price
              )
                return product;
            })
            .map((product) => (
              <MobileCard
                key={product.id}
                deviceId={product._id}
                img={product.images[0]}
                deviceName={product.deviceName}
                price={product.price[0]}
                ram="6"
                rom="128"
              />
            ))
        : loading.map(() => <Skeleton />)}

      {/* {mobiles!=""?  mobiles.map(mobile => <MobileCard key={mobile.id} deviceId ={mobile._id} img={mobile.images[0]} deviceName={mobile.deviceName} price={mobile.price[0]} ram="6" rom="128"/>):"Data loading"} */}
    </div>
  );
}
