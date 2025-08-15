import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-iTV7KPtK.js";import{C as p}from"./ComplexMenu-DTDJ2rTZ.js";import"./createSvgIcon-DuozVLQO.js";import"./index-BrHPMy4K.js";import"./iframe-qrHI0h7x.js";import"./createTheme-BimHb0uq.js";import"./DefaultPropsProvider-B4sMSs5c.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BxS3S2OH.js";import"./useTheme-C7_v5rs1.js";import"./Tooltip-Dpzta8iD.js";import"./index-CUEjAwPx.js";import"./useSlot-DQts-esW.js";import"./useForkRef-DPev0BVR.js";import"./useTimeout-DvUZi0R7.js";import"./useControlled-CPhxYaZP.js";import"./getReactElementRef-CpNJ5z4l.js";import"./index-Cy7CbgXS.js";import"./index-Ckhh3aWL.js";import"./Grow-Bz3F_Qo2.js";import"./Popper-D002JOTh.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DDb4CHR6.js";import"./ContentCopyTwoTone-CQcjsbyI.js";import"./HelpOutlineTwoTone-BfOGaDZF.js";import"./ErrorOutlined-DRgEtLo6.js";import"./GetAppTwoTone-CL8BtniQ.js";import"./InfoOutlined-YsaV6w1_.js";import"./PhoneTwoTone-BspxMk5l.js";import"./DeleteTwoTone-But0b4yt.js";import"./CheckCircleTwoTone-BqOhFIZl.js";import"./DropdownMenu-D6Goffnz.js";import"./Button-hgfOZiyo.js";import"./createSimplePaletteValueFilter-DtA1pzc_.js";import"./ButtonBase-DbOfy-z6.js";import"./CircularProgress-qScjADK-.js";import"./Typography-C4cWgMpl.js";import"./index-3sAcmN1l.js";import"./extendSxProp-Dxh_u9LX.js";import"./Fade-DuX_F-VJ.js";import"./Paper-DbuMeV7N.js";import"./ClickAwayListener-WtnAjSsu.js";import"./MenuList-CKZZRoWG.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DafoQkm0.js";import"./MenuItem-DbpUO7oV.js";import"./dividerClasses-DQ-Gt_zh.js";import"./ListItemIcon-DN4PjrSM.js";import"./ListItemText-B04ZwxIq.js";import"./Divider-nQCbvLXi.js";import"./IconSvgButton-D7OgFool.js";import"./IconButton-U1OcyH7k.js";import"./index-DyOEH95c.js";import"./getThemeProps-Cshv05Q5.js";import"./Box--Gvn6t5i.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
