import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BXFqCqha.js";import{C as p}from"./ComplexMenu-Cwxxj2ms.js";import"./createSvgIcon-D0F9NJty.js";import"./index-DJB1qF2z.js";import"./iframe-c5QjURjd.js";import"./createTheme-CgsFvkwA.js";import"./DefaultPropsProvider-BnDOUeJq.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-D2vwtQz8.js";import"./useTheme-DouzHGjt.js";import"./Tooltip-DJ_zQ3Xt.js";import"./index-BFJo53wU.js";import"./useSlot-BJ1CRAdA.js";import"./useForkRef-fM2IrCKB.js";import"./useTimeout-DgY8E2MB.js";import"./useControlled-DM7TiFWR.js";import"./getReactElementRef-hSa5zvl9.js";import"./index-DSCMbWyT.js";import"./index-VaRDmsAV.js";import"./Grow-BuzsStj7.js";import"./Popper-BpGY4_Yk.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BU9Jb30R.js";import"./ContentCopyTwoTone-DpQiQjGr.js";import"./HelpOutlineTwoTone-DB0GoDcs.js";import"./ErrorOutlined-ByeiquYV.js";import"./GetAppTwoTone-bjbBReha.js";import"./InfoOutlined-iDi6XMgF.js";import"./PhoneTwoTone-BhuaSYYZ.js";import"./DeleteTwoTone-DaVnIKhJ.js";import"./CheckCircleTwoTone-C5JDYzCA.js";import"./DropdownMenu-BRC4TiG1.js";import"./Button-DWZzM1YQ.js";import"./createSimplePaletteValueFilter-DGGr4raR.js";import"./ButtonBase-R1zAEHht.js";import"./CircularProgress-DF87QtHc.js";import"./Typography-u2K4Np03.js";import"./index-KdogHW2F.js";import"./extendSxProp-BTTcXXOw.js";import"./Fade-4pjdx6uQ.js";import"./Paper-f9F1rBkl.js";import"./ClickAwayListener-DLQRhqqv.js";import"./MenuList-C13sfcxS.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BhosYlj4.js";import"./MenuItem-CuJa-tIo.js";import"./dividerClasses-DHcx7Edu.js";import"./ListItemIcon-Cn3NS4dz.js";import"./ListItemText-CT-0wA8Q.js";import"./Divider-C1gvAX6u.js";import"./IconSvgButton-DB5XHoh8.js";import"./IconButton-D9Wo9i95.js";import"./index-X2jKd-h7.js";import"./getThemeProps-CElrGHOX.js";import"./Box-B2zh_4B1.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
