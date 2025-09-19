import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-tzKn6ivd.js";import{C as p}from"./ComplexMenu-BS3hPMSA.js";import"./createSvgIcon-BB914k_q.js";import"./index-sd0YBnCi.js";import"./iframe-DVYlga3I.js";import"./createTheme-DdIeWMhk.js";import"./DefaultPropsProvider-Yj25Mou0.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DT7PkjGc.js";import"./useTheme-BgNkO1EL.js";import"./Tooltip-DVqhwzdl.js";import"./index-Djpzpj5X.js";import"./useSlot-B15kkZE-.js";import"./useForkRef-CHUct0W1.js";import"./useTimeout-B_Tp_-WM.js";import"./useControlled-DYvBVNIT.js";import"./getReactElementRef-Cu_0CXbf.js";import"./index-DdccfWLe.js";import"./index-FmDvS8Q8.js";import"./Grow-EJ2qm4Dg.js";import"./Popper-DATX_HyC.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Ci3TNkJS.js";import"./ContentCopyTwoTone-C8nYp6_y.js";import"./HelpOutlineTwoTone-CQ8-fl2s.js";import"./ErrorOutlined-DJ12JDvg.js";import"./GetAppTwoTone-3i7a9d8b.js";import"./InfoOutlined-DVP0xF26.js";import"./PhoneTwoTone-Uxi-EsW4.js";import"./DeleteTwoTone-DZSBGyBG.js";import"./CheckCircleTwoTone-BJMpAPc2.js";import"./DropdownMenu-7yY0_6bg.js";import"./Button-KNb4UeA6.js";import"./createSimplePaletteValueFilter-zeUINUQY.js";import"./ButtonBase-BTjmQqw3.js";import"./CircularProgress-CVVcdaCj.js";import"./Typography-D5MbW9_J.js";import"./index-BmMoY9aL.js";import"./extendSxProp-mslzv5DB.js";import"./Fade-C1-s1xYp.js";import"./Paper-DTwSBB6m.js";import"./ClickAwayListener-lzupNfXx.js";import"./MenuList-DleSHaYn.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Kan7G7k6.js";import"./MenuItem-DLEZcxdU.js";import"./dividerClasses-CAYYpiRX.js";import"./ListItemIcon-DbAgPJ_C.js";import"./ListItemText-Oy12vA4y.js";import"./Divider-B850dVo6.js";import"./IconSvgButton-BJ-pMTSR.js";import"./IconButton-Drb2gRwi.js";import"./index-B7rAEdmn.js";import"./getThemeProps-9mJ2iQYz.js";import"./Box-_qmyWplA.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
