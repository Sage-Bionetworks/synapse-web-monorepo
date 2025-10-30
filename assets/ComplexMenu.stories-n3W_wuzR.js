import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B_nm7_dk.js";import{C as p}from"./ComplexMenu-BazAcm9N.js";import"./createSvgIcon-D58Sw3_z.js";import"./index-CTBfKjC4.js";import"./iframe-gTIDAZQg.js";import"./createTheme-BeM14ukj.js";import"./DefaultPropsProvider-CodfpIlO.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BDDIZjtd.js";import"./useTheme-BA2R1Ps9.js";import"./Tooltip-thvrSoEP.js";import"./index-CaRzBUHM.js";import"./useSlot-BQo3_OIz.js";import"./useForkRef-BbhCp5rg.js";import"./useTimeout-BvDOFDRr.js";import"./useControlled-BprndzS8.js";import"./getReactElementRef-DoTKk2nz.js";import"./index-bPKcxg0x.js";import"./index-BXX3-DP5.js";import"./Grow-D9O_1KqJ.js";import"./Popper-QoAfo2eP.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-B9ZuGV_E.js";import"./ContentCopyTwoTone-DoG_LNA6.js";import"./HelpOutlineTwoTone-DYpBDULM.js";import"./ErrorOutlined-DnzNd1Hw.js";import"./GetAppTwoTone-B4B3g0lX.js";import"./InfoOutlined-C8WotPha.js";import"./PhoneTwoTone-CSEzzdif.js";import"./DeleteTwoTone-DhoDFXxX.js";import"./CheckCircleTwoTone-a7_qh5-t.js";import"./DropdownMenu-h_M-1Fy7.js";import"./Button-DbuI_meR.js";import"./createSimplePaletteValueFilter-CPaswB4Q.js";import"./ButtonBase-mbVOgLji.js";import"./CircularProgress-BpCYYZDo.js";import"./Typography-CE5_NmU_.js";import"./index-q0agkvi3.js";import"./extendSxProp-BZCmJIiL.js";import"./Fade-B6EkDVCd.js";import"./Paper-B8lFXjj-.js";import"./ClickAwayListener-BDdlm6vq.js";import"./MenuList-DlrlvLak.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DQl6ugSk.js";import"./MenuItem-FFN5RD-1.js";import"./dividerClasses-DgTG0V1q.js";import"./ListItemIcon-DLYDBD0v.js";import"./ListItemText-BMRsTATw.js";import"./Divider-CyPLa3oC.js";import"./IconSvgButton-9eEifjvM.js";import"./IconButton-CqHRM4EF.js";import"./index-B5vI5iNd.js";import"./getThemeProps-DqlpC9Mi.js";import"./Box-Vn1G5ew2.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
