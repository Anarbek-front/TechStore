import './brandCard.css'

const BrandCard = ({ img }) => {
    return (
        <div className="logo_container">
            <img src={img} alt="" className="brand_logo" />
        </div>
    )
}

export default BrandCard
