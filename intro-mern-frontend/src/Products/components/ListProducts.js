import React from 'react'
import { Card, Columns, Content, Heading } from 'react-bulma-components'
import PropTypes from "prop-types"
import Header from './Header'

const ListProducts = ({ products }) => {
    return (<Columns>
        {products.map(
            ({ imgUrl, _id, name, description, unitaryPrice, size }) =>
            (<Columns.Column size={3} key={_id}>
                <Card>
                    <Card.Image size="16by9" src={imgUrl} />
                    <Card.Content>
                        <Content>
                            <Heading>{name}</Heading>
                            <Heading subtitle size={6}>Price: {unitaryPrice}</Heading>
                            <Heading subtitle size={6}>Count: {size}</Heading>
                            <p>
                                {description}
                            </p>
                            <button>delete</button>
                            <button>update</button>
                        </Content>
                    </Card.Content>
                </Card>
            </Columns.Column>)
        )}
    </Columns>)
}

ListProducts.propTypes = {
    products: PropTypes.array.isRequired
}


export default ListProducts