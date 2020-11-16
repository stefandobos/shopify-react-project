import { useContext } from "react"
import React from 'react';
import { Div, SideDrawer, Text, Row, Col, Anchor, Icon, Button } from 'atomize';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {

    const {isCartOpen, closeCart, checkout} = useContext(ShopContext);

    return (
        <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
            <Div d='flex' flexDir='column' m={{ b:'4rem' }}>
                <Icon name="Back" size="30px" onClick={closeCart} cursor="pointer" m={{ b:'20px' }} />
                {checkout.lineItems && checkout.lineItems.map(item => (
                    <Row key={item.id} p='5px' w='100%'>
                        <Col>
                            <Div bgImg={item.variant.image.src} bgSize='contain' bgRepeat="no-repeat" bgPos='center center' h='90px' w='90px' />
                        </Col>
                        <Col h='130px'>
                            <Text textSize={{ xs: "caption", md: "body" }}>{item.title}</Text>
                            <Text textSize={{ xs: "caption", md: "body" }} textWeight="500">{item.variant.title}</Text>
                            <Text textSize={{ xs: "caption", md: "body" }} textWeight="800">quantity: {item.quantity}</Text>
                        </Col>
                        <Col>
                            <Text textSize={{ xs: "caption", md: "body" }} textWeight="600">${item.variant.price * item.quantity}</Text>
                        </Col>
                    </Row>
                ))}
                <Anchor href={checkout.webUrl} target='_blank' >
                    <Button
                        bg='info700'
                        hoverBg='info600'
                        color='white'
                        m={{ t:'15px' }}
                        textSize={{ xs: "caption", md: "body" }}
                        suffix={
                            <Icon 
                                name="MasterCard"
                                size="20px"
                                m={{ l:'4px' }}
                            />
                        }
                        cursor='pointer'
                        rounded='md'
                        >
                        Checkout
                    </Button>
                </Anchor>
            </Div>
        </SideDrawer>
    )
}

export default Cart;
