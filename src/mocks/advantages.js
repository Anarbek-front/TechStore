import tradeIn from '../assets/advantagesLogo/pluses_1.png'
import bankСard from '../assets/advantagesLogo/pluses_2.png'
import car from '../assets/advantagesLogo/pluses_3.png'
import warranty from '../assets/advantagesLogo/pluses_4.png'

export const mockDataAdvantages = [
    {
        id: Math.random().toString(),
        msg: 'Трейд-ин ваших устройств на новые. Посчитай стоимость',
        logo: tradeIn,
    },
    {
        id: Math.random().toString(),
        msg: 'Рассрочка до 100 000 сом за 30 минут на все товары',
        logo: bankСard,
    },
    {
        id: Math.random().toString(),
        msg: 'Доставка по всему Кыргызстану, по Бишкеку от 2 часов',
        logo: car,
    },
    {
        id: Math.random().toString(),
        msg: 'Официальная гарантия от официального реселлера Apple и Garmin',
        logo: warranty,
    },
]
