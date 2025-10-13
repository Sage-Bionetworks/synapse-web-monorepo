import{E}from"./EntityActionMenu-CaKY3I1t.js";import"./jsx-runtime-D_zvdyIk.js";import"./ComplexMenu-ChWiq7h6.js";import"./DropdownMenu-CqLyu5Yb.js";import"./index-KO5yBezO.js";import"./iframe-BWtzi3Fu.js";import"./IconSvg-BExYz25T.js";import"./createSvgIcon-C9ylNz7Z.js";import"./createTheme-BiMww641.js";import"./DefaultPropsProvider-BoHZ1rqc.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BqZaM65K.js";import"./useTheme-CM4wnLKj.js";import"./Tooltip-v-ea6aM6.js";import"./index-B3fWEhVy.js";import"./useSlot-HveTRmcP.js";import"./useForkRef-CTzi7RL5.js";import"./useTimeout-D67sEVIl.js";import"./useControlled-B7xU-BaO.js";import"./getReactElementRef-D7Qedxf3.js";import"./index-Dr_d-L0h.js";import"./index-Bh8b_a61.js";import"./Grow-Bai82ClR.js";import"./Popper-BD0dU3Wk.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BS164k50.js";import"./ContentCopyTwoTone-C5rISIYs.js";import"./HelpOutlineTwoTone-CoO0_vVD.js";import"./ErrorOutlined-W4u3aeHS.js";import"./GetAppTwoTone-Z3dHbFX6.js";import"./InfoOutlined-COOBVjQT.js";import"./PhoneTwoTone-DF2IAZC0.js";import"./DeleteTwoTone-UQQQ7Gyb.js";import"./CheckCircleTwoTone-CERx72Pg.js";import"./Button-BDASUTyZ.js";import"./createSimplePaletteValueFilter-UnnRFOda.js";import"./ButtonBase-CZrPHVPS.js";import"./CircularProgress-CIeVfw1I.js";import"./Typography-CxNE9IZM.js";import"./index-By9_PeXc.js";import"./extendSxProp-mBp2xHbV.js";import"./Fade-QhzadI6Z.js";import"./Paper-tceDeyQ-.js";import"./ClickAwayListener-DVtkFkiL.js";import"./MenuList-BLJFTwWZ.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Sg7xUZea.js";import"./MenuItem-BYWAqgaF.js";import"./dividerClasses-BEs244JA.js";import"./ListItemIcon-CjkypXiK.js";import"./ListItemText-DPz2jvOH.js";import"./Divider-dK9EoE4M.js";import"./IconSvgButton-B700zMON.js";import"./IconButton-D1QHohjU.js";import"./index-Ctaly7j2.js";import"./getThemeProps-D-9myJJW.js";import"./Box-BDifCyM8.js";const Dn={title:"Synapse/EntityPage/ActionMenu",component:E},n=T=>()=>{console.log("Action clicked: "+T)},i={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}}},o={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0,disabled:!1,tooltipText:"All download actions are blocked for some reason."},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}}};var e,t,l;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(l=(t=i.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const pn=["Demo","DisabledDownloadMenu"];export{i as Demo,o as DisabledDownloadMenu,pn as __namedExportsOrder,Dn as default};
