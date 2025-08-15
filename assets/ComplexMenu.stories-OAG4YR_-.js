import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B9hfSZ8b.js";import{C as p}from"./ComplexMenu-DBM-5pVZ.js";import"./createSvgIcon-C0GalzBE.js";import"./index-BULbjeCJ.js";import"./iframe-D8Kty_Cx.js";import"./createTheme-ev_cnLba.js";import"./DefaultPropsProvider-BYuvptnG.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-B5FTPKZL.js";import"./useTheme-dcyxTKNU.js";import"./Tooltip-BLYw3Ezs.js";import"./index-B4uz7QPW.js";import"./useSlot-BwDIOyOX.js";import"./useForkRef-7bnDI6EI.js";import"./useTimeout-DWmVZNbT.js";import"./useControlled-ByKzLjYb.js";import"./getReactElementRef-D0uGMMsH.js";import"./index-fk2bcQrb.js";import"./index-Dct6V00c.js";import"./Grow-D5RDzHRC.js";import"./Popper-1vHQSSRm.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BOldY-gg.js";import"./ContentCopyTwoTone-8iMl59pp.js";import"./HelpOutlineTwoTone-cEfGehVY.js";import"./ErrorOutlined-B2IUGmwu.js";import"./GetAppTwoTone-HQzW4G29.js";import"./InfoOutlined-Cuz6UmXs.js";import"./PhoneTwoTone-DvS3lZTo.js";import"./DeleteTwoTone-Uo3InDYw.js";import"./CheckCircleTwoTone-CxOtohD-.js";import"./DropdownMenu-Dh58oEuY.js";import"./Button-r_CHdG4P.js";import"./createSimplePaletteValueFilter-C5m0hHOH.js";import"./ButtonBase-CiAIFq4G.js";import"./CircularProgress-BwBC6jxn.js";import"./Typography-DitlkZyP.js";import"./index-ClN6qXii.js";import"./extendSxProp-Ce12OY0O.js";import"./Fade-7vaEf5cW.js";import"./Paper-Cx_w1032.js";import"./ClickAwayListener-BbaBQeHw.js";import"./MenuList-Dd4jdJLB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-B5DVtVKN.js";import"./MenuItem-Bgzxc3eL.js";import"./dividerClasses-CnMYlE5n.js";import"./ListItemIcon-Dx61L7Zu.js";import"./ListItemText-Da8BPeSo.js";import"./Divider-ByveBpYk.js";import"./IconSvgButton-B4vNc3Fv.js";import"./IconButton-DMIkHh5_.js";import"./index-CXmlWm6P.js";import"./getThemeProps-BORvnqwy.js";import"./Box-DqnviQW6.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
