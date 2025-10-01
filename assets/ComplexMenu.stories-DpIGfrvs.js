import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BcHo1SZM.js";import{C as p}from"./ComplexMenu-B0yD-C1q.js";import"./createSvgIcon-CM2amrIa.js";import"./index-B1zwXUFJ.js";import"./iframe-CEUpxgkq.js";import"./createTheme-_pxiMefb.js";import"./DefaultPropsProvider-GsNV9x9z.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CpqbQ1th.js";import"./useTheme-BUiWg39J.js";import"./Tooltip-SOMH60mq.js";import"./index-CXr-s7_R.js";import"./useSlot-D6M9SnNa.js";import"./useForkRef-5vAL7abv.js";import"./useTimeout-B5WP2A00.js";import"./useControlled-CvHOTKrv.js";import"./getReactElementRef-nx52Mdp2.js";import"./index-CehnuqZ2.js";import"./index-B9UKDQHV.js";import"./Grow-DJhgm6K5.js";import"./Popper-DkenFVym.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-D9zwYVkg.js";import"./ContentCopyTwoTone-CHcEXTNS.js";import"./HelpOutlineTwoTone-CmVmiShJ.js";import"./ErrorOutlined-TFczv36U.js";import"./GetAppTwoTone-P99tvnNs.js";import"./InfoOutlined-5v6RTYq4.js";import"./PhoneTwoTone-eCTLm_Lg.js";import"./DeleteTwoTone-BST9atPD.js";import"./CheckCircleTwoTone-BY2yex5b.js";import"./DropdownMenu-B4TsqO_x.js";import"./Button-DQBYwH6j.js";import"./createSimplePaletteValueFilter-BWy-N_2A.js";import"./ButtonBase-CrQcMVod.js";import"./CircularProgress-eY2NprPN.js";import"./Typography-Bb10PgLN.js";import"./index-DCPzSk5o.js";import"./extendSxProp-DOiWkfYu.js";import"./Fade-CDBEomBI.js";import"./Paper-CMiT_g2s.js";import"./ClickAwayListener-BMakqtGy.js";import"./MenuList-BwSjQtT9.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Dem7xI7K.js";import"./MenuItem-CnPnjvrT.js";import"./dividerClasses-vJaFYMye.js";import"./ListItemIcon-BoGNuFbe.js";import"./ListItemText-BxewGndT.js";import"./Divider-BpJYQEIL.js";import"./IconSvgButton-b5SGtUtB.js";import"./IconButton-BuZDhROp.js";import"./index-C68e-uRZ.js";import"./getThemeProps-Dr1zNmMJ.js";import"./Box-3Z_tla_z.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
