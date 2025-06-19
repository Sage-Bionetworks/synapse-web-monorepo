import Layout from '@/components/Layout'
import Typography from '@mui/material/Typography'
import logoPath from './assets/arklogomark.png'

const ARKWelcomePage = () => {
  return (
    <>
      <Layout containerClassName="ARKWelcomePage">
        <div className="flexLayout">
          <div className="mainWelcomeContent">
            <p style={{ fontSize: 50, fontWeight: 700 }}>
              Welcome to the ARK Portal
            </p>
            <div className="description">
              <Typography variant="body1">
                {import.meta.env.VITE_PORTAL_DESCRIPTION}
              </Typography>
            </div>
          </div>
          <img
            className="welcomeARKLogo"
            src={logoPath}
            alt="ARK Portal logo"
          />
        </div>
      </Layout>
      <div className="lowerRightARKLogo">
        <img src={logoPath} alt="ARK Portal logo" />
      </div>
      <img className="lowerLeftARKLogo" src={logoPath} alt="ARK Portal logo" />
    </>
  )
}

export default ARKWelcomePage
