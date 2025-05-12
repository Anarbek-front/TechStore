import { mockDataAdvantages } from '../../mocks/advantages'
import './advantages.css'
import AdvantagesCard from './advantagesCard/AdvantagesCard'

const Advantages = () => {
    return (
        <div>
            {mockDataAdvantages.map(({ id, logo, msg }) => (
                <AdvantagesCard key={id} msg={msg} logo={logo} />
            ))}
        </div>
    )
}

export default Advantages
