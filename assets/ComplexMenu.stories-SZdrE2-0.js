import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BABjtRTz.js";import{C as p}from"./ComplexMenu-BMZ47J8p.js";import"./createSvgIcon-CTTmQEG6.js";import"./index-DFgyNqO_.js";import"./iframe-BONHnHmX.js";import"./createTheme-CvmSuuTN.js";import"./DefaultPropsProvider-DV2k0EKp.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-nOGRm3h9.js";import"./useTheme-CFl9zPOj.js";import"./Tooltip-DH1bm0aC.js";import"./index-DNhJT1xw.js";import"./useSlot-Bz1lPbgH.js";import"./useForkRef-BwM2dkCX.js";import"./useTimeout-uM0I4FHt.js";import"./useControlled-fDSPq9S-.js";import"./getReactElementRef-BbilxyS1.js";import"./index-DTJcoq-b.js";import"./index-DIQf0lMW.js";import"./Grow-Cz7TIQwA.js";import"./Popper-CF7HvnG1.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-VpWBe6SQ.js";import"./ContentCopyTwoTone-d1ljk1l3.js";import"./HelpOutlineTwoTone-CL6YwimB.js";import"./ErrorOutlined-DMNAknhN.js";import"./GetAppTwoTone-D6Xkw6YD.js";import"./InfoOutlined-B-dj30iT.js";import"./PhoneTwoTone-DpKugpr-.js";import"./DeleteTwoTone-6DwVIcDs.js";import"./CheckCircleTwoTone-CRhIUAFO.js";import"./DropdownMenu-BzIe7aYL.js";import"./Button-BWqBW9qC.js";import"./createSimplePaletteValueFilter-BBua6APr.js";import"./ButtonBase-D1BWc8jn.js";import"./CircularProgress-jpdvXlMB.js";import"./Typography-CBiSjxZP.js";import"./index-B6lxu1Ug.js";import"./extendSxProp-OrWKMBCc.js";import"./Fade-TtUSla3U.js";import"./Paper-Dl4NcsZy.js";import"./ClickAwayListener-DL9jmuNC.js";import"./MenuList-BL7VwmE8.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Bwtw07zs.js";import"./MenuItem-BQde-Xoa.js";import"./dividerClasses-DLSyolI9.js";import"./ListItemIcon-Dzg4WHLS.js";import"./ListItemText-DkvAnWUl.js";import"./Divider-C0tDD9C0.js";import"./IconSvgButton-De42jjbv.js";import"./IconButton-DMY6WtAo.js";import"./index-BzvPmVtd.js";import"./getThemeProps-c6QJIRQ5.js";import"./Box-C57trPRa.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
