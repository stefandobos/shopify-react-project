import { useContext } from "react"
import React from 'react';
import { Container, Anchor, Icon } from 'atomize';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const { openCart } = useContext(ShopContext);

    return (
        <Container d='flex' flexDir='row' p='2rem' justify='space-between' bg='gray300' shadow='2' rounded='sm' >
            <Link to='/'><Icon name="Store" size="30px" /></Link>
            <Anchor onClick={() => openCart()}><Icon name="Bag" size="30px" /></Anchor>
        </Container>
    )
}

export default Navbar;