import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DqkeumFR.js";import{C as p}from"./ComplexMenu-is9LlKbQ.js";import"./createSvgIcon-Dx2LBnYP.js";import"./index-ByFgbSi1.js";import"./iframe-DQjbfcQ9.js";import"./createTheme-i8RyPaYL.js";import"./DefaultPropsProvider-6pJ8FZcR.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BSYxzT2u.js";import"./useTheme-d8TpmLbK.js";import"./Tooltip-Z97fGrMz.js";import"./index-Dmk_WNz3.js";import"./useSlot-C0bdZSh0.js";import"./useForkRef-23rwbX6-.js";import"./useTimeout-CSjKXMwL.js";import"./useControlled-CEl4StEV.js";import"./getReactElementRef-DnnqkrYN.js";import"./index-DXPb9-O7.js";import"./index-D164aDtB.js";import"./Grow-B4czxb_I.js";import"./Popper-Dj-99SyI.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-D3_29qIQ.js";import"./ContentCopyTwoTone-DNL7O9lZ.js";import"./HelpOutlineTwoTone-B09gkyJr.js";import"./ErrorOutlined-sBc0ei4o.js";import"./GetAppTwoTone-DXEngtBx.js";import"./InfoOutlined-J5e1RFA8.js";import"./PhoneTwoTone-B5Z9ic1m.js";import"./DeleteTwoTone-C3jTAtTt.js";import"./CheckCircleTwoTone-UKzD70d6.js";import"./DropdownMenu-C6gC9npI.js";import"./Button-CYldgbV6.js";import"./createSimplePaletteValueFilter-Bc_Jnzdb.js";import"./ButtonBase-CTwLXAXZ.js";import"./CircularProgress-DEGgbvx4.js";import"./Typography-CY333YIv.js";import"./index-OanGvPr5.js";import"./extendSxProp-Dtt1Z7Rz.js";import"./Fade-55a661Ax.js";import"./Paper-QA66fCso.js";import"./ClickAwayListener-DiPtj9kP.js";import"./MenuList-O3P_kuGv.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CPo4bp3K.js";import"./MenuItem-DOKnbIbK.js";import"./dividerClasses-CagOFU11.js";import"./ListItemIcon-D1h7bEHf.js";import"./ListItemText-Bwn1aHKw.js";import"./Divider-mUTwtG0d.js";import"./IconSvgButton-Zjg0pKtQ.js";import"./IconButton-DxywuGM_.js";import"./index-CKPUI8PB.js";import"./getThemeProps-B9cF21qQ.js";import"./Box-CZ8nomX1.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
