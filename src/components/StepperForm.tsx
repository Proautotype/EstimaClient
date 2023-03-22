import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { nanoid } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import styled from 'styled-components';
import { stepperFromEntry } from '../@types/JSXProps.types';

interface stepProps {
    entries: stepperFromEntry[],
    segment: number | 3
}

const StepperForm = ({ entries, segment }: stepProps) => {
    const [stepperEntries, setStepperEntries] = useState<stepperFromEntry[]>(entries);
    const [left, setLeft] = useState<number>(0)
    const [right, setRight] = useState<number>(segment)
    const propMapper = ({ id, title, blurCheck, onBlur, type }: stepperFromEntry, idx: number) => {
        // console.log(idx)
        return <CustomFormGroup
            id={id}
            title={title}
            blurCheck={blurCheck}
            onBlur={onBlur}
            key={nanoid()}
            type={type}
        />
    }

    const moveSegment = () => {
        //before movement compare right to length
        //to see if right is on the boundary
        let isb = entries.length % right;
        console.log(isb)
        if (isb > 0 || segment === 1) {          
            if (right < entries.length) { 
                setLeft((prev) => prev + segment);
                setRight((prev) => (prev) + segment) 
            }
        }
    }
    const moveBackSegment = () => {
        if (left > 0) { 
            setLeft((prev) => prev - segment);
            setRight((prev) => (prev) - segment) 
        }
    }

    useEffect(() => {
        setStepperEntries(entries);
    }, [entries, left, right])

    return (
        <FormLayout>
            {stepperEntries.slice(left, right).map(propMapper)}
            <Stepper>
                <div className='prev' onClick={() => moveBackSegment()}>
                    <ArrowLeft />
                </div>
                <div className='next' onClick={() => moveSegment()}>
                    <ArrowRight />
                </div>
            </Stepper>
        </FormLayout>
    )
}
export default StepperForm

const FormLayout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .formGroup{
        width: 100%;
    }
`

const StyledUL = styled.ul`
  list-style: lower-greek;
  margin: 0px;
  padding-left:20px;
  padding-bottom:20px;
`
const CustomFormGroup = ({ id, title, blurCheck, onBlur, type }: stepperFromEntry) => {
    return <FormGroup className='formGroup'>
        <FormLabel htmlFor={id} title={title}>{title}</FormLabel>
        <FormControl id={id} title={title} type={type} />

        <StyledUL>
            <li>Hey, screech</li>
        </StyledUL>
    </FormGroup>
}

const Stepper = styled.div`
    display: flex;
    gap: 10px;
    .prev,.next{
        border-radius: 50px;
        background: darkgrey;
        display: flex;
        justify-content: center;
        align-self: center;
        border: 5px solid transparent;
        svg{
            font-size: 3em;
            padding: 0px;
            margin: 0px;
        }
        :hover{
            border: 5px solid white;
        }
    }
    .prev{
        background: #e6f280;
    }
    .next{
        background: #9bf280;
    }
`