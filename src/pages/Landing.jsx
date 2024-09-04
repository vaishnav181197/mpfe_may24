import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className="container-fluid mb-5 d-flex align-items-center" style={{height:'80vh'}}>
        <Row>
          <Col className='p-5' sm={12} md={6}>
            <h2>
              <i className="fa-solid fa-upload" style={{ color: "#FFD43B" }}></i>{' '}
              Media Player 2024
            </h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur rerum corporis! Maxime, provident. Consectetur fuga dolor corrupti vero voluptatibus hic, nihil explicabo! Tempore adipisci nihil facilis, quo deleniti in!</p>
            <div className='d-grid'>
              <Link to={'/log'} className='btn btn-success'>Let's Go</Link>
            </div>
          </Col>
          <Col className='py-4' sm={12} md={6}>
            <img src="https://cdn.pixabay.com/photo/2020/11/22/04/10/youtube-5765608_960_720.png" className='img-fluid rounded' alt="introimg" />
          </Col>
        </Row>
      </div>
      <div className='container-fluid mt-5'>
        <h3 className='my-3 text-center'>Features</h3>
        <div className='p-4 d-flex justify-content-around'>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/f9/fd/ee/f9fdee9073b6b6c4ade999a359fbd012.gif" />
            <Card.Body>
              <Card.Title>Upload Youtube Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/469998/screenshots/2325648/output_bsrh32.gif" />
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/78/0e/82/780e82a59775c95c72df27c9d8e1bb74.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className='p-5'>
          <Row>
            <Col sm={12} md={7}>
                <h4>Simple And Faster</h4>
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos, delectus cupiditate ex culpa ipsum praesentium nisi consequatur odit a facilis sapiente necessitatibus! Iusto ratione voluptatum voluptatem? Omnis, vero totam.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quaerat inventore laborum autem nesciunt sequi deserunt non reiciendis eius consequatur. Iure sequi temporibus sint ullam ex soluta maxime minus eum.
                </p>
            </Col>
            <Col sm={12} md={5}>
            <iframe width="400" height="315" src="https://www.youtube.com/embed/RVFAyFWO4go?si=_f1TKGC4_6VrS4i4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Col>
          </Row>
      </div>
    </>
  )
}

export default Landing