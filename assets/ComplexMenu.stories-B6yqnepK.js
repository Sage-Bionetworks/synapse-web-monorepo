import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DSb2xh6s.js";import{C as p}from"./ComplexMenu-DDtitArF.js";import"./createSvgIcon-C7Y92pv9.js";import"./index-WFGZkfGQ.js";import"./iframe-DE8stXB9.js";import"./createTheme-5O93HVJl.js";import"./DefaultPropsProvider-CWWNlooN.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DTvwicwG.js";import"./useTheme-CrHUFg5h.js";import"./Tooltip-D6w5RXxh.js";import"./index-CkHOP_FM.js";import"./useSlot-DU_7KX09.js";import"./useForkRef-CyYB5Kx6.js";import"./useTimeout-DUcSAsaz.js";import"./useControlled-Bf8XxeTv.js";import"./getReactElementRef-oicLdd8e.js";import"./index-B1vVZwXe.js";import"./index-DLljrjFI.js";import"./Grow-CNV_tGPV.js";import"./Popper-CXSQlPF7.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BDfr2f_z.js";import"./ContentCopyTwoTone-DemgaLE3.js";import"./HelpOutlineTwoTone-DVh_9bFU.js";import"./ErrorOutlined-3WR9glXf.js";import"./GetAppTwoTone-DP-S6FIX.js";import"./InfoOutlined-CucsgmQd.js";import"./PhoneTwoTone-B6iicGaQ.js";import"./DeleteTwoTone-BblxrnE8.js";import"./CheckCircleTwoTone-BuWLjQ0I.js";import"./DropdownMenu-C7q38N78.js";import"./Button-XWZFAulY.js";import"./createSimplePaletteValueFilter-OVNBhgRo.js";import"./ButtonBase-iE-VM-jO.js";import"./CircularProgress-Dvg-ZYdT.js";import"./Typography-CbhbYSPG.js";import"./index-CNoXD2e7.js";import"./extendSxProp-BIfBmP65.js";import"./Fade-KSG4UTe1.js";import"./Paper-Q2IEgrqh.js";import"./ClickAwayListener-FMjLV4qb.js";import"./MenuList-8XOEuArx.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DZrTCpoG.js";import"./MenuItem-CQUm0KUv.js";import"./dividerClasses-ZH-R1U0k.js";import"./ListItemIcon-aFk2_Tl5.js";import"./ListItemText-SOwOUD11.js";import"./Divider-D0SB57V0.js";import"./IconSvgButton-3FM1TI2U.js";import"./IconButton-CS3CoVBF.js";import"./index-Buv6xaBP.js";import"./getThemeProps-B78isNmh.js";import"./Box-GHDzk8iC.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
