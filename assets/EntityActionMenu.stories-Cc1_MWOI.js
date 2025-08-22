import{E}from"./EntityActionMenu-CkqIIu2X.js";import"./jsx-runtime-D_zvdyIk.js";import"./ComplexMenu-BA28_eWy.js";import"./DropdownMenu-CPuXdwW_.js";import"./index-Bc3skFOa.js";import"./iframe-BtSaXkuM.js";import"./IconSvg-cY3GV0i2.js";import"./createSvgIcon-DuBP14r-.js";import"./createTheme-BueTOkol.js";import"./DefaultPropsProvider-BpRUECsb.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BdsV2UtN.js";import"./useTheme-CESjAg12.js";import"./Tooltip-BJmPo455.js";import"./index-L24AK7Ts.js";import"./useSlot-DzYM2NXh.js";import"./useForkRef-B-XQJunB.js";import"./useTimeout-CmS7swDh.js";import"./useControlled-D8fGF6t0.js";import"./getReactElementRef-BshGVvhA.js";import"./index-B3GonlML.js";import"./index-B_yUMdDC.js";import"./Grow-LPswSJij.js";import"./Popper-DKZ5oZcV.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-xTYHAmKz.js";import"./ContentCopyTwoTone-lekohpa5.js";import"./HelpOutlineTwoTone-CtyKe6Fa.js";import"./ErrorOutlined-DP7FCYSK.js";import"./GetAppTwoTone-D5slMopW.js";import"./InfoOutlined-DlCXhRNO.js";import"./PhoneTwoTone-SxPJP1Nk.js";import"./DeleteTwoTone-Di2MSqlW.js";import"./CheckCircleTwoTone-CeziCU9H.js";import"./Button-BkrQibwj.js";import"./createSimplePaletteValueFilter-C0etH01x.js";import"./ButtonBase-Dth68TUA.js";import"./CircularProgress-cVYl0jD1.js";import"./Typography-CCq_2k8T.js";import"./index-hdfdv7Z8.js";import"./extendSxProp-A8hSLdSh.js";import"./Fade-BFpHeoSz.js";import"./Paper-BMQ9bliB.js";import"./ClickAwayListener-DkMj7hy7.js";import"./MenuList-Dpx3r0rj.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-D2Ca9SCS.js";import"./MenuItem-BBT3pqTu.js";import"./dividerClasses-BvmTwmtG.js";import"./ListItemIcon-BSOKn7TZ.js";import"./ListItemText-D8CflJYc.js";import"./Divider-fSJYB2ci.js";import"./IconSvgButton-BKQCXmUM.js";import"./IconButton-DhrIHtmc.js";import"./index-CGXX9G1P.js";import"./getThemeProps-tTcTqxCF.js";import"./Box-BM0uF6eN.js";const Dn={title:"Synapse/EntityPage/ActionMenu",component:E},n=T=>()=>{console.log("Action clicked: "+T)},i={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}}},o={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0,disabled:!1,tooltipText:"All download actions are blocked for some reason."},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}}};var e,t,l;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
