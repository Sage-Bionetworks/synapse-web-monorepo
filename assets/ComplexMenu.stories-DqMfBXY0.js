import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BqKbzz29.js";import{C as p}from"./ComplexMenu-YILcGRlC.js";import"./createSvgIcon-CXNGspcB.js";import"./index-D7PBaRdl.js";import"./iframe-BMKYlU_t.js";import"./createTheme-D01eg2ZR.js";import"./DefaultPropsProvider-CyA_mLEZ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-D7vyOj74.js";import"./useTheme-Crp6xkqA.js";import"./Tooltip-Dr56EzbH.js";import"./index-CQ4lrqCV.js";import"./useSlot-Bf1xc4IK.js";import"./useForkRef-B7cAnUkU.js";import"./useTimeout-DNCswdg1.js";import"./useControlled-CnOewArD.js";import"./getReactElementRef-sEjvg3Zz.js";import"./index-C5LFuBYW.js";import"./index-MaejsBJ1.js";import"./Grow-BHJ1L0ra.js";import"./Popper-CjNr2Bcb.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BvpTF34A.js";import"./ContentCopyTwoTone-Cnp2EgzA.js";import"./HelpOutlineTwoTone-DVdeCl1C.js";import"./ErrorOutlined-DOaYV0xZ.js";import"./GetAppTwoTone-DprROhr7.js";import"./InfoOutlined-B_V7mfDR.js";import"./PhoneTwoTone-pn9ZfJEi.js";import"./DeleteTwoTone-BB4L2j_r.js";import"./CheckCircleTwoTone-FMR-aIpc.js";import"./DropdownMenu-CXiobsvG.js";import"./Button-DRHCs_dP.js";import"./createSimplePaletteValueFilter-RxOFhxsU.js";import"./ButtonBase-BYlrH_BG.js";import"./CircularProgress-CFDRIou5.js";import"./Typography-CrfNLDTB.js";import"./index-Ck5RF-vh.js";import"./extendSxProp-CHQ4xt1P.js";import"./Fade-BUFeIqQL.js";import"./Paper-BuMxbUlT.js";import"./ClickAwayListener-C3qWP59K.js";import"./MenuList-BXgewfFP.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BiUOCdpD.js";import"./MenuItem-BDvEoSyZ.js";import"./dividerClasses-BzOpSgfn.js";import"./ListItemIcon-KJPOKRK0.js";import"./ListItemText-CeHR18rR.js";import"./Divider-B-xJ1BuT.js";import"./IconSvgButton-CHlxAPt5.js";import"./IconButton-CVUHAMRf.js";import"./index-BlxCvbFt.js";import"./getThemeProps-iIqqzIfW.js";import"./Box-DJHHlrYT.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
