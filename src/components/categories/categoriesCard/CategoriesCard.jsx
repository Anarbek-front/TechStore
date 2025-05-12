import './categriesCard.css'

const CategoriesCard = ({ title, cardImg }) => {
    return (
        <div className="card">
            <div className="img_container">
                <img src={cardImg} alt="cardImg" className="card_img" />
            </div>
            <p className="card_title">{title}</p>
        </div>
    )
}

export default CategoriesCard
