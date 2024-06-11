import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { MuiContainer, CertificationQuiz as Quiz } from 'synapse-react-client'
import ReturnArrow from '../assets/ReturnArrow.svg?url'
import { Link, Paper } from '@mui/material'

export const CertificationQuiz = () => {
  return (
    <div className="ProfileValidation blue-background">
      <MuiContainer style={{ padding: '40px' }}>
        <Paper sx={{ padding: '35px' }}>
          <Link
            color="primary"
            component={RouterLink}
            to="/authenticated/myaccount"
            sx={{
              position: 'absolute',
              top: '25px',
              left: '30px',
              paddingTop: '15px',
              paddingBottom: '15px',
              textAlign: 'center',
            }}
          >
            <img className="arrow-icon" src={ReturnArrow} alt="return arrow" />
            Return to Account Settings
          </Link>
          <Quiz />
        </Paper>
      </MuiContainer>
    </div>
  )
}
