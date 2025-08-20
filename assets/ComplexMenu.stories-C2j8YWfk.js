import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-zN3eXuGD.js";import{C as p}from"./ComplexMenu-85_nLQ0U.js";import"./createSvgIcon-C-kUqDRU.js";import"./index-rmXZupeT.js";import"./iframe-CnAxXqxV.js";import"./createTheme-7VwcU9MX.js";import"./DefaultPropsProvider-XLuEdgCM.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Dj_3GmAW.js";import"./useTheme-CjWK0QVA.js";import"./Tooltip-Byt5Qei4.js";import"./index-DwY_HY0j.js";import"./useSlot-D6xm9tOe.js";import"./useForkRef-B964cD4p.js";import"./useTimeout-C7Qw7JlA.js";import"./useControlled-PcFy2od8.js";import"./getReactElementRef-ChnRrIQ2.js";import"./index-DEyJTSZg.js";import"./index-BFCDf8FD.js";import"./Grow-bzjsRX5V.js";import"./Popper-BIm3Cl6k.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BrWRD0Vm.js";import"./ContentCopyTwoTone-CWWEo0Nt.js";import"./HelpOutlineTwoTone-DlipprMz.js";import"./ErrorOutlined-wpj5kxwZ.js";import"./GetAppTwoTone-uwPCET2P.js";import"./InfoOutlined-Fpc83KQO.js";import"./PhoneTwoTone-Fx3g0Nmv.js";import"./DeleteTwoTone-BnE2Xyr1.js";import"./CheckCircleTwoTone-UW5_dW2R.js";import"./DropdownMenu-DuYoAgJq.js";import"./Button-z7wIW46U.js";import"./createSimplePaletteValueFilter-BrqKSbt1.js";import"./ButtonBase-bRyxANaO.js";import"./CircularProgress-B7bm9t_J.js";import"./Typography-C1bnshF6.js";import"./index-BQPAD3Qw.js";import"./extendSxProp-CMhnceC8.js";import"./Fade-DbJe4Bd2.js";import"./Paper-CXW8nM1b.js";import"./ClickAwayListener-Dfg_Mgii.js";import"./MenuList-p9zcxi_y.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CGDb4DUC.js";import"./MenuItem-BocAcLH-.js";import"./dividerClasses-C9bFnSqc.js";import"./ListItemIcon-Ds8J7DZB.js";import"./ListItemText-6zN_Mcdm.js";import"./Divider-4tSbXenG.js";import"./IconSvgButton-B3LlQQTL.js";import"./IconButton-BGihFqQO.js";import"./index-CHwSU6zn.js";import"./getThemeProps-CCWsl_Bt.js";import"./Box-CMDBeJLc.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
