import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BygaHl3K.js";import{C as p}from"./ComplexMenu-CqL0WVYK.js";import"./createSvgIcon-DmkT2sbO.js";import"./index-CeHTzJyp.js";import"./iframe-CRPpa2KP.js";import"./createTheme-D0jwdMH6.js";import"./DefaultPropsProvider-CNbyjzXA.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-D54EzNLV.js";import"./useTheme-DzRx46t8.js";import"./Tooltip-CWVch6yN.js";import"./index-NFQzg98e.js";import"./useSlot-Blh8swMU.js";import"./useForkRef-BHeMBZ9A.js";import"./useTimeout-DuSUC5v5.js";import"./useControlled-Qn6GC-e_.js";import"./getReactElementRef-Qf8deF3R.js";import"./index--lJFKKqu.js";import"./index-_-J0f0OQ.js";import"./Grow-CnNkUdh0.js";import"./Popper-BpwnzHmp.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CiEYX9S7.js";import"./ContentCopyTwoTone-DyZa4Nhd.js";import"./HelpOutlineTwoTone-D5Nr745K.js";import"./ErrorOutlined-BZSHSAua.js";import"./GetAppTwoTone-BZI9Dmtb.js";import"./InfoOutlined-DVMYYhkU.js";import"./PhoneTwoTone-Dlwmm47v.js";import"./DeleteTwoTone-DviNhYVO.js";import"./CheckCircleTwoTone-CcyJnJAE.js";import"./DropdownMenu-cgrkcB5e.js";import"./Button-VoQsandl.js";import"./createSimplePaletteValueFilter-BLZB6jXM.js";import"./ButtonBase-CyFFJ92C.js";import"./CircularProgress-luIUEH-s.js";import"./Typography-EPPVSSRU.js";import"./index-DjGhb9rT.js";import"./extendSxProp-ao-kpT-0.js";import"./Fade-_onL1Bmv.js";import"./Paper-D5Ed-jwF.js";import"./ClickAwayListener-CpwBEN2t.js";import"./MenuList-D-PolaKq.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-C6OU7VJf.js";import"./MenuItem-D9ghdTVx.js";import"./dividerClasses-D5iiI-rA.js";import"./ListItemIcon-BpUUb2KN.js";import"./ListItemText-BPTe1BCo.js";import"./Divider-CP0Pq3mX.js";import"./IconSvgButton-DyEpL-dY.js";import"./IconButton-D1JdUJVf.js";import"./index-COBAXoBU.js";import"./getThemeProps-CmJ_wHji.js";import"./Box-_fu27yuW.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
