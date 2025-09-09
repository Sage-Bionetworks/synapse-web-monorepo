import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-Dkjf0o50.js";import{C as p}from"./ComplexMenu-CMNzvnmk.js";import"./createSvgIcon-CaT9xKql.js";import"./index-DG11J9On.js";import"./iframe-CFx4SmlQ.js";import"./createTheme-C3ZlBHOR.js";import"./DefaultPropsProvider-BngAxNfg.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CGOBdzwx.js";import"./useTheme-Dlh4q2q2.js";import"./Tooltip-CdI8BHtE.js";import"./index-CKkvvCY2.js";import"./useSlot-DTL4s5Fo.js";import"./useForkRef-DqKQMU6v.js";import"./useTimeout-BVRtd2bj.js";import"./useControlled-ByefJ87W.js";import"./getReactElementRef-DrXrtI8G.js";import"./index-CJuEcaaD.js";import"./index-DBl0twju.js";import"./Grow-DP_AFsYT.js";import"./Popper-BFgdKwjW.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-Mwxl-gxa.js";import"./ContentCopyTwoTone-DHLX6pIn.js";import"./HelpOutlineTwoTone-jB-p_P8d.js";import"./ErrorOutlined-DYM7b4Zo.js";import"./GetAppTwoTone-DRgS8kbw.js";import"./InfoOutlined-B2ouSxq2.js";import"./PhoneTwoTone-BKo8cXa2.js";import"./DeleteTwoTone-BWupLIQO.js";import"./CheckCircleTwoTone-C1_4w8s1.js";import"./DropdownMenu-BqXjSveS.js";import"./Button-C53OkhyL.js";import"./createSimplePaletteValueFilter-DLcVTaCv.js";import"./ButtonBase-Byp5VrHb.js";import"./CircularProgress-BwCph7sa.js";import"./Typography-Bg3Brpmd.js";import"./index-q0p95m-D.js";import"./extendSxProp-De9UySGh.js";import"./Fade-7kRVzn_c.js";import"./Paper-CQ-ti9pd.js";import"./ClickAwayListener-B4yhA0Px.js";import"./MenuList-D3egJ5nB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-B3ZvtTkE.js";import"./MenuItem-DW0iIbro.js";import"./dividerClasses-5SjooKkm.js";import"./ListItemIcon-FmnM7uTY.js";import"./ListItemText-DpOqYYA1.js";import"./Divider-Dq_JAANj.js";import"./IconSvgButton-Cn8UVtEK.js";import"./IconButton-BGgUVhRP.js";import"./index-CbjVZb_U.js";import"./getThemeProps-BqQ-LewE.js";import"./Box-DSEnYR08.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
