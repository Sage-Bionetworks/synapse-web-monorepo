import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-HVhW0AWq.js";import{C as p}from"./ComplexMenu-ywgkqNaD.js";import"./createSvgIcon-C9iQk-bv.js";import"./index-Rd2swjmm.js";import"./iframe-CXAxgruz.js";import"./createTheme-TuqmvCHd.js";import"./DefaultPropsProvider-BXgXJOYE.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-COUAZuoX.js";import"./useTheme-D5J_Lubc.js";import"./Tooltip-Bodc1hDc.js";import"./index-eFiUvJZl.js";import"./useSlot-Dkzr42VA.js";import"./useForkRef-C6Hxgw1c.js";import"./useTimeout-B1Gaupyv.js";import"./useControlled-DV9JfbO_.js";import"./getReactElementRef-C70_vEbO.js";import"./index-BnG4WIQw.js";import"./index-BdU_PVcS.js";import"./Grow-frQ6Hdr3.js";import"./Popper-B_NbVk8A.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-_WdG74gT.js";import"./ContentCopyTwoTone-mJV_p8Bq.js";import"./HelpOutlineTwoTone-DN5z1yyd.js";import"./ErrorOutlined-BKm9ZXXM.js";import"./GetAppTwoTone-ClfW8u7t.js";import"./InfoOutlined-CRTLKfB8.js";import"./PhoneTwoTone-B9fUwct5.js";import"./DeleteTwoTone-DwrHorCL.js";import"./CheckCircleTwoTone-C7oNrQEJ.js";import"./DropdownMenu-CzlJswGY.js";import"./Button-BbbnNSgV.js";import"./createSimplePaletteValueFilter-I39MDwlM.js";import"./ButtonBase-SlYjLBEH.js";import"./CircularProgress-DePpf9Xr.js";import"./Typography-BMdAKFRJ.js";import"./index-CNp3TF0s.js";import"./extendSxProp-BEqNfaz4.js";import"./Fade-Dr4GrnsL.js";import"./Paper-BfdEPQLJ.js";import"./ClickAwayListener-BukZ-mWk.js";import"./MenuList-MKkSBA_x.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BQuv42wF.js";import"./MenuItem-LKpsozfr.js";import"./dividerClasses-RQdGsdQV.js";import"./ListItemIcon-34f_wiLn.js";import"./ListItemText-BoEvwB3B.js";import"./Divider-CZsNfFHV.js";import"./IconSvgButton-CYmgAKxm.js";import"./IconButton-CyqRcr44.js";import"./index-BAN4IUIo.js";import"./getThemeProps-C7aU0N0h.js";import"./Box-C1rpSzmp.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
