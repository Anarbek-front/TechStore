import Advantages from './components/advantages/Advantages'
import Brands from './components/brands/Brands'
import Categories from './components/categories/Categories'
import Header from './components/header/Header'
import { Slider } from './components/slider/Slider'

export const App = () => {
    return (
        <div className="container">
            <Header />
            <Slider />
            <Categories />
            <Brands />
            <Advantages />
        </div>
    )
}
