import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-h3E3Qu1h.js";import{C as p}from"./ComplexMenu-BkiMqWku.js";import"./createSvgIcon-C3_cIczA.js";import"./index-BgSjUAuI.js";import"./iframe-B2LJi_cW.js";import"./createTheme-B99gvztp.js";import"./DefaultPropsProvider-BwisLJoN.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Crep25JH.js";import"./useTheme-B6PPiyBh.js";import"./Tooltip-BHlbKeDB.js";import"./index-0KhxVFZN.js";import"./useSlot-BoOzURrI.js";import"./useForkRef-BWEHjpp5.js";import"./useTimeout-B9vSmm-b.js";import"./useControlled-CCREmJrl.js";import"./getReactElementRef-TAJJAPvj.js";import"./index-3jGRQJto.js";import"./index-DJx0aOeo.js";import"./Grow-BMIyt8WB.js";import"./Popper-C-cVjFlV.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BpeivGKv.js";import"./ContentCopyTwoTone-VZJ7bD4Z.js";import"./HelpOutlineTwoTone-BXZfRkDC.js";import"./ErrorOutlined-HUrcSG1P.js";import"./GetAppTwoTone-BUAMkVlV.js";import"./InfoOutlined-pobyAG_A.js";import"./PhoneTwoTone-CTPn7YAR.js";import"./DeleteTwoTone-DBTs7GBl.js";import"./CheckCircleTwoTone-qAglj5RI.js";import"./DropdownMenu-BnyO9VyY.js";import"./Button-i6WpB6BV.js";import"./createSimplePaletteValueFilter-BqHZnY8j.js";import"./ButtonBase-C9ld3sfo.js";import"./CircularProgress-CETpK90r.js";import"./Typography-f_AbgqFl.js";import"./index-y7GTiB0o.js";import"./extendSxProp-BG_8YU1P.js";import"./Fade-BQGvqggR.js";import"./Paper-d1YgxWUg.js";import"./ClickAwayListener-p7Foeo8l.js";import"./MenuList-CvYF97li.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-X6eTUvj8.js";import"./MenuItem-9Sg5djkv.js";import"./dividerClasses-OhhR3iUw.js";import"./ListItemIcon-B-sPHugk.js";import"./ListItemText-BHPsj2st.js";import"./Divider-B9Gj_tHS.js";import"./IconSvgButton-D6-yi5M4.js";import"./IconButton-BzXaqEAH.js";import"./index-WwMCgKoq.js";import"./getThemeProps-tRf3h7Hu.js";import"./Box-DFEf2Lca.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
