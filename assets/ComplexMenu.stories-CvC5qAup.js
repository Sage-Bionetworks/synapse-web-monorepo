import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DxXNq28M.js";import{C as p}from"./ComplexMenu-MjBWuDKx.js";import"./createSvgIcon-BCzRTN0-.js";import"./index-C7A9hLup.js";import"./iframe-DYHn9FoU.js";import"./createTheme-Bs3gvIc1.js";import"./DefaultPropsProvider-IokPXP0z.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CjdEEB0o.js";import"./useTheme-CLzZjeP0.js";import"./Tooltip--Jyxve2u.js";import"./index-C6nIQqN4.js";import"./useSlot-Beyp9NpN.js";import"./useForkRef-jebBSqDW.js";import"./useTimeout-O_ZJW0DC.js";import"./useControlled-BdpGnz5r.js";import"./getReactElementRef-DVxyBdsm.js";import"./index-BFMqbgTj.js";import"./index-BEbzCxs1.js";import"./Grow-DNZW_rFC.js";import"./Popper-BeZ4pCzN.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DCrecB6B.js";import"./ContentCopyTwoTone-DFRwO3zK.js";import"./HelpOutlineTwoTone-Jjy0LKNS.js";import"./ErrorOutlined-C9Pa2C5P.js";import"./GetAppTwoTone-zcZdA0YE.js";import"./InfoOutlined-CwR1biAl.js";import"./PhoneTwoTone-CsBCb1uy.js";import"./DeleteTwoTone-Bz7thN5g.js";import"./CheckCircleTwoTone-CdnWGJLw.js";import"./DropdownMenu-CGMc2U9V.js";import"./Button-DjtaKSRa.js";import"./createSimplePaletteValueFilter-miHcWXXO.js";import"./ButtonBase-Vh4sHaAq.js";import"./CircularProgress-DP1zvZ6B.js";import"./Typography-RsNMpAQC.js";import"./index-BO4R3ads.js";import"./extendSxProp-DVhrI1Yp.js";import"./Fade-CLwgXDNC.js";import"./Paper-rl2XeBHU.js";import"./ClickAwayListener-0ZoK3Jws.js";import"./MenuList-CoMlkBzY.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BT_PzzVD.js";import"./MenuItem-qaLfTLiy.js";import"./dividerClasses-BaWCcK2n.js";import"./ListItemIcon-BPa1Ugys.js";import"./ListItemText-DXscrn2V.js";import"./Divider-Cvp4gpqu.js";import"./IconSvgButton-CdrGnlPc.js";import"./IconButton-CpIHqhTv.js";import"./index-Bw1QUG9H.js";import"./getThemeProps-CU5Sm-rK.js";import"./Box-DRej04OG.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
