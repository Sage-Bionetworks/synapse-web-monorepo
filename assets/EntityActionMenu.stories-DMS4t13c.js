import{n as e}from"./chunk-jRWAZmH_.js";import{n as t,t as n}from"./EntityActionMenu-3iNl27Ox.js";var r,i,a,o,s;e((()=>{t(),r={title:`Synapse/EntityPage/ActionMenu`,component:n},i=e=>()=>{console.log(`Action clicked: `+e)},a={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:`Add to Download List`,onClick:i(`ADD_TO_DOWNLOAD_CART`),disabled:!0,tooltipText:`You must have some permission to download this thing.`,visible:!0},VIEW_SHARING_SETTINGS:{text:`View sharing settings`,onClick:i(`VIEW_SHARING_SETTINGS`),disabled:!1,visible:!0},MOVE_ENTITY:{text:`Move File`,onClick:i(`MOVE_ENTITY`),disabled:!1,visible:!0},DELETE_ENTITY:{text:`Delete File`,onClick:i(`DELETE_ENTITY`),disabled:!1,visible:!0},UPLOAD_FILE:{text:`Upload a file`,onClick:i(`UPLOAD_FILE`),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:`Edit some metadata`,onClick:i(`EDIT_FILE_METADATA`),disabled:!1,visible:!0},REPORT_VIOLATION:{text:`Report Violation`,onClick:i(`REPORT_VIOLATION`),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:`UPLOAD_FILE`,icon:`upload`},{action:`EDIT_FILE_METADATA`,icon:`edit`}],downloadMenuActions:[[{action:`ADD_TO_DOWNLOAD_CART`}]],primaryMenuActions:[[{action:`VIEW_SHARING_SETTINGS`}],[{action:`MOVE_ENTITY`},{action:`DELETE_ENTITY`,textSx:{color:`error.main`}}],[{action:`REPORT_VIOLATION`,icon:`flag`,iconSx:{color:`error.main`}}]],primaryMenuText:`Tools Menu Text is Configurable`,primaryMenuEndIcon:`verticalEllipsis`}}},o={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:`Add to Download List`,onClick:i(`ADD_TO_DOWNLOAD_CART`),disabled:!0,tooltipText:`You must have some permission to download this thing.`,visible:!0},VIEW_SHARING_SETTINGS:{text:`View sharing settings`,onClick:i(`VIEW_SHARING_SETTINGS`),disabled:!1,visible:!0},MOVE_ENTITY:{text:`Move File`,onClick:i(`MOVE_ENTITY`),disabled:!1,visible:!0},DELETE_ENTITY:{text:`Delete File`,onClick:i(`DELETE_ENTITY`),disabled:!1,visible:!0},UPLOAD_FILE:{text:`Upload a file`,onClick:i(`UPLOAD_FILE`),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:`Edit some metadata`,onClick:i(`EDIT_FILE_METADATA`),disabled:!1,visible:!0},REPORT_VIOLATION:{text:`Report Violation`,onClick:i(`REPORT_VIOLATION`),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0,disabled:!1,tooltipText:`All download actions are blocked for some reason.`},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:`UPLOAD_FILE`,icon:`upload`},{action:`EDIT_FILE_METADATA`,icon:`edit`}],downloadMenuActions:[[{action:`ADD_TO_DOWNLOAD_CART`}]],primaryMenuActions:[[{action:`VIEW_SHARING_SETTINGS`}],[{action:`MOVE_ENTITY`},{action:`DELETE_ENTITY`,textSx:{color:`error.main`}}],[{action:`REPORT_VIOLATION`,icon:`flag`,iconSx:{color:`error.main`}}]],primaryMenuText:`Tools Menu Text is Configurable`,primaryMenuEndIcon:`verticalEllipsis`}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    actionConfiguration: {
      ['ADD_TO_DOWNLOAD_CART']: {
        text: 'Add to Download List',
        onClick: onClickHandler('ADD_TO_DOWNLOAD_CART'),
        disabled: true,
        tooltipText: 'You must have some permission to download this thing.',
        visible: true
      },
      ['VIEW_SHARING_SETTINGS']: {
        text: 'View sharing settings',
        onClick: onClickHandler('VIEW_SHARING_SETTINGS'),
        disabled: false,
        visible: true
      },
      ['MOVE_ENTITY']: {
        text: 'Move File',
        onClick: onClickHandler('MOVE_ENTITY'),
        disabled: false,
        visible: true
      },
      ['DELETE_ENTITY']: {
        text: 'Delete File',
        onClick: onClickHandler('DELETE_ENTITY'),
        disabled: false,
        visible: true
      },
      ['UPLOAD_FILE']: {
        text: 'Upload a file',
        onClick: onClickHandler('UPLOAD_FILE'),
        disabled: false,
        visible: true
      },
      ['EDIT_FILE_METADATA']: {
        text: 'Edit some metadata',
        onClick: onClickHandler('EDIT_FILE_METADATA'),
        disabled: false,
        visible: true
      },
      ['REPORT_VIOLATION']: {
        text: 'Report Violation',
        onClick: onClickHandler('REPORT_VIOLATION'),
        disabled: false,
        visible: true
      }
    },
    menuConfiguration: {
      DOWNLOAD: {
        visible: true
      },
      PRIMARY: {
        visible: true
      }
    },
    layout: {
      buttonActions: [{
        action: 'UPLOAD_FILE',
        icon: 'upload'
      }, {
        action: 'EDIT_FILE_METADATA',
        icon: 'edit'
      }],
      downloadMenuActions: [[{
        action: 'ADD_TO_DOWNLOAD_CART'
      }]],
      primaryMenuActions: [[{
        action: 'VIEW_SHARING_SETTINGS'
      }], [{
        action: 'MOVE_ENTITY'
      }, {
        action: 'DELETE_ENTITY',
        textSx: {
          color: 'error.main'
        }
      }], [{
        action: 'REPORT_VIOLATION',
        icon: 'flag',
        iconSx: {
          color: 'error.main'
        }
      }]],
      primaryMenuText: 'Tools Menu Text is Configurable',
      primaryMenuEndIcon: 'verticalEllipsis'
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    actionConfiguration: {
      ['ADD_TO_DOWNLOAD_CART']: {
        text: 'Add to Download List',
        onClick: onClickHandler('ADD_TO_DOWNLOAD_CART'),
        disabled: true,
        tooltipText: 'You must have some permission to download this thing.',
        visible: true
      },
      ['VIEW_SHARING_SETTINGS']: {
        text: 'View sharing settings',
        onClick: onClickHandler('VIEW_SHARING_SETTINGS'),
        disabled: false,
        visible: true
      },
      ['MOVE_ENTITY']: {
        text: 'Move File',
        onClick: onClickHandler('MOVE_ENTITY'),
        disabled: false,
        visible: true
      },
      ['DELETE_ENTITY']: {
        text: 'Delete File',
        onClick: onClickHandler('DELETE_ENTITY'),
        disabled: false,
        visible: true
      },
      ['UPLOAD_FILE']: {
        text: 'Upload a file',
        onClick: onClickHandler('UPLOAD_FILE'),
        disabled: false,
        visible: true
      },
      ['EDIT_FILE_METADATA']: {
        text: 'Edit some metadata',
        onClick: onClickHandler('EDIT_FILE_METADATA'),
        disabled: false,
        visible: true
      },
      ['REPORT_VIOLATION']: {
        text: 'Report Violation',
        onClick: onClickHandler('REPORT_VIOLATION'),
        disabled: false,
        visible: true
      }
    },
    menuConfiguration: {
      DOWNLOAD: {
        visible: true,
        disabled: false,
        tooltipText: 'All download actions are blocked for some reason.'
      },
      PRIMARY: {
        visible: true
      }
    },
    layout: {
      buttonActions: [{
        action: 'UPLOAD_FILE',
        icon: 'upload'
      }, {
        action: 'EDIT_FILE_METADATA',
        icon: 'edit'
      }],
      downloadMenuActions: [[{
        action: 'ADD_TO_DOWNLOAD_CART'
      }]],
      primaryMenuActions: [[{
        action: 'VIEW_SHARING_SETTINGS'
      }], [{
        action: 'MOVE_ENTITY'
      }, {
        action: 'DELETE_ENTITY',
        textSx: {
          color: 'error.main'
        }
      }], [{
        action: 'REPORT_VIOLATION',
        icon: 'flag',
        iconSx: {
          color: 'error.main'
        }
      }]],
      primaryMenuText: 'Tools Menu Text is Configurable',
      primaryMenuEndIcon: 'verticalEllipsis'
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Demo`,`DisabledDownloadMenu`]}))();export{a as Demo,o as DisabledDownloadMenu,s as __namedExportsOrder,r as default};