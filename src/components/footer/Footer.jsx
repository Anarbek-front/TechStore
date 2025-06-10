import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <section className="footer_section">
                    <h3>Связь с нами</h3>
                    <ul>
                        <li>O!: +996 000 000000</li>
                        <li>Beeline: +996 000 000000</li>
                        <li>Mega: +996 000 000000</li>
                    </ul>
                </section>
                <section className="footer_section">
                    <h3>Товары</h3>
                    <ul>
                        <li>
                            <a href="#">Iphone</a>
                        </li>
                        <li>
                            <a href="#">Mac</a>
                        </li>
                        <li>
                            <a href="#">Ipad</a>
                        </li>
                        <li>
                            <a href="#">Watch</a>
                        </li>
                        <li>
                            <a href="#">AirPods</a>
                        </li>
                        <li>
                            <a href="#">Аксессуры</a>
                        </li>
                        <li>
                            <a href="#">Аудио</a>
                        </li>
                        <li>
                            <a href="#">Гаджеты</a>
                        </li>
                    </ul>
                </section>
                <section className="footer_section">
                    <h3>Бренды</h3>
                    <ul>
                        <li>
                            <a href="#">Apple</a>
                        </li>
                        <li>
                            <a href="#">MI</a>
                        </li>
                        <li>
                            <a href="#">Oppo</a>
                        </li>
                        <li>
                            <a href="#">Beats</a>
                        </li>
                        <li>
                            <a href="#">JBL</a>
                        </li>
                    </ul>
                </section>
                <section className="footer_section">
                    <h3>Информация</h3>
                    <ul>
                        <li>
                            <a href="#">О магазине</a>
                        </li>
                        <li>
                            <a href="#">Товары в кредит</a>
                        </li>
                        <li>
                            <a href="#">Trade-in</a>
                        </li>
                        <li>
                            <a href="#">Гарантия</a>
                        </li>
                        <li>
                            <a href="#">Доставка и оплата</a>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="footer_bottom">
                <p>&copy; 2025 Моя Компания. Все права защищены.</p>
            </div>
        </footer>
    )
}
