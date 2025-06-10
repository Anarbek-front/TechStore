import { mockDataAdvantages } from '../../mocks/advantages'
import './advantages.css'
import AdvantagesCard from './advantagesCard/AdvantagesCard'

const Advantages = () => {
    return (
        <div>
            <h2 className="our_advantages">Наши преимущества</h2>
            <div className="advantages_container">
                {mockDataAdvantages.map(
                    ({ id, logo, continuationtMainText, mainText }) => (
                        <AdvantagesCard
                            key={id}
                            mainText={mainText}
                            continuationtMainText={continuationtMainText}
                            logo={logo}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Advantages
