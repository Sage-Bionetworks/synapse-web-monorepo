import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-yAbWzqPw.js";import{C as p}from"./ComplexMenu-Cz-0TNCS.js";import"./createSvgIcon-B4oujve6.js";import"./index-CfbPO5Pk.js";import"./iframe-B73v8h_Y.js";import"./createTheme-B8QSyZvJ.js";import"./DefaultPropsProvider-E91GGLqj.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-5tq7elWw.js";import"./useTheme-kqh4Ll_I.js";import"./Tooltip-Buh_A6A3.js";import"./index-B8TmctUz.js";import"./useSlot-DbF0H-M6.js";import"./useForkRef-CNGHG2sd.js";import"./useTimeout-CngDlYNI.js";import"./useControlled-BTQkJmVV.js";import"./getReactElementRef-DqYwo8-I.js";import"./index-C1mw4Gna.js";import"./index-9kSQh7S9.js";import"./Grow-1A1uLTzL.js";import"./Popper-B67Zc9vL.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-lJNziix8.js";import"./ContentCopyTwoTone-DmIai3Do.js";import"./HelpOutlineTwoTone-DGwyBPym.js";import"./ErrorOutlined-CQxOASsB.js";import"./GetAppTwoTone-B7Q1cxEx.js";import"./InfoOutlined-CgyQ05ny.js";import"./PhoneTwoTone-BNlJ76MM.js";import"./DeleteTwoTone-BjEppDts.js";import"./CheckCircleTwoTone-BjY5vWtN.js";import"./DropdownMenu-VfU8tPdp.js";import"./Button-CaVEglZt.js";import"./createSimplePaletteValueFilter-DMZZiVpQ.js";import"./ButtonBase-EQYK4HG0.js";import"./CircularProgress-Dwx-LJEp.js";import"./Typography-C496KcFS.js";import"./index-D_tds8oQ.js";import"./extendSxProp-BASXjWDU.js";import"./Fade-BbU8Qxyz.js";import"./Paper-DWy9BGA0.js";import"./ClickAwayListener-bWEbtpgx.js";import"./MenuList-BIilBKI0.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-ghJioupv.js";import"./MenuItem-DFGmOSXV.js";import"./dividerClasses-TleSuRgw.js";import"./ListItemIcon-CW9gHBhi.js";import"./ListItemText-4LAF8fYq.js";import"./Divider-BXomrrlb.js";import"./IconSvgButton-CWnNA6Jv.js";import"./IconButton-CNjLAA-N.js";import"./index-C9UaB5dT.js";import"./getThemeProps-CxBOemI1.js";import"./Box-C_8woQ6t.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
