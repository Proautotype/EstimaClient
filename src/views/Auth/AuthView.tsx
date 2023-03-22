import React, { useState, useEffect } from 'react';
import { Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
// import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components';
import { stepperFromEntry } from '../../@types/JSXProps.types';
import Banner from '../../components/Banner';
import StepperForm from '../../components/StepperForm';
import HomeStyledContainer from '../../styles/containers/Hom.container';
import Navbar from '../Navbar';


const AuthView = () => {
  const [stepperEntries, setStepperEntries] = useState<stepperFromEntry[]>([]);
  useEffect(() => {
    setStepperEntries([
      {
        id: "userName",
        title:"Username",
        type:"text",
        value:"",
      },
      {
        id: "firstName",
        title:"First Name",
        type:"text",
        value:"",      
      },
      {
        id: "lastName",
        title:"Last Name",
        type:"text",
        value:"",
      },{
        id: "email",
        title:"Email",
        type:"text",
        value:"",
      },{
        id: "password",
        title:"Password",
        type:"password",
        value:"",
      },{
        id: "postalAddress",
        title:"Postal Address",
        type:"text",
        value:""
      },{
        id: "Address",
        title:"Address",
        type:"text",
        value:""
      },{
        id: "bankNumber",
        title:"Bank Number",
        type:"text",
        value:""
      },{
        id: "jobTitle",
        title:"Job Title",
        type:"text",
        value:""
      }
    ])
  }, [setStepperEntries])
  return (
    <HomeStyledContainer>
      <Navbar />
      <Container style={{ borderRadius: "10px", gap: "10px" }}>
        <Row>
          <Col sm={1} md={12}>
            <Partition>
              <StepperForm entries={stepperEntries!} segment={3}/>
            </Partition>
          </Col>
        </Row>
      </Container>
      {/* <Banner style={{ zIndex: 1000 }} /> */}
    </HomeStyledContainer>
  )
}

const Wrapper = styled.div`
  width: 75%;
  /* height: 700px; */
  margin-top: 1%;
  position: relative;
  z-index: 2000;
  background-color: #01010134; 
  border-radius: 5px;
  display: flex;
  gap:10px;
`;

const Partition = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: aliceblue; */
  /* padding: 10px; */
  img.showImg{
    -webkit-filter: blur(0px);
    filter: blur(0px);
    border-radius: 5px;
    opacity: 0.8;
    width: 400px; 
    height: 550px; 
    object-Fit:cover;
  }
  input{
    background-color: transparent !important;
    color: ${({ theme }) => theme.id === 0 ? "#ff8a00" : ""} !important;
    border-radius: 0px;
    border: none !important;
    border-bottom: 1px solid #b1b1b1 !important;
  }
  label{
    font-weight: bold;
    cursor: pointer;
  }
  @media (min-width: 300px  ){
    img.showImg{
      width: 100%; height: 200px;
    }
  }
  @media (min-width: 1020px  ){
    img.showImg{
      width: 400px; 
      height: 550px; 
    }
  }


`

const StyledUL = styled.ul`
  list-style: lower-greek;
  margin: 0px;
  padding-left:20px;
  padding-bottom:20px;
`
interface customInputProps {
  id: string, title: string, type?: string, blurCheck?: boolean, onBlur?: () => {}
}

const CustomFormGroup = ({ id, title, blurCheck, onBlur, type }: customInputProps) => {
  return <FormGroup className='formGroup'>
    <FormLabel htmlFor={id} title={title}>{title}</FormLabel>
    <FormControl id={id} title={title} type={type} />

    <StyledUL>
      <li>Hey, screech</li>
    </StyledUL>
  </FormGroup>
}

export default AuthView
/**
 *  <Form className='form'>
                <CustomFormGroup id='userName' title='Username' blurCheck={true} key={nanoid()} />
                <CustomFormGroup id='frstName' title='First Name' blurCheck={false} key={nanoid()} />
                <CustomFormGroup id='lastName' title='Last Name' blurCheck={false} key={nanoid()} />
                <CustomFormGroup id='email' title='Email' type='Email' blurCheck={false} key={nanoid()} />
                <CustomFormGroup id='Password' title='Password' blurCheck={false} key={nanoid()} type="password" />
              </Form>
 */
const FormLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .formGroup{
    width: 100%;
  }
`;