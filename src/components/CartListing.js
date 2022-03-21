import { useSelector, useDispatch } from 'react-redux'
import { cartAction } from '../store/cart-slice'

const CartListing = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const addCartHandler = item => {
        dispatch(cartAction.addItem({
            ...item
        }))
    }
    const removeCartHandler = (id) => {
        dispatch(cartAction.removeItem(id))
    }
    return (
        <div>

            {cart.items && cart.items.length > 0 && cart.items.map(item =>
                <div className="card mb-4 rounded-3 shadow-sm" key={item.id}>
                    <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                        <div className="col-auto d-none d-lg-block m-2">
                            <img src={item.image} width="auto" height="100" />
                        </div>
                        <div className="col p-2 d-flex flex-column position-static">
                            <h4 className="mb-0">{item.title}</h4>
                            <div className="mb-1 text-muted">{item.category}</div>
                            <p className="card-text mb-auto">{item.description}</p>
                        </div>
                        <div className="col-auto d-none d-lg-block m-2">
                            <button className='btn btn-sm' onClick={() => removeCartHandler(item.id)} >-</button>
                            <button className='btn btn-sm' onClick={() => addCartHandler(item)} >+</button>
                            {item.totalPrice.toFixed(2)}
                        </div>
                    </div>
                </div>
            )
            }
            {cart && cart.items.length === 0 && <p>No cart item</p>}
        </div >
    )
}

export default CartListing