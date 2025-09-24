import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-VGlTtpWl.js";import{C as p}from"./ComplexMenu-DRuQoN_X.js";import"./createSvgIcon-DvMnD2YN.js";import"./index-CjphnBVq.js";import"./iframe-lrU9LFdV.js";import"./createTheme-BPIzYAQ4.js";import"./DefaultPropsProvider-8bXZbYL1.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-JbJccATr.js";import"./useTheme-B9jQ-kBM.js";import"./Tooltip-TpIeJkLt.js";import"./index-DK18_Xx-.js";import"./useSlot-CXduKSdS.js";import"./useForkRef-BCxYFCZR.js";import"./useTimeout-CpGExdCe.js";import"./useControlled-etNhPZko.js";import"./getReactElementRef-CLp1aBoV.js";import"./index-CrHb8yv-.js";import"./index-VcmQi6lf.js";import"./Grow-61qwQvNa.js";import"./Popper-DYxd-Od2.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CexkJZep.js";import"./ContentCopyTwoTone-BTVHkd0q.js";import"./HelpOutlineTwoTone-Bcuekl8E.js";import"./ErrorOutlined-DyP_eCdd.js";import"./GetAppTwoTone-Z-jxI0Ba.js";import"./InfoOutlined-BAz11hfw.js";import"./PhoneTwoTone-D7JT7RdX.js";import"./DeleteTwoTone-DC9SVfZq.js";import"./CheckCircleTwoTone-C_snamD8.js";import"./DropdownMenu-CZlPc-5G.js";import"./Button-D4fZkcfM.js";import"./createSimplePaletteValueFilter-DHFVVwmG.js";import"./ButtonBase-DopOzCsI.js";import"./CircularProgress-CIOMIAjp.js";import"./Typography-7Pmswjzs.js";import"./index-DszYsPoe.js";import"./extendSxProp-BIlFRqHM.js";import"./Fade-Qi7ViT4V.js";import"./Paper-C_uMHdL9.js";import"./ClickAwayListener-CrAE0rE1.js";import"./MenuList-BYZU5CmP.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BPRDyVu0.js";import"./MenuItem-DxNqSmvd.js";import"./dividerClasses-Cph2QOv-.js";import"./ListItemIcon-CTD52ASI.js";import"./ListItemText-aCP6JyXw.js";import"./Divider-CCsHWS7p.js";import"./IconSvgButton-B48M_e9r.js";import"./IconButton-Bs0ai_J-.js";import"./index-BHlXQjNl.js";import"./getThemeProps-uQ8hgx0D.js";import"./Box-CE79B8x9.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
