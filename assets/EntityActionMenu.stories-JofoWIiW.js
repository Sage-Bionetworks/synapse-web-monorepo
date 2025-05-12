import{E}from"./EntityActionMenu-B0qAt866.js";import"./jsx-runtime-BhYgtz2a.js";import"./index-TnDTBzFf.js";import"./iframe-CuKEFSiv.js";import"./ComplexMenu-DWlUjP57.js";import"./DropdownMenu-C9zX1f8W.js";import"./IconSvg-DC60CHri.js";import"./createSvgIcon-PYlHuLfO.js";import"./createTheme-CiTCtaPq.js";import"./DefaultPropsProvider-Dj24Y2Xr.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DOFgFuwm.js";import"./useTheme-K5JEE0Rs.js";import"./Tooltip-DRjJPI8u.js";import"./index-DRLnAiW7.js";import"./Grow-CP00JTgt.js";import"./resolveComponentProps-CX2YNoCK.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-YmPuCFu8.js";import"./index-OQkrhSPO.js";import"./utils-DBPX0-1k.js";import"./TransitionGroupContext-D1ipvWwM.js";import"./useEventCallback-DApRzhme.js";import"./useTimeout-Do5JDutj.js";import"./useControlled-C3ftmNlQ.js";import"./useId-CBzLqrSr.js";import"./useIsFocusVisible-CZe6Gkhu.js";import"./Popper-BDQKAv4l.js";import"./ownerDocument-DW-IO8s5.js";import"./LayersTwoTone-ztMGPyMj.js";import"./ContentCopyTwoTone-Bl3aVcCu.js";import"./HelpOutlineTwoTone-C7EL3P3d.js";import"./ErrorOutlined-3h1vxH3T.js";import"./GetAppTwoTone-CUWk9Wb8.js";import"./InfoOutlined-Y55F8ZhJ.js";import"./DeleteTwoTone-CN-FwyhN.js";import"./CheckCircleTwoTone-DCcgpwt_.js";import"./Button-BfAXo1Lk.js";import"./ButtonBase-Ck0XLcvU.js";import"./Typography-BHacpJuX.js";import"./Fade-BvJPDuul.js";import"./Paper-CYE3NXP2.js";import"./ClickAwayListener-B7QLYZZn.js";import"./MenuList-BiRP-csz.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./List-BbypkSOr.js";import"./MenuItem-BaL-YeBS.js";import"./dividerClasses-Cf_Mt74-.js";import"./ListItemIcon-Dn-YTL5t.js";import"./ListItemText-DkpizA2_.js";import"./Divider-CuNQLup5.js";import"./IconSvgButton-DoMpowYP.js";import"./IconButton-Btlm9KUL.js";import"./useMediaQuery-pYuDtJAV.js";import"./getThemeProps-BNyY6QJd.js";import"./Box-CjckbGK_.js";const _n={title:"Synapse/EntityPage/ActionMenu",component:E},n=T=>()=>{console.log("Action clicked: "+T)},i={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}}},o={args:{actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0,disabled:!1,tooltipText:"All download actions are blocked for some reason."},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}}};var e,t,l;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const In=["Demo","DisabledDownloadMenu"];export{i as Demo,o as DisabledDownloadMenu,In as __namedExportsOrder,_n as default};
