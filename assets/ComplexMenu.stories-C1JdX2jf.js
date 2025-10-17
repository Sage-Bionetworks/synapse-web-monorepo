import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DHLDr1Uk.js";import{C as p}from"./ComplexMenu-CNlj4R1V.js";import"./createSvgIcon-Cg3F_JaT.js";import"./index-BjYqh8CN.js";import"./iframe-GZmPJQmw.js";import"./createTheme-Ci6bVZs8.js";import"./DefaultPropsProvider-p-VvPMcS.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Chrl7Xny.js";import"./useTheme-B9Eo60Il.js";import"./Tooltip-DS2_bocJ.js";import"./index-CqDcjKYL.js";import"./useSlot-DjiMerLm.js";import"./useForkRef-DjK00V5X.js";import"./useTimeout-oOEcrwX8.js";import"./useControlled-D7Hv9h3B.js";import"./getReactElementRef-DMDF8VWZ.js";import"./index-CRKwKLDy.js";import"./index-De9pklvj.js";import"./Grow-DV3m8xn_.js";import"./Popper-BD3sWAZF.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-n0FlJEak.js";import"./ContentCopyTwoTone-Btt9lzAu.js";import"./HelpOutlineTwoTone-CQcLmo9a.js";import"./ErrorOutlined-FVVJdqAp.js";import"./GetAppTwoTone-CfU_Lhd4.js";import"./InfoOutlined-DzKbN7QE.js";import"./PhoneTwoTone-CfqAcFrZ.js";import"./DeleteTwoTone-B9S6wosM.js";import"./CheckCircleTwoTone-BchYLEzy.js";import"./DropdownMenu-BHVdEv7Y.js";import"./Button-RzPtlbLb.js";import"./createSimplePaletteValueFilter-CRAp9ozw.js";import"./ButtonBase-CdN_s3us.js";import"./CircularProgress-BwcuRZZH.js";import"./Typography-C4bCrnhF.js";import"./index-BVOHcrQX.js";import"./extendSxProp-D59BLFsM.js";import"./Fade-Cbte7BvX.js";import"./Paper-C9Te-8_v.js";import"./ClickAwayListener-BZ6LIgVx.js";import"./MenuList-CGQ5K4xJ.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-WXpzkGZJ.js";import"./MenuItem-uhN0I1hf.js";import"./dividerClasses-BvvF-rAU.js";import"./ListItemIcon-hDfJLB28.js";import"./ListItemText-DPYSDCf7.js";import"./Divider-DvP84bnl.js";import"./IconSvgButton-BZkljvw9.js";import"./IconButton-BDNvR3N2.js";import"./index-qSvk_OAG.js";import"./getThemeProps-DBSpe4l4.js";import"./Box-Ci2u2n8R.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
