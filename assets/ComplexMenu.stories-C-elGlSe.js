import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B6qPl49P.js";import{C as p}from"./ComplexMenu-BNe8Vlor.js";import"./createSvgIcon-DKQD7mOV.js";import"./index-BUsvr3pR.js";import"./iframe-BOf6LPjK.js";import"./createTheme-UonGQGw4.js";import"./DefaultPropsProvider-Df1PfarS.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-B7irvlgN.js";import"./useTheme-Cf0y_-BP.js";import"./Tooltip-yDHB8MiT.js";import"./index-CjNVpIRd.js";import"./useSlot-wrl7o3Ug.js";import"./useForkRef-CRv5njRE.js";import"./useTimeout-BMsv0ZJ3.js";import"./useControlled-DeIG_K28.js";import"./getReactElementRef-CRfSQGz0.js";import"./index-Bv-8_qSa.js";import"./index-BJ97qXsD.js";import"./Grow-BCPuHGGV.js";import"./Popper-Dpckc59n.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DI80rJqC.js";import"./ContentCopyTwoTone-BN6XYqBN.js";import"./HelpOutlineTwoTone-BbAHDVfy.js";import"./ErrorOutlined-B_h4mETi.js";import"./GetAppTwoTone-DHDnIGjn.js";import"./InfoOutlined-C22p-PZn.js";import"./PhoneTwoTone-Dyl8YMGD.js";import"./DeleteTwoTone-DSWiY1kz.js";import"./CheckCircleTwoTone-CnMK8m3r.js";import"./DropdownMenu-C6q6__qE.js";import"./Button-CkV_4l2j.js";import"./createSimplePaletteValueFilter-CJ-IbVpc.js";import"./ButtonBase-On86KBDi.js";import"./CircularProgress-BCAN28JR.js";import"./Typography-CBmUgXmK.js";import"./index-knRHlM1X.js";import"./extendSxProp-6X8i3Ual.js";import"./Fade-fuokgPOZ.js";import"./Paper-WLG-MfiP.js";import"./ClickAwayListener-CenNq_25.js";import"./MenuList-BylMeawR.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DD0XVRUa.js";import"./MenuItem-Btj_f3kI.js";import"./dividerClasses-CPKpQhlI.js";import"./ListItemIcon-mjVpR7b0.js";import"./ListItemText-Dmm_qYak.js";import"./Divider-B0csxFNT.js";import"./IconSvgButton-0a0dnlL1.js";import"./IconButton-BLusjQnA.js";import"./index-_iWFRWPJ.js";import"./getThemeProps-CiHhwHIs.js";import"./Box-CjXe8gIr.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
