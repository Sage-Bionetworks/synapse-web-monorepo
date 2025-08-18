import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B75hZgks.js";import{C as p}from"./ComplexMenu-B6v4WXNW.js";import"./createSvgIcon-B2xCGPCA.js";import"./index-Co6kSeZ4.js";import"./iframe-E9QC53ED.js";import"./createTheme-C4gBf2a4.js";import"./DefaultPropsProvider-61bxVHLz.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BNzonNUR.js";import"./useTheme-g4P-trrK.js";import"./Tooltip-DDH1jL_v.js";import"./index-DZ-xbKd_.js";import"./useSlot-DzkULoZG.js";import"./useForkRef-Ie0jToSw.js";import"./useTimeout-DdwtR0nj.js";import"./useControlled-urFJ8eZT.js";import"./getReactElementRef-CzBAlckD.js";import"./index-L4uyOg9X.js";import"./index-xRVqPkfL.js";import"./Grow-BlhGKlVk.js";import"./Popper-rS_tjiGt.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Cfz93VLh.js";import"./ContentCopyTwoTone-CvPilTx4.js";import"./HelpOutlineTwoTone-C29UY2Gb.js";import"./ErrorOutlined-Bt-d3fBp.js";import"./GetAppTwoTone-CY5y6zTf.js";import"./InfoOutlined-BfhlxWWG.js";import"./PhoneTwoTone-RM4dzghZ.js";import"./DeleteTwoTone-DnpFbQjD.js";import"./CheckCircleTwoTone-BxTVhx7V.js";import"./DropdownMenu-Ctb8o8er.js";import"./Button-SCmwow4H.js";import"./createSimplePaletteValueFilter-Di6fTx_Y.js";import"./ButtonBase-BVgSALXL.js";import"./CircularProgress-st75d_5x.js";import"./Typography-D0Pox0eh.js";import"./index-BW1ZnCRi.js";import"./extendSxProp-DjvHTGIN.js";import"./Fade-DJkg1TX1.js";import"./Paper-Bk3UaSkA.js";import"./ClickAwayListener-Bs5Cn-b4.js";import"./MenuList-CIYvqpo0.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DPp1yBRn.js";import"./MenuItem-BvnxJBiT.js";import"./dividerClasses-BFFTqEh_.js";import"./ListItemIcon-BEIeZJ6U.js";import"./ListItemText-DhMwDLLO.js";import"./Divider-7Sc2UeY6.js";import"./IconSvgButton-DyN22O9y.js";import"./IconButton-CSbPtiTS.js";import"./index-BVxxmlP0.js";import"./getThemeProps-C4dGaN9v.js";import"./Box-DuaunoIg.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
