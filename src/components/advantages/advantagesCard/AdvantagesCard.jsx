import './advantagesCard.css'

const AdvantagesCard = ({ id, msg, logo }) => {
    return (
        <div className="advantages_card" key={id}>
            <img src={logo} alt="logo" />
            <p>{msg}</p>
        </div>
    )
}

export default AdvantagesCard
