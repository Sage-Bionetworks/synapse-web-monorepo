import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-D_TkKWmb.js";import{C as p}from"./ComplexMenu-BF45XjBb.js";import"./createSvgIcon-DiCPcpir.js";import"./index-DiBgT_g4.js";import"./iframe-uFLftcIy.js";import"./createTheme-Barucc3o.js";import"./DefaultPropsProvider-5BuMuhNk.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Dk4dRd2j.js";import"./useTheme-BxqvYw5-.js";import"./Tooltip-DMolmanq.js";import"./index-aEYNMko0.js";import"./useSlot-BnoEaNVP.js";import"./useForkRef-D3B4tP8D.js";import"./useTimeout-Cg8KvPgb.js";import"./useControlled-CqW2zA2Q.js";import"./getReactElementRef-DE7AlBDu.js";import"./index-BVru8Zw3.js";import"./index-CMfiAwEf.js";import"./Grow-B7s8RAlS.js";import"./Popper-JK9tjrQY.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BuCh0eur.js";import"./ContentCopyTwoTone-BLMR4lgW.js";import"./HelpOutlineTwoTone-Dsd4uZcV.js";import"./ErrorOutlined-DUY8EF2i.js";import"./GetAppTwoTone-DIiT4EEO.js";import"./InfoOutlined-BT9e5Wpc.js";import"./PhoneTwoTone-CWlJnhUY.js";import"./DeleteTwoTone-C4rSNwPg.js";import"./CheckCircleTwoTone-Cijhq7EN.js";import"./DropdownMenu-DQf2_UBB.js";import"./Button-CmYxHs1i.js";import"./createSimplePaletteValueFilter-Dxo_mhWY.js";import"./ButtonBase-CtFWPYLG.js";import"./CircularProgress-BbzGW1mt.js";import"./Typography-0IkQ6ATH.js";import"./index-B74TbmPh.js";import"./extendSxProp-B2jc7Sfx.js";import"./Fade-CySYR3x4.js";import"./Paper-DdBQwrgv.js";import"./ClickAwayListener-luk8cFos.js";import"./MenuList-DvVd7Y3w.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-donUnVaj.js";import"./MenuItem-BFmYSNss.js";import"./dividerClasses-DgLqW29q.js";import"./ListItemIcon-D5EXnqGK.js";import"./ListItemText-DoaxhhDe.js";import"./Divider-ZeLdYzUE.js";import"./IconSvgButton-5O94ra_V.js";import"./IconButton-D3dEJ89e.js";import"./index-aum-VpCf.js";import"./getThemeProps-Di5KybE1.js";import"./Box-B47wL6Kg.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
