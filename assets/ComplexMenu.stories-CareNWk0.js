import{j as i}from"./jsx-runtime-B_BASs2o.js";import{I as n}from"./IconSvg-DY93Dde8.js";import{C as p}from"./ComplexMenu-BvX6Baw4.js";import"./index-DwZZLiLd.js";import"./iframe-Zkz26kob.js";import"./createSvgIcon-oz7RTgz8.js";import"./createTheme-CyGr1kaY.js";import"./DefaultPropsProvider-DTt0l4rk.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DyVMMMH4.js";import"./useTheme-XTxZFMsc.js";import"./Tooltip-B9gDCvk0.js";import"./index-BwAixF8z.js";import"./useSlot-CIMJh2x7.js";import"./useForkRef-CmEb2Hjb.js";import"./useTimeout-gAYlsF9h.js";import"./useControlled-CbdmQ0MQ.js";import"./getReactElementRef-BgJZi7s_.js";import"./index-B5aouh9C.js";import"./index-C-naQSBy.js";import"./Grow-whg3Wx9g.js";import"./Popper-Ddcr4dsU.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DdLSL9hA.js";import"./ContentCopyTwoTone-D-3DySwS.js";import"./HelpOutlineTwoTone-Dm6u9ea6.js";import"./ErrorOutlined-BxEBhA4M.js";import"./GetAppTwoTone-CY_bSWSJ.js";import"./InfoOutlined-BP22JG1l.js";import"./PhoneTwoTone-AOqLsl6I.js";import"./DeleteTwoTone-CSBCfUmn.js";import"./CheckCircleTwoTone-Tw6QUA9Q.js";import"./DropdownMenu-VN4UybYM.js";import"./Button-7E9-g8VM.js";import"./createSimplePaletteValueFilter-CwcnoVpf.js";import"./ButtonBase-B4fAWw7x.js";import"./CircularProgress-DrTM6r8w.js";import"./Typography-DxLTsn7U.js";import"./index-msKwl0RH.js";import"./extendSxProp-cYd3bjsj.js";import"./Fade-DOQSzISd.js";import"./Paper-B4UH_OKi.js";import"./ClickAwayListener-DeMMBI1U.js";import"./MenuList-CjSvLjyt.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DlP48km1.js";import"./MenuItem-M_OvVeJ3.js";import"./dividerClasses-CtPsuRPR.js";import"./ListItemIcon-Cva4eBhb.js";import"./ListItemText-CVDcLF6K.js";import"./Divider-Bc11__fY.js";import"./IconSvgButton-CsU3ifiR.js";import"./IconButton-ZxELSsuB.js";import"./index-B0jd06om.js";import"./getThemeProps-DRCVkZxN.js";import"./Box-CTyNgpBu.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
