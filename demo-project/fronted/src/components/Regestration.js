import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Nav from './Navbar'

function Regestration() {
    let navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    React.useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })
    const singup = async () => {
        let result = await fetch('http://localhost:4000/singup', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        // console.log(result);
        localStorage.setItem('user', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate('/');
    };
    return (
        <>
            <Nav />
            <Container className="p-4">
                <h1 className="text-center">Regestartion Here</h1>
                <Row className="justify-content-center">
                    <Col className="col-md-6">
                        <Form onSubmit={handleSubmit(singup)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} onChange={(e) => setEmail(e.target.value)} />
                                {errors.email && errors.email.type === "required" && (
                                    <p className="text-danger">Email is required.</p>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <p className="text-danger">Email is not valid.</p>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" {...register('password', { required: true, minLength: 6 })} onChange={(e) => setPassword(e.target.value)} />
                                {errors.password && errors.password.type === "required" && (
                                    <p className="text-danger">Password is required.</p>
                                )}
                                {errors.password && errors.password.type === "minLength" && (
                                    <p className="text-danger">Password minlength is 6</p>
                                )}
                            </Form.Group>
                            <Button type="submit" variant="primary" onClick={() => singup()}>
                                Sing IN
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Regestration