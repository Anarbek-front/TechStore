import { useState } from 'react'
import { ButtonReusable } from '../button/ButtonReusable'
import './productCard.css'

export const ProductCard = ({
    cardImg,
    productName,
    shortDescription,
    buttonContent,
}) => {
    const [selectedProduct, setSelectedProduct] = useState(false)

    const selectProduct = () => setSelectedProduct((prevState) => !prevState)

    return (
        <div className="card_product">
            <div className="card_img">
                <img src={cardImg} alt="product-img" />
                <i
                    onClick={selectProduct}
                    className={`star ${
                        selectedProduct ? 'far' : 'fas'
                    } fa-star`}
                ></i>
            </div>
            <div className="card_content">
                <h3>{productName}</h3>
                <p>{shortDescription}</p>
                <ButtonReusable variant={'primary'} className="add_to_cart">
                    {buttonContent}
                </ButtonReusable>
            </div>
        </div>
    )
}
