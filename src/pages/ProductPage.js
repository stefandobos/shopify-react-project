import { useContext, useEffect } from "react"
import React from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { Text, Div, Button, Row, Col, Container } from 'atomize'
import Loading from '../components/Loading'

const ProductPage = () => {

    let { id } = useParams();
    const {fetchProductWithId, addItemToCheckout, product} = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return () => {
            
        }
    }, [ fetchProductWithId, id ])

    if(!product.title) return <Loading />

    return (
        <Container>
            <Row align={{ xs: "flex", lg: "center" }}>
                <Col>
                    <Div bgImg={product.images[0].src} bgSize='contain' bgRepeat="no-repeat" bgPos='center center' w={{ xs:'300px', lg: '400px'}} h={{ xs:'300px', lg: '500px'}} m={{ xs:'8px', lg: '10px'}} /> 
                </Col>
                <Col>
                    <Text textSize="heading">{product.title}</Text>
                    <Text textSize="subheader">${product.variants[0].price}</Text>
                    <Text tag="p" textSize="paragraph" textColor="gray900" textWeight="400">{product.description}</Text>
                    <Button
                        m='6px'
                        onClick={() => {
                        addItemToCheckout(product.variants[0].id, 1)
                        }}>
                            Add To Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage;
