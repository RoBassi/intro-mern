import React, { useState, useRef } from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input, Help} = BulmaForm
//https://react-bulma.dev/en/storybook
const ProductForm = ({ handleSubmit }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        size: '',
        unitaryPrice: '',
        description: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }

    const inputFileRef = useRef()

    const handleProductFormSubmit = (event) => {
        event.preventDefault()
        handleSubmit({ ...formValues, image: inputFileRef.current.files[0] })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Label>Product Name</Label>
                    <Control>
                        <Input
                            color="success"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </Control>
                    <Help color="success">Name of the product</Help>
                </Field>
                <Field>
                    <Label>Count</Label>
                    <Control>
                        <Input
                            color="success"
                            type="number"
                            name="size"
                            value={formValues.size}
                            onChange={handleChange}
                        />
                    </Control>
                    <Help color="success">Amount of products</Help>
                </Field>
                <Field>
                    <Label>Unitary Price</Label>
                    <Control>
                        <Input
                            color="success"
                            type="number"
                            name="unitaryPrice"
                            value={formValues.unitaryPrice}
                            onChange={handleChange}
                        />
                    </Control>
                    <Help color="success">Amount of money per product</Help>
                </Field>
                <Field>
                    <Label>Description</Label>
                    <Control>
                        <Input
                            color="success"
                            name="description"
                            value={formValues.description}
                            onChange={handleChange}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label>Image</Label>
                    <Control>
                        <input
                            type="file"
                            ref={inputFileRef}
                        />
                    </Control>
                </Field>
                <Button color="primary" onClick={handleProductFormSubmit}>
                    Save
                </Button>
            </form>
        </>
    )
}

export default ProductForm