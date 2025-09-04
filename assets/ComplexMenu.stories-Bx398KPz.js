import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CJQeSNkP.js";import{C as p}from"./ComplexMenu-DD3xcXym.js";import"./createSvgIcon-lCvAzxxC.js";import"./index-jbxe4qnf.js";import"./iframe-Csk0P4iV.js";import"./createTheme-QTfNIHND.js";import"./DefaultPropsProvider-C4ttJDz_.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CIoHEpFD.js";import"./useTheme-rEQ5k3ZP.js";import"./Tooltip-qF9vFCxj.js";import"./index-Bgii8hnK.js";import"./useSlot-CSa8e3oq.js";import"./useForkRef-wDv3ts2U.js";import"./useTimeout-hWOZoqao.js";import"./useControlled-BKjVu3OC.js";import"./getReactElementRef-DVxXf28N.js";import"./index--FkLQ4Xz.js";import"./index-lKZlVmyo.js";import"./Grow-DiQPLxxn.js";import"./Popper-DxO4RVb4.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-D2TnwRhq.js";import"./ContentCopyTwoTone-mOkr1e24.js";import"./HelpOutlineTwoTone-C2PSJauU.js";import"./ErrorOutlined-CxKDWmRT.js";import"./GetAppTwoTone-BttHA5eT.js";import"./InfoOutlined-B_E2AeiW.js";import"./PhoneTwoTone-C8-aq8sy.js";import"./DeleteTwoTone-D9fROoNZ.js";import"./CheckCircleTwoTone-B47WEstA.js";import"./DropdownMenu-0XIAtKLn.js";import"./Button-BoXndE0m.js";import"./createSimplePaletteValueFilter-CFdyQ8cQ.js";import"./ButtonBase-iBx1-ak6.js";import"./CircularProgress-D4qUYTVZ.js";import"./Typography-B2nrfcQB.js";import"./index-DeDVaIci.js";import"./extendSxProp-CmGMGW33.js";import"./Fade-CJ4j-VUz.js";import"./Paper-BEpt9DOD.js";import"./ClickAwayListener-CpmfBYEj.js";import"./MenuList-C8uoOz6W.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DmIkDtuz.js";import"./MenuItem-DQPOy6SF.js";import"./dividerClasses-d9_wt9AV.js";import"./ListItemIcon-BnYXtOZY.js";import"./ListItemText-_EtgQgwo.js";import"./Divider-DSGa3Apc.js";import"./IconSvgButton-XiIH9SbS.js";import"./IconButton-DBbxkGzb.js";import"./index-DYHI6PAe.js";import"./getThemeProps-mTF8rg2g.js";import"./Box-NmarTIzp.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
