import{j as i}from"./jsx-runtime-jRxYWCwX.js";import{I as n}from"./IconSvg-DaFMq9tr.js";import{C as p}from"./ComplexMenu-BwXIKGi4.js";import"./index-2wQoqSko.js";import"./iframe-xHFrq_F7.js";import"./createSvgIcon-B9-0rLwX.js";import"./createTheme-CNfVkL0H.js";import"./DefaultPropsProvider-B8PV_5sS.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-P2ktGu7N.js";import"./useTheme-ScBftXUZ.js";import"./Tooltip-Mh1fqoQC.js";import"./index-DEUTnh1D.js";import"./useSlot-BfLx_dOI.js";import"./useForkRef-DMvEYMis.js";import"./useTimeout-DFO7OOTS.js";import"./useControlled-CcplrN4J.js";import"./getReactElementRef-BlC79LIf.js";import"./index-CGFHOidS.js";import"./index-BZkBlZdR.js";import"./Grow-CX5cENy7.js";import"./Popper-BDiYjOKN.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-7KiLmE7J.js";import"./ContentCopyTwoTone-FxnHhjxH.js";import"./HelpOutlineTwoTone-DrOLJulL.js";import"./ErrorOutlined-IAFWeR1P.js";import"./GetAppTwoTone-DaRi7Ci1.js";import"./InfoOutlined-dAkn5t2X.js";import"./PhoneTwoTone-Bl7tflDR.js";import"./DeleteTwoTone-DGxEJb7Y.js";import"./CheckCircleTwoTone-lp2UGx41.js";import"./DropdownMenu-yIjLkQsI.js";import"./Button-Buu_9ObU.js";import"./createSimplePaletteValueFilter-CuaYVmHN.js";import"./ButtonBase-BGHCXqvG.js";import"./CircularProgress-C0_0v47y.js";import"./Typography-DV3DT36E.js";import"./index-BFzG-4ZV.js";import"./extendSxProp-CVj7jJdy.js";import"./Fade-Bmxjpoc6.js";import"./Paper-D4CfMZ_X.js";import"./ClickAwayListener-Y9Lb_tSy.js";import"./MenuList-CxNoMrli.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Dx05AkrQ.js";import"./MenuItem-BHOPjCWj.js";import"./dividerClasses-DY7yZ7KG.js";import"./ListItemIcon-c5hoVYLm.js";import"./ListItemText-Bj0B8PLe.js";import"./Divider-D_1h7Fkn.js";import"./IconSvgButton-BB0Fa4be.js";import"./IconButton-DHSMjmzi.js";import"./index-DQkjQWMO.js";import"./getThemeProps-CnB1RaPH.js";import"./Box-CFkFfEu6.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
