import{j as i}from"./jsx-runtime-fkddYsRa.js";import{I as n}from"./IconSvg-BaMv0zRw.js";import{C as p}from"./ComplexMenu-DjfaCJsd.js";import"./index-Cv6nX037.js";import"./iframe-DgCb13ZA.js";import"./createSvgIcon-BOkPVFng.js";import"./createTheme-D0G-YdBM.js";import"./DefaultPropsProvider-MkP_nBB1.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-ew_Nfzhg.js";import"./useTheme-5BzmGwuh.js";import"./Tooltip-B4z_2CfG.js";import"./index-A5Xj5tp_.js";import"./useSlot-D9bUdOMX.js";import"./useForkRef-BhjVp7Fj.js";import"./useTimeout-CWy7v3j4.js";import"./useControlled-C9uiSwtu.js";import"./getReactElementRef-C8j0xIA6.js";import"./index-yKH7ayG0.js";import"./index-5fD7g6aK.js";import"./Grow-vhaNN5gj.js";import"./Popper-CzOnVF7V.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-D0El_FPe.js";import"./ContentCopyTwoTone-qVwSRsLe.js";import"./HelpOutlineTwoTone-BfQEzetQ.js";import"./ErrorOutlined-Bre7TE1Q.js";import"./GetAppTwoTone-FD9IKOWy.js";import"./InfoOutlined-Dh2F-a4e.js";import"./PhoneTwoTone-BQNx281W.js";import"./DeleteTwoTone-B4KzBZke.js";import"./CheckCircleTwoTone-BgfHa_Vb.js";import"./DropdownMenu-BgUrn6pZ.js";import"./Button-CmrMbQmW.js";import"./createSimplePaletteValueFilter-CetX1-So.js";import"./ButtonBase-LNl8xRHv.js";import"./CircularProgress-Ci1F78nB.js";import"./Typography-Cned48Hn.js";import"./index-DoLSYN_E.js";import"./extendSxProp-DwLH-5iL.js";import"./Fade-BqFRP1kA.js";import"./Paper-CRdKJZEk.js";import"./ClickAwayListener-CZsKMghQ.js";import"./MenuList-BDvkBLtD.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BLAw0CPp.js";import"./MenuItem-_77kgq8W.js";import"./dividerClasses-D9o2QFv0.js";import"./ListItemIcon-BjxaiamP.js";import"./ListItemText-I5dJx_gU.js";import"./Divider-DY4yCjch.js";import"./IconSvgButton-Dxp2obLq.js";import"./IconButton-C7gfjzB0.js";import"./index-wkg1D99J.js";import"./getThemeProps-D-_clwMN.js";import"./Box-BhadhPsK.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
