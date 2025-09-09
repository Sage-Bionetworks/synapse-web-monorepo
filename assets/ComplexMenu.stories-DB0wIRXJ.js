import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-Dzdt2uNu.js";import{C as p}from"./ComplexMenu-BWHqSj8T.js";import"./createSvgIcon-DgFDwm57.js";import"./index-CmvBv4Ni.js";import"./iframe-n5mwkj0K.js";import"./createTheme-DekxhsWr.js";import"./DefaultPropsProvider-DurKmMsP.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BvD-CNZH.js";import"./useTheme-DS1z3Y1X.js";import"./Tooltip-BvV6KBuI.js";import"./index-tHFahJkl.js";import"./useSlot-BA0kN4AN.js";import"./useForkRef-BCeimwSg.js";import"./useTimeout-CcoqqpEg.js";import"./useControlled-CyRm7kwD.js";import"./getReactElementRef-C0n-5JA5.js";import"./index-C3w_Pjwj.js";import"./index-nIDE90q0.js";import"./Grow-BY_78XwL.js";import"./Popper-BGRgwHFZ.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-C_LZjVJW.js";import"./ContentCopyTwoTone-CBOa6rTQ.js";import"./HelpOutlineTwoTone-DYyFsJa6.js";import"./ErrorOutlined-sIDpwK34.js";import"./GetAppTwoTone-DK1PyQXS.js";import"./InfoOutlined-CgTiValS.js";import"./PhoneTwoTone-CIEVoRjE.js";import"./DeleteTwoTone-Ch_QhBoA.js";import"./CheckCircleTwoTone-7SP1PUwv.js";import"./DropdownMenu-BLQCGhFK.js";import"./Button-CI5AcPJ7.js";import"./createSimplePaletteValueFilter-BqCAAfVF.js";import"./ButtonBase-XDzeNizs.js";import"./CircularProgress-BGQJ8oah.js";import"./Typography-CLeqY5_n.js";import"./index-C7caafkY.js";import"./extendSxProp-Dh-qlJOe.js";import"./Fade-BtxUg5az.js";import"./Paper-84Q1WhB6.js";import"./ClickAwayListener-CBV7B09E.js";import"./MenuList-a2ORzwBP.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CzTGxBrn.js";import"./MenuItem-soRHqBLx.js";import"./dividerClasses-ByqpK6K3.js";import"./ListItemIcon-DugU56Oz.js";import"./ListItemText-DvAtT9tK.js";import"./Divider-BlKX6KNH.js";import"./IconSvgButton-BIgAum-u.js";import"./IconButton-i3mZ6Ezw.js";import"./index-CKKEt_nU.js";import"./getThemeProps-jaih5qkn.js";import"./Box-BhLrdYXi.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
