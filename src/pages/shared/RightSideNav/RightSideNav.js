import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousal from "../BrandCarousal/BrandCarousal";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const {providerLogin} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
    .then(res => {
      const user = res.user
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleLogin} className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with GitHub
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
          <ListGroup.Item><FaWhatsapp/> WhatsApp</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaTwitch/> Twitch</ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <BrandCarousal></BrandCarousal>
      </div>
    </div>
  );
};

export default RightSideNav;
