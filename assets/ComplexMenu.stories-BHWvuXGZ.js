import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-D6p0RTnS.js";import{C as p}from"./ComplexMenu-CoW6npYj.js";import"./createSvgIcon-BwJ4Z0yb.js";import"./index-KGN7nUgE.js";import"./iframe-CMQeI9WK.js";import"./createTheme-DO0GeJVN.js";import"./DefaultPropsProvider-TigZOw0c.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DqFjo4Vk.js";import"./useTheme-DNfJZ9a1.js";import"./Tooltip-C0iVGWe9.js";import"./index-Ch-D0VSk.js";import"./useSlot-BeLwitnn.js";import"./useForkRef--CXcjM6c.js";import"./useTimeout-CbCrOuyo.js";import"./useControlled-CYxMkq6A.js";import"./getReactElementRef-CWKqg3UA.js";import"./index-DfI_pPk5.js";import"./index-CNJXOAct.js";import"./Grow-Bj8lCSBe.js";import"./Popper-B69y1AqZ.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-B8EkaxWw.js";import"./ContentCopyTwoTone-BIlpjkJx.js";import"./HelpOutlineTwoTone-D-5jHWCX.js";import"./ErrorOutlined-CMCo6TgE.js";import"./GetAppTwoTone-Ud9eI1Oo.js";import"./InfoOutlined-0J3xthVa.js";import"./PhoneTwoTone-C-Sff_Q5.js";import"./DeleteTwoTone-CgQRNG2k.js";import"./CheckCircleTwoTone-D1Vqh63T.js";import"./DropdownMenu-DAtDWjGb.js";import"./Button-3qFS6i5P.js";import"./createSimplePaletteValueFilter-DZ3Cd0ZY.js";import"./ButtonBase-Dpm3dYIG.js";import"./CircularProgress-tpeZfTSG.js";import"./Typography-Bx5U0C2d.js";import"./index-BKxVS2q8.js";import"./extendSxProp-BYQFtxYN.js";import"./Fade-Cv-DSv5P.js";import"./Paper-OHiCXA0a.js";import"./ClickAwayListener-BU9wvTpl.js";import"./MenuList-BOKUvfqm.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-yK8Ir8jM.js";import"./MenuItem-gv9SZNp1.js";import"./dividerClasses-BKH1YRU-.js";import"./ListItemIcon-DBSIb2ck.js";import"./ListItemText-CUV-oL7t.js";import"./Divider-DOImkF4e.js";import"./IconSvgButton--Yp2HLaT.js";import"./IconButton-DDxgpgKz.js";import"./index-CzE6ex2r.js";import"./getThemeProps-Bdh-DyuI.js";import"./Box-CvOrwV-N.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
