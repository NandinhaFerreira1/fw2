import Footer from "./component/footer";
import Navbar from "./component/navbar";
import {Container, Row, Col} from 'react-bootstrap';
export default function Index() {
  return <>
    <Menu />
    <Container>
      <Row>
        <Col className="grad">1 of 2</Col>
        <Col className="grad1">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-primary">1 of 3</Col>
        <Col className="bg-warning">2 of 3</Col>
        <Col className="bg-danger">3 of 3</Col>
      </Row>
    </Container>
    <Footer />

  </>;

}
