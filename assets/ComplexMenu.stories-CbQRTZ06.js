import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DtMS1A1B.js";import{C as p}from"./ComplexMenu-rot9ZkGL.js";import"./createSvgIcon-C0ZSoRRV.js";import"./index-9TTcYVc_.js";import"./iframe-Czx5Dmi0.js";import"./createTheme-DetxTjb2.js";import"./DefaultPropsProvider-CtKJNfPj.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DZOGkB3v.js";import"./useTheme-DM1dQSDI.js";import"./Tooltip-5yyA0MtP.js";import"./index-DmTgUWkb.js";import"./useSlot-Tf7QcJnO.js";import"./useForkRef-C7pV92fh.js";import"./useTimeout-DYRa_dr8.js";import"./useControlled-B5jxCiTd.js";import"./getReactElementRef-BVzUeeGA.js";import"./index-Bn2Fmzct.js";import"./index-ZL7ET78i.js";import"./Grow-seWSR3vl.js";import"./Popper-OxILuenQ.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BfQLQIKO.js";import"./ContentCopyTwoTone-aGQIYKp2.js";import"./HelpOutlineTwoTone-CiEPI5M9.js";import"./ErrorOutlined-Do6uv9hm.js";import"./GetAppTwoTone-CkwAfCcw.js";import"./InfoOutlined-B9rdOXIo.js";import"./PhoneTwoTone-BmKT8QCh.js";import"./DeleteTwoTone-D9tp1I-T.js";import"./CheckCircleTwoTone-B4xc24bl.js";import"./DropdownMenu-DVdIa53b.js";import"./Button-DkW-IEcU.js";import"./createSimplePaletteValueFilter-CXnjF6Zs.js";import"./ButtonBase-BWgIRray.js";import"./CircularProgress-DIiahqiB.js";import"./Typography-C1hk1xps.js";import"./index-BMbKnGiz.js";import"./extendSxProp-Dj0Tb7v9.js";import"./Fade-DV6rNrzp.js";import"./Paper-CbcZq6PP.js";import"./ClickAwayListener-Cmw51NWg.js";import"./MenuList-WP_IN_2p.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BeLKEG0h.js";import"./MenuItem-BjB5mn3U.js";import"./dividerClasses-C4NqVbCD.js";import"./ListItemIcon-BHpf3OOS.js";import"./ListItemText-RTTi_qID.js";import"./Divider-B5CJpdqA.js";import"./IconSvgButton-Ck5iTXBZ.js";import"./IconButton-BZkY5H-N.js";import"./index-B6RiwLXJ.js";import"./getThemeProps-CdZnDORy.js";import"./Box-Dy5ekAQq.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
