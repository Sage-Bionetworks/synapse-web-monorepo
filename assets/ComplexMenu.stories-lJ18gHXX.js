import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-1cn_cxGJ.js";import{C as p}from"./ComplexMenu-4TwBI1Jk.js";import"./createSvgIcon-BMaNoRgk.js";import"./index-CzGzXEn8.js";import"./iframe-uFVp_yWY.js";import"./createTheme-k23OqXGa.js";import"./DefaultPropsProvider-DIhp9cRI.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-m-jJYqTk.js";import"./useTheme-BdRzPGfO.js";import"./Tooltip-BQoBuipX.js";import"./index-sNVsSmo5.js";import"./useSlot-C-gtFsMB.js";import"./useForkRef-BSQlPluY.js";import"./useTimeout-Bco06NxJ.js";import"./useControlled-3AOcwQZd.js";import"./getReactElementRef-Dgr12Jgk.js";import"./index-B21--ivY.js";import"./index-D6SZASGo.js";import"./Grow-gVpppe5W.js";import"./Popper-DFhQZQac.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-kfMblsKf.js";import"./ContentCopyTwoTone-DK8kWrww.js";import"./HelpOutlineTwoTone-BVLBKiNi.js";import"./ErrorOutlined-DGRJvUp6.js";import"./GetAppTwoTone-C4B2eqwX.js";import"./InfoOutlined-BVm7lZAg.js";import"./PhoneTwoTone-BImCsFKe.js";import"./DeleteTwoTone-BKqiVKgp.js";import"./CheckCircleTwoTone-RDTFbucz.js";import"./DropdownMenu-CIGkU6HY.js";import"./Button-Bzn_cVpu.js";import"./createSimplePaletteValueFilter-ByhsrVNu.js";import"./ButtonBase--LE7YHRM.js";import"./CircularProgress-C1rPjsSq.js";import"./Typography-C2XHzVQE.js";import"./index-CAod7njC.js";import"./extendSxProp-BQjDsJY_.js";import"./Fade-DaG8l8BS.js";import"./Paper-BVxUU9_K.js";import"./ClickAwayListener-Du3ELzpP.js";import"./MenuList-DzKryU3l.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BNB-PA0t.js";import"./MenuItem-CbRyJJE0.js";import"./dividerClasses-Bs_u3WDS.js";import"./ListItemIcon-yNTlXFDa.js";import"./ListItemText-Cs4xnvGB.js";import"./Divider-BRle3axS.js";import"./IconSvgButton-DTwzqR1G.js";import"./IconButton-C9kv8evX.js";import"./index-Cf8oeWNX.js";import"./getThemeProps-BlF0lh8z.js";import"./Box-B-VzN5Jx.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
