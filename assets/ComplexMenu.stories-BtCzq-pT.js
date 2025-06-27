import{j as i}from"./jsx-runtime-nSLCg5Ff.js";import{I as n}from"./IconSvg-CCymHC6d.js";import{C as p}from"./ComplexMenu-CMZF_PfF.js";import"./index-BW_4_Xzt.js";import"./iframe-BbO8AEg3.js";import"./createSvgIcon-Dgwa5ydj.js";import"./createTheme-vWIlxZDX.js";import"./DefaultPropsProvider-C-nDaUyT.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Bh6OBAyW.js";import"./useTheme-DRbZ6Lwr.js";import"./Tooltip-wCFJUNlH.js";import"./index-OAMuKwzI.js";import"./useSlot-Cp46zHXT.js";import"./useForkRef-OHC-fPBp.js";import"./useTimeout-DT_CqPP6.js";import"./useControlled-DQu4-N-P.js";import"./getReactElementRef-BCL413Bt.js";import"./index-KSoqftDU.js";import"./index-JrbwngIs.js";import"./Grow-wlJUshl8.js";import"./Popper-DwNrEIow.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BzNgzNrG.js";import"./ContentCopyTwoTone-C8pUZmLL.js";import"./HelpOutlineTwoTone-USzeRhi6.js";import"./ErrorOutlined-C5Gpz2Xp.js";import"./GetAppTwoTone-vUYM1cB0.js";import"./InfoOutlined-CnoXfmRj.js";import"./PhoneTwoTone-DQYmo8bJ.js";import"./DeleteTwoTone-DoLWP9ik.js";import"./CheckCircleTwoTone-DnLU6JyV.js";import"./DropdownMenu-Bxz--HYj.js";import"./Button-DjI-_s9b.js";import"./createSimplePaletteValueFilter-CIShsUkc.js";import"./ButtonBase-zIZj5pIX.js";import"./CircularProgress-7jOzBolD.js";import"./Typography-S1uwKLwx.js";import"./index-GghUaGLv.js";import"./extendSxProp-AvLc-Gna.js";import"./Fade-BvEbZxAO.js";import"./Paper-D1M0V8sZ.js";import"./ClickAwayListener-Cs3HVAbr.js";import"./MenuList-CrZNNncy.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DWMLar-k.js";import"./MenuItem-DHhipB_o.js";import"./dividerClasses-DpIHh4dX.js";import"./ListItemIcon-D0FxwuoG.js";import"./ListItemText-D9DoHSI-.js";import"./Divider-CsZtnooi.js";import"./IconSvgButton-ChEdvfhl.js";import"./IconButton-D-fwjRi5.js";import"./index-HlrIfwAb.js";import"./getThemeProps-CsD-j25b.js";import"./Box-DIO_vLOn.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
