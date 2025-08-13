import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BFlHK7Uz.js";import{C as p}from"./ComplexMenu-BTSEpJ7-.js";import"./createSvgIcon-CXVdsj8-.js";import"./index-BXKz6aQc.js";import"./iframe-MMJy9CQd.js";import"./createTheme-C_wRPl7y.js";import"./DefaultPropsProvider-vF5CnCif.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BQVHpxoO.js";import"./useTheme-D5Wadm_k.js";import"./Tooltip-Cfxqtttq.js";import"./index-Bu3XuMqV.js";import"./useSlot-ExIhixvG.js";import"./useForkRef-CKBDIvfI.js";import"./useTimeout-BK6HSxCV.js";import"./useControlled-CBdhJZcP.js";import"./getReactElementRef-CJrJOS35.js";import"./index-DJp0rd-F.js";import"./index-7uKmVFf-.js";import"./Grow-Ih-rarU-.js";import"./Popper-D9qy2WGi.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Dr9GWRJ5.js";import"./ContentCopyTwoTone-BePB9ubQ.js";import"./HelpOutlineTwoTone-j9nQ8jXY.js";import"./ErrorOutlined-DVwrOcZT.js";import"./GetAppTwoTone-bFcTQUNh.js";import"./InfoOutlined-BFJbaXDD.js";import"./PhoneTwoTone-BUkP8DU6.js";import"./DeleteTwoTone-DyFdoDUF.js";import"./CheckCircleTwoTone-B64HwfWe.js";import"./DropdownMenu-CChQZUrH.js";import"./Button-DFPesTt6.js";import"./createSimplePaletteValueFilter-BRqATs5r.js";import"./ButtonBase-D6fT5JND.js";import"./CircularProgress-CDNCmXiM.js";import"./Typography-xiYCCLrN.js";import"./index-DPLtfnrZ.js";import"./extendSxProp-Ohl157Sw.js";import"./Fade-ByP9BbwY.js";import"./Paper-MTbdUUir.js";import"./ClickAwayListener-DU_4-MjF.js";import"./MenuList-DO5-UfBt.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-nFSmLpOG.js";import"./MenuItem-nHpDf5-o.js";import"./dividerClasses-F8Natzqx.js";import"./ListItemIcon-t9Hm-gzX.js";import"./ListItemText-Cc7Vmi17.js";import"./Divider-Bb68pMhJ.js";import"./IconSvgButton-BHRwW49b.js";import"./IconButton-hrPMD4_P.js";import"./index-Cgr1tEYa.js";import"./getThemeProps-3bpTcI1W.js";import"./Box-CIgf6-IL.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
