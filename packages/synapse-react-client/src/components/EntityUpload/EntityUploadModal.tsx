import { EntityUploaderState } from '@/utils/hooks/useUploadFileEntity/useUploadFileEntities'
import { Box, Button, Tab, Tabs } from '@mui/material'
import {
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import DialogBase from '@/react-ui/components/DialogBase'
import { displayToast } from '../ToastMessage/ToastMessage'
import {
  EntityUpload,
  EntityUploadHandle,
  EntityUploadProps,
} from './EntityUpload'
import { LinkToURL, LinkToURLHandle } from './LinkToURL'

export type EntityUploadModalProps = {
  entityId: string
  open: boolean
  onClose: () => void
} & Pick<EntityUploadProps, 'onUploadReady'>

enum UploadTab {
  UploadFile,
  LinkToURL,
}

export const EntityUploadModal = forwardRef(function EntityUploadModal(
  props: EntityUploadModalProps,
  ref: ForwardedRef<EntityUploadHandle>,
) {
  const { entityId, open, onClose, onUploadReady } = props
  const [tabValue, setTabValue] = useState<UploadTab>(UploadTab.UploadFile)

  const [uploadState, setUploadState] = useState<EntityUploaderState>('LOADING')

  const [isLinkFormValid, setIsLinkFormValid] = useState(false)
  const linkToUrlFormRef = useRef<LinkToURLHandle>(null)

  const entityUploadRef = useRef<EntityUploadHandle>(null)

  const disableClose =
    uploadState === 'PROMPT_USER' || uploadState === 'UPLOADING'
  const disableCancel = disableClose || uploadState === 'COMPLETE'

  const disableFinish =
    tabValue === UploadTab.UploadFile
      ? uploadState !== 'COMPLETE'
      : !isLinkFormValid

  function onFinish() {
    if (!disableFinish) {
      if (tabValue === UploadTab.UploadFile) {
        onClose()
      } else {
        linkToUrlFormRef.current!.submit()
      }
    }
  }

  useImperativeHandle(ref, () => ({
    handleUploads: (fileList: ArrayLike<File>) => {
      // When an upload starts via imperative handle (e.g. via drag-and-drop), switch to the upload tab
      setTabValue(UploadTab.UploadFile)
      entityUploadRef.current?.handleUploads(fileList)
    },
  }))

  return (
    <DialogBase
      DialogProps={{
        onKeyUp: (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            onFinish()
          }
        },
        // SWC-4693 - For drag-and-drop upload to be ready before the modal opens, the modal contents must be mounted
        keepMounted: true,
      }}
      title={'Upload or Link to File'}
      open={open}
      maxWidth={'md'}
      fullWidth
      content={
        <>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={tabValue}
            onChange={(_e, newValue) => setTabValue(newValue as number)}
            sx={{ mb: 2 }}
          >
            <Tab label={'Upload File'} value={UploadTab.UploadFile} />
            <Tab label={'Link to URL'} value={UploadTab.LinkToURL} />
          </Tabs>
          <Box
            sx={{
              display: tabValue === UploadTab.UploadFile ? 'block' : 'none',
            }}
          >
            <EntityUpload
              ref={entityUploadRef}
              entityId={entityId}
              onStateChange={setUploadState}
              onUploadReady={onUploadReady}
            />
          </Box>
          <Box
            sx={{
              display: tabValue === UploadTab.LinkToURL ? 'block' : 'none',
            }}
          >
            <LinkToURL
              ref={linkToUrlFormRef}
              entityId={entityId}
              onIsValidChanged={setIsLinkFormValid}
              onSuccess={entity => {
                displayToast(`Successfully created "${entity.name}"`, 'success')
                onClose()
              }}
            />
          </Box>
        </>
      }
      onCancel={() => {
        if (!disableClose) {
          onClose()
        }
      }}
      hasCloseButton={!disableClose}
      actions={
        <>
          <Button
            variant={'outlined'}
            onClick={() => {
              onClose()
            }}
            disabled={disableCancel}
          >
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={onFinish}
            disabled={disableFinish}
          >
            Finish
          </Button>
        </>
      }
    />
  )
})

export default EntityUploadModal
