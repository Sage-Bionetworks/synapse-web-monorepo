import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CozY35vj.js";import{C as p}from"./ComplexMenu-Bj7x4JjI.js";import"./createSvgIcon-BYl9tErA.js";import"./index-CQIGBc1V.js";import"./iframe-Btd2HHqG.js";import"./createTheme-CGDCJSPZ.js";import"./DefaultPropsProvider-DQ6R5GBJ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CqlqvvjI.js";import"./useTheme-BOBbHa5R.js";import"./Tooltip-KM72jp_q.js";import"./index-CMbZ97T8.js";import"./useSlot-CY2J-DXD.js";import"./useForkRef-BomXF6Jf.js";import"./useTimeout-yWZRAzgc.js";import"./useControlled-D1bjab3Z.js";import"./getReactElementRef-HUgpiq-4.js";import"./index-C7YFv4kW.js";import"./index-BmyLYUcK.js";import"./Grow-Co_9QBfH.js";import"./Popper-CWkQLibq.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BZotvral.js";import"./ContentCopyTwoTone-DvlRfAVZ.js";import"./HelpOutlineTwoTone-B0VI6r7D.js";import"./ErrorOutlined-DWUoxTKr.js";import"./GetAppTwoTone-DhTztcc5.js";import"./InfoOutlined-B30dv0DO.js";import"./PhoneTwoTone-qnA6WZmr.js";import"./DeleteTwoTone-ClE3jShY.js";import"./CheckCircleTwoTone-8PYVvi3U.js";import"./DropdownMenu-szr9-7cu.js";import"./Button-D3b_nwUa.js";import"./createSimplePaletteValueFilter-B7mx9_xn.js";import"./ButtonBase-FedZLqF7.js";import"./CircularProgress-B6Ebxn-f.js";import"./Typography-mrNgtu5t.js";import"./index-DVUrkwNx.js";import"./extendSxProp-4nhTMu5I.js";import"./Fade-URV8wb9u.js";import"./Paper-DZgcFg1z.js";import"./ClickAwayListener-WijnqYS9.js";import"./MenuList-BgdkKzWz.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Dj-GspL9.js";import"./MenuItem-DkX2R_md.js";import"./dividerClasses-CuioEEA7.js";import"./ListItemIcon-CTBvAIc_.js";import"./ListItemText-Dh2Xoo1m.js";import"./Divider-BtwEOwoq.js";import"./IconSvgButton-BPBU1H64.js";import"./IconButton-a7sHWGoK.js";import"./index-CsWOiUvC.js";import"./getThemeProps-DElxbgAZ.js";import"./Box-DTwKNAeW.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
