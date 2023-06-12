import React from 'react'
import { Button } from '@mui/material'
import RLogo from '../assets/icons/RLogo'
import Python from '../assets/icons/Python'
import Terminal from '../assets/icons/Terminal'
import Java from '../assets/icons/Java'
import ProjectViewCarousel from './ProjectViewCarousel/ProjectViewCarousel'
import {
  getEndpoint,
  BackendDestinationEnum,
} from '../utils/functions/getEndpoint'
import { SynapsePoweredPortal } from './SynapsePoweredPortal'
import { useSynapseContext } from '../utils/context/SynapseContext'
import SynapseFullLogo from '../assets/icons/SynapseFullLogo'
import IconSvg from './IconSvg/IconSvg'

export type SynapseHomepageProps = {
  projectViewId: string
}

const buttonSx = {
  textAlign: 'center',
}

export const SynapseHomepage: React.FunctionComponent<SynapseHomepageProps> = ({
  projectViewId,
}) => {
  const { accessToken } = useSynapseContext()
  const LOGIN_LINK = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!LoginPlace:0`
  const REGISTRATION_LINK = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!RegisterAccount:0`

  // 'v' will resolve to the user's profile ID
  const DASHBOARD_LINK = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!Profile:v/projects`

  return (
    <div className="SynapseHomepage">
      <div className="SynapseHomepage__Section PrimaryBackground">
        <div className="HeroContainer">
          <div className="Headline WhiteText">
            <div className="SynapseLogoContainer">
              <SynapseFullLogo />
            </div>
            <div className="HeadlineSentence">
              <span className="Headline-Strong">Organize</span>
              <span className="Headline-Light">
                {' '}
                your digital research assets.
              </span>
            </div>
            <div className="HeadlineSentence">
              <span className="Headline-Strong">Get credit</span>
              <span className="Headline-Light"> for your research.</span>
            </div>
            <div className="HeadlineSentence">
              <span className="Headline-Strong">Collaborate</span>
              <span className="Headline-Light">
                {' '}
                with your colleagues and the public.
              </span>
            </div>
          </div>
          <img
            src="https://s3.amazonaws.com/static.synapse.org/images/homepage-composite.svg"
            className="HeroImage"
            alt=""
          />
          <div className="SignUpButtonContainer">
            {accessToken ? (
              <>
                <Button
                  href={DASHBOARD_LINK}
                  variant="contained"
                  color="light"
                  sx={buttonSx}
                >
                  View Your Dashboard
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      'https://help.synapse.org/docs/Getting-Started.2055471150.html',
                      '_blank',
                      'noopener',
                    )
                  }
                  variant="contained"
                  color="darkPrimary"
                  sx={buttonSx}
                >
                  Get Help With Synapse
                </Button>
              </>
            ) : (
              <>
                <Button
                  href={LOGIN_LINK}
                  variant="contained"
                  color="light"
                  sx={buttonSx}
                >
                  Log in to Synapse
                </Button>
                <Button
                  href={REGISTRATION_LINK}
                  variant="contained"
                  color="darkPrimary"
                  sx={buttonSx}
                >
                  Register Now
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="SearchLinkBar SynapseHomepage__Section">
        <div className="FlexContainer">
          <a
            href="#!Search:"
            rel="noopener noreferrer"
            className="SRC-whiteText ignoreLink"
          >
            <IconSvg icon="searchOutlined" />
            Search Synapse Projects
          </a>
        </div>
      </div>
      <div className="SynapseHomepage__Section WhiteBackground">
        <div className="FlexContainerReverse">
          <img
            src="https://s3.amazonaws.com/static.synapse.org/images/explore-research.svg"
            className="SectionGraphic"
            alt=""
          />
          <div className="SectionTextFlexContainer">
            <h2>Organize Your Digital Research Assets</h2>
            <div>
              <h3>Access Your Data Anywhere</h3>
              <p className="SectionBody">
                Synapse provides APIs to store or access your data from the web
                or programmatically via one of our supported analytical clients
                (
                <a
                  href="https://r-docs.synapse.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  R
                </a>
                ,{' '}
                <a
                  href="https://python-docs.synapse.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Python
                </a>
                ,{' '}
                <a
                  href="https://python-docs.synapse.org/build/html/CommandLineClient.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Command Line
                </a>
                ).
              </p>
            </div>
            <div>
              <h3>Query Structured Data</h3>
              <p className="SectionBody">
                Use Synapse Tables to query structured data right from your web
                browser or from any analytical client.
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              sx={buttonSx}
              href={accessToken ? DASHBOARD_LINK : REGISTRATION_LINK}
            >
              {accessToken ? 'View Your Dashboard' : 'Get Started Now'}
            </Button>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section OffWhiteBackground">
        <div className="FlexContainer">
          <img
            src="https://s3.amazonaws.com/static.synapse.org/images/certified-microscope.svg"
            className="SectionGraphic"
            alt=""
          />
          <div className="SectionTextFlexContainer">
            <h2>Get Credit For Your Research</h2>
            <div>
              <h3>Record Provenance</h3>
              <p className="SectionBody">
                Synapse provides tools to record and display Provenance for each
                step of your analysis.
              </p>
            </div>
            <div>
              <h3>Mint a DOI</h3>
              <p className="SectionBody">
                A digital object identifier (DOI) provides a persistent and easy
                way to reference your digital assets in publications &mdash;
                including data, code, or analysis results.
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              sx={buttonSx}
              href={accessToken ? DASHBOARD_LINK : REGISTRATION_LINK}
            >
              {accessToken ? 'View Your Dashboard' : 'Get Started Now'}
            </Button>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section WhiteBackground">
        <div className="FlexContainerReverse">
          <img
            src="https://s3.amazonaws.com/static.synapse.org/images/collaborate.svg"
            className="SectionGraphic"
            alt=""
          />
          <div className="SectionTextFlexContainer">
            <h2>Collaborate</h2>
            <div>
              <h3>Communicate Your Findings</h3>
              <p className="SectionBody">
                Use the Synapse Wiki services to communicate your findings by
                embedding rich content such as images, Tables, Provenance, and
                LaTeX equations.
              </p>
            </div>
            <div>
              <h3>Share Your Research</h3>
              <p className="SectionBody">
                New Synapse Projects are private by default &mdash; share with
                your colleagues, collaborators, or make your work public! Create
                Synapse Teams to manage your collaborations.
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              sx={buttonSx}
              href={accessToken ? DASHBOARD_LINK : REGISTRATION_LINK}
            >
              {accessToken ? 'View Your Dashboard' : 'Get Started Now'}
            </Button>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section OffWhiteBackground">
        <div className="FlexContainer">
          <img
            src="https://s3.amazonaws.com/static.synapse.org/images/data-justice.svg"
            className="SectionGraphic"
            alt=""
          />
          <div className="SectionTextFlexContainer">
            <h2>Our Data Sharing Principles</h2>
            <div>
              <p className="SectionBody">
                Synapse operates under a complete governance process that
                includes well-documented Terms and Conditions of Use, guidelines
                and operating procedures, privacy enhancing technologies, as
                well as the right of audit and external reviews.
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              sx={buttonSx}
              onClick={() =>
                window.open(
                  'https://help.synapse.org/docs/Synapse-Governance.2004255211.html',
                  '_blank',
                  'noopener',
                )
              }
            >
              Learn More About Data Sharing
            </Button>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section WhiteBackground">
        <div className="FlexContainerReverse">
          <div className="ClientFlexContainer SectionGraphic">
            <a
              className="ClientFlexItem"
              href="https://r-docs.synapse.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RLogo />
              <span>R Client</span>
            </a>
            <a
              className="ClientFlexItem"
              href="https://python-docs.synapse.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Python />
              <span>Python Client</span>
            </a>
            <a
              className="ClientFlexItem"
              href="https://python-docs.synapse.org/build/html/CommandLineClient.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Terminal />
              <span>Command Line Client</span>
            </a>
            <a
              className="ClientFlexItem"
              href="https://github.com/Sage-Bionetworks/Synapse-Repository-Services/blob/develop/client/synapseJavaClient/src/main/java/org/sagebionetworks/client/SynapseClient.java"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Java />
              <span>Java Client</span>
            </a>
          </div>
          <div className="SectionTextFlexContainer">
            <h2>Synapse Easily Integrates Into Your Workflow</h2>
            <div>
              <p className="SectionBody">
                Create Projects, upload &amp; download Files, generate
                Provenance, query Tables, create Wikis and more all from the
                comfort of your own code using Synapse analytical clients.
              </p>
            </div>
            <Button
              onClick={() =>
                window.open(
                  'https://help.synapse.org/docs/API-Clients-and-Documentation.1985446128.html',
                  '_blank',
                  'noopener',
                )
              }
              variant="contained"
              color="primary"
              sx={buttonSx}
            >
              Learn More About Synapse APIs
            </Button>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section OffWhiteBackground">
        <div className="SynapseHomepage__Section__Centered">
          <h2>Synapse In Action</h2>
          <ProjectViewCarousel entityId={projectViewId} />
        </div>
      </div>
      <div className="SynapseHomepage__Section WhiteBackground">
        <div className="SynapseHomepage__Section__Centered">
          <h2>Powered By Synapse</h2>
          <p>
            Our knowledge portals are community-specific interfaces that enable
            researchers to explore and share data, analyses, and tools.
          </p>
          <div className="PoweredBySynapseFlexContainer">
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/ADKnowledgePortal.svg"
              name="AD Knowledge Portal"
              description="Data and tools for the study of Alzheimer's disease, related dementias, and healthy aging."
              url="https://adknowledgeportal.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/BSMN.svg"
              name="BSMN Portal"
              description="Data and tools to study the role of brain somatic mosaicism in neuropsychiatric disease."
              url="https://bsmn.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/CSBC.svg"
              name="Cancer Complexity Knowledge Portal"
              description="Approaches, data, and tools to address important questions in basic and translational cancer research."
              url="https://cancercomplexity.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/dHealth.svg"
              name="dHealth Digital Health Knowledge Portal"
              description="Discover and download digital and mobile health data, tools, benchmarked outcomes and digital biomarkers."
              url="https://dhealth.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/NFPortal.svg"
              name="NF Data Portal"
              description="Datasets, analysis tools, resources, and publications related to neurofibromatosis and schwannomatosis."
              url="https://nf.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/Psychencode.svg"
              name="Psychencode Knowledge Portal"
              description="Investigation and large-scale data sets of genomic influences on neuropsychiatric disease."
              url="https://psychencode.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://arkportal.synapse.org/favicon.svg"
              name="ARK Portal"
              description="The ARK Portal hosts data generated by a network of research teams working collaboratively to deepen the understanding of Arthritis and Autoimmune and Related Diseases."
              url="https://arkportal.synapse.org/"
            />
          </div>
        </div>
      </div>

      <div className="SynapseHomepage__Section OffWhiteBackground">
        <div className="SynapseHomepage__Section__Centered">
          <h2>Our Partners</h2>
          <div className="PartnerFlexContainer">
            <div className="PartnerFlexItem">
              <a
                href="http://www.nhlbi.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="National Heart, Lung, and Blood Institute; NIH"
                  src="https://s3.amazonaws.com/static.synapse.org/images/nih-heart.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.nimh.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="National Institute of Mental Health; NIH"
                  src="https://s3.amazonaws.com/static.synapse.org/images/nih-mental.png"
                  width="141px"
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.sloan.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Alfred P. Sloan Foundation"
                  src="https://s3.amazonaws.com/static.synapse.org/images/sloan.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.nia.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="National Institute on Aging; NIH"
                  src="https://s3.amazonaws.com/static.synapse.org/images/nih-aging.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.lsdfa.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Life Sciences Discovery Fund"
                  src="https://s3.amazonaws.com/static.synapse.org/images/life-sciences.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.ctf.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Children's Tumor Foundation"
                  src="https://s3.amazonaws.com/static.synapse.org/images/ctf.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.n-tap.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Neurofibromatosis Therapeutic Acceleration Program"
                  src="https://s3.amazonaws.com/static.synapse.org/images/ntap.png"
                  width="113px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section PrimaryBackground">
        <div className="SynapseHomepage__Section__Centered SynapseHomepage__FlexColumn">
          <h2 className="WhiteText">Sign up for Synapse today</h2>
          <div className="SignUpButtonContainer SynapseHomepage__MarginAutoDesktop">
            {accessToken ? (
              <>
                <Button
                  href={DASHBOARD_LINK}
                  variant="contained"
                  color="light"
                  sx={buttonSx}
                >
                  View Your Dashboard
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      'https://help.synapse.org/docs/Getting-Started.2055471150.html',
                      '_blank',
                      'noopener',
                    )
                  }
                  variant="contained"
                  color="darkPrimary"
                  sx={buttonSx}
                >
                  Get Help With Synapse
                </Button>
              </>
            ) : (
              <>
                <Button
                  href={LOGIN_LINK}
                  variant="contained"
                  color="light"
                  sx={buttonSx}
                >
                  Log in to Synapse
                </Button>
                <Button
                  href={REGISTRATION_LINK}
                  variant="contained"
                  color="darkPrimary"
                  sx={buttonSx}
                >
                  Register Now
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
