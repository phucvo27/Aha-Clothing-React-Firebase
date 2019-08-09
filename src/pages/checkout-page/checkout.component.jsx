import React from 'react';
import Navbar from '../../components/Navigation/navigation.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart.selector';
import { removeItem, addItem, decreseItem } from '../../redux/cart/cart.actions'

class CheckOut extends React.Component{

    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h2 className='heading-primary u-text-center' style={{margin: '4rem 0'}}>Check Out</h2>
                
                <table className='mg-bottom-medium'>
                    <thead>
                        <tr>
                        <td>Product</td>
                        <td>Name</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cartItems.length 
                                ? (
                                    this.props.cartItems.map((item, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                <img src={item.imageUrl} alt={item.name}/>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>
                                                <button onClick={()=> this.props.decreseItem(item)}>-</button> 
                                                <span>{item.quantity}</span> 
                                                <button onClick={()=> this.props.addItem(item)}>+</button>
                                            </td>
                                            <td>${item.price}</td>
                                            <td>
                                                <button onClick={() => { this.props.removeItem(item)}}>X</button>
                                            </td>
                                        </tr>
                                    ))
                                )
                                :(<tr id='empty-item'><td> No Item </td></tr>)
                        }
                    </tbody>
                    </table>
                    <h2 className='heading-primary u-text-right' >Total : ${this.props.total}</h2>
            </React.Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemTotal
})

const mapDispatchToProps = dispatch => {
    return {
        removeItem : item => dispatch(removeItem(item)),
        decreseItem : item => dispatch(decreseItem(item)),
        addItem: item => dispatch(addItem(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);

