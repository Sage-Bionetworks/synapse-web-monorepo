import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg--EOIxLkr.js";import{C as p}from"./ComplexMenu-C64pgE0D.js";import"./createSvgIcon-CQtqRFBT.js";import"./index-BdUAYS9h.js";import"./iframe-CpJoLHmY.js";import"./createTheme-CyTLEU3i.js";import"./DefaultPropsProvider-CrrxgVPq.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-IErwV-Ug.js";import"./useTheme-ClrSPtrJ.js";import"./Tooltip-BRwDLAyh.js";import"./index-CWp-JoAj.js";import"./useSlot-BFkGEdWp.js";import"./useForkRef-BYJIK3bI.js";import"./useTimeout-Cde0jI0k.js";import"./useControlled-oba0F23J.js";import"./getReactElementRef-DLKh61Wu.js";import"./index-C6AkVaeY.js";import"./index-DPcBfgK1.js";import"./Grow-CuumPSVk.js";import"./Popper-B4kjXWcz.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CwG8p737.js";import"./ContentCopyTwoTone-oTnkqAGN.js";import"./HelpOutlineTwoTone-CaZh3IUe.js";import"./ErrorOutlined-DTPxUx9a.js";import"./GetAppTwoTone-C4aP_wVm.js";import"./InfoOutlined-DBmlHB_K.js";import"./PhoneTwoTone-Cuap47Rr.js";import"./DeleteTwoTone-CuIwTLwr.js";import"./CheckCircleTwoTone-CZFnuvZG.js";import"./DropdownMenu-C1Dbzgxk.js";import"./Button-DC_qvPIS.js";import"./createSimplePaletteValueFilter-C6dToHOG.js";import"./ButtonBase-DQ_Dc5W1.js";import"./CircularProgress-PI0728JC.js";import"./Typography-DtWAgXAy.js";import"./index-CqQRnKb9.js";import"./extendSxProp-CPzueTmv.js";import"./Fade-BbISf70S.js";import"./Paper-uMerSr0J.js";import"./ClickAwayListener-l3nc9S5t.js";import"./MenuList-X8OsvvO_.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-B18macjD.js";import"./MenuItem-BPLUqjXB.js";import"./dividerClasses-oeJxoOfW.js";import"./ListItemIcon-CLiLdBwN.js";import"./ListItemText-BK-NtOYY.js";import"./Divider-B33CZPi-.js";import"./IconSvgButton-Cz7SEway.js";import"./IconButton-CV35gqz1.js";import"./index-BxjOGLDy.js";import"./getThemeProps-DtfOwbG6.js";import"./Box-Dyy71dSi.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
