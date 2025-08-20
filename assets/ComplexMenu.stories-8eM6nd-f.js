import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CtW9BJvH.js";import{C as p}from"./ComplexMenu-CKQZMk6o.js";import"./createSvgIcon-CchSg1Gx.js";import"./index-C8AgDejC.js";import"./iframe-BpbBGkgc.js";import"./createTheme-dGGVbsHM.js";import"./DefaultPropsProvider-CEqRozh0.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BVkYgVpj.js";import"./useTheme-CfmQtQKd.js";import"./Tooltip-BgTWlnJ0.js";import"./index-Bs_yQwLJ.js";import"./useSlot-Csx6ihJx.js";import"./useForkRef-QK4cJop7.js";import"./useTimeout-BkEmZ-C2.js";import"./useControlled-CY9xyabe.js";import"./getReactElementRef-BiSbqrbX.js";import"./index-Ckm25AxB.js";import"./index-BbU_ZiS0.js";import"./Grow--3DiAtyk.js";import"./Popper-Bd_A_V6g.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DHsDqIi2.js";import"./ContentCopyTwoTone-DsAk6uWR.js";import"./HelpOutlineTwoTone-C92002Xp.js";import"./ErrorOutlined-tgkdQz_Y.js";import"./GetAppTwoTone-9XHviIm5.js";import"./InfoOutlined-D9CxAwwg.js";import"./PhoneTwoTone-DM3Qio_e.js";import"./DeleteTwoTone-C2OGEpxr.js";import"./CheckCircleTwoTone-B2In--cY.js";import"./DropdownMenu-BtzSpV16.js";import"./Button-8Hf9dmO4.js";import"./createSimplePaletteValueFilter-DQe7d5Qb.js";import"./ButtonBase-cVvht4wM.js";import"./CircularProgress-CgsLq8_L.js";import"./Typography-YA-Nis2y.js";import"./index-B_eatk0d.js";import"./extendSxProp-D0VtO7mi.js";import"./Fade-eufq9lg7.js";import"./Paper-CRP6Ta3q.js";import"./ClickAwayListener-Cus--QEu.js";import"./MenuList-8rAHiVfS.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-D1zNCZGm.js";import"./MenuItem-ChBQJfS1.js";import"./dividerClasses-C9PZsaeH.js";import"./ListItemIcon-8uSX5ysG.js";import"./ListItemText-Bm4DpuSF.js";import"./Divider-BkSj0Uyq.js";import"./IconSvgButton-DFaqZwAf.js";import"./IconButton-muudUxJv.js";import"./index-BcKx4RAB.js";import"./getThemeProps-DYqoV81W.js";import"./Box-_-I0XUqB.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
