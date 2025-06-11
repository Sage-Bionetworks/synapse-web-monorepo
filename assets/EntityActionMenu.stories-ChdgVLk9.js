import{E}from"./EntityActionMenu-DDZf051-.js";import"./jsx-runtime-CcC0El_l.js";import"./index-B68G30BL.js";import"./iframe-BhDmSVr3.js";import"./ComplexMenu-DewGAhnj.js";import"./DropdownMenu-CnkyjITq.js";import"./IconSvg-BSlqa_ez.js";import"./createSvgIcon-CLp3pTmR.js";import"./createTheme-uH0JWPXs.js";import"./DefaultPropsProvider-CFtxA7R5.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-D2wHp5z5.js";import"./useTheme-DmWCeBzk.js";import"./Tooltip-D3zE2KP_.js";import"./index-CGBjJezI.js";import"./Grow-Cc3QFLpJ.js";import"./resolveComponentProps-BlPPQYt3.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CJhLMqiy.js";import"./index-DBrU7HLq.js";import"./index-9l0LHN3Q.js";import"./utils-DrB9Djcb.js";import"./TransitionGroupContext-qMTvxwff.js";import"./useEventCallback-CT6ESdV1.js";import"./useTimeout-IiKmTybS.js";import"./useControlled-Cxwn0Bse.js";import"./useId-D1bj6Ezy.js";import"./useIsFocusVisible-CWkv9bHS.js";import"./Popper-C3TYFz4O.js";import"./ownerDocument-DW-IO8s5.js";import"./LayersTwoTone-BDcUr07O.js";import"./ContentCopyTwoTone-BLdMUHB0.js";import"./HelpOutlineTwoTone-CvdiZDFb.js";import"./ErrorOutlined-CNKI-tmW.js";import"./GetAppTwoTone-CT6_WzW8.js";import"./InfoOutlined-zA8g5QYQ.js";import"./DeleteTwoTone-CqSpXeya.js";import"./CheckCircleTwoTone-BxRyKYVR.js";import"./Button-CKTM6a-Q.js";import"./ButtonBase-uT-bVZ8Z.js";import"./Typography-CexizsGO.js";import"./Fade-CjdL0uLB.js";import"./Paper-e82N6CUc.js";import"./ClickAwayListener-dr7M7gUP.js";import"./MenuList-BhgoGnSZ.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./List-DlbzzelX.js";import"./MenuItem-BO4IgyXW.js";import"./dividerClasses-BecQ9T0N.js";import"./ListItemIcon-C8rC_NqP.js";import"./ListItemText-8jnQ2Iza.js";import"./Divider-CIwDJWPq.js";import"./IconSvgButton-CdiD2SkW.js";import"./IconButton-C8Z2107h.js";import"./useMediaQuery-s8FP4LtF.js";import"./getThemeProps-CPiIGKdl.js";import"./Box-Dfy5DiVK.js";const In={title:"Synapse/EntityPage/ActionMenu",component:E},n=T=>()=>{console.log("Action clicked: "+T)},i={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}}},o={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0,disabled:!1,tooltipText:"All download actions are blocked for some reason."},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}}};var e,t,l;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    actionConfiguration: {
      ['ADD_TO_DOWNLOAD_CART']: {
        text: 'Add to Download Cart',
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
}`,...(l=(t=i.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var a,r,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    actionConfiguration: {
      ['ADD_TO_DOWNLOAD_CART']: {
        text: 'Add to Download Cart',
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
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const Dn=["Demo","DisabledDownloadMenu"];export{i as Demo,o as DisabledDownloadMenu,Dn as __namedExportsOrder,In as default};
