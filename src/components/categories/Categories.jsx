import { mockDataCategory } from '../../mocks/category'
import CategoriesCard from './categoriesCard/CategoriesCard'
import './categories.css'

const Categories = () => {
    return (
        <div className="category_container">
            <h3 className="title_category">Каталог товаров</h3>
            <div className="card_container">
                {mockDataCategory.map(({ title, cardImg, id }) => (
                    <CategoriesCard title={title} cardImg={cardImg} key={id} />
                ))}
            </div>
        </div>
    )
}

export default Categories
