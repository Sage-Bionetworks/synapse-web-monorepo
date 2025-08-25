import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CpxUKnga.js";import{C as p}from"./ComplexMenu-e9RyE6Fm.js";import"./createSvgIcon-B3urn6DB.js";import"./index-B25hjvII.js";import"./iframe-CanEKFkf.js";import"./createTheme-CeLgvmU3.js";import"./DefaultPropsProvider-BT4R1ruD.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-W4kAWd5b.js";import"./useTheme-S_q5Ryto.js";import"./Tooltip-BuHnAymE.js";import"./index-DQDbwlvs.js";import"./useSlot-FmPpnltM.js";import"./useForkRef-C_zmFNEw.js";import"./useTimeout-CT9u6xIp.js";import"./useControlled-D0puIBKv.js";import"./getReactElementRef-B5zyHyCE.js";import"./index-DN2r2ujZ.js";import"./index-h-VymCwS.js";import"./Grow-ymICMWfx.js";import"./Popper-CUKMxY22.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BXxlnjVW.js";import"./ContentCopyTwoTone-DrKiw2ma.js";import"./HelpOutlineTwoTone-DrpQcJzz.js";import"./ErrorOutlined-D8aXoLVa.js";import"./GetAppTwoTone-XVcK8MFt.js";import"./InfoOutlined-CvqMguUD.js";import"./PhoneTwoTone-Cs2jftFC.js";import"./DeleteTwoTone-wI5d8wSU.js";import"./CheckCircleTwoTone-DcmFcPP3.js";import"./DropdownMenu-Bsh-fyUR.js";import"./Button-DtzkNhDQ.js";import"./createSimplePaletteValueFilter-Dmw5w500.js";import"./ButtonBase-DVVpaHYC.js";import"./CircularProgress-a2Aa-IB0.js";import"./Typography-C1n2Gc-4.js";import"./index-CNqkfiqy.js";import"./extendSxProp-MkfofRzG.js";import"./Fade-zN12Tza6.js";import"./Paper-CrOcAKNw.js";import"./ClickAwayListener-Bjyhl2ez.js";import"./MenuList-BlaL1Q_e.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DbIfijZk.js";import"./MenuItem-BmLUSSWR.js";import"./dividerClasses-8RhwFBqv.js";import"./ListItemIcon-C_FU_FSJ.js";import"./ListItemText-DsOz-NFc.js";import"./Divider-Bj2BnLCo.js";import"./IconSvgButton-BnD8mzAN.js";import"./IconButton-Bo1_iaRr.js";import"./index-Bo28Lg5r.js";import"./getThemeProps-BIWXTvD7.js";import"./Box-DvcAnSFU.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
