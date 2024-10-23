import "./product-card.styles.scss"

const ProductCard = ({ product }) => {
    const { name, price, imageurl } = product;
    return (<div className="product-card-container">
        <img src={imageurl} alt={`${name}`} />
        <div className="footer">
            <span className="name"></span>
            <span className="price"></span>

        </div>
        <Button buttonType="inverted">Add to card</Button>
    </div>)
}