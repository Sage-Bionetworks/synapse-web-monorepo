import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-D0A6kovd.js";import{C as p}from"./ComplexMenu-CpC51vw8.js";import"./createSvgIcon-Dn1e9c9m.js";import"./index-CCx7LtbX.js";import"./iframe-CXkN_bjh.js";import"./createTheme-BGipwrSZ.js";import"./DefaultPropsProvider-C9mJXSlS.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Ccnn5CDs.js";import"./useTheme-C6Hms8rT.js";import"./Tooltip-BSMMEp4O.js";import"./index-BqN4AehO.js";import"./useSlot-CL9Tm_iu.js";import"./useForkRef-D0tAio4i.js";import"./useTimeout-gBVtjGWN.js";import"./useControlled-7LyiC2MA.js";import"./getReactElementRef-B_W85HoF.js";import"./index-CoD41yc1.js";import"./index-Cl-WCWPX.js";import"./Grow-f0ioJdsi.js";import"./Popper-BWw2OTmL.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CdqCsCuJ.js";import"./ContentCopyTwoTone-tKxaCeOu.js";import"./HelpOutlineTwoTone-BowKj72F.js";import"./ErrorOutlined-CHa2Zx5Z.js";import"./GetAppTwoTone-DuliMrg2.js";import"./InfoOutlined-r7NXPISH.js";import"./PhoneTwoTone-Mdp92CkC.js";import"./DeleteTwoTone-C9vVuAIk.js";import"./CheckCircleTwoTone-CpDhgK8q.js";import"./DropdownMenu-Bwfsylvw.js";import"./Button-C2r8JxxF.js";import"./createSimplePaletteValueFilter-Cx2IpYcE.js";import"./ButtonBase-C0vKM8oB.js";import"./CircularProgress-B3mrrbKE.js";import"./Typography-BeXEtM59.js";import"./index-7Nlp89ok.js";import"./extendSxProp-DFE9sSAY.js";import"./Fade-BxMIOZQV.js";import"./Paper-_hjMoFje.js";import"./ClickAwayListener-BopzRr-s.js";import"./MenuList-zFTaxyxS.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DEPLYzpz.js";import"./MenuItem-Bl6Lsdq-.js";import"./dividerClasses-BoaS9eXB.js";import"./ListItemIcon-BKjWuDW1.js";import"./ListItemText-DXi7yRpu.js";import"./Divider-Bdlssbng.js";import"./IconSvgButton-CWBmfKBt.js";import"./IconButton-BxhC3Er-.js";import"./index-KC7yRlkw.js";import"./getThemeProps-CeD3wcUs.js";import"./Box-DxttMfmA.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
