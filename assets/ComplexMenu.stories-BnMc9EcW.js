import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-6RTG8UNX.js";import{C as p}from"./ComplexMenu-7lBv7CHj.js";import"./createSvgIcon-ES-cxXT2.js";import"./index-roJ4vK9f.js";import"./iframe-usNaZGIV.js";import"./createTheme-CKTnRhf8.js";import"./DefaultPropsProvider-BKZXJlgr.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-z78Ru-D7.js";import"./useTheme-CfHcAony.js";import"./Tooltip-DxTN-iVj.js";import"./index-CCsjNeDE.js";import"./useSlot-DHnKQh3_.js";import"./useForkRef-CVKF0tln.js";import"./useTimeout-DCTApi_k.js";import"./useControlled-Dj4md4a0.js";import"./getReactElementRef-SxH9WasF.js";import"./index-C8GKbJq-.js";import"./index-NGl8JrjW.js";import"./Grow-1_GvRgnD.js";import"./Popper-trMMFIZR.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BatyDSeZ.js";import"./ContentCopyTwoTone-Bm1_731Z.js";import"./HelpOutlineTwoTone-AthE11ZY.js";import"./ErrorOutlined-D9Sypnka.js";import"./GetAppTwoTone-BNPUs-F1.js";import"./InfoOutlined-BLmDaXTg.js";import"./PhoneTwoTone-22bvLopz.js";import"./DeleteTwoTone-Brbs3v1B.js";import"./CheckCircleTwoTone-CTTxY2FK.js";import"./DropdownMenu-kEFqb1yR.js";import"./Button-Cm0_9C_z.js";import"./createSimplePaletteValueFilter-Cs5GTHcK.js";import"./ButtonBase-BFz5Sg4Z.js";import"./CircularProgress-Bp0mZZnQ.js";import"./Typography-DiV-TSAW.js";import"./index-BL8eoJay.js";import"./extendSxProp-Cq9B16Aj.js";import"./Fade-DbbtWcKt.js";import"./Paper-N2-Rl_Ug.js";import"./ClickAwayListener-FeBMXEHd.js";import"./MenuList-C1rZ5yCL.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-ClDCXeZh.js";import"./MenuItem-YFGLe8cv.js";import"./dividerClasses-DlCj-44O.js";import"./ListItemIcon-Dfx0141G.js";import"./ListItemText-BuQKfVW7.js";import"./Divider-D-VrMvQO.js";import"./IconSvgButton-Ch1OTwsr.js";import"./IconButton-CfK7Mq_z.js";import"./index-CkyC7fXi.js";import"./getThemeProps-Cnl-jNMX.js";import"./Box-BQqeNhLw.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
