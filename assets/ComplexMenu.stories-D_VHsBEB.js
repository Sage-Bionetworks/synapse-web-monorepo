import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-aZB5eN_4.js";import{C as p}from"./ComplexMenu-CLKC3EaU.js";import"./createSvgIcon-CvoIu9Sh.js";import"./index-ByQ0enQ_.js";import"./iframe-qffJBPgR.js";import"./createTheme-RhL5bwVE.js";import"./DefaultPropsProvider-64Swdv2T.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-YIUbe7eG.js";import"./useTheme-aRp2Pb7j.js";import"./Tooltip-CtnYvlL4.js";import"./index-YPTaOPvf.js";import"./useSlot-DRWAAySF.js";import"./useForkRef-Ckn1HaZS.js";import"./useTimeout-Doxj9_dA.js";import"./useControlled-DI2UICES.js";import"./getReactElementRef-CYVllaoK.js";import"./index-C1Cv6qSE.js";import"./index-BVRNkw6h.js";import"./Grow-B8xivWT7.js";import"./Popper-DaOitWJ-.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DBUipnfS.js";import"./ContentCopyTwoTone-BL3pIHSi.js";import"./HelpOutlineTwoTone-CMQ0nvlt.js";import"./ErrorOutlined-DYSnLEYb.js";import"./GetAppTwoTone-B1dF-Rvf.js";import"./InfoOutlined-DGiWxeaV.js";import"./PhoneTwoTone-BPogWNEO.js";import"./DeleteTwoTone-bv1b-YxP.js";import"./CheckCircleTwoTone-qxJWfbf1.js";import"./DropdownMenu-Cu-pi7tp.js";import"./Button-De9dJMeU.js";import"./createSimplePaletteValueFilter-D0UDgssp.js";import"./ButtonBase-o7r7j6z6.js";import"./CircularProgress-C_fK4DGM.js";import"./Typography-CN7eQm76.js";import"./index-Dxr02uWA.js";import"./extendSxProp-STyG-2xm.js";import"./Fade-BKhuncpj.js";import"./Paper-Bj08f0KH.js";import"./ClickAwayListener-BLydFwEl.js";import"./MenuList-Bdbobwpg.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-hraHB7LI.js";import"./MenuItem-CTudE_I7.js";import"./dividerClasses-DEwlQbxH.js";import"./ListItemIcon-6BXMysym.js";import"./ListItemText-th3z5n3x.js";import"./Divider-C5jyuzL4.js";import"./IconSvgButton-B-xtVPij.js";import"./IconButton-C4K_i--W.js";import"./index-DzGR7_34.js";import"./getThemeProps-B2ultWce.js";import"./Box-T9uDT5Iy.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
