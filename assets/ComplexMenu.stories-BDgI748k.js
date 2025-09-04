import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B9ylChxE.js";import{C as p}from"./ComplexMenu-DYBhw1Qj.js";import"./createSvgIcon-DDgh6Xid.js";import"./index-DqdBbDO8.js";import"./iframe-Bscbx4yJ.js";import"./createTheme-B_Ol_SGM.js";import"./DefaultPropsProvider-NLw5xhj0.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CYJMJKLP.js";import"./useTheme-C7guiOJZ.js";import"./Tooltip-BJ3NsGkm.js";import"./index-B8FA-M0N.js";import"./useSlot-BXDp-GLk.js";import"./useForkRef-DOKoFcdj.js";import"./useTimeout-d-KGj_IM.js";import"./useControlled-BhMBs8Uu.js";import"./getReactElementRef-BxWWKsOF.js";import"./index-i7tYzgne.js";import"./index-CQyiV8a0.js";import"./Grow-CM_jMmlK.js";import"./Popper-GFYTG-1I.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CfloRzZq.js";import"./ContentCopyTwoTone-CYzRzFQo.js";import"./HelpOutlineTwoTone-BoTXiJRM.js";import"./ErrorOutlined-DGn7-iXo.js";import"./GetAppTwoTone-E8wkkJUc.js";import"./InfoOutlined-CyDqWeKG.js";import"./PhoneTwoTone-BFpTsMSc.js";import"./DeleteTwoTone-DavxKhsT.js";import"./CheckCircleTwoTone-BXAr9Xv6.js";import"./DropdownMenu-CIwqI57Z.js";import"./Button-eHv0vqs7.js";import"./createSimplePaletteValueFilter-IPuPUECy.js";import"./ButtonBase-DOP0xNZr.js";import"./CircularProgress-ueQLis1i.js";import"./Typography-BCZ0WOI8.js";import"./index-OhczQznD.js";import"./extendSxProp-BKGAgVYg.js";import"./Fade-D-6_yJFg.js";import"./Paper-U0cK4HBP.js";import"./ClickAwayListener-DmRnLi5_.js";import"./MenuList-dvBdwF1C.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Bm15fZeF.js";import"./MenuItem-DpMVu6MV.js";import"./dividerClasses-D_hkfbKz.js";import"./ListItemIcon-AuxikBuz.js";import"./ListItemText-D4jLHcM4.js";import"./Divider-4jo_v0kH.js";import"./IconSvgButton-DD7-oi7h.js";import"./IconButton-CUYRsHcj.js";import"./index-tLYZQ-yL.js";import"./getThemeProps-DV1Unc6F.js";import"./Box-BM9usSYA.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
