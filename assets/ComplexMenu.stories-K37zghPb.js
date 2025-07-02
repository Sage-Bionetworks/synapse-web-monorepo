import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-HfeAVmqQ.js";import{C as p}from"./ComplexMenu-BKjPpFjk.js";import"./createSvgIcon-BeTmQEqT.js";import"./index-D5M2_3G3.js";import"./iframe-VnvBbPjt.js";import"./createTheme-DJXLoyL4.js";import"./DefaultPropsProvider-CQoP04Am.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-_EYAa35L.js";import"./useTheme-B9kzyBem.js";import"./Tooltip-DiMuQltE.js";import"./index-BTEZWKfo.js";import"./useSlot-DXyNz7-0.js";import"./useForkRef-CpB3Rdo1.js";import"./useTimeout-CFHsUIho.js";import"./useControlled-CV0fJiZo.js";import"./getReactElementRef-CTKeNC3C.js";import"./index-ceiLpkOX.js";import"./index-BHNDTJUO.js";import"./Grow-DDp3-mAe.js";import"./Popper-DfELmAHW.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DUMGlGcl.js";import"./ContentCopyTwoTone-BpyIRrHJ.js";import"./HelpOutlineTwoTone-B1cYr1Bh.js";import"./ErrorOutlined-VysTu4kO.js";import"./GetAppTwoTone-BOyW7m6B.js";import"./InfoOutlined-BQRQkDar.js";import"./PhoneTwoTone-DYLyz_0b.js";import"./DeleteTwoTone-kbGaBfbo.js";import"./CheckCircleTwoTone-Cg6Zc16C.js";import"./DropdownMenu-whtJDjWd.js";import"./Button-gndjKYaP.js";import"./createSimplePaletteValueFilter-CNKafHS4.js";import"./ButtonBase-Cw6a0jrk.js";import"./CircularProgress-CrJiODmY.js";import"./Typography-kp_OeXei.js";import"./index-DHredDN0.js";import"./extendSxProp-C8ly7XkF.js";import"./Fade-Bj78bouL.js";import"./Paper-CjbgwGhN.js";import"./ClickAwayListener-3k0whZQl.js";import"./MenuList-CQFlkoeJ.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Dkp7yg8a.js";import"./MenuItem-BhxqJ2Wx.js";import"./dividerClasses-D9gC9pjl.js";import"./ListItemIcon-DLzWRhoV.js";import"./ListItemText-6ITu8p8X.js";import"./Divider-Kom6cBaA.js";import"./IconSvgButton-DfIaYnjo.js";import"./IconButton-Ct-1cHkm.js";import"./index-BN1UQq1r.js";import"./getThemeProps-BTsMPG3o.js";import"./Box-CbwyQH91.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
