import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-D9te7slo.js";import{C as p}from"./ComplexMenu-DVTdkbh2.js";import"./createSvgIcon-D26Ik47l.js";import"./index-CyaC6C9M.js";import"./iframe-DVO2sOA7.js";import"./createTheme-H1Dsx0f2.js";import"./DefaultPropsProvider-igusQ6nr.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Dzwgi_yn.js";import"./useTheme-2WTqdYsP.js";import"./Tooltip-6R1JgVQo.js";import"./index-CXR7n0Cv.js";import"./useSlot-DtqzQqwD.js";import"./useForkRef-BdoLN6De.js";import"./useTimeout-DnzmxlwV.js";import"./useControlled-j4hQ7Q1o.js";import"./getReactElementRef-C9kSLM4V.js";import"./index-Oc3CgUQO.js";import"./index-DxB4MPXu.js";import"./Grow-UQ58OAOl.js";import"./Popper-ROR_DG8Z.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BdkeC9v6.js";import"./ContentCopyTwoTone-Dlnh_UQv.js";import"./HelpOutlineTwoTone-CVP5Bble.js";import"./ErrorOutlined-soahGrw7.js";import"./GetAppTwoTone-C8l0qJr-.js";import"./InfoOutlined-BEpdIFNF.js";import"./PhoneTwoTone-Cx8bA6ZP.js";import"./DeleteTwoTone-DLQVI-Hp.js";import"./CheckCircleTwoTone-BH5aKRhu.js";import"./DropdownMenu-DIuq2X3s.js";import"./Button-DY4-erp3.js";import"./createSimplePaletteValueFilter-DXhg1chW.js";import"./ButtonBase-DeKe3_Pq.js";import"./CircularProgress-HR6r5QDp.js";import"./Typography-st_y82mL.js";import"./index-CV5xniWo.js";import"./extendSxProp-aFKfhcg8.js";import"./Fade-YGgjrwuC.js";import"./Paper-C1zodLdI.js";import"./ClickAwayListener-DJZi5PU9.js";import"./MenuList-QX7VRZAM.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DI4Pfp66.js";import"./MenuItem-Cz_YT6yK.js";import"./dividerClasses-BnfKdSIr.js";import"./ListItemIcon-DTWimy4i.js";import"./ListItemText-46e_md7h.js";import"./Divider-BaTy98xK.js";import"./IconSvgButton-DOY2XMur.js";import"./IconButton-B4lJlp-J.js";import"./index-Cp2d5kDC.js";import"./getThemeProps-DUb0x1pd.js";import"./Box-TtuRu3g-.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
