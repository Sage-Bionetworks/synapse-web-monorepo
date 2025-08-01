import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CozXUI1Z.js";import{C as p}from"./ComplexMenu-XjH_YNdL.js";import"./createSvgIcon-YQCSlHK0.js";import"./index-DSkVdhrf.js";import"./iframe-DYeF287a.js";import"./createTheme-B_zC4xf3.js";import"./DefaultPropsProvider-DzRiX1xR.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CV8KRl2q.js";import"./useTheme-Cym59Nt6.js";import"./Tooltip-DNwnDvqE.js";import"./index-BHkBa_FS.js";import"./useSlot-DW6hEZC9.js";import"./useForkRef-CYgCZhxb.js";import"./useTimeout-BAqBF6lB.js";import"./useControlled-DwIZwnDy.js";import"./getReactElementRef-CGvdkwYh.js";import"./index-B_05Cg5Y.js";import"./index-wPQ0IiXn.js";import"./Grow-Tn7aC0Mr.js";import"./Popper-MBWBO-b7.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BOnJLoDb.js";import"./ContentCopyTwoTone-BMVXuN9w.js";import"./HelpOutlineTwoTone-Dl1y5Su2.js";import"./ErrorOutlined-C4C2BeQU.js";import"./GetAppTwoTone-PLvHhqYV.js";import"./InfoOutlined-CWZBjZNf.js";import"./PhoneTwoTone-B9fBcAFd.js";import"./DeleteTwoTone-BEdDsHUF.js";import"./CheckCircleTwoTone-C_SCJO_4.js";import"./DropdownMenu-CpG-LwaO.js";import"./Button-aqwJXSce.js";import"./createSimplePaletteValueFilter-t_V-XiMr.js";import"./ButtonBase-B5hFWQuv.js";import"./CircularProgress-CosGYM1x.js";import"./Typography-CyWUTtXN.js";import"./index-DCjjB6Mt.js";import"./extendSxProp-DAsRLwVq.js";import"./Fade-DzXsEJ83.js";import"./Paper-_-PoF_c7.js";import"./ClickAwayListener-CAWvQwZB.js";import"./MenuList-C5FQK1Z7.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-ESIOEHau.js";import"./MenuItem-C5dcrrY3.js";import"./dividerClasses-CUInyIXJ.js";import"./ListItemIcon-DZaUfiuD.js";import"./ListItemText-DIY_JKQi.js";import"./Divider-DxyGsaIn.js";import"./IconSvgButton-DlxpfKPq.js";import"./IconButton-Bo7k1tr3.js";import"./index-D3S1ECkB.js";import"./getThemeProps-C3jqbSrb.js";import"./Box-BMSgzQAg.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
