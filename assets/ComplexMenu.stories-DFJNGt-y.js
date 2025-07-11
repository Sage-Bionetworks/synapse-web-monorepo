import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-NrD3qLC3.js";import{C as p}from"./ComplexMenu-DhUc4JCa.js";import"./createSvgIcon-bY3B4qG0.js";import"./index-COg4wEFX.js";import"./iframe-dkyN7dEI.js";import"./createTheme-PLUvd-LB.js";import"./DefaultPropsProvider-GBlbFlKV.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-gzy1xqzN.js";import"./useTheme-CFs5QfCM.js";import"./Tooltip-Cc1glevZ.js";import"./index-DonYfH0W.js";import"./useSlot-CgItUNQr.js";import"./useForkRef-DVG_98-d.js";import"./useTimeout-DsoKzCC_.js";import"./useControlled-FM6R-wlx.js";import"./getReactElementRef-BFjo364g.js";import"./index-HXW73S9Q.js";import"./index-5aEMNfv4.js";import"./Grow-C9D6P-BJ.js";import"./Popper-CVAa6830.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DPh1-Wqj.js";import"./ContentCopyTwoTone-D4gJXHJZ.js";import"./HelpOutlineTwoTone-B51GqMbG.js";import"./ErrorOutlined-D9EL_Yn-.js";import"./GetAppTwoTone-DUayShVh.js";import"./InfoOutlined-BkYblYys.js";import"./PhoneTwoTone-Qb_B2A4y.js";import"./DeleteTwoTone-JFnzYykj.js";import"./CheckCircleTwoTone-1ZsT9niW.js";import"./DropdownMenu-B6P1dEif.js";import"./Button-BEK3yIRk.js";import"./createSimplePaletteValueFilter-DQAv8etW.js";import"./ButtonBase-B-pzCcmV.js";import"./CircularProgress-BOr0l0Up.js";import"./Typography-CgOlfgGT.js";import"./index-AywcLrDq.js";import"./extendSxProp-CLbKWQ-Q.js";import"./Fade-Cb3fWTVd.js";import"./Paper-CvFCa0d1.js";import"./ClickAwayListener-D7ZeQ8Mu.js";import"./MenuList-SM6VDGmz.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-Cti-gnlp.js";import"./MenuItem-DMDO563S.js";import"./dividerClasses-CFg-ZEkC.js";import"./ListItemIcon-DNAdUxRe.js";import"./ListItemText-CcVrsh2a.js";import"./Divider-BjzS7rPG.js";import"./IconSvgButton-Btj-2AUR.js";import"./IconButton-BU7f1Bop.js";import"./index-Bm9P5uku.js";import"./getThemeProps-DtRmK1JZ.js";import"./Box--vhDeXql.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
