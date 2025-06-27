import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-Drqgp5G-.js";import{C as p}from"./ComplexMenu-C2jDRziZ.js";import"./createSvgIcon-CwCmRHkO.js";import"./index-DkZoFfx5.js";import"./iframe-CJGpPw1o.js";import"./createTheme-Dtg1wCfy.js";import"./DefaultPropsProvider-CTjt-8zY.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CXYb8IF2.js";import"./useTheme-C4HCFZHP.js";import"./Tooltip-DwQWb7MM.js";import"./index-COz8OLTi.js";import"./useSlot-CfUlgWNz.js";import"./useForkRef-CtY8tP-S.js";import"./useTimeout-DNT-m6g2.js";import"./useControlled-DOk0F4HW.js";import"./getReactElementRef-CBu9u29I.js";import"./index-Ce22gE6o.js";import"./index-B8db3wfS.js";import"./Grow-BztBxul1.js";import"./Popper-DaDJ3xMM.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BtCwe2dS.js";import"./ContentCopyTwoTone-DmsVR3vF.js";import"./HelpOutlineTwoTone-N__moD2h.js";import"./ErrorOutlined-CkkS2awY.js";import"./GetAppTwoTone-Blo83MNM.js";import"./InfoOutlined-DaPuxB7c.js";import"./PhoneTwoTone-jJPvAxOq.js";import"./DeleteTwoTone-D3dgbtwT.js";import"./CheckCircleTwoTone-E3L7TLM1.js";import"./DropdownMenu-TLZT3IzJ.js";import"./Button-CTFpvydl.js";import"./createSimplePaletteValueFilter-LSon_xMw.js";import"./ButtonBase-BSY_LTtp.js";import"./CircularProgress-s3w59CRq.js";import"./Typography-BMMlqfE7.js";import"./index-Bjxfhvit.js";import"./extendSxProp-CYcqzPHY.js";import"./Fade-Cfl-Ls-r.js";import"./Paper-LciGP85z.js";import"./ClickAwayListener-E1JwztXI.js";import"./MenuList-BRM5Qxz0.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-QfYUy3ux.js";import"./MenuItem-BFBmgHR1.js";import"./dividerClasses-C6Xe2-3s.js";import"./ListItemIcon-BZ4WKuoK.js";import"./ListItemText-DlFLClCZ.js";import"./Divider-A3oo3z0l.js";import"./IconSvgButton-CWCH2gon.js";import"./IconButton-BLCtip1h.js";import"./index-Cm--TqgQ.js";import"./getThemeProps-BaW3Ifvr.js";import"./Box-FjMdCpDL.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
