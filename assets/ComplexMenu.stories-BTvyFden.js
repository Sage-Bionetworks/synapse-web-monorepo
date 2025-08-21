import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B7Hjev7U.js";import{C as p}from"./ComplexMenu-DvFk-lYn.js";import"./createSvgIcon-D3A_t-T8.js";import"./index-DlbKFsS_.js";import"./iframe-0wVslN7b.js";import"./createTheme-DbTVx9wk.js";import"./DefaultPropsProvider-DkB9qiCW.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CmWvFfrN.js";import"./useTheme-BkeJ3rG0.js";import"./Tooltip-C-YsDLR5.js";import"./index-B_X4U_Mc.js";import"./useSlot-D2G1tdG6.js";import"./useForkRef-dmtj3swN.js";import"./useTimeout-DZY_Ldn6.js";import"./useControlled-fzollbDs.js";import"./getReactElementRef-C_kE-ach.js";import"./index-j7g_Ug4x.js";import"./index-DZsggVEU.js";import"./Grow-BWTyqGfK.js";import"./Popper-jZJ7QXLK.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DKRZ2coU.js";import"./ContentCopyTwoTone-BR0AUnVq.js";import"./HelpOutlineTwoTone-DDkfGW6x.js";import"./ErrorOutlined-CwR46xA5.js";import"./GetAppTwoTone-BhEY653J.js";import"./InfoOutlined-Bvqbqmxy.js";import"./PhoneTwoTone-Cv-6moCh.js";import"./DeleteTwoTone-Bd598v_s.js";import"./CheckCircleTwoTone-BIDizvcR.js";import"./DropdownMenu-BFXaxeIR.js";import"./Button-Cw1keIu4.js";import"./createSimplePaletteValueFilter-B2_2URZH.js";import"./ButtonBase-BSSfV59K.js";import"./CircularProgress-DwsvCZV6.js";import"./Typography-QhlHI-oV.js";import"./index-Dg0Jby1P.js";import"./extendSxProp-CkTWBxQk.js";import"./Fade-T_moeo9f.js";import"./Paper-CmTDa9ue.js";import"./ClickAwayListener-M7aD0F4C.js";import"./MenuList-cgJDZ5te.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BGqwpTXk.js";import"./MenuItem-DByqA0So.js";import"./dividerClasses-Bg-51PiF.js";import"./ListItemIcon-D01xWWA_.js";import"./ListItemText-CCHqMKxP.js";import"./Divider-Dn0WIMSI.js";import"./IconSvgButton-ijAEIobQ.js";import"./IconButton-CdNa3UAM.js";import"./index-Dlmyig_w.js";import"./getThemeProps-CDavjzIJ.js";import"./Box-C41TTZyw.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
