import Advantages from './components/advantages/Advantages'
import Brands from './components/brands/Brands'
import Categories from './components/categories/Categories'
import Header from './components/header/Header'
import { Slider } from './components/slider/Slider'
import { Footer } from './components/footer/Footer'
import { ProductCard } from './components/UI/productCard/ProductCard'

export const App = () => {
    return (
        <>
            <Header />
            <ProductCard/>
            <div className="container">
                <Slider />
                <Categories />
                <Brands />
                <Advantages />
            </div>
            <Footer />
        </>
    )
}
