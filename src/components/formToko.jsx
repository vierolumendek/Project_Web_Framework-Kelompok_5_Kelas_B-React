import { Form, FloatingLabel, InputGroup } from "react-bootstrap";

export default function FormToko(){
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Store Name"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="example store" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">+62</InputGroup.Text>
                <Form.Control
                placeholder="Phone Number"
                aria-label="Phone Number"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    );
}