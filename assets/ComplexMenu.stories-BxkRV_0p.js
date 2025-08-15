import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B7qoUzkd.js";import{C as p}from"./ComplexMenu-D4XMkbQw.js";import"./createSvgIcon-COdRNMCK.js";import"./index-BhoLOz1H.js";import"./iframe-B-L9UC8S.js";import"./createTheme-uSqP-y16.js";import"./DefaultPropsProvider-JciSacAe.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Dzar86kc.js";import"./useTheme-IOcY49Vw.js";import"./Tooltip-BCfoCJ3N.js";import"./index-O2jcSvk0.js";import"./useSlot-CxrlCIUv.js";import"./useForkRef-DYuMtypn.js";import"./useTimeout-C-8UHDQb.js";import"./useControlled-DAZ0ami4.js";import"./getReactElementRef-Bwg-tl0o.js";import"./index-DkDu69A9.js";import"./index-D7gNMrVA.js";import"./Grow-BHUIcvLI.js";import"./Popper-DFM4tJbE.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DNsEcV6Y.js";import"./ContentCopyTwoTone-BPMeVr4f.js";import"./HelpOutlineTwoTone-DAmT7vPV.js";import"./ErrorOutlined-Bs9nfp62.js";import"./GetAppTwoTone-Bw7culPd.js";import"./InfoOutlined-fPkQWGxK.js";import"./PhoneTwoTone-BqGvXd9k.js";import"./DeleteTwoTone-OT6Pf6BZ.js";import"./CheckCircleTwoTone-BYuWZBzO.js";import"./DropdownMenu-C_spK7Qe.js";import"./Button-CS10Dyhh.js";import"./createSimplePaletteValueFilter-DK6_d1Ss.js";import"./ButtonBase-DQo73RHU.js";import"./CircularProgress-CY6nvIDK.js";import"./Typography-DtJqdX6z.js";import"./index-0WGr6q2T.js";import"./extendSxProp-Bky6oZpU.js";import"./Fade-VmFZ3hHI.js";import"./Paper-DFU7rbcO.js";import"./ClickAwayListener-CxHe6jg0.js";import"./MenuList-BN_-m734.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BioVO7iW.js";import"./MenuItem-Nr2nLCWR.js";import"./dividerClasses-DTtL2zFf.js";import"./ListItemIcon-p30RvzFe.js";import"./ListItemText-9d8rMQ8R.js";import"./Divider-BwOX-5rY.js";import"./IconSvgButton-DQlbXnKB.js";import"./IconButton-B1rYF2mA.js";import"./index-D5jgfjzv.js";import"./getThemeProps-1OZ0r_fo.js";import"./Box-YHUhwqyo.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
