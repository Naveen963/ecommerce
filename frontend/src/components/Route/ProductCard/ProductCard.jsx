import React, { useState } from "react";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx"
import { Link } from "react-router-dom";
import { styles } from "../../../styles/styles";
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineStar,
} from "react-icons/ai";

const ProductCard = ({ product }) => {
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const product_name = product.name.replace(/\s+/g, "-");
    return (
        <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
            <div className="flex justify-end"></div>
            <Link to={`/product/${product_name}`}>
                <img
                    src={product.image_Url[0]?.url}
                    alt=""
                    className="w-full h-[170px] object-contain"
                />
            </Link>
            <Link to="/">
                <h5 className={`${styles.shop_name}`}>{product.shop.name}</h5>
            </Link>
            <Link to={`/product/${product_name}`}>
                <h4 className="pb-2 font-[500]">
                    {product.name.length > 40
                        ? product.name.slice(0, 40) + "..."
                        : product.name}
                </h4>
                <div className="flex">
                    {Array.from({ length: 5 }, (v, i) =>
                        i < 4 ? (
                            <AiFillStar
                                className="mr-2 cursor-pointer"
                                color="#F6BA00"
                                size={20}
                            />
                        ) : (
                            <AiOutlineStar
                                className="mr-2 cursor-pointer"
                                color="#F6BA00"
                                size={20}
                            />
                        )
                    )}
                </div>
                <div className="py-2 flex items-center justify-between">
                    <div className="flex">
                        <h5 className={`${styles.productDiscountPrice}`}>
                            {product.price === 0 ? product.prie : product.discount_price}$
                        </h5>
                        <h4 className={`${styles.price}`}>
                            {product.price ? product.price + "$" : null}
                        </h4>
                    </div>
                    <span className="font-[400] text-[17px] text-[#68d284]">
                        {product.total_sell} sold
                    </span>
                </div>
            </Link>
            {/* side options */}
            <div>
                {click ? (
                    <AiFillHeart
                        size={22}
                        className="cursor-pointer absolute right-2 top-5"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                    />
                ) : (
                    <AiOutlineHeart
                        size={22}
                        className="cursor-pointer absolute right-2 top-5"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                    />
                )}
                <AiOutlineEye
                    size={22}
                    className="cursor-pointer absolute right-2 top-14"
                    onClick={() => setOpen(!open)}
                    color="#333"
                    title="Quick view"
                />
                <AiOutlineShoppingCart
                    size={22}
                    className="cursor-pointer absolute right-2 top-24"
                    onClick={() => setOpen(!open)}
                    color="#444"
                    title="Add to cart"
                />
                {
                    open ? (
                        <ProductDetailsCard setOpen={setOpen} product={product} />
                    )
                        : null
                }
            </div>
        </div>
    );
};

export default ProductCard;
