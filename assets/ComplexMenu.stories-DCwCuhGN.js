import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-C4wmTs4i.js";import{C as p}from"./ComplexMenu-BEKB9agv.js";import"./createSvgIcon-CifjPXpO.js";import"./index-F3OlDRPU.js";import"./iframe-DWrAiNuW.js";import"./createTheme-DAhIYT-q.js";import"./DefaultPropsProvider-Cd0Gz93F.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-C8ob8KsR.js";import"./useTheme-GfoGaI95.js";import"./Tooltip-DpuXVHKS.js";import"./index-BuwriByj.js";import"./useSlot-BZid6he4.js";import"./useForkRef-BJo3Z_u-.js";import"./useTimeout-BY1gF1wp.js";import"./useControlled-BTMnxbhY.js";import"./getReactElementRef-D-JNnrD6.js";import"./index-B25muIup.js";import"./index-xIDK1h82.js";import"./Grow-VoMSPk_y.js";import"./Popper-DHPObmJG.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DPYzIKkG.js";import"./ContentCopyTwoTone-FMk1kygN.js";import"./HelpOutlineTwoTone-HB4722mY.js";import"./ErrorOutlined-C6TbCnKL.js";import"./GetAppTwoTone-Be_fc_De.js";import"./InfoOutlined-Df5N6QGS.js";import"./PhoneTwoTone-Cev2JXOp.js";import"./DeleteTwoTone-D6Hoz8HY.js";import"./CheckCircleTwoTone-DwvVQvXI.js";import"./DropdownMenu-CchTqzE8.js";import"./Button-dxqTEXs9.js";import"./createSimplePaletteValueFilter-B4BYpzTy.js";import"./ButtonBase-CE9Zydrz.js";import"./CircularProgress-DyPJ1xlt.js";import"./Typography-C3oNv7Lx.js";import"./index-BmZDKNdG.js";import"./extendSxProp-CVuKJmNN.js";import"./Fade-DoIPu-7y.js";import"./Paper-CzObAxXu.js";import"./ClickAwayListener-BK2szM5u.js";import"./MenuList-C5sZRfPO.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-0AEZ6T3R.js";import"./MenuItem-DewuApgK.js";import"./dividerClasses-CSzNj0QZ.js";import"./ListItemIcon-qD1-gOm9.js";import"./ListItemText-Db4vAf1i.js";import"./Divider-BGKQ1QpR.js";import"./IconSvgButton-Cpzm9UdP.js";import"./IconButton-BRQS4WU3.js";import"./index-BZ9JUhdH.js";import"./getThemeProps-DopSKNma.js";import"./Box-BW-aRCkO.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
