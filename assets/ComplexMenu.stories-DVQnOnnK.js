import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BHvZlE18.js";import{C as p}from"./ComplexMenu-aWjPwk67.js";import"./createSvgIcon-Bta1rE4w.js";import"./index-CnKwGr1y.js";import"./iframe-BU8JiGFx.js";import"./createTheme-rlsKoCaI.js";import"./DefaultPropsProvider-DOcNzQ9R.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-IAvPa7pt.js";import"./useTheme-R60J1bs9.js";import"./Tooltip-CcQtZRnu.js";import"./index-C6Kpllp9.js";import"./useSlot-yZIb9gbZ.js";import"./useForkRef-dt3m--Ki.js";import"./useTimeout-BErCNBpu.js";import"./useControlled-7Ocvyg46.js";import"./getReactElementRef-qmrSwM0o.js";import"./index-CrVRpWIU.js";import"./index-qzqpRhr6.js";import"./Grow-BmG_Rl5o.js";import"./Popper-Bjhq1YSD.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-B1P3I_je.js";import"./ContentCopyTwoTone-CmR64f1a.js";import"./HelpOutlineTwoTone-BpGRqOUv.js";import"./ErrorOutlined-CBhlaXdk.js";import"./GetAppTwoTone-RSqAJ3Z_.js";import"./InfoOutlined-7bk1WymT.js";import"./PhoneTwoTone-DQdfugCp.js";import"./DeleteTwoTone-BOelRhCS.js";import"./CheckCircleTwoTone-BvbSxHSY.js";import"./DropdownMenu-B1cpWG-0.js";import"./Button-BtM-gMQx.js";import"./createSimplePaletteValueFilter-1OM3Zajm.js";import"./ButtonBase-B9wNdFQY.js";import"./CircularProgress-CaLxGmIR.js";import"./Typography-eceePh8m.js";import"./index-Bqlegoam.js";import"./extendSxProp-CwDJNcxu.js";import"./Fade-D7Joq1MA.js";import"./Paper-D6s_ZdQS.js";import"./ClickAwayListener-BggZ74LF.js";import"./MenuList-dmK2kCpU.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DnDPSAPE.js";import"./MenuItem-D-AY5bKS.js";import"./dividerClasses-Bp5kSzLF.js";import"./ListItemIcon-qEKd-Wti.js";import"./ListItemText-BpLeWSG5.js";import"./Divider-B4zpSyaK.js";import"./IconSvgButton-BE92dUce.js";import"./IconButton-DOb2mOZL.js";import"./index-Dfx2_-3W.js";import"./getThemeProps-BQ8nwEqe.js";import"./Box-BBXWKHrY.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
