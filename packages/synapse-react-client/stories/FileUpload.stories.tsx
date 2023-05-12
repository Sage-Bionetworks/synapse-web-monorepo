import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import FileUpload from '../src/components/FileUpload/FileUpload'
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

export const Demo: Story = {}

export const WithIcon: Story = {
  args: {
    buttonProps: {
      variant: 'outlined',
      startIcon: <CloudUploadOutlinedIcon />,
    },
  },
}
