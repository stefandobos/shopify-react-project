import React, { useContext, useEffect }  from 'react'
import { ShopContext } from '../context/ShopContext'
import { Text, Div, Row, Col, Container } from "atomize";
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'


const HomePage = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
    
        };
    }, [fetchAllProducts])

    if (!products) return <Loading />
    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id}>
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p={{ xs:'2px', lg: '6px'}} m={{ xs:'3px', lg: '5px'}} maxH='380px' maxW='215px' >
                                <Div 
                                    h={{ xs:'130px', lg: '300px'}}
                                    w={{ xs:'110px', lg: '200px'}}
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "8px" }}
                                    >
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray600">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomePage