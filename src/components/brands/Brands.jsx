import { mockDataBrands } from '../../mocks/brands'
import BrandCard from './brandCard/BrandCard'
import './brands.css'

const Brands = () => {
    return (
        <div className="brands_container">
            <h3 className="brands">Бренды</h3>
            <div className="brands_card_container">
                {mockDataBrands.map(({ logo }) => (
                    <BrandCard img={logo} />
                ))}
            </div>
        </div>
    )
}

export default Brands
