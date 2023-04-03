import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import FileUpload from '../src/lib/containers/FileUpload'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  render: args => (
    <>
      <FileUpload
        uploadCallback={resp => {
          if (resp.success) {
            document.getElementById(
              'demo-upload-file',
            )!.textContent = `Your file "${
              resp.resp!.fileName
            }" upload is successful!`
          } else {
            document.getElementById(
              'demo-upload-file',
            )!.textContent = `Your file upload is unsuccessful!`
          }
        }}
        {...args}
      />
      <span id={'demo-upload-file'} style={{ marginLeft: '2rem' }}></span>
    </>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    buttonProps: {
      startIcon: <CloudUploadOutlinedIcon />,
    },
  },
}

export const WithStyling: Story = {
  args: {
    label: 'Upload from your computer',
    buttonProps: {
      sx: {
        fontWeight: 700,
        border: '1px solid #E0E0E0',
        borderRadius: '3px',
        borderColor: '#333',
        width: '100%',
        padding: '12px',
        '&:focus': {
          outlineStyle: 'auto',
          outlineWidth: '3px',
          outlineOffset: '0px',
          borderRadius: '3px',
        },
      },
      startIcon: <CloudUploadOutlinedIcon />,
    },
  },
}
