import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '100px'
            }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '20px' }}>Your Cart is Empty</h2>
                <Link to="/" className="btn">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
            <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                marginBottom: '60px',
                borderBottom: '1px solid #333',
                paddingBottom: '20px'
            }}>Shopping Cart</h1>

            <div className="cart-layout" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>
                {/* Cart Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {cart.map((item) => (
                        <div key={`${item.id}-${item.size}`} style={{
                            display: 'flex',
                            gap: '20px',
                            background: '#111',
                            padding: '20px',
                            borderRadius: '4px'
                        }}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: '100px', height: '120px', objectFit: 'cover' }}
                            />

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>{item.name}</h3>
                                    <button
                                        onClick={() => removeFromCart(item.id, item.size)}
                                        style={{ background: 'transparent', border: 'none', color: '#666', cursor: 'pointer' }}
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                <p style={{ color: '#888', marginBottom: '5px' }}>Size: {item.size}</p>
                                <p style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>$ {item.price.toLocaleString('es-CO')}</p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px' }}>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.size, -1)}
                                        style={{
                                            background: '#222',
                                            border: 'none',
                                            color: 'white',
                                            width: '30px',
                                            height: '30px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.size, 1)}
                                        style={{
                                            background: '#222',
                                            border: 'none',
                                            color: 'white',
                                            width: '30px',
                                            height: '30px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div style={{
                    background: '#111',
                    padding: '40px',
                    height: 'fit-content',
                    position: 'sticky',
                    top: '120px'
                }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '30px' }}>Summary</h3>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#888' }}>
                        <span>Subtotal</span>
                        <span>$ {cartTotal.toLocaleString('es-CO')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', color: '#888' }}>
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '40px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        borderTop: '1px solid #333',
                        paddingTop: '20px'
                    }}>
                        <span>Total</span>
                        <span style={{ color: 'var(--color-accent)' }}>$ {cartTotal.toLocaleString('es-CO')}</span>
                    </div>

                    <button style={{
                        width: '100%',
                        padding: '15px',
                        background: 'var(--color-accent)',
                        color: 'black',
                        border: 'none',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        marginBottom: '20px'
                    }}>
                        Checkout
                    </button>

                    <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#888', fontSize: '0.9rem' }}>
                        <ArrowLeft size={16} /> Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
