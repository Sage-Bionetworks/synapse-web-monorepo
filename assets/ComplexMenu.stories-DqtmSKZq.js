import{j as i}from"./jsx-runtime-BY_mVWc9.js";import{I as n}from"./IconSvg-BSdJHOvK.js";import{C as p}from"./ComplexMenu-CX0Feud3.js";import"./index-CDYR7tL8.js";import"./iframe-ec_Y5N2K.js";import"./createSvgIcon-DALwTUgz.js";import"./createTheme-DZLOB4Mv.js";import"./DefaultPropsProvider-DNPn7UnV.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-B43FcIWF.js";import"./useTheme-gk5821JI.js";import"./Tooltip-CsjxOjn3.js";import"./index-D3vA8nvS.js";import"./useSlot-Caj1a2M-.js";import"./useForkRef-DivrPue1.js";import"./useTimeout-Cqf2BsOs.js";import"./useControlled-B3shF0Q4.js";import"./getReactElementRef-BTQA_67l.js";import"./index-BNiyjOON.js";import"./index-CwYnvFaE.js";import"./Grow-Ccx_ij52.js";import"./Popper-C0ikImD9.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-C2hgzc6u.js";import"./ContentCopyTwoTone-BJ_6l3p1.js";import"./HelpOutlineTwoTone-By_qAZog.js";import"./ErrorOutlined-BMZnP9h2.js";import"./GetAppTwoTone-BKtn7G8o.js";import"./InfoOutlined-DunfhNo6.js";import"./PhoneTwoTone-4wdZ6BAf.js";import"./DeleteTwoTone-D2rOvLHB.js";import"./CheckCircleTwoTone-D1TLx2f1.js";import"./DropdownMenu-CKVmylXj.js";import"./Button-C4-2XFxt.js";import"./createSimplePaletteValueFilter-DBau_Gxe.js";import"./ButtonBase-CzvtEIH5.js";import"./CircularProgress-vGm6AseL.js";import"./Typography-C1Gc4eFY.js";import"./index-DZbAs7ZD.js";import"./extendSxProp-CnXVVWK3.js";import"./Fade-YiaESS8f.js";import"./Paper-1Ie-v56U.js";import"./ClickAwayListener-DlSL8Ldo.js";import"./MenuList-C3YmcWAB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BZxsRfRk.js";import"./MenuItem-D0jn7Jqg.js";import"./dividerClasses-Cpke3k-P.js";import"./ListItemIcon-BCEQQ0-o.js";import"./ListItemText-D_VW_BQn.js";import"./Divider-DUww5RmE.js";import"./IconSvgButton-D43LNt3a.js";import"./IconButton-DyKMG-WG.js";import"./index-DDeKw6Gv.js";import"./getThemeProps-BGg4fvxA.js";import"./Box-BdYZ8dTM.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
