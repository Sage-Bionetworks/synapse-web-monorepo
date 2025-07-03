import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DQtk_5NY.js";import{C as p}from"./ComplexMenu-C6XGmDhn.js";import"./createSvgIcon-DrDQmURV.js";import"./index-DlUhpUTc.js";import"./iframe-kwdT_gk1.js";import"./createTheme-C6xqN3pM.js";import"./DefaultPropsProvider-ZknljbvO.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DAI1kBpo.js";import"./useTheme-Bco7y1aE.js";import"./Tooltip-DwMFGR_2.js";import"./index-DAMS7aZF.js";import"./useSlot-h2t-XlqD.js";import"./useForkRef-C5oUk0jn.js";import"./useTimeout-Dg3x6uxz.js";import"./useControlled-CqqG4mPg.js";import"./getReactElementRef-CMkytmwe.js";import"./index-Baaqchp8.js";import"./index-BRb218D6.js";import"./Grow-Bm1Z1TG3.js";import"./Popper-Bx5KeZ6t.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BLhV00ve.js";import"./ContentCopyTwoTone-C0Kevp1N.js";import"./HelpOutlineTwoTone-BTj-s0oi.js";import"./ErrorOutlined-DcSMgphp.js";import"./GetAppTwoTone-GySbpEEf.js";import"./InfoOutlined-DcoPBxxn.js";import"./PhoneTwoTone-BpXPdaXp.js";import"./DeleteTwoTone-DWUn5FQO.js";import"./CheckCircleTwoTone-EV8cvC11.js";import"./DropdownMenu-BiYzngMB.js";import"./Button-yc9m_HDy.js";import"./createSimplePaletteValueFilter-Z6XeO5iR.js";import"./ButtonBase-UNpQfVY-.js";import"./CircularProgress-z5siZ5lQ.js";import"./Typography-BQKAxsEC.js";import"./index-BzF0Zbb_.js";import"./extendSxProp-C3CPfF_b.js";import"./Fade-BgVJQMF-.js";import"./Paper-BWKjBoPp.js";import"./ClickAwayListener-BZNVuDg3.js";import"./MenuList-D7FQqb4r.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CZrstAvs.js";import"./MenuItem-C-wjZRC7.js";import"./dividerClasses-fe2oNGPT.js";import"./ListItemIcon-N_Ru3HUB.js";import"./ListItemText-DTCpoPRF.js";import"./Divider-DmN77_6W.js";import"./IconSvgButton-QVsyZcxn.js";import"./IconButton-GyuCtgJk.js";import"./index-B7h9hWDu.js";import"./getThemeProps-B1Qtp15k.js";import"./Box-CySOkTPc.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
