import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-FzT_-_3f.js";import{C as p}from"./ComplexMenu-BWYnmZfz.js";import"./createSvgIcon-BRN6BuuI.js";import"./index-BGezYTxZ.js";import"./iframe-B-2zDx2H.js";import"./createTheme-UnFwGf94.js";import"./DefaultPropsProvider-BVuJ6NZ3.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Bayk6vGN.js";import"./useTheme-Cz-eQcfl.js";import"./Tooltip-DopGUg8J.js";import"./index-B5DCQxiA.js";import"./useSlot-37k7k0l7.js";import"./useForkRef-DogPi97t.js";import"./useTimeout-CSdygWr5.js";import"./useControlled-Bae2hl1R.js";import"./getReactElementRef-BJ1JrKvk.js";import"./index-D77oy7ww.js";import"./index-BoveFQlD.js";import"./Grow-CReA6j2F.js";import"./Popper-DkEv5u0W.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DHELZI9I.js";import"./ContentCopyTwoTone-_5hbQBWM.js";import"./HelpOutlineTwoTone-BtjCDNS9.js";import"./ErrorOutlined-CT9zTcIl.js";import"./GetAppTwoTone-C9VCl9Pj.js";import"./InfoOutlined-DJYjqIcr.js";import"./PhoneTwoTone-BtEJmb5A.js";import"./DeleteTwoTone-BTVnj_ZQ.js";import"./CheckCircleTwoTone-BtOxk0u4.js";import"./DropdownMenu-BfiSo19n.js";import"./Button-DW5TsUnn.js";import"./createSimplePaletteValueFilter-_8l7Ukzj.js";import"./ButtonBase-OTZy9XRd.js";import"./CircularProgress-DjMHo-jE.js";import"./Typography-CVEGnLAD.js";import"./index-siACmn_K.js";import"./extendSxProp-BjYa3ogt.js";import"./Fade-CPowkdEu.js";import"./Paper-BmvjKgaV.js";import"./ClickAwayListener-CAFxhAOq.js";import"./MenuList-CNZJcqW7.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BLtZ5OmZ.js";import"./MenuItem-CYcW5G3D.js";import"./dividerClasses-74cOtevR.js";import"./ListItemIcon-CFU4WXU5.js";import"./ListItemText-DKJ6-AYi.js";import"./Divider-DaMjcGaF.js";import"./IconSvgButton-DZ5TSKcQ.js";import"./IconButton-B3IjaecF.js";import"./index-Bhxv9xPq.js";import"./getThemeProps-DHsonTJv.js";import"./Box-B-MoQy_G.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
