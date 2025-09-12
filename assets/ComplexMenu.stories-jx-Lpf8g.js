import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BpUnDEzK.js";import{C as p}from"./ComplexMenu-D-5X5Ue0.js";import"./createSvgIcon-C--GKjVa.js";import"./index-B6sCHtko.js";import"./iframe-Dyc1tvxa.js";import"./createTheme-BWzdH0Tw.js";import"./DefaultPropsProvider-CCvcxJNd.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-C3WRzWQr.js";import"./useTheme-DrGalr3E.js";import"./Tooltip-CgudnGYK.js";import"./index-Bedvx39d.js";import"./useSlot-Db71F0Ap.js";import"./useForkRef-DUqjROYa.js";import"./useTimeout-DUwBfTM5.js";import"./useControlled-CkNRWmXj.js";import"./getReactElementRef-6O_b0WmK.js";import"./index-5LQf57Zc.js";import"./index-f60bxPXB.js";import"./Grow-DCOXsKMM.js";import"./Popper-Cv8b6PxU.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DLflBww9.js";import"./ContentCopyTwoTone-D-yAn0Dz.js";import"./HelpOutlineTwoTone-Cnd3fVzG.js";import"./ErrorOutlined-FIiLzjx4.js";import"./GetAppTwoTone-CP3qHEcH.js";import"./InfoOutlined-BmScFJR3.js";import"./PhoneTwoTone-BvwCp0Y3.js";import"./DeleteTwoTone-CHdPO7Xw.js";import"./CheckCircleTwoTone-B107xYF1.js";import"./DropdownMenu-DaMiUv13.js";import"./Button-8h_8cD3R.js";import"./createSimplePaletteValueFilter-CMkrO5Gi.js";import"./ButtonBase-CUnnAwa6.js";import"./CircularProgress-CT39lesf.js";import"./Typography-CjHB-jF7.js";import"./index-COs8OngO.js";import"./extendSxProp-D8MMv9HH.js";import"./Fade-DGN7jsVH.js";import"./Paper-CI2WrX6i.js";import"./ClickAwayListener-9Td87dKe.js";import"./MenuList-CuSZlwcx.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CiwC8VRa.js";import"./MenuItem-B4lumGyp.js";import"./dividerClasses-b_ZJ2ZSC.js";import"./ListItemIcon-BWYGiecc.js";import"./ListItemText-48r1lRZe.js";import"./Divider-CxDc-O_K.js";import"./IconSvgButton-CSmvZKEE.js";import"./IconButton-TfKmbk1q.js";import"./index-azN7itoa.js";import"./getThemeProps-cCUYVmNA.js";import"./Box-B4DT_63e.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
