import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css';
import Nav from 'react-bootstrap/Nav';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (

    <footer className="mt-5 pt-4 h-100 shadow-sm">
      <div className=" p-3" style={{ backgroundColor: '#08151A' }}>
        <Container>
          <Row className='mt-3 gy-3'>
            <Col md={4}>
              <div className="d-flex justify-content-start flex-column align-items-start h-100">
                <h3><strong className='text-white'>Space</strong> <strong style={{color:'crimson'}}>Flight</strong></h3>
                <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, animi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, rem.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex justify-content-evenly align-items-start">
                <div className="d-flex flex-column">
                  <h5 className='text-white border-bottom w-100'>Company</h5>
                  <div className="d-flex justify-content-start flex-column">
                    <Nav.Link href="/Contact" className='text-decoration-none text-secondary'>Contact</Nav.Link>
                    <Nav.Link href="/News" className='text-decoration-none text-secondary'>Articles</Nav.Link>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <h5 className='text-white border-bottom w-100'>Quick links</h5>
                  <div className="d-flex justify-content-start flex-column">
                    <Nav.Link href="/" className='text-decoration-none text-secondary'>Security</Nav.Link>
                    <Nav.Link href="/" className='text-decoration-none text-secondary'>Privacy Policy</Nav.Link>
                  </div>
                </div>

              </div>
            </Col>
            <Col md={3}>
              <div className="">
                <h5 className='text-white border-bottom w-100'>Subscribe</h5>
                <Form className="d-flex mt-3 bg-light justify-content-center align-items-center rounded border-0 border-bottom ">
                  <Form.Control
                    type="search"
                    className="me-2 rounded border-0 text-secondary"
                    aria-label="Search"
                  />
                  <SendIcon style={{color:'#FF5324'}} />
                </Form>
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="TH_socialIcon_container">
                    <Nav.Link href="https://www.instagram.com/" target="_blank">
                      <InstagramIcon className='TH_socialIcon' />
                    </Nav.Link>
                  </div>
                  <div className="TH_socialIcon_container">
                    <Nav.Link href="https://www.linkedin.com/" target="_blank">
                      <LinkedInIcon className='TH_socialIcon' />
                    </Nav.Link>
                  </div>
                  <div className="TH_socialIcon_container">
                    <Nav.Link href="https://www.facebook.com/" target="_blank">
                      <FacebookIcon className='TH_socialIcon' />
                    </Nav.Link>
                  </div>
                  <div className="TH_socialIcon_container">
                    <Nav.Link href="https://twitter.com/" target="_blank">
                      <TwitterIcon className='TH_socialIcon' />
                    </Nav.Link>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className=" h-100 p-1 d-flex justify-content-center  flex-column align-items-center text-center shadow" style={{ backgroundColor: '#0d1e25' }}>
        <small className='text-light fw-bold'>Created by the brilliant minds behind SpaceX</small>
        <small className='text-light fw-bold'>© 2023 | All rights reserved to Space Flight</small>
      </div>
    </footer >
  )
}

export default Footer