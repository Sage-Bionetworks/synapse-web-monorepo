import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BZxSihbD.js";import{C as p}from"./ComplexMenu-BWxiEy7S.js";import"./createSvgIcon-Cad1TFr7.js";import"./index-kfz2ZdB-.js";import"./iframe-S-VLdJeA.js";import"./createTheme-Dn7uIOtN.js";import"./DefaultPropsProvider-DBzytOXy.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BLq1sqBY.js";import"./useTheme-B1mLmG-C.js";import"./Tooltip-nDeXFXq_.js";import"./index-DPt9EKPJ.js";import"./useSlot-CZqR668N.js";import"./useForkRef-DKQuVDpI.js";import"./useTimeout-DWIQCcxM.js";import"./useControlled-RLynzQVM.js";import"./getReactElementRef-CBGuY3hl.js";import"./index-DupY7Nwi.js";import"./index-CQ-HXsIi.js";import"./Grow-B162psUf.js";import"./Popper-BNNuxoRs.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Dk82p-9D.js";import"./ContentCopyTwoTone-dLTVgYPJ.js";import"./HelpOutlineTwoTone-MHznms1K.js";import"./ErrorOutlined-dUbaWQpo.js";import"./GetAppTwoTone-lGMJ6Oxk.js";import"./InfoOutlined-CNcGpvOv.js";import"./PhoneTwoTone-DkQAaYLu.js";import"./DeleteTwoTone-CxdK3Hfq.js";import"./CheckCircleTwoTone-D-fO6mzc.js";import"./DropdownMenu-DWApODop.js";import"./Button-DRDa_84V.js";import"./createSimplePaletteValueFilter-Dz0wBtTa.js";import"./ButtonBase-B5ksOXiP.js";import"./CircularProgress-C5QfbvCa.js";import"./Typography-4j7jpxFq.js";import"./index-CEaHt5Lb.js";import"./extendSxProp-YO1I1ALA.js";import"./Fade-gfnE55pz.js";import"./Paper-CwNdsz7S.js";import"./ClickAwayListener-BM0nmyRh.js";import"./MenuList-DUQV89Tw.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CY8IrZ2U.js";import"./MenuItem-DjC_QeF0.js";import"./dividerClasses-C5RDBX-E.js";import"./ListItemIcon-DxbOpfcX.js";import"./ListItemText-BUe6HYll.js";import"./Divider-BNWmkD3c.js";import"./IconSvgButton-D3623Jc9.js";import"./IconButton-DpCqJSaO.js";import"./index-Bu9qX66H.js";import"./getThemeProps-DkYfMlon.js";import"./Box-DI3EuLbF.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
