import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-DwgBnAli.js";import{C as p}from"./ComplexMenu-BjGJ8RIm.js";import"./createSvgIcon-TqGA5GS4.js";import"./index-BvkzVhja.js";import"./iframe-D86gUYfY.js";import"./createTheme-BnKHTdnQ.js";import"./DefaultPropsProvider-CYw3Fks0.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CNZLKbAz.js";import"./useTheme-DOHmBU_Q.js";import"./Tooltip-DlgKzRYd.js";import"./index-Djkai_n6.js";import"./useSlot-CpbBpyfC.js";import"./useForkRef-D6RYFZJE.js";import"./useTimeout-BhJcJhho.js";import"./useControlled-BqXuHVop.js";import"./getReactElementRef-CSwoQRSl.js";import"./index-D1ZhQdri.js";import"./index-nooAMcKr.js";import"./Grow-1U6ARRbe.js";import"./Popper-BOpwvkY8.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DHmMPogR.js";import"./ContentCopyTwoTone-CN8vTyWL.js";import"./HelpOutlineTwoTone-DwEbUyrp.js";import"./ErrorOutlined-CSdmfhNC.js";import"./GetAppTwoTone-B4L1D-Tc.js";import"./InfoOutlined-P0LrwAbr.js";import"./PhoneTwoTone-Bzlul2yE.js";import"./DeleteTwoTone-CZG5xVD3.js";import"./CheckCircleTwoTone-Dg7Y-mS9.js";import"./DropdownMenu-oY4SBCGJ.js";import"./Button-CFj-G6sD.js";import"./createSimplePaletteValueFilter-BID9b8gQ.js";import"./ButtonBase-C-uVUtTT.js";import"./CircularProgress-D9VUIaZV.js";import"./Typography-ClJ7qrfT.js";import"./index-BpWTALmT.js";import"./extendSxProp-PG9lN2V8.js";import"./Fade-D5Eu1XIh.js";import"./Paper-DZq6vmXR.js";import"./ClickAwayListener-D2ZJQO-q.js";import"./MenuList-DC2ZA5Tj.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-B340iU7Z.js";import"./MenuItem-eKi7-NYE.js";import"./dividerClasses-Cc4bNaoR.js";import"./ListItemIcon-BCItHeCr.js";import"./ListItemText-CeCE3unh.js";import"./Divider-KbW2J5YP.js";import"./IconSvgButton-CYqyAxwy.js";import"./IconButton-xQjHQzJV.js";import"./index-ab_ZkUWY.js";import"./getThemeProps-aAOWIBG1.js";import"./Box-Ch_qkwG8.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
