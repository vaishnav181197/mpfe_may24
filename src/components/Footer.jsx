import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-light py-2 container-fluid'>
        <Row className='p-5'>
          <Col sm={12} md={5}>
            <h3>MediaPlayer 2024</h3>
            <p style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut omnis illum, ad unde aliquid nesciunt numquam error quas repudiandae excepturi sit amet explicabo nisi, est maiores rerum tempore ea.
            </p>
          </Col>
          <Col sm={12} md={2}>
            <h3>Links</h3>
            <div className='d-flex flex-column'>
              <Link to={'/'}>Landing</Link>
              <Link to={'/home'}>Home</Link>
              <Link to={'/his'}>Watch History</Link>
            </div>
          </Col>
          <Col sm={12} md={5}>
              <h3>FeedBack</h3>
              <textarea name="" id="" className='form-control'></textarea>
              <button className='btn btn-info mt-4'>Send</button>
          </Col>
        </Row>
        <h6 className='text-center'>Mediaplayer 2024 &copy; All rights reserevd.</h6>
      </div>
    </>
  )
}

export default Footer