import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DI5HzJK7.js";import{C as p}from"./ComplexMenu-C9nT3ZVL.js";import"./createSvgIcon-Ds67miPL.js";import"./index-CJTqbwg9.js";import"./iframe-CG85BzK6.js";import"./createTheme-gj4ta8JK.js";import"./DefaultPropsProvider-BIvMs3xX.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-J3HQsDMf.js";import"./useTheme-DHaXmWDd.js";import"./Tooltip-_Br_YO6O.js";import"./index-BTTzR3FC.js";import"./useSlot-C9QU161m.js";import"./useForkRef-CL-HmWE-.js";import"./useTimeout-DDPxidDq.js";import"./useControlled-CGanW96O.js";import"./getReactElementRef-DefmUWlD.js";import"./index-DhqT-wZf.js";import"./index-B30IKtuV.js";import"./Grow-DT56OTPx.js";import"./Popper-TkGtPLMk.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Bee9fbFw.js";import"./ContentCopyTwoTone-DpyS5FJf.js";import"./HelpOutlineTwoTone-D0liaSOs.js";import"./ErrorOutlined-CYhg70ib.js";import"./GetAppTwoTone-qzHkAbHR.js";import"./InfoOutlined-2sQwBhqB.js";import"./PhoneTwoTone-C7Fa0K8P.js";import"./DeleteTwoTone-CyqXu2eV.js";import"./CheckCircleTwoTone-DRnqgNMo.js";import"./DropdownMenu-CkDZbPOT.js";import"./Button-D8a1OC-O.js";import"./createSimplePaletteValueFilter-Xz4nl1-g.js";import"./ButtonBase-CmahN1yA.js";import"./CircularProgress-BBZlh3jv.js";import"./Typography-BjJo8e6h.js";import"./index-ClhWbTH2.js";import"./extendSxProp-LD-I1WVR.js";import"./Fade-BO0WQVeb.js";import"./Paper-_TypEQXS.js";import"./ClickAwayListener-Bz0pJjhC.js";import"./MenuList-DCnhoR3V.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CFDPBle0.js";import"./MenuItem-CfahlDDS.js";import"./dividerClasses-scKEgmB9.js";import"./ListItemIcon-BQzZMtAM.js";import"./ListItemText-DEwxI6cl.js";import"./Divider-CDhk1K_B.js";import"./IconSvgButton-PQT9ueYx.js";import"./IconButton-BVm2k0V8.js";import"./index-CHw8JSXS.js";import"./getThemeProps-BkNvNRVH.js";import"./Box-DO5is7mO.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
