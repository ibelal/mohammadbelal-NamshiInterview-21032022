import { useDispatch } from 'react-redux'
import { cartAction } from '../store/cart-slice'

const CartItem = props => {
    const dispatch = useDispatch()

    const addCartHandler = () => {
        dispatch(cartAction.addItem({
            ...props.item
        }))
    }
    const removeCartHandler = (id) => {
        dispatch(cartAction.removeItem(id))
    }
    return (
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                <div className="col p-2 d-flex flex-column position-static">
                    <h6 className="mb-0">{props.item.title}</h6>
                    <p>${props.item.price}</p>
                </div>
                <div className="col-auto d-none d-lg-block m-2">
                    <button className='btn btn-sm' onClick={() => removeCartHandler(props.item.id)} >-</button>
                    <button className='btn btn-sm' onClick={addCartHandler} >+</button>
                    {props.item.totalPrice.toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default CartItem