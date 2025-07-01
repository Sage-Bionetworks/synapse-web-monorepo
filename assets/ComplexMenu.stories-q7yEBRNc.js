import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-D154fS_O.js";import{C as p}from"./ComplexMenu-BkPe_BJl.js";import"./createSvgIcon-B6jxSWW-.js";import"./index-DJ7s27gv.js";import"./iframe-D0CinymP.js";import"./createTheme-DY7tfLgK.js";import"./DefaultPropsProvider-DsyVZICV.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BUf5_UJX.js";import"./useTheme-JQ5l8csr.js";import"./Tooltip-BCRDpw-n.js";import"./index-CJ9g_y5M.js";import"./useSlot-BHJawztZ.js";import"./useForkRef-Okwk8pY8.js";import"./useTimeout-BGSSVVff.js";import"./useControlled-BHf7nHaI.js";import"./getReactElementRef-Cn-IiLAf.js";import"./index-Buv9OFuL.js";import"./index-Dt-OJcf2.js";import"./Grow-DPqul1hx.js";import"./Popper-Dscz3i95.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-C1gIlivs.js";import"./ContentCopyTwoTone-CEQTrbpA.js";import"./HelpOutlineTwoTone-4gLiI0dk.js";import"./ErrorOutlined-0ifw3s4z.js";import"./GetAppTwoTone-B0HdrNWy.js";import"./InfoOutlined-BNkKo5IJ.js";import"./PhoneTwoTone-BgXXk7yC.js";import"./DeleteTwoTone-MDKu4r7q.js";import"./CheckCircleTwoTone-85F1yn7H.js";import"./DropdownMenu-C2J4T7dp.js";import"./Button-Z7sw75bx.js";import"./createSimplePaletteValueFilter-CcGeRbxj.js";import"./ButtonBase-DxqANTCq.js";import"./CircularProgress-DuyFbQBS.js";import"./Typography-D1TFYjH9.js";import"./index-B0gLw_60.js";import"./extendSxProp-CR7IlrIo.js";import"./Fade-e7XcL0GH.js";import"./Paper-BZmalIBk.js";import"./ClickAwayListener-C4cFrzuU.js";import"./MenuList-D29o0Lv_.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CTdELRxJ.js";import"./MenuItem-DngelRs6.js";import"./dividerClasses-BEeTL5hm.js";import"./ListItemIcon-DI0ApEXK.js";import"./ListItemText-B3Qyt8a3.js";import"./Divider-CrlZVq1Y.js";import"./IconSvgButton-DcKugJeP.js";import"./IconButton-_-2hYwOX.js";import"./index-Cxy_TOft.js";import"./getThemeProps-2R3ivTTN.js";import"./Box-BHiMh-E4.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
