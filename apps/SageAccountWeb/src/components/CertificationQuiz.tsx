import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SynapseComponents } from 'synapse-react-client'
import ReturnArrow from '../assets/ReturnArrow.svg'

export const CertificationQuiz = () => {
  return (
    <div className="ProfileValidation bootstrap-4-backport blue-background">
      <Container style={{ padding: '40px' }}>
        <Link className="return-link" to="/authenticated/myaccount">
          <img className="arrow-icon" src={ReturnArrow} alt="return arrow" />
          Return to Account Settings
        </Link>
        <SynapseComponents.CertificationQuiz />
      </Container>
    </div>
  )
}
