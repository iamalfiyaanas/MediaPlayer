import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import feature1 from '../assets/music1.jpg'
import feature2 from '../assets/music2.jpg'
import feature3 from '../assets/music3.jpg'
const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container '>

      {/* landing part */}
      <div className="row align-items-center ms-5">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-3'>Media Player App will allow user to add or remove their uploaded videos from youtube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. what are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col-lg-6 ms-5">
          <img className='ms-5' src={landingImg} alt="Landing image" />
        </div>
      </div>
      {/* features */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5 ms-5">
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'250px'} src={feature1} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>Users can upload, view and remove the videos</Card.Text>
                </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'250px'} src={feature2} />
                <Card.Body>
                  <Card.Title>Categorise Videos</Card.Title>
                  <Card.Text>Users can categorise the videos by drag and drop features.</Card.Text>
                </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'250px'} src={feature3} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>Users can manage the watch history of all videos.</Card.Text>
                </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* links */}
      <div className="my-5 row align-items-center border rounded p-5 ms-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>

          <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sed ex obcaecati totam ipsam velit fuga odit? Consectetur, quidem in maxime.</p>

          <p style={{textAlign:'justify'}}> <span className='fs-5'>Categorise Videos</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sed ex obcaecati totam ipsam velit fuga odit? Consectetur, quidem in maxime.</p>

          <p style={{textAlign:'justify'}}> <span className='fs-5'>Managing History</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sed ex obcaecati totam ipsam velit fuga odit? Consectetur, quidem in maxime.</p>
        </div>
        <div className="col-lg-6 ms-5">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/B2UBMTA57JI?si=zIbkiy2TtkU026CP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing