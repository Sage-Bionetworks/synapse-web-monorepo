import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B4CZW7UX.js";import{C as p}from"./ComplexMenu-qT7xZnGs.js";import"./createSvgIcon-C7XgeMGx.js";import"./index-GsaBG8zw.js";import"./iframe-xzCVUG4Y.js";import"./createTheme-BFE69o89.js";import"./DefaultPropsProvider-BE0ry_NZ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BbLqDdC9.js";import"./useTheme-BLfClJc5.js";import"./Tooltip-CHuqp0uT.js";import"./index-C987JzfV.js";import"./useSlot-Bnb_BrAZ.js";import"./useForkRef-BcSumWpH.js";import"./useTimeout-BCdgOQTg.js";import"./useControlled-CM_dYV_J.js";import"./getReactElementRef-Cfv1c7hh.js";import"./index-DGgDoFzh.js";import"./index-BBJA5RKi.js";import"./Grow-DD1LUtFX.js";import"./Popper-BCcvQoKi.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-ChtHLGH1.js";import"./ContentCopyTwoTone-CdLdwu8b.js";import"./HelpOutlineTwoTone-CXAVm4xw.js";import"./ErrorOutlined-BVOFDdDL.js";import"./GetAppTwoTone-DUkG9rML.js";import"./InfoOutlined-U6OgtLDt.js";import"./PhoneTwoTone-CP6nQcUE.js";import"./DeleteTwoTone-O8FQOcCn.js";import"./CheckCircleTwoTone-wO_FwCG2.js";import"./DropdownMenu-BOshP4Lw.js";import"./Button-DpEdso7U.js";import"./createSimplePaletteValueFilter-CVxb3bkw.js";import"./ButtonBase-CIatjECH.js";import"./CircularProgress-BaB00T0S.js";import"./Typography-Cw2XNjg-.js";import"./index-DZevvUUp.js";import"./extendSxProp-Rcv_0IQY.js";import"./Fade-CMbKBr8t.js";import"./Paper-BpBXdwqK.js";import"./ClickAwayListener-CUDdCrci.js";import"./MenuList-C6q67irZ.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Zh1xHg4x.js";import"./MenuItem-BSkbSapg.js";import"./dividerClasses-BpWhG_Zs.js";import"./ListItemIcon-BQI6IXxR.js";import"./ListItemText-DbZ1Gamd.js";import"./Divider-dMtM0P2c.js";import"./IconSvgButton-17SCtKgO.js";import"./IconButton-MaLeM1Vu.js";import"./index-dY4nSUzd.js";import"./getThemeProps-DMOl_SnU.js";import"./Box-CuWsxWCp.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
