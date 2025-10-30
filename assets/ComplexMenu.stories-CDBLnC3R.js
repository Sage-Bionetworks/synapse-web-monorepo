import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BwvagGHg.js";import{C as p}from"./ComplexMenu-BlcTg8gG.js";import"./createSvgIcon-s4G4qou3.js";import"./index-BtGDcTvp.js";import"./iframe-CBNphiDP.js";import"./createTheme-C4xHNGdh.js";import"./DefaultPropsProvider-BHwoOyH7.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Dx4TqPEY.js";import"./useTheme-DwROfidY.js";import"./Tooltip-BVGISXDf.js";import"./index-VuQkd2dy.js";import"./useSlot-4Dt2bm7X.js";import"./useForkRef-BiijcE59.js";import"./useTimeout-Cmz87tz9.js";import"./useControlled-ChZzA-b3.js";import"./getReactElementRef-Bvp3nBcK.js";import"./index-umcRd70c.js";import"./index-ChFLTI6y.js";import"./Grow-7xCOvQFP.js";import"./Popper-1yvfHCmZ.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DiBWnx_c.js";import"./ContentCopyTwoTone-lJxiE0Kr.js";import"./HelpOutlineTwoTone-B_7QM99L.js";import"./ErrorOutlined-oA6mEcqm.js";import"./GetAppTwoTone-Buhe2SoE.js";import"./InfoOutlined-NJKjcrd2.js";import"./PhoneTwoTone-DR_hOpCV.js";import"./DeleteTwoTone--z0ntMq3.js";import"./CheckCircleTwoTone-B_j1OfQE.js";import"./DropdownMenu-D4Z_mm5s.js";import"./Button-X-aMYJSh.js";import"./createSimplePaletteValueFilter-C_Cdnk9R.js";import"./ButtonBase-DBuVifEX.js";import"./CircularProgress-BMJ4Jv0_.js";import"./Typography-C87QV3YC.js";import"./index-DValAcPx.js";import"./extendSxProp-B_iH4oL0.js";import"./Fade-Bp6vP_zE.js";import"./Paper-q9JuhaB3.js";import"./ClickAwayListener-C8du9OzG.js";import"./MenuList-CmN25UpI.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Cl65dCW3.js";import"./MenuItem-CMLSNFC8.js";import"./dividerClasses-CoLCjOFo.js";import"./ListItemIcon-z4ZgYaOy.js";import"./ListItemText-8CzBvaJt.js";import"./Divider-BFSVCR4p.js";import"./IconSvgButton-TFF3gncf.js";import"./IconButton-DwyAerDa.js";import"./index-CFf7qAMv.js";import"./getThemeProps-gvKTAKTt.js";import"./Box-DcHUT-iR.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
