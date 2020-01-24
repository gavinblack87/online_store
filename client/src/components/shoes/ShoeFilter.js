import React from 'react'
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import '../../styles/shoeFilter.css'


const ShoeFilter = (props) => {
    return(
        <ButtonToolbar className="d-flex justify-content-center">
                <DropdownButton
                    title="Brand"
                    variant="white"
                    id={`dropdown-split-variants-brand`}
                    key="brand"
                    
                >
                    <Dropdown.Item eventKey="1">Nike</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Adidas</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Puma</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Converse</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Vans</Dropdown.Item>
                    <Dropdown.Item eventKey="6">Dr Martins</Dropdown.Item>
                    <Dropdown.Item eventKey="7">North Face</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    title="Size"
                    variant="white"
                    id={`dropdown-split-variants-size`}
                    key="Size"
                >
                    <Dropdown.Item eventKey="1">6</Dropdown.Item>
                    <Dropdown.Item eventKey="2">7</Dropdown.Item>
                    <Dropdown.Item eventKey="3">8</Dropdown.Item>
                    <Dropdown.Item eventKey="4">9</Dropdown.Item>
                    <Dropdown.Item eventKey="5">10</Dropdown.Item>
                    <Dropdown.Item eventKey="6">11</Dropdown.Item>
                    <Dropdown.Item eventKey="7">12</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    title="Category"
                    variant="white"
                    id={`dropdown-split-variants-category`}
                    key="category"
                >
                    <Dropdown.Item eventKey="1">Shoes</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Boots</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Sandals</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Trainers</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Slippers</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    title="Price"
                    variant="white"
                    id={`dropdown-split-variants-price`}
                    key="price"
                >
                    <Dropdown.Item eventKey="1">£0-10</Dropdown.Item>
                    <Dropdown.Item eventKey="2">£10-20</Dropdown.Item>
                    <Dropdown.Item eventKey="3">£20-30</Dropdown.Item>
                    <Dropdown.Item eventKey="4">£30-40</Dropdown.Item>
                    <Dropdown.Item eventKey="5">£40-50</Dropdown.Item>
                    <Dropdown.Item eventKey="6">£50-60</Dropdown.Item>
                    <Dropdown.Item eventKey="7">North Face</Dropdown.Item>
                </DropdownButton>
        </ButtonToolbar>
    )
}

export default ShoeFilter;