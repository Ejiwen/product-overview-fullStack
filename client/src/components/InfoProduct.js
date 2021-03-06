import React, { useEffect, useState } from 'react';
import product_info from '../data/product_info.js';
import axios from 'axios';

const InfoProduct = ({ productID }) => {
  const [productInfo, setProductInfo] = useState({});
  var arr = [];
  useEffect(() => {
    axios
      .get(`/products/${productID}`)
      .then((res) => {
        setProductInfo({
          category: res.data.category,
          name: res.data.name,
          price: res.data.default_price,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productID]);

  return (
    <div>
      <span>{productInfo.category}</span>
      <h3 style={{ margin: '0px' }}>{productInfo.name}</h3>
      <span>{productInfo.price} $</span>
    </div>
  );
};

export default InfoProduct;
