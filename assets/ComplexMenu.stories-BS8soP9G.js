import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-C33yJokm.js";import{C as p}from"./ComplexMenu-5utMD7uv.js";import"./createSvgIcon-oOHEqfPt.js";import"./index-yCUnEpY5.js";import"./iframe-gNKfM8gk.js";import"./createTheme-B4aZ-Zb2.js";import"./DefaultPropsProvider-Cw4cD2Gs.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BmTDZfhV.js";import"./useTheme-6GaGjVsK.js";import"./Tooltip-B0dyqfMl.js";import"./index-Ju-LDmZ1.js";import"./useSlot-aoyyrGdd.js";import"./useForkRef-M_noYJ9D.js";import"./useTimeout-CuZ_JqjA.js";import"./useControlled-B6_8KTCH.js";import"./getReactElementRef-XvbMGsPx.js";import"./index-CeNEsVvN.js";import"./index-ADdtT980.js";import"./Grow-CgDG11Ji.js";import"./Popper-DF-ZzgM2.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-B-Xr0z1O.js";import"./ContentCopyTwoTone-htIEKJDr.js";import"./HelpOutlineTwoTone-F1e760Oi.js";import"./ErrorOutlined-BN0TbqnO.js";import"./GetAppTwoTone-BpzhjhlH.js";import"./InfoOutlined-0tAYF2RI.js";import"./PhoneTwoTone-Bswslxtb.js";import"./DeleteTwoTone-DZZ87wur.js";import"./CheckCircleTwoTone-Db5nc3S1.js";import"./DropdownMenu-BRKCNqFS.js";import"./Button-BfDj8hwD.js";import"./createSimplePaletteValueFilter-51s7PY1W.js";import"./ButtonBase-KeBM-9MT.js";import"./CircularProgress-Cf6g4eFb.js";import"./Typography-SZRRhZD9.js";import"./index-Dp2dJGDM.js";import"./extendSxProp-CIrdn-hR.js";import"./Fade-tqVDjiEK.js";import"./Paper-Cl6BDWzj.js";import"./ClickAwayListener-DfC_WHzv.js";import"./MenuList-BfTTd2WL.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Bwsz2GNb.js";import"./MenuItem-wIG7rLOG.js";import"./dividerClasses-DNC7BeK3.js";import"./ListItemIcon-CX-f3Vjt.js";import"./ListItemText-yetk5uq1.js";import"./Divider-D6jZ1zLO.js";import"./IconSvgButton-BanFcSNm.js";import"./IconButton-CY4FGYEd.js";import"./index-CQIjakL3.js";import"./getThemeProps-D8PjLR4-.js";import"./Box-BpOhxbKA.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
