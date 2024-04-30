import { SxProps, styled } from '@mui/material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import IconSvg from '../IconSvg'

const centerProps: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const RowDescriptionCell = styled(Box)({
  ...centerProps,
  backgroundColor: '#f2f2f2',
})
const BasicPlanCell = styled(Box)({
  ...centerProps,
  backgroundColor: '#def0fc',
})
const SelfManagedPlanCell = styled(Box)({
  ...centerProps,
  backgroundColor: '#ffefda',
})
const DataCoordinationPlanCell = styled(Box)({
  backgroundColor: '#e6f7e7',
  '& div': {
    padding: '50px 20px',
  },
})

const SynapsePlans = () => {
  const dataCoordinationPlanHeader = (
    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
      Data Coordination Plan
    </Typography>
  )

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        columnGap: '2px',
        rowGap: '2px',
        gridTemplateRows: 'auto',
        '& p': { fontSize: '14px', marginBottom: '5px' },
        '& div': { padding: '10px 10px 5px 10px' },
      }}
    >
      {/* header */}
      <Box></Box>
      <Box sx={{ backgroundColor: '#98cef5', gridColumnStart: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Basic Hosting Plan
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#fecb93',
          gridColumnStart: 3,
          gridColumnEnd: 'span 2',
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Self Managed Plan
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#b0e4ae', gridColumnStart: 5 }}>
        {dataCoordinationPlanHeader}
      </Box>
      {/* end header */}
      <RowDescriptionCell>
        <Typography variant="body1">Content Uploaders</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">1</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">Unlimited</Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">Unlimited</Typography>
      </SelfManagedPlanCell>
      {/* Data Coordination Plan single cell */}
      <DataCoordinationPlanCell
        sx={{
          gridColumnStart: 5,
          gridRowStart: 2,
          gridRowEnd: 'span 16',
          '& p': { textAlign: 'left' },
          paddingLeft: '30px',
          paddingRight: '30px',
          paddingBottom: '25px',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Contact Sage to Customize
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Additional Features Include:
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '260px' }}>
            <ul>
              <li>
                Unlimited data allowance and custom data storage locations.
              </li>
              <li>Fully managed project set-up, access and documentation.</li>
              <li>Tailor-made portal interface for data exploration.</li>
              <li>
                Seamless data integration with client&apos;s existing
                computational tools and workflows.
              </li>
              <li>
                Customized governance support and specific geographical and
                institutional data policies.{' '}
              </li>
              <li>
                Dedicated Sage point of contact for unlimited, end-to-end
                project support.
              </li>
            </ul>
          </Typography>
        </Box>
      </DataCoordinationPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">User Content Limit</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Box>
          <Typography variant="body1" sx={{ marginBottom: '5px' }}>
            &lt;=100 GB
          </Typography>
          <Typography variant="smallText1" sx={{ fontStyle: 'italic' }}>
            (Unlimited with <br />
            custom storage)
          </Typography>
        </Box>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Box>
          <Typography variant="body1" sx={{ marginBottom: '5px' }}>
            &lt;=100 GB
          </Typography>
          <Typography variant="smallText1" sx={{ fontStyle: 'italic' }}>
            (Unlimited with <br />
            custom storage)
          </Typography>
        </Box>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Box>
          <Typography variant="body1" sx={{ marginBottom: '5px' }}>
            &lt;=500 GB
          </Typography>
          <Typography variant="smallText1" sx={{ fontStyle: 'italic' }}>
            (Unlimited with <br />
            custom storage)
          </Typography>
        </Box>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">Storage Environment</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">
          Sage Managed <br />
          Shared Storage*
        </Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          Sage Managed <br />
          Individual Storage*
        </Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          Sage Managed <br />
          Shared Storage*
        </Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">Secure Cloud Storage</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">N/A</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">Duration of Plan</Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">Duration of Plan</Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">Egress Limit **</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">4 TB/Year**</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">4 TB/Year**</Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">20 TB/Year**</Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">
          Project Set Up + <br />
          Governance Consulting
        </Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">N/A</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">15 Hours</Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">15 Hours</Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">
          NIH Data Management
          <br />
          Sharing Plan Support **
        </Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">N/A</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
          **
        </Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
          **
        </Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">Help Desk Support</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">N/A</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">25 Hours</Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">25 Hours</Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">DOIs for Publications & Grants</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">
          Access to Online
          <br />
          Documentation & Tutorials
        </Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">Project Wikis, Discussion Forum</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">User Content Access Management</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">Self-Service</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">Self-Service</Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">Self-Service</Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">
          Sharing Content Through
          <br />
          Controlled Access
        </Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">N/A</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          <IconSvg icon="check" />
        </Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">
          Country-Specific
          <br />
          Storage Localization
        </Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">
          Only with
          <br />
          Custom Storage
        </Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          Only with
          <br />
          Custom Storage
        </Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">
          Only with
          <br />
          Custom Storage
        </Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">Contract Length</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1">N/A</Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">5 Years</Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1">5 Years</Typography>
      </SelfManagedPlanCell>

      <RowDescriptionCell>
        <Typography variant="body1">Plans Start At</Typography>
      </RowDescriptionCell>
      <BasicPlanCell>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Free
        </Typography>
      </BasicPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          $15,000
        </Typography>
      </SelfManagedPlanCell>
      <SelfManagedPlanCell>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          $30,000
        </Typography>
      </SelfManagedPlanCell>
    </Box>
  )
}

export default SynapsePlans
