import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-R8bJKiJP.js";import{C as p}from"./ComplexMenu-Dt57rK8H.js";import"./createSvgIcon-bnX5AEip.js";import"./index-RrA2ZeU8.js";import"./iframe-Cl7yHxey.js";import"./createTheme-BL3Erky_.js";import"./DefaultPropsProvider-COwJEhlj.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Ct7FFNBK.js";import"./useTheme-99fH-d8E.js";import"./Tooltip-QNoITWuX.js";import"./index-u7SOeJ0n.js";import"./useSlot-DPCj5w37.js";import"./useForkRef-7FksC7Wk.js";import"./useTimeout-DGdq9XXh.js";import"./useControlled-D-DOyfjM.js";import"./getReactElementRef-C_WWxu9h.js";import"./index-Bsynu-fh.js";import"./index--rNMgt8r.js";import"./Grow-BjkRkIh9.js";import"./Popper-D2G1xZsN.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-T7y-Tb5t.js";import"./ContentCopyTwoTone-ChJ7Bn9F.js";import"./HelpOutlineTwoTone-DFFMWZRI.js";import"./ErrorOutlined-B0FxewhZ.js";import"./GetAppTwoTone-CQbVCegE.js";import"./InfoOutlined-BL3c0blj.js";import"./PhoneTwoTone-mqvYEgj4.js";import"./DeleteTwoTone-CuaYT1kz.js";import"./CheckCircleTwoTone-C2zsmKmG.js";import"./DropdownMenu-BgTmn7oD.js";import"./Button-BEEyN1i5.js";import"./createSimplePaletteValueFilter-BTUUkyHX.js";import"./ButtonBase-DZeD6OmU.js";import"./CircularProgress-JqIc0wtk.js";import"./Typography-C3KVIo5J.js";import"./index-CeXYih2O.js";import"./extendSxProp-C9QzDRlU.js";import"./Fade-DvuAdk7a.js";import"./Paper-DiNvo0OR.js";import"./ClickAwayListener-0-8j9UKu.js";import"./MenuList-DF6wR_ad.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Dj3-J2yO.js";import"./MenuItem-JendoIIx.js";import"./dividerClasses-CS3tK7OU.js";import"./ListItemIcon-CPVFfyN8.js";import"./ListItemText-ClN4vt3f.js";import"./Divider-s9cRpzg7.js";import"./IconSvgButton-DyV5caHy.js";import"./IconButton-S1pQl1Qb.js";import"./index-CC34Hw3e.js";import"./getThemeProps-BILLkI9C.js";import"./Box-C4n8VpXx.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
