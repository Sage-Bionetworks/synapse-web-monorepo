import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-Dw2gn0j1.js";import{C as p}from"./ComplexMenu-B1h02kQv.js";import"./createSvgIcon-BI80JrgA.js";import"./index-BlD88g6h.js";import"./iframe-Dw2kzFmB.js";import"./createTheme-CH0S07Xl.js";import"./DefaultPropsProvider-CHwO8Irh.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DYKHbQqC.js";import"./useTheme-COGVK8pJ.js";import"./Tooltip-BOQgbOBe.js";import"./index-D4uhv7w9.js";import"./useSlot-CyLwBbxN.js";import"./useForkRef-DLhOhr1j.js";import"./useTimeout-CBvk5HB8.js";import"./useControlled-BNsMtrFO.js";import"./getReactElementRef-DmWaJQ_1.js";import"./index-Ccc0V01c.js";import"./index-DZEeyIQH.js";import"./Grow-CY8LBbso.js";import"./Popper-Bz3MVMCK.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DgsoQluG.js";import"./ContentCopyTwoTone-BV_pZVBj.js";import"./HelpOutlineTwoTone-DUxscZsU.js";import"./ErrorOutlined-5hAYHbDE.js";import"./GetAppTwoTone-h15SqBdw.js";import"./InfoOutlined-C-TlmqYE.js";import"./PhoneTwoTone-BNzkP8v5.js";import"./DeleteTwoTone-D4jZzX59.js";import"./CheckCircleTwoTone-CIsibCt1.js";import"./DropdownMenu-B_Knba_h.js";import"./Button-acN03ydj.js";import"./createSimplePaletteValueFilter-PozQUcR9.js";import"./ButtonBase-BbZdtk3k.js";import"./CircularProgress-BzD6ZhYg.js";import"./Typography-e2IiOH4S.js";import"./index-DdoUcSEN.js";import"./extendSxProp-B2u3Q9Pp.js";import"./Fade-DMpsy5Bs.js";import"./Paper-CIxRtZl4.js";import"./ClickAwayListener-Bmj-Z5W3.js";import"./MenuList-DbH5h35s.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CJ_cCo-5.js";import"./MenuItem-vvOzlhK8.js";import"./dividerClasses-DXs6mmDQ.js";import"./ListItemIcon-VXhygi6L.js";import"./ListItemText-BpShxR-1.js";import"./Divider-Bbsnw9lG.js";import"./IconSvgButton-BRNk5iLk.js";import"./IconButton-CtEoJzuT.js";import"./index-CpnNXMjF.js";import"./getThemeProps-nOnHEFGz.js";import"./Box-BGkXd8ho.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
