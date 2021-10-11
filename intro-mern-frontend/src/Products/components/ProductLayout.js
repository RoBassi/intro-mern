import React, { useState, useEffect } from 'react'
import Header from './Header'
import AddButton from './AddButton';
import ListProducts from './ListProducts';
import ProductForm from './Form';
import { saveProduct, getProducts } from '../services';
import { Modal, Container } from 'react-bulma-components'
import Loading from './Loading';

const ProductLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    async function LoadProducts() {
        const response = await getProducts()
        if (response.status === 200) {
            setProducts(response.data.products)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        LoadProducts()
    }, [])

    const handleSubmit = async (data) => {
        await saveProduct(data)
        await LoadProducts()
        setIsModalOpen(false)
    }

    return (
        <Container>
            <Header title="My Products"></Header>
            <AddButton onClick={() => setIsModalOpen(true)}></AddButton>
            {
                isLoading && <Loading />
            }
            {
                !isLoading && (products.length === 0)
                && (
                    <h3 className="title has-text-centered">
                        You don't have products.
                    </h3>
                )
            }
            {
                !isLoading && (products.length > 0)
                && (
                    <ListProducts products={products}/>
                )
            }

            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header showClose={false}>
                        <Modal.Card.Title>Add Product</Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <ProductForm handleSubmit={handleSubmit}></ProductForm>
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </Container>
    )
}

export default ProductLayout