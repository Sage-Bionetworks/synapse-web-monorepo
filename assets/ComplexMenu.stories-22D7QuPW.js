import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BuqouJLs.js";import{C as p}from"./ComplexMenu-Dat6INdS.js";import"./createSvgIcon-COTmfNQD.js";import"./index-1kje7hbp.js";import"./iframe-P3oO2Icm.js";import"./createTheme-OG4SESHy.js";import"./DefaultPropsProvider-h88qGke-.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-74bKXp5k.js";import"./useTheme-C1oGBCFg.js";import"./Tooltip-SiJ2L_4C.js";import"./index-jBLJh1fo.js";import"./useSlot-DXxgJls1.js";import"./useForkRef-D9dMJQ0q.js";import"./useTimeout-Dv-V-iGQ.js";import"./useControlled-CXyTmM0a.js";import"./getReactElementRef-DUePG06p.js";import"./index-BlODw5Ln.js";import"./index-Bx-o-xN8.js";import"./Grow-DcG1qn5x.js";import"./Popper-8XwYGZA6.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DglKjWJs.js";import"./ContentCopyTwoTone-DjczQwmr.js";import"./HelpOutlineTwoTone-D1dX4o-c.js";import"./ErrorOutlined-BCp_M9Aw.js";import"./GetAppTwoTone-CpIQ41Iv.js";import"./InfoOutlined-C9IGpBZZ.js";import"./PhoneTwoTone-0OcuQ89Y.js";import"./DeleteTwoTone-DdlO-HnM.js";import"./CheckCircleTwoTone-BagqzJ7q.js";import"./DropdownMenu-BEoTmMd2.js";import"./Button-B5AeWKRO.js";import"./createSimplePaletteValueFilter-BUYDpYB7.js";import"./ButtonBase-BVH95p2m.js";import"./CircularProgress-RCFFSlDy.js";import"./Typography-UsUy27h4.js";import"./index-DY2CjuTt.js";import"./extendSxProp-Ba4rz3fq.js";import"./Fade-BLtm4mZl.js";import"./Paper-B7Sf59Qm.js";import"./ClickAwayListener-D6k5Nu1Z.js";import"./MenuList-DJZ7bbwV.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-YxO4WI3i.js";import"./MenuItem-DvQ07CWu.js";import"./dividerClasses-B1ovwk7_.js";import"./ListItemIcon-D1aH3lWv.js";import"./ListItemText-Co6mUZRJ.js";import"./Divider-JzN-GHC4.js";import"./IconSvgButton-DTxD3vUT.js";import"./IconButton-DVCziVzo.js";import"./index-vFUSSaSs.js";import"./getThemeProps-BV0JmN8D.js";import"./Box-BSsC5_fo.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
