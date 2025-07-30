import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-D6HlXLcI.js";import{C as p}from"./ComplexMenu-Bch0Y59I.js";import"./createSvgIcon-DVOgd3qF.js";import"./index-DgaCf7Kz.js";import"./iframe-B1CNHrWE.js";import"./createTheme-BIoZiSJF.js";import"./DefaultPropsProvider-Cpn2jCy0.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CYPUqhXU.js";import"./useTheme-BEQFPRS7.js";import"./Tooltip-DsrESnup.js";import"./index-iXl4ujZe.js";import"./useSlot-Dy_r826j.js";import"./useForkRef-1fgEFBgR.js";import"./useTimeout-Cc9RCyEJ.js";import"./useControlled-bBCZXbID.js";import"./getReactElementRef-BRntU3LT.js";import"./index-Ba10pb3e.js";import"./index-Bb424CdL.js";import"./Grow-BkJWwYGk.js";import"./Popper-CCWzRaqT.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-D6C5EYjf.js";import"./ContentCopyTwoTone-BeO4WnpA.js";import"./HelpOutlineTwoTone-CWMzpldG.js";import"./ErrorOutlined-Bnxt7BSA.js";import"./GetAppTwoTone-Bn_4AnbG.js";import"./InfoOutlined-BaQxgyLS.js";import"./PhoneTwoTone-Vr6Noced.js";import"./DeleteTwoTone-whUMPGtS.js";import"./CheckCircleTwoTone-BWsVejfq.js";import"./DropdownMenu-H6AHOtOQ.js";import"./Button-BW8GRwAx.js";import"./createSimplePaletteValueFilter-hBRB8UPE.js";import"./ButtonBase-LKp-H-Rx.js";import"./CircularProgress-Bkq51cd7.js";import"./Typography-VYH7Cv1h.js";import"./index-0bNTE8cr.js";import"./extendSxProp-C908ClJ5.js";import"./Fade-BuQWl4aG.js";import"./Paper-DgCuzQY7.js";import"./ClickAwayListener-KhVrE1U0.js";import"./MenuList-Bar0qNRW.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-XJ7BzhAl.js";import"./MenuItem-Dc0VdOIK.js";import"./dividerClasses-Cr2ktDRW.js";import"./ListItemIcon-Bp4ZMKdT.js";import"./ListItemText-DIff-5lA.js";import"./Divider-iGIqnez4.js";import"./IconSvgButton-B3TDXLeM.js";import"./IconButton-v1J1wQJp.js";import"./index-BiPbt4hm.js";import"./getThemeProps-BuTfeov7.js";import"./Box-Bi2d1Mae.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
