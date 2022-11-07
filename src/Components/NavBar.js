import React, { useState } from 'react'
import { Navbar, Container, Row, Nav, Form, FormControl } from 'react-bootstrap'

const NavBar = ({ filterbySearch }) => {

    const [searchValue, setSearchValue] = useState('')
    const onSearch = () => {
        filterbySearch(searchValue)
        setSearchValue('')
    }



    return (
        <Row>
            <Navbar bg="dark" expand="lg" variant="dark"  width="100%">
                <Container>
                    <Navbar.Brand href="#">
                        <div className="brand-color"> Restaurant </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search.."
                                className="mx-2"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                            />
                            <button onClick={onSearch} className="btn-search">Search</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

export default NavBar
