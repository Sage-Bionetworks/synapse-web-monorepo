import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BRzjFQwg.js";import{C as p}from"./ComplexMenu-BqxdQbbF.js";import"./createSvgIcon-9hLuZfsj.js";import"./index-D2DVVrZC.js";import"./iframe-DEj1FbhD.js";import"./createTheme-BrtesNaL.js";import"./DefaultPropsProvider-DGwxxiOV.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DQcaU_c0.js";import"./useTheme-CCwBo4L7.js";import"./Tooltip-BlvtctqX.js";import"./index-Cc771K3C.js";import"./useSlot-CRgDYWsW.js";import"./useForkRef-DnXT39nc.js";import"./useTimeout-B8omw9oy.js";import"./useControlled-CEEWwcxf.js";import"./getReactElementRef-CsMZkxrX.js";import"./index-BG1FSV2G.js";import"./index-BvuoCrXu.js";import"./Grow-RewzRyPY.js";import"./Popper-BBBa4RhT.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-AoBnPHR1.js";import"./ContentCopyTwoTone-BYeMORVq.js";import"./HelpOutlineTwoTone-DT5FwlAj.js";import"./ErrorOutlined-CVDED9Vg.js";import"./GetAppTwoTone-BLQgKE41.js";import"./InfoOutlined-BQWUYSZ2.js";import"./PhoneTwoTone-CC1pmzHz.js";import"./DeleteTwoTone-DJMdZN75.js";import"./CheckCircleTwoTone-CSRW2OkR.js";import"./DropdownMenu-DgHhFtMg.js";import"./Button-B9JExKBE.js";import"./createSimplePaletteValueFilter-BzVPQ0Is.js";import"./ButtonBase-qh3ge3Iz.js";import"./CircularProgress-C4Y_z_Lj.js";import"./Typography-CA5VtOac.js";import"./index-oV3RSY5s.js";import"./extendSxProp-oFnhdn5m.js";import"./Fade-CLINBJ41.js";import"./Paper-rrh4EhEU.js";import"./ClickAwayListener-ByPpYTg0.js";import"./MenuList-C6WaWlxC.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DTFsMtFu.js";import"./MenuItem-DinfqWlm.js";import"./dividerClasses-CuCsSYWz.js";import"./ListItemIcon-oywGlx9a.js";import"./ListItemText-CwFNGsFx.js";import"./Divider-D5da_4RT.js";import"./IconSvgButton-BgDw8psl.js";import"./IconButton-BPWJJaNr.js";import"./index-DFyUW0-S.js";import"./getThemeProps-DwMcYXae.js";import"./Box-C2mf0bBj.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
