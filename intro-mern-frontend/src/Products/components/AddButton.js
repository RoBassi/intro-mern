import React from 'react'
import { Container, Section, Button } from 'react-bulma-components';
import PropTypes from "prop-types"

const AddButton = ({ onClick }) => {
    return <Section>
        <Container>
            <div className="is-pulled-right">
                <Button onClick={onClick} color="primary">Add Product</Button>
            </div>
        </Container>
    </Section>
}

AddButton.propTypes = {
    onClick: PropTypes.func.isRequired
}


export default AddButton
