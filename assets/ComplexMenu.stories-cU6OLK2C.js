import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B8m8uk-e.js";import{C as p}from"./ComplexMenu-D6ZEZ_AJ.js";import"./createSvgIcon-Bx2dCIbF.js";import"./index-Df_FdJl-.js";import"./iframe-DsTvFT6Q.js";import"./createTheme-B4cUhGob.js";import"./DefaultPropsProvider-9yDVx9dT.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BCgVrM8U.js";import"./useTheme-BNWJT91L.js";import"./Tooltip-CIfcREkL.js";import"./index-Bc5ECFUa.js";import"./useSlot-DHoMpVG_.js";import"./useForkRef-C37ywrok.js";import"./useTimeout-B-uQAk7X.js";import"./useControlled-47FWtaLW.js";import"./getReactElementRef-q6KXtwDj.js";import"./index-LtSKZm9d.js";import"./index-Bj500_V6.js";import"./Grow-CSPbf5zw.js";import"./Popper-DFTLUIEO.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-CkJ9Saky.js";import"./ContentCopyTwoTone-CUJmiWBP.js";import"./HelpOutlineTwoTone-_LYu5zpY.js";import"./ErrorOutlined-C44cQvW7.js";import"./GetAppTwoTone-CamzF7z8.js";import"./InfoOutlined-C3LmBELA.js";import"./PhoneTwoTone-B9OZ42x4.js";import"./DeleteTwoTone-ziy0P8pf.js";import"./CheckCircleTwoTone-gDseQqaM.js";import"./DropdownMenu-CCc6Nugu.js";import"./Button-UK5ni8CN.js";import"./createSimplePaletteValueFilter-CmcCRKj9.js";import"./ButtonBase-COtAfe0-.js";import"./CircularProgress-D859Rgox.js";import"./Typography-DzNtFqki.js";import"./index-DvmyVfCT.js";import"./extendSxProp-DGFMAjvY.js";import"./Fade-BnQ6e4Q4.js";import"./Paper-Cf1kvPYs.js";import"./ClickAwayListener-CFjnMEqm.js";import"./MenuList-DB-KU5SR.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CKJwX2WL.js";import"./MenuItem-Cq8Kos30.js";import"./dividerClasses--MSFyh3F.js";import"./ListItemIcon-BZqh9Kul.js";import"./ListItemText-R9Iz5BoB.js";import"./Divider-ZO3NLyYg.js";import"./IconSvgButton-E1EmKmLq.js";import"./IconButton-BXTZx6ON.js";import"./index-rbPXhuYR.js";import"./getThemeProps-DDS8aWDb.js";import"./Box-CWKxjGZN.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
