import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BWyQMbcQ.js";import{C as p}from"./ComplexMenu-BrIsYuPc.js";import"./createSvgIcon-DWS9jufq.js";import"./index-DfXhoS93.js";import"./iframe-CmMCQ4D1.js";import"./createTheme-NstNY56j.js";import"./DefaultPropsProvider-BspoEs_3.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BWvFZ9eF.js";import"./useTheme-BYUnt95G.js";import"./Tooltip-D5cxmH7B.js";import"./index-D63gI9c1.js";import"./useSlot-G1lnVT-7.js";import"./useForkRef-BP-fxWVS.js";import"./useTimeout-BXTGuQAu.js";import"./useControlled-DmifYyk4.js";import"./getReactElementRef-mWD2ut9h.js";import"./index-Birxyppr.js";import"./index-C4Gk4dZy.js";import"./Grow-HWLRwbg6.js";import"./Popper-DR2KrX6d.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-C8pBHF8S.js";import"./ContentCopyTwoTone-BYSmX72k.js";import"./HelpOutlineTwoTone-DlPx2SBl.js";import"./ErrorOutlined-B916XtUj.js";import"./GetAppTwoTone-DuA0cEK8.js";import"./InfoOutlined-B8DBPc8I.js";import"./PhoneTwoTone-DxvuSZXF.js";import"./DeleteTwoTone-16ZmyGGe.js";import"./CheckCircleTwoTone-3PcAFoLI.js";import"./DropdownMenu-CGboPLBl.js";import"./Button-CIhLg1aw.js";import"./createSimplePaletteValueFilter-BVA8XCKf.js";import"./ButtonBase-Cx1k84i0.js";import"./CircularProgress-LMad5R4j.js";import"./Typography-UvjlH3GM.js";import"./index-BhAvfGUh.js";import"./extendSxProp-SsxQet_B.js";import"./Fade-2DQ5ggOQ.js";import"./Paper-De0lh8eX.js";import"./ClickAwayListener-BwjI0Npa.js";import"./MenuList-D0W6TJqx.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CjvyCjb6.js";import"./MenuItem-BaraDAsq.js";import"./dividerClasses-D0s0VEr2.js";import"./ListItemIcon-BMCGu_0_.js";import"./ListItemText-D6c-B977.js";import"./Divider-BXgEILhl.js";import"./IconSvgButton-BECzBncd.js";import"./IconButton-BWMua7vU.js";import"./index-BDTTZf2I.js";import"./getThemeProps-C5S3wagm.js";import"./Box-uE-W7Sa0.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
