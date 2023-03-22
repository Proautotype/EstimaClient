import { Assessment, Timeline, Assignment } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import HomeStyledContainer from '../../styles/containers/Hom.container';
import Feature from './Feature';
import Header from './Header';
import Navbar from '../Navbar';
import Banner from '../../components/Banner';
import SplineBackground from './Spline';


const Home = () => {
  const navigate = useNavigate();
  const jumpToEstimation = ({ currentTarget: target }: React.MouseEvent<HTMLButtonElement>) => {
    switch (target.name) {
      case 'task':
        console.log('task')
        navigate("/task")
        break;
      case 'join':
        navigate("/auth")
        break;
    }
  }
  return (
    <HomeStyledContainer>
      <Navbar />
      <Header text={['Estima Productivity Tool', 'secured and powerful 2nd Scrum event manager!', 'Spring Planning, Daily Scrum']} direction={"left"} />

      <Container style={{ width: "100%" }}>
        <Row>
          <Col sm={1} md={4}>
            <Feature title="Sprint Planning"
              name={'spring'}
              titleIcon={<Timeline />}
              intro='Sprint planning is an essential part of the Agile development process that involves identifying the work that needs to be done during the upcoming sprint, setting a sprint goal, and creating a plan to achieve that goal.'
              next='Read More'
            />
          </Col>
          <Col sm={1} md={4}>
            <Feature title="Task Estimator"
              name={'task'}
              titleIcon={<Assessment />}
              intro='Estima sprint task estimation tool will help teams estimate their tasks accurately, manage their sprint effectively, and improve their estimation accuracy over time'
              next='Enjoy'
              nextAction={jumpToEstimation}

            />
          </Col>
          <Col sm={1} md={4}>
            <Feature title="Join Us"
              name={'join'}
              titleIcon={<Assignment />}
              intro='We believe that our sprint estimation and planning tool will help your team work more efficiently and effectively, so that you can deliver better software, faster. So why not give it a try? Sign up today and see the difference it can make for your team!'
              next='Join Us'
              nextAction={jumpToEstimation}
            />
          </Col>
        </Row>
      </Container>
      <SplineBackground />
      <Banner />
    </HomeStyledContainer>
  )
}

export default Home;