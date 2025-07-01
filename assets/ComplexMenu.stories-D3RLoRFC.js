import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DwDt4WPh.js";import{C as p}from"./ComplexMenu-D2NGuAHU.js";import"./createSvgIcon-DoUBNCW0.js";import"./index-CNOD_coP.js";import"./iframe-B7beX9fc.js";import"./createTheme-Dr8QaAop.js";import"./DefaultPropsProvider-0BNkwUkh.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DTovFKgt.js";import"./useTheme-DZEQxr-3.js";import"./Tooltip-BVpBX0Tl.js";import"./index-BDcq4vhx.js";import"./useSlot-Cmo4uO1e.js";import"./useForkRef-Dh8WXGOQ.js";import"./useTimeout-C3wGn6Ja.js";import"./useControlled-Clk3odGP.js";import"./getReactElementRef-FzNjKFPL.js";import"./index-ts2EtFAQ.js";import"./index-DmQ8Zlzm.js";import"./Grow-xMuuKoQQ.js";import"./Popper-HBom_ZGM.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Daq56RG_.js";import"./ContentCopyTwoTone-DmKUAYdP.js";import"./HelpOutlineTwoTone-CrI0j0R8.js";import"./ErrorOutlined-Ce75rmAe.js";import"./GetAppTwoTone-Dh17eg0q.js";import"./InfoOutlined-1XBBRiLe.js";import"./PhoneTwoTone-MnqIxIwG.js";import"./DeleteTwoTone-CuqFynL1.js";import"./CheckCircleTwoTone-BDMbfUlA.js";import"./DropdownMenu-CtMh2ZM6.js";import"./Button-D3Wh7UHU.js";import"./createSimplePaletteValueFilter-Bi8T94Z2.js";import"./ButtonBase-BYXCgz1G.js";import"./CircularProgress-CgzCiAbs.js";import"./Typography-Cfe7s5kX.js";import"./index-Bed1RkRa.js";import"./extendSxProp-Bc2u4vrI.js";import"./Fade-CCyFKjzK.js";import"./Paper-DGfiId5j.js";import"./ClickAwayListener-CYoYah1s.js";import"./MenuList-D8n3NlLC.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-D6bDYUJQ.js";import"./MenuItem-BfpjFAqS.js";import"./dividerClasses-3ZmxHB4c.js";import"./ListItemIcon-C1rDrbuv.js";import"./ListItemText-BruHxN6V.js";import"./Divider-DipJIc7o.js";import"./IconSvgButton-A63TJiVI.js";import"./IconButton-XG9vKa8a.js";import"./index-B60KNJS1.js";import"./getThemeProps-BTbN-bVN.js";import"./Box-j1U5tBug.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
