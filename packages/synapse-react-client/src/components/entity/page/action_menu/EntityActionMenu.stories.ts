import { Meta, StoryObj } from '@storybook/react-vite'
import EntityActionMenu from './EntityActionMenu'

const meta = {
  title: 'Synapse/EntityPage/ActionMenu',
  component: EntityActionMenu,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const onClickHandler = (action: string) => () => {
  console.log('Action clicked: ' + action)
}

export const Demo: Story = {
  args: {
    actionConfiguration: {
      ['ADD_TO_DOWNLOAD_CART']: {
        text: 'Add to Download Cart',
        onClick: onClickHandler('ADD_TO_DOWNLOAD_CART'),
        disabled: true,
        tooltipText: 'You must have some permission to download this thing.',
        visible: true,
      },
      ['VIEW_SHARING_SETTINGS']: {
        text: 'View sharing settings',
        onClick: onClickHandler('VIEW_SHARING_SETTINGS'),
        disabled: false,
        visible: true,
      },
      ['MOVE_ENTITY']: {
        text: 'Move File',
        onClick: onClickHandler('MOVE_ENTITY'),
        disabled: false,
        visible: true,
      },
      ['DELETE_ENTITY']: {
        text: 'Delete File',
        onClick: onClickHandler('DELETE_ENTITY'),
        disabled: false,
        visible: true,
      },
      ['UPLOAD_FILE']: {
        text: 'Upload a file',
        onClick: onClickHandler('UPLOAD_FILE'),
        disabled: false,
        visible: true,
      },
      ['EDIT_FILE_METADATA']: {
        text: 'Edit some metadata',
        onClick: onClickHandler('EDIT_FILE_METADATA'),
        disabled: false,
        visible: true,
      },
      ['REPORT_VIOLATION']: {
        text: 'Report Violation',
        onClick: onClickHandler('REPORT_VIOLATION'),
        disabled: false,
        visible: true,
      },
    },
    menuConfiguration: {
      DOWNLOAD: {
        visible: true,
      },
      PRIMARY: {
        visible: true,
      },
    },
    layout: {
      buttonActions: [
        { action: 'UPLOAD_FILE', icon: 'upload' },
        { action: 'EDIT_FILE_METADATA', icon: 'edit' },
      ],
      downloadMenuActions: [[{ action: 'ADD_TO_DOWNLOAD_CART' }]],
      primaryMenuActions: [
        [{ action: 'VIEW_SHARING_SETTINGS' }],
        [
          { action: 'MOVE_ENTITY' },
          { action: 'DELETE_ENTITY', textSx: { color: 'error.main' } },
        ],
        [
          {
            action: 'REPORT_VIOLATION',
            icon: 'flag',
            iconSx: { color: 'error.main' },
          },
        ],
      ],
      primaryMenuText: 'Tools Menu Text is Configurable',
      primaryMenuEndIcon: 'verticalEllipsis',
    },
  },
}
export const DisabledDownloadMenu: Story = {
  args: {
    actionConfiguration: {
      ['ADD_TO_DOWNLOAD_CART']: {
        text: 'Add to Download Cart',
        onClick: onClickHandler('ADD_TO_DOWNLOAD_CART'),
        disabled: true,
        tooltipText: 'You must have some permission to download this thing.',
        visible: true,
      },
      ['VIEW_SHARING_SETTINGS']: {
        text: 'View sharing settings',
        onClick: onClickHandler('VIEW_SHARING_SETTINGS'),
        disabled: false,
        visible: true,
      },
      ['MOVE_ENTITY']: {
        text: 'Move File',
        onClick: onClickHandler('MOVE_ENTITY'),
        disabled: false,
        visible: true,
      },
      ['DELETE_ENTITY']: {
        text: 'Delete File',
        onClick: onClickHandler('DELETE_ENTITY'),
        disabled: false,
        visible: true,
      },
      ['UPLOAD_FILE']: {
        text: 'Upload a file',
        onClick: onClickHandler('UPLOAD_FILE'),
        disabled: false,
        visible: true,
      },
      ['EDIT_FILE_METADATA']: {
        text: 'Edit some metadata',
        onClick: onClickHandler('EDIT_FILE_METADATA'),
        disabled: false,
        visible: true,
      },
      ['REPORT_VIOLATION']: {
        text: 'Report Violation',
        onClick: onClickHandler('REPORT_VIOLATION'),
        disabled: false,
        visible: true,
      },
    },
    menuConfiguration: {
      DOWNLOAD: {
        visible: true,
        disabled: false,
        tooltipText: 'All download actions are blocked for some reason.',
      },
      PRIMARY: {
        visible: true,
      },
    },
    layout: {
      buttonActions: [
        { action: 'UPLOAD_FILE', icon: 'upload' },
        { action: 'EDIT_FILE_METADATA', icon: 'edit' },
      ],
      downloadMenuActions: [[{ action: 'ADD_TO_DOWNLOAD_CART' }]],
      primaryMenuActions: [
        [{ action: 'VIEW_SHARING_SETTINGS' }],
        [
          { action: 'MOVE_ENTITY' },
          { action: 'DELETE_ENTITY', textSx: { color: 'error.main' } },
        ],
        [
          {
            action: 'REPORT_VIOLATION',
            icon: 'flag',
            iconSx: { color: 'error.main' },
          },
        ],
      ],
      primaryMenuText: 'Tools Menu Text is Configurable',
      primaryMenuEndIcon: 'verticalEllipsis',
    },
  },
}
