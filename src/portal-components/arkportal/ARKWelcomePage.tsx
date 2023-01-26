import Layout from 'portal-components/Layout'
import * as React from 'react'
import { Typography } from 'synapse-react-client'
import logoPath from './assets/arklogomark.png'
import docTitleConfig from '../../config/docTitleConfig.json'

const ARKWelcomePage = () => {
  return (
    <>
      <Layout containerClassName='ARKWelcomePage'>
          <div className="flexLayout"> 
            <div className="mainWelcomeContent">
              <p style={{ fontSize: 50, fontWeight: 700 }}>
                Welcome to the ARK Portal
              </p>
              <div className="description">
                <Typography variant="body1">
                  {docTitleConfig.description}
                </Typography>
              </div>
            </div>
            <img className="welcomeARKLogo" src={logoPath} alt="ARK Portal logo"/>
          </div>
      </Layout>
      <div className="lowerRightARKLogo">
        <img src={logoPath} alt="ARK Portal logo"/>
      </div>
      <img className="lowerLeftARKLogo" src={logoPath} alt="ARK Portal logo"/>
    </>
  )
}

export default ARKWelcomePage
