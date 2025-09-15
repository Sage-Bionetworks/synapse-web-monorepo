import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-D6Ai2AzB.js";import{C as p}from"./ComplexMenu-D761Md2N.js";import"./createSvgIcon-CZi17tUa.js";import"./index-C2PZBrLv.js";import"./iframe-CNTF6X_t.js";import"./createTheme-D-kospWj.js";import"./DefaultPropsProvider-CC2ZtPmq.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CWrjHpSC.js";import"./useTheme-CnkkHqH9.js";import"./Tooltip-BP3wuRWq.js";import"./index-DgnACGHd.js";import"./useSlot-BoukHlmH.js";import"./useForkRef-CUmErhp7.js";import"./useTimeout-BUOTtkI_.js";import"./useControlled-Chb41gWY.js";import"./getReactElementRef-QZCM3h1T.js";import"./index-BkdGZOWW.js";import"./index-D7wXRBOq.js";import"./Grow-D045avyu.js";import"./Popper-DFXRF7a3.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BxgSDaIn.js";import"./ContentCopyTwoTone-BFsFrdGY.js";import"./HelpOutlineTwoTone-DKGLDv2E.js";import"./ErrorOutlined-BOsREY4-.js";import"./GetAppTwoTone-dD7FznD3.js";import"./InfoOutlined-O2d6qfB9.js";import"./PhoneTwoTone-DModTVAw.js";import"./DeleteTwoTone-DxbRcwQy.js";import"./CheckCircleTwoTone-CiIEkiU2.js";import"./DropdownMenu-Dxst_9oF.js";import"./Button-c0UHW0MR.js";import"./createSimplePaletteValueFilter-D08C6jui.js";import"./ButtonBase-ClEqCu4q.js";import"./CircularProgress-Ce_-6k31.js";import"./Typography-5nQ2YQd7.js";import"./index-D39n2xwi.js";import"./extendSxProp-DCZvLCZ1.js";import"./Fade-CUlhCYG9.js";import"./Paper-DlQITwJL.js";import"./ClickAwayListener-C_f-0IT0.js";import"./MenuList-C5azyVTb.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Dpcr5eFi.js";import"./MenuItem-C5KWcZOQ.js";import"./dividerClasses-BYu2PiM4.js";import"./ListItemIcon--tDD8n_p.js";import"./ListItemText-DgqaN0nt.js";import"./Divider-DskYpPl2.js";import"./IconSvgButton-D013oJRl.js";import"./IconButton-DL9Auw19.js";import"./index-CCNPT3Gk.js";import"./getThemeProps-BghImWoL.js";import"./Box-YD4QvbDf.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
