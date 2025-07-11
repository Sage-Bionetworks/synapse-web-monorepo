import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CgLnJ9yQ.js";import{C as p}from"./ComplexMenu-BNPmK027.js";import"./createSvgIcon-D5Yfx_2a.js";import"./index-GRv_M5xO.js";import"./iframe-CHSey4Qy.js";import"./createTheme-XMOvO1uz.js";import"./DefaultPropsProvider-TL-5ySmN.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CTnoRr58.js";import"./useTheme-D8ZpTE-W.js";import"./Tooltip-CL0Q9gg2.js";import"./index-DgcQxjL4.js";import"./useSlot-DIJeBNuE.js";import"./useForkRef-9xmpncSc.js";import"./useTimeout-BKm-mX-p.js";import"./useControlled-BFF-TWZN.js";import"./getReactElementRef-dtt4OgtQ.js";import"./index-DevK0Wnu.js";import"./index-Q1AwhQZ3.js";import"./Grow-DMzs2hg_.js";import"./Popper-CREcBinl.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DLRHgUNg.js";import"./ContentCopyTwoTone-DcZzZq6m.js";import"./HelpOutlineTwoTone-DxWLHUPN.js";import"./ErrorOutlined-DH8uZd6K.js";import"./GetAppTwoTone-D6NtJOYv.js";import"./InfoOutlined-HV17mOBC.js";import"./PhoneTwoTone-9lka5SMC.js";import"./DeleteTwoTone-DSHSmWjz.js";import"./CheckCircleTwoTone-Bl8hrmiT.js";import"./DropdownMenu-B9WG6k32.js";import"./Button-BkJK4QNY.js";import"./createSimplePaletteValueFilter-CTGhusyg.js";import"./ButtonBase-V1v9Oy7w.js";import"./CircularProgress-Dvwg5XG_.js";import"./Typography-CnygSuis.js";import"./index-BIrZvg_i.js";import"./extendSxProp-BUjKKvW6.js";import"./Fade-BdlIu10A.js";import"./Paper-v_DbiU7W.js";import"./ClickAwayListener-BxWmYz5N.js";import"./MenuList-DRqW1dcy.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-By7Sb8ey.js";import"./MenuItem-CvXbhLRR.js";import"./dividerClasses-C8TkVC9I.js";import"./ListItemIcon-DezH4mUQ.js";import"./ListItemText-BsVxmysQ.js";import"./Divider-DFJuK7iW.js";import"./IconSvgButton-foLlpHQz.js";import"./IconButton-BCHYlsAQ.js";import"./index-CccjLrvt.js";import"./getThemeProps-BBbNAS-u.js";import"./Box-piqsVEzW.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
