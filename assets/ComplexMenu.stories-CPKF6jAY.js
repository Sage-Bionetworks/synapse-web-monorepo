import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CGk5ohYi.js";import{C as p}from"./ComplexMenu-H8h6FDL-.js";import"./createSvgIcon-BgawE0cA.js";import"./index-DWtRjqxE.js";import"./iframe-dC7zyD38.js";import"./createTheme-B8tVnoKa.js";import"./DefaultPropsProvider-BOBWKWsP.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Bqfldhhz.js";import"./useTheme-44ZyrYIV.js";import"./Tooltip-ChGVg_eO.js";import"./index-Bh9Mm5w5.js";import"./useSlot-Bbu2_Uh5.js";import"./useForkRef-BsHVNaER.js";import"./useTimeout-C10Fy58h.js";import"./useControlled-jIUY62E0.js";import"./getReactElementRef-DFZw1bWU.js";import"./index-DWZIDMAz.js";import"./index-DHmZPXnJ.js";import"./Grow-egikrnTN.js";import"./Popper-8zb1kIwC.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Bpy0blym.js";import"./ContentCopyTwoTone-Bi6AO8gU.js";import"./HelpOutlineTwoTone-Bvm_CqdB.js";import"./ErrorOutlined-DaTJQg9o.js";import"./GetAppTwoTone-BmEU5pch.js";import"./InfoOutlined-DikkO3m_.js";import"./PhoneTwoTone-DClaxDbD.js";import"./DeleteTwoTone-BfA2zq0h.js";import"./CheckCircleTwoTone-puf-7GIZ.js";import"./DropdownMenu-DQ20t119.js";import"./Button-BsTgAid7.js";import"./createSimplePaletteValueFilter-CI1PPbZz.js";import"./ButtonBase-eKGtCu5K.js";import"./CircularProgress-Bepf3adF.js";import"./Typography-8YdQWFwx.js";import"./index-6HQiBBz4.js";import"./extendSxProp-B1uoARpz.js";import"./Fade-6tQ1BYQE.js";import"./Paper-BN7kDLUZ.js";import"./ClickAwayListener-cCk8f9_L.js";import"./MenuList-s5Qx9jiz.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DFnWK3Vu.js";import"./MenuItem-gee2SKvD.js";import"./dividerClasses-B_QfLLGv.js";import"./ListItemIcon-CLMrducl.js";import"./ListItemText-DMaUGfth.js";import"./Divider-2FjfnQKs.js";import"./IconSvgButton-C4Je7xBa.js";import"./IconButton-BYWzvY5r.js";import"./index-D_3Y0Qak.js";import"./getThemeProps-DtfQR3gl.js";import"./Box-CJwkuUVc.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
