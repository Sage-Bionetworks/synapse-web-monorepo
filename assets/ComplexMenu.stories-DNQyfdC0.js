import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-f-mYcNAB.js";import{C as p}from"./ComplexMenu-j5w0K6eK.js";import"./createSvgIcon-DGQsVitk.js";import"./index-50V2EGz2.js";import"./iframe-CnNyPxR5.js";import"./createTheme-DSq-Mol7.js";import"./DefaultPropsProvider-C9wjepK5.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CjTtqgxL.js";import"./useTheme-CZTnF3AF.js";import"./Tooltip-C_M9hetJ.js";import"./index-Etco1RFO.js";import"./useSlot-DsxpMVrm.js";import"./useForkRef-BAPdpbNW.js";import"./useTimeout-BhJq4kG5.js";import"./useControlled-DtifG75u.js";import"./getReactElementRef-DBAVQkW_.js";import"./index-D3DJx0X2.js";import"./index-CC6HTFNl.js";import"./Grow-BtgJxlwW.js";import"./Popper-C9tLJj2J.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-3fnINepb.js";import"./ContentCopyTwoTone-u-4kI-7G.js";import"./HelpOutlineTwoTone-DiwaNnD4.js";import"./ErrorOutlined-CSuJeOjQ.js";import"./GetAppTwoTone-CznbIT1g.js";import"./InfoOutlined-B_8T4lmR.js";import"./PhoneTwoTone-ByKy4zJx.js";import"./DeleteTwoTone-DzBT3PKH.js";import"./CheckCircleTwoTone-DAKkXTN_.js";import"./DropdownMenu-Dd6jMa73.js";import"./Button-Cf0eu55O.js";import"./createSimplePaletteValueFilter-CldMCLtR.js";import"./ButtonBase-BX83Z0VB.js";import"./CircularProgress-BGTymdZp.js";import"./Typography-fBjhrNMo.js";import"./index-CLkWSig2.js";import"./extendSxProp-Et1BOirn.js";import"./Fade-ByV7WbF5.js";import"./Paper-BCS61ZLh.js";import"./ClickAwayListener-DDweZR_J.js";import"./MenuList-BWJ9_cI1.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BT13gRwp.js";import"./MenuItem-CYAJgPjF.js";import"./dividerClasses-DUiEmJqc.js";import"./ListItemIcon-VXkMvA5n.js";import"./ListItemText-D9lQ7BjP.js";import"./Divider-DC6peBfb.js";import"./IconSvgButton-D_aY3Cmi.js";import"./IconButton-BVSRfYlJ.js";import"./index-BLEs9AHU.js";import"./getThemeProps-DlbFbBX7.js";import"./Box-BDTYEpGC.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
