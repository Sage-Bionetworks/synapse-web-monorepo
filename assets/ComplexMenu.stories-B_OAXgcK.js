import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B6gP9hSv.js";import{C as p}from"./ComplexMenu-C3pOh_U6.js";import"./createSvgIcon-BLEghBNK.js";import"./index-Dv-Auh_6.js";import"./iframe-C98LgnIh.js";import"./createTheme-CmQ7L9FI.js";import"./DefaultPropsProvider-D7UrraQT.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BRwJ2BiM.js";import"./useTheme-B0hF4srd.js";import"./Tooltip-BRjr85jo.js";import"./index-DQyNv6H4.js";import"./useSlot-D-57qVPr.js";import"./useForkRef-aUOfydcE.js";import"./useTimeout-CrbDv4W6.js";import"./useControlled-BPUCCY57.js";import"./getReactElementRef-DaUzJele.js";import"./index-0Ntr3xje.js";import"./index-DH8ZwtL1.js";import"./Grow-BI3-bs-0.js";import"./Popper-CXdg4K-k.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-P8q6_HrG.js";import"./ContentCopyTwoTone-D6061xXY.js";import"./HelpOutlineTwoTone-DM9iJFb6.js";import"./ErrorOutlined-CVWkMJ89.js";import"./GetAppTwoTone-DCLdmNx-.js";import"./InfoOutlined-Ctu73XyS.js";import"./PhoneTwoTone-ZLDDuJ5J.js";import"./DeleteTwoTone-JBNitz4S.js";import"./CheckCircleTwoTone--JEdlD7D.js";import"./DropdownMenu-B4ep_BIl.js";import"./Button-HugWKABJ.js";import"./createSimplePaletteValueFilter-MBB8wY7q.js";import"./ButtonBase-A9zHO6bs.js";import"./CircularProgress-rsYMJ3_V.js";import"./Typography-CVtis2FJ.js";import"./index-CCjom-eT.js";import"./extendSxProp-DgwqkoGF.js";import"./Fade-C0IATwVZ.js";import"./Paper-Dt5MOLDV.js";import"./ClickAwayListener-BscEfLN0.js";import"./MenuList-DfQ5u_Mv.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DsPPFNY9.js";import"./MenuItem-CYL0Tagl.js";import"./dividerClasses-CtoR2FoY.js";import"./ListItemIcon-D8GXO4ia.js";import"./ListItemText-DUJtSsL0.js";import"./Divider-BDakUjUB.js";import"./IconSvgButton-B3qntt8c.js";import"./IconButton-CFgYDnd0.js";import"./index-nhYRaeLT.js";import"./getThemeProps-CzMOA3dK.js";import"./Box-CuUhZXQS.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
