import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BEqXL8kB.js";import{C as p}from"./ComplexMenu-DFJA2fmH.js";import"./createSvgIcon-DlknZ8DT.js";import"./index-C4cZfyta.js";import"./iframe-CQBsSkH1.js";import"./createTheme-DKCGYC74.js";import"./DefaultPropsProvider-COwBkssq.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-EUM0u8OS.js";import"./useTheme-CHQao_Ky.js";import"./Tooltip-DmYP4Mhv.js";import"./index-CIMObRwO.js";import"./useSlot-DfJG0AmY.js";import"./useForkRef-BF8W8g8e.js";import"./useTimeout-CW0CeN_n.js";import"./useControlled-mUKNRlyv.js";import"./getReactElementRef-CpsFMufv.js";import"./index-GslO3b7v.js";import"./index-C8oq6Qy8.js";import"./Grow-B2J6GiXL.js";import"./Popper-ChHHXfih.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DjMf4Mns.js";import"./ContentCopyTwoTone-CbldvQE2.js";import"./HelpOutlineTwoTone-CVb_wLBO.js";import"./ErrorOutlined-DWWjZMKQ.js";import"./GetAppTwoTone-BUPB3ikY.js";import"./InfoOutlined-DkRV5nO_.js";import"./PhoneTwoTone-Cun8g_nk.js";import"./DeleteTwoTone-BY8rI01E.js";import"./CheckCircleTwoTone-B4zrJ57y.js";import"./DropdownMenu-Cio2r9yD.js";import"./Button-E__CqjIq.js";import"./createSimplePaletteValueFilter-DHrQxoJ8.js";import"./ButtonBase-C-h7fRM9.js";import"./CircularProgress-K8HXy70m.js";import"./Typography-Dt7Vbgv5.js";import"./index-BSdJvT-T.js";import"./extendSxProp-BrBmoHLs.js";import"./Fade-Cy8MZmCt.js";import"./Paper-DPyh2a0v.js";import"./ClickAwayListener-BMl-2hNa.js";import"./MenuList-BoNZw62d.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DeVsK_i_.js";import"./MenuItem-BDbLl2oX.js";import"./dividerClasses-Ce4nUhA7.js";import"./ListItemIcon-DQvf8LJ-.js";import"./ListItemText-nyU-CLz5.js";import"./Divider-c94XVyNG.js";import"./IconSvgButton-Dhjc86yd.js";import"./IconButton-CwYzm24i.js";import"./index-CR8uXT6v.js";import"./getThemeProps-B-F6rZRM.js";import"./Box-D9QD3wi2.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
