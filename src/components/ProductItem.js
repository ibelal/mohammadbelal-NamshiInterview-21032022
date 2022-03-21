import { useDispatch } from 'react-redux'
import { cartAction } from '../store/cart-slice'

const ProductItem = props => {
    const dispatch = useDispatch()  

    const addCartHandler = () => {
        dispatch(cartAction.addItem({
            ...props,
            totalPrice: props.price
        }))
    }
    return (
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                <div className="col-auto d-none d-lg-block m-2">
                    <img src={props.image} width="auto" height="100" />
                </div>
                <div className="col p-2 d-flex flex-column position-static">
                    <h4 className="mb-0">{props.title}</h4>
                    <div className="mb-1 text-muted">{props.category}</div>
                    <p className="card-text mb-auto">{props.description}</p>
                </div>
                <div className="col-auto d-none d-lg-block m-2">
                    <button className='btn btn-sm' onClick={addCartHandler} >Add to Cart</button>
                </div>
            </div>
        </div>

    )
}

export default ProductItem