import { useContext } from "react";
import {Container, Navbar, Nav, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar(){
    const {user, logoutUser} = useContext(AuthContext);
    return(
        <Navbar bg="dark" className="mb-4" style={{ height: '3.5 rem'}}>
            <Container>
                <h2>
                    <Link to="/" className="link-light text-decoration-none">Hey Whatsapp</Link>
                </h2>
                <Nav>
                    <Stack direction="horizontal" gap="3">
                        {
                            user && (<>
                                <Link onClick={()=> logoutUser()} to="/login" className="link-light text-decoration-none">Logout</Link>
                            </>)
                        }
                        {!user && (<>
                        <Link to="/login" className="link-light text-decoration-none">Login</Link>
                        <Link to="/register" className="link-light text-decoration-none">Register</Link>
                        </>)}
                        
                    </Stack>
                </Nav>
                {user && <span className="text-warning">Logged in as {user.name}</span>}
                
            </Container>
        </Navbar>
    )
}

export default NavBar;