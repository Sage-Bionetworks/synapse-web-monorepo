import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-C5qsd30Z.js";import{C as p}from"./ComplexMenu-D0lig_DN.js";import"./createSvgIcon-DB8vrG54.js";import"./index-BbTPqiCn.js";import"./iframe-BDeBTOK4.js";import"./createTheme-C8aN_5H7.js";import"./DefaultPropsProvider-DfeCRuM2.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-D1Mz9iKf.js";import"./useTheme-CiV8_rAf.js";import"./Tooltip-DIv0rXnM.js";import"./index-CKApejzQ.js";import"./useSlot-DH9rqZvE.js";import"./useForkRef-BDlNsu6F.js";import"./useTimeout-D3iui2zG.js";import"./useControlled-Cezacta0.js";import"./getReactElementRef-BnzINgQV.js";import"./index-BEGoUC_S.js";import"./index-QvRUPdA0.js";import"./Grow-DBmkL7Nf.js";import"./Popper-DA9vNxNk.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DfAxQ7L_.js";import"./ContentCopyTwoTone-DsBNkC_e.js";import"./HelpOutlineTwoTone-CUc0C_FR.js";import"./ErrorOutlined-BClx7LBf.js";import"./GetAppTwoTone-BrTgFPO5.js";import"./InfoOutlined-DX3MMlly.js";import"./PhoneTwoTone-CAont7xY.js";import"./DeleteTwoTone-DcCr44yB.js";import"./CheckCircleTwoTone-JwoKdBR7.js";import"./DropdownMenu-D8MYHAoI.js";import"./Button-DO_YtF-L.js";import"./createSimplePaletteValueFilter-CkWiCtpD.js";import"./ButtonBase-B6SxUwFg.js";import"./CircularProgress-Di39B066.js";import"./Typography-CyqgmQqf.js";import"./index-RffKHa2K.js";import"./extendSxProp-C7UKrf5K.js";import"./Fade-DblKOQCF.js";import"./Paper-CW_EMfLy.js";import"./ClickAwayListener-CgxM2Y3N.js";import"./MenuList-CCFrxMgK.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-pNBnRpKx.js";import"./MenuItem-B3EB8xm3.js";import"./dividerClasses-CubX0hrV.js";import"./ListItemIcon-BC18tN-h.js";import"./ListItemText-CYDFv4OY.js";import"./Divider-DcX8JeIR.js";import"./IconSvgButton-BFBw4HqI.js";import"./IconButton-bBx42FY4.js";import"./index-BB-d0Zv7.js";import"./getThemeProps-BkdBMERG.js";import"./Box-DVYF36LU.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    iconButtons: [{
      icon: 'edit',
      tooltipText: 'This is an icon button',
      onClick: onClickHandler('edit icon')
    }, {
      icon: 'label',
      tooltipText: 'View annotations',
      onClick: onClickHandler('label icon')
    }, {
      icon: 'createVersion',
      tooltipText: 'Create new version',
      onClick: onClickHandler('createVersion icon')
    }],
    dropdownMenus: [{
      dropdownButtonText: 'You can have...',
      buttonProps: {
        endIcon: <IconSvg icon="upload" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }, {
      dropdownButtonText: '...multiple dropdown menus!',
      buttonProps: {
        endIcon: <IconSvg icon="download" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }]
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Co=["Demo"];export{t as Demo,Co as __namedExportsOrder,xo as default};
