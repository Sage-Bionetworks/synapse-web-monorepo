import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-3vzQJqx7.js";import{C as p}from"./ComplexMenu-BiF2G8jz.js";import"./createSvgIcon-BrnNN5qG.js";import"./index-C5xsNgZG.js";import"./iframe-DjJstJjx.js";import"./createTheme-x4ryc2Ug.js";import"./DefaultPropsProvider-CwkbiRMZ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-lhY-n5X2.js";import"./useTheme-D3c8EOn8.js";import"./Tooltip-y1vasDyH.js";import"./index-k1TfjJ7z.js";import"./useSlot-B8IHFzfX.js";import"./useForkRef-DWIqmgSu.js";import"./useTimeout-D-uIEIeC.js";import"./useControlled-DAzrAxdX.js";import"./getReactElementRef-C7DXzbxC.js";import"./index-7vxEK90g.js";import"./index-CwtGRN4N.js";import"./Grow-BJc1AeJd.js";import"./Popper-DMgncvK7.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-d-2dOLoE.js";import"./ContentCopyTwoTone-DjEhH_5p.js";import"./HelpOutlineTwoTone-Bhz2esCG.js";import"./ErrorOutlined-BPoEx94A.js";import"./GetAppTwoTone-ydoVlNxv.js";import"./InfoOutlined-Dgd_s7kU.js";import"./PhoneTwoTone-CxiFpRE8.js";import"./DeleteTwoTone-D3X_HuX7.js";import"./CheckCircleTwoTone-DGTSwBS2.js";import"./DropdownMenu-C9voIyyy.js";import"./Button-D0nWNt-2.js";import"./createSimplePaletteValueFilter-CL52-X8Y.js";import"./ButtonBase-DSSoqZCh.js";import"./CircularProgress-BvSla5A0.js";import"./Typography-Bj14LD1K.js";import"./index-Dcy6S4kN.js";import"./extendSxProp-Cxj75GXg.js";import"./Fade-8jyKvWbc.js";import"./Paper-CRrJPGQt.js";import"./ClickAwayListener-DAgIiq7F.js";import"./MenuList-CFpfubiK.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BCokWRsZ.js";import"./MenuItem-D7sgYUgN.js";import"./dividerClasses-CeL3Lo4R.js";import"./ListItemIcon-B7G7OCD_.js";import"./ListItemText-CY6NX5Zj.js";import"./Divider-gfoJ-PiC.js";import"./IconSvgButton-CqlCWQvW.js";import"./IconButton-B4vCrkNM.js";import"./index-3a8h8uiT.js";import"./getThemeProps-BzelbPlK.js";import"./Box-DfWINr92.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
