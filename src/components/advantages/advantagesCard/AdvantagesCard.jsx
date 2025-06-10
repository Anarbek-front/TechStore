import './advantagesCard.css'

const AdvantagesCard = ({ id, mainText, continuationtMainText, logo }) => {
    return (
        <div className="advantages_card" key={id}>
            <img src={logo} className="advantages_card_img" alt="logo" />
            <div className="advantages_text">
                <span className="main_text">
                    <a href="#">{mainText}</a>
                </span>
                <span className="continuationtMainText">
                    {continuationtMainText}
                </span>
            </div>
        </div>
    )
}

export default AdvantagesCard
