import{j as i}from"./jsx-runtime-TM5gBVMz.js";import{I as n}from"./IconSvg-BQu9rZPV.js";import{C as p}from"./ComplexMenu-_6v22_sn.js";import"./index-DcrLmmvh.js";import"./iframe-BfmWAJ1G.js";import"./createSvgIcon-BbcBufaS.js";import"./createTheme-BKvghQEf.js";import"./DefaultPropsProvider-BNasm-Ou.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DtdHK4vR.js";import"./useTheme-BhuPaSeU.js";import"./Tooltip-DWnEW01p.js";import"./index-DyZIyS5M.js";import"./useSlot-XdCIW-h3.js";import"./useForkRef-XqLeOv9F.js";import"./useTimeout-BftIpzR-.js";import"./useControlled-Bw9-6emG.js";import"./getReactElementRef-Cyw8ECuQ.js";import"./index-CpnHSm9k.js";import"./index-BfBfPSox.js";import"./Grow-Hoso1Ov1.js";import"./Popper-DLhvBE31.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CkgSVNu-.js";import"./ContentCopyTwoTone-CMzi9-Hk.js";import"./HelpOutlineTwoTone-DRlQGii-.js";import"./ErrorOutlined-CKbMwWn8.js";import"./GetAppTwoTone-B_dMSJt7.js";import"./InfoOutlined-Cdc0ab0M.js";import"./PhoneTwoTone-_t1hAxOI.js";import"./DeleteTwoTone-aSBi7_pK.js";import"./CheckCircleTwoTone-C33LPoZ-.js";import"./DropdownMenu-BHzubFdY.js";import"./Button-CeywVuQa.js";import"./createSimplePaletteValueFilter-DHCUxeJ8.js";import"./ButtonBase-Cl-S3PYL.js";import"./CircularProgress-BsYeRfew.js";import"./Typography-CgSuXiyf.js";import"./index-CFEbK4PF.js";import"./extendSxProp-oKPMvBLW.js";import"./Fade-CggMuk3s.js";import"./Paper-H-iBRfk0.js";import"./ClickAwayListener-dAZKGzwC.js";import"./MenuList-CaJgXwbp.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BSUqx5Yf.js";import"./MenuItem-DTnRl8T7.js";import"./dividerClasses-YbvMtZeI.js";import"./ListItemIcon-pO5ry8mg.js";import"./ListItemText-C1i9liYl.js";import"./Divider-Cqyigfp0.js";import"./IconSvgButton-CjV37UYd.js";import"./IconButton-BEEZ6tpT.js";import"./index-VOdN53pU.js";import"./getThemeProps-Cb8oY0Qe.js";import"./Box-CMo5M51H.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
