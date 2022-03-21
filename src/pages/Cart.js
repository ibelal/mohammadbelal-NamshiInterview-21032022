import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'


const Cart = () => {
    const items = useSelector(state => state.cart.items)

    return (
        <div>
            <h2>My cart</h2>
            {items.map(item => (
                <CartItem key={item.id} item={{ ...item }} />
            ))}
            <p><strong>Total Price: </strong></p>
        </div>
    )
}

export default Cart