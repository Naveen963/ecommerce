import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { productData } from "../../../static/data";
import { styles } from "../../../styles/styles";

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d.slice(0, 5));
  }, []);
  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Best Deals</h1>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {data &&
          data.map((val, idx) => <ProductCard product={val} key={idx} />)}
      </div>
    </div>
  );
};

export default BestDeals;
