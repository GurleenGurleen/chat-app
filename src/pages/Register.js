import {useContext} from "react";
import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap"
import { AuthContext } from "../context/AuthContext";

function Register () {

    const {registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext)

    return(
        <>
            <Form onSubmit={registerUser}>
                <Row style={{height: "100vh", justifyContent: "center", paddingTop: "10%"}}>
                    <Col xs={10}>
                        <Stack gap={3}>
                            <h2>Register</h2>
                            <Form.Control type="text" placeholder="Name" onChange={(event)=>updateRegisterInfo({...registerInfo, name: event.target.value})}/>
                            <Form.Control type="email" placeholder="Email" onChange={(event)=>updateRegisterInfo({...registerInfo, email: event.target.value})}/>
                            <Form.Control type="password" placeholder="Password" onChange={(event)=>updateRegisterInfo({...registerInfo, password: event.target.value})}/>
                            
                            <Button variant="primary" type='submnit'>
                            {isRegisterLoading? "Loading":"Register"}
                            </Button>

                            {registerError?.error && (<Alert variant="danger"><p>{registerError?.message}</p></Alert>)}
                        
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Register;