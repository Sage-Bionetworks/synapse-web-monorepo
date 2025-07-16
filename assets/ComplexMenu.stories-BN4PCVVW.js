import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DeI_9mTK.js";import{C as p}from"./ComplexMenu-B2P4vCkH.js";import"./createSvgIcon-koTmqTDS.js";import"./index-C0JvWMff.js";import"./iframe-DNXoYa4O.js";import"./createTheme-B3F90xOt.js";import"./DefaultPropsProvider-Cr3dPd9g.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CGyFDzld.js";import"./useTheme-oQB9tHIv.js";import"./Tooltip-B8Tb7fkD.js";import"./index-DznA_vW2.js";import"./useSlot-D3cOw50Q.js";import"./useForkRef-DbtxdJG_.js";import"./useTimeout-BTkZDFKk.js";import"./useControlled-JW-RUyV0.js";import"./getReactElementRef-DYzm166M.js";import"./index-kJ3q-whD.js";import"./index-DwXwC2jP.js";import"./Grow-ZuxCxpoj.js";import"./Popper-BkTsEBSY.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-5iuiAzfK.js";import"./ContentCopyTwoTone-B2fl88oa.js";import"./HelpOutlineTwoTone-2p5w4Xfi.js";import"./ErrorOutlined-er0LcUAw.js";import"./GetAppTwoTone-B8YA-Ks5.js";import"./InfoOutlined-yF81qRCz.js";import"./PhoneTwoTone-DJbTP-A8.js";import"./DeleteTwoTone-CDvQdD1t.js";import"./CheckCircleTwoTone-DLZUc_ip.js";import"./DropdownMenu-CmsrFkpy.js";import"./Button-DPEBK_F3.js";import"./createSimplePaletteValueFilter-C1IGZ-iD.js";import"./ButtonBase-BYY4hzrD.js";import"./CircularProgress--neujvzt.js";import"./Typography-CS8I5n2T.js";import"./index-DLsodws3.js";import"./extendSxProp-BVQBrtSx.js";import"./Fade-h24MK7uO.js";import"./Paper-DNg490FH.js";import"./ClickAwayListener-Co9NCCCU.js";import"./MenuList-BZdqJFFT.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-C76Xg2Ye.js";import"./MenuItem-DPyYNf6Y.js";import"./dividerClasses-D2UNtWwr.js";import"./ListItemIcon-CeaGmQIw.js";import"./ListItemText-D52DgK-j.js";import"./Divider-B6fLsxNw.js";import"./IconSvgButton-CdBZiDRm.js";import"./IconButton--vg-yfR-.js";import"./index-Dl3RRAgk.js";import"./getThemeProps-Db77coRQ.js";import"./Box-Cf0Q_2JL.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
