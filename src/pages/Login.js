import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap"

function Login(){
    return(
        <>
            <Form>
                <Row style={{height: "100vh", justifyContent: "center", paddingTop: "10%"}}>
                    <Col xs={10}>
                        <Stack gap={3}>
                            <h2>Login</h2>
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Control type="password" placeholder="Password" />
                            <Button variant="primary" type='submnit'>
                                Login
                            </Button>
                            <Alert variant="danger"><p>An error Occured</p></Alert>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Login;