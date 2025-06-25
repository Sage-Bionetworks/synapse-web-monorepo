import{j as i}from"./jsx-runtime-2dfIfU3r.js";import{I as n}from"./IconSvg-O_fSG1zJ.js";import{C as p}from"./ComplexMenu-LPmWgAgM.js";import"./index-5JMdGahQ.js";import"./iframe-DhTQcQ3F.js";import"./createSvgIcon-r4tj0IbI.js";import"./createTheme-B8kGFBlV.js";import"./DefaultPropsProvider-DWaPTsuO.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-C-dvLIHh.js";import"./useTheme-DRx6aaQt.js";import"./Tooltip-BlwrRREv.js";import"./index-DNe2VP0L.js";import"./useSlot-CapPe3Ll.js";import"./useForkRef-WPqv8QK0.js";import"./useTimeout-6cM8qZEx.js";import"./useControlled-DWWAB3KI.js";import"./getReactElementRef-DHQj-uSL.js";import"./index-0JVd7jt9.js";import"./index-uCSxDv0P.js";import"./Grow-D8pMyf2f.js";import"./Popper-DZ9rafFw.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Ct01JZ0L.js";import"./ContentCopyTwoTone-Cjdm5fQt.js";import"./HelpOutlineTwoTone-D2l5rLYI.js";import"./ErrorOutlined-DQjDaooR.js";import"./GetAppTwoTone-4d23h6nh.js";import"./InfoOutlined-VtLCv2bq.js";import"./PhoneTwoTone-nYyD9Hgu.js";import"./DeleteTwoTone-DL1G43wm.js";import"./CheckCircleTwoTone-DxGNA53f.js";import"./DropdownMenu-Be86nnkI.js";import"./Button-Bj9GQT73.js";import"./createSimplePaletteValueFilter-BB5KmPs3.js";import"./ButtonBase-Cz4vO_Lv.js";import"./CircularProgress-B5ZgS4zN.js";import"./Typography-CpAlcH3X.js";import"./index-G_wVDABB.js";import"./extendSxProp-BzI-gJOg.js";import"./Fade-7gUD2uZz.js";import"./Paper-BzDUbuS1.js";import"./ClickAwayListener-CyEaVCQx.js";import"./MenuList-0djV4QJk.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-B_g_i0eP.js";import"./MenuItem-CGNXQdQl.js";import"./dividerClasses-CGPOyYF1.js";import"./ListItemIcon-BCOZG4Kw.js";import"./ListItemText-BcSo_f_g.js";import"./Divider-BhBoC2rX.js";import"./IconSvgButton-qfd9elv9.js";import"./IconButton-DofgUFwE.js";import"./index-BtHz0Ucn.js";import"./getThemeProps-B-Gly8Zd.js";import"./Box-2DxmALU2.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
