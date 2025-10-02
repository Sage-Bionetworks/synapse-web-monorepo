import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DWFq-Ys4.js";import{C as p}from"./ComplexMenu-pTqxmAV6.js";import"./createSvgIcon--QUYyvLe.js";import"./index-BXzTDALf.js";import"./iframe-DqtMJ7kH.js";import"./createTheme-Cm05LnB0.js";import"./DefaultPropsProvider-CQjsmjzx.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BEoXmG8b.js";import"./useTheme-Bw_VFAy_.js";import"./Tooltip-D_YYABAH.js";import"./index-CNgLHgad.js";import"./useSlot-D-kym-2K.js";import"./useForkRef-DxVghhL0.js";import"./useTimeout-CAjSMdh0.js";import"./useControlled-BVj0-e3Z.js";import"./getReactElementRef-12JOJnF4.js";import"./index-Bd4oQ-C2.js";import"./index-DseqZZS0.js";import"./Grow-DDeYcOcx.js";import"./Popper-Bf618VVA.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BdYBqBmK.js";import"./ContentCopyTwoTone-CSKeQhSt.js";import"./HelpOutlineTwoTone-BAEXosc7.js";import"./ErrorOutlined-BsKXe2dD.js";import"./GetAppTwoTone-uJLieSaw.js";import"./InfoOutlined-DuDaCId4.js";import"./PhoneTwoTone-DforeRw5.js";import"./DeleteTwoTone-CJum2LSY.js";import"./CheckCircleTwoTone-BN5GUe2y.js";import"./DropdownMenu-CjZXslIL.js";import"./Button-CBJLa-RB.js";import"./createSimplePaletteValueFilter-VPPSjR6x.js";import"./ButtonBase-C2aQNHr6.js";import"./CircularProgress-DF4qmzkO.js";import"./Typography-ButTJgkW.js";import"./index-C6TBygr3.js";import"./extendSxProp-NTFwLVkN.js";import"./Fade-D5e0KJGg.js";import"./Paper-BQ-oZy9Y.js";import"./ClickAwayListener-TNChXEbJ.js";import"./MenuList-COGaXLAC.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DhZnya34.js";import"./MenuItem-7MqudSJx.js";import"./dividerClasses-C4GPfd71.js";import"./ListItemIcon-BhKkJyst.js";import"./ListItemText-wmbwJk0G.js";import"./Divider-CkiFKp6t.js";import"./IconSvgButton-BNh4Ye4x.js";import"./IconButton-CSrxkIE2.js";import"./index-DxEL70F0.js";import"./getThemeProps-Cdnw0_MW.js";import"./Box-Bc5MnF01.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
