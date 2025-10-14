import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-ByHJIaZX.js";import{C as p}from"./ComplexMenu-DYfes18X.js";import"./createSvgIcon-Tjl1dYM0.js";import"./index-ijsm3mBy.js";import"./iframe-2dG-YY9-.js";import"./createTheme-BxansSaP.js";import"./DefaultPropsProvider-C0BG17d4.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BlIhEXZO.js";import"./useTheme-BguFC_Yf.js";import"./Tooltip-D4GNWK6u.js";import"./index-DD_DY1ge.js";import"./useSlot-DwNJrAe8.js";import"./useForkRef-BUPBxQCC.js";import"./useTimeout-BHJGkgoe.js";import"./useControlled-fSPDUO3C.js";import"./getReactElementRef-BqqLpY_U.js";import"./index-BwEXD9Sp.js";import"./index-CLoZ34tt.js";import"./Grow-Ddu7BFI0.js";import"./Popper-CQCjOtHT.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Dnw4GnUz.js";import"./ContentCopyTwoTone-D1IM5o29.js";import"./HelpOutlineTwoTone-DYQSKIv2.js";import"./ErrorOutlined-V-eLEYT9.js";import"./GetAppTwoTone-CJNPoxbi.js";import"./InfoOutlined-CCDz_LRY.js";import"./PhoneTwoTone-BOP2duHB.js";import"./DeleteTwoTone-D-xL2oNd.js";import"./CheckCircleTwoTone-DVKZgV-7.js";import"./DropdownMenu-FK5h1hB8.js";import"./Button-sd4ooRmS.js";import"./createSimplePaletteValueFilter-DF0-Q_sR.js";import"./ButtonBase-COXFE6tZ.js";import"./CircularProgress-DuN8C9YO.js";import"./Typography-DKWA_FkP.js";import"./index-BYBjn3Mm.js";import"./extendSxProp-D6bOc2yu.js";import"./Fade-DPwN_GcI.js";import"./Paper-Cra7tOWX.js";import"./ClickAwayListener-CeIKyymb.js";import"./MenuList-BtpTHMgP.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DDALBnac.js";import"./MenuItem-gWeo-R8k.js";import"./dividerClasses-we53KSxA.js";import"./ListItemIcon-DuR7HK91.js";import"./ListItemText-aC9cFMf1.js";import"./Divider-Cf9mP6mM.js";import"./IconSvgButton-D0vp16WG.js";import"./IconButton-BSE-Wm4J.js";import"./index-CCMiZfH8.js";import"./getThemeProps-D6jrdoYB.js";import"./Box-D11bBFwR.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
