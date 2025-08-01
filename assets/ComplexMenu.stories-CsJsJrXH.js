import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-i6KgJ75b.js";import{C as p}from"./ComplexMenu-_enw27aC.js";import"./createSvgIcon-C8dizGNP.js";import"./index-DnLLVsSx.js";import"./iframe-BcfoM7fF.js";import"./createTheme-BEpdVMRU.js";import"./DefaultPropsProvider-Qo7oSsrQ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-BQfmZos-.js";import"./useTheme-DTn1FyjR.js";import"./Tooltip-BcAzm78t.js";import"./index-0ybS0gTf.js";import"./useSlot-BO4LHlnr.js";import"./useForkRef-B9ZYh7Z-.js";import"./useTimeout-thgVV2oO.js";import"./useControlled-CW3VqTbP.js";import"./getReactElementRef-p1ymcQP3.js";import"./index-CV-fpmeq.js";import"./index-DCxT5mVo.js";import"./Grow-Ymxc9Ww9.js";import"./Popper-BJ7Wyrx4.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-JqLfju9l.js";import"./ContentCopyTwoTone-D89WiubD.js";import"./HelpOutlineTwoTone-BxhyaLLm.js";import"./ErrorOutlined-DdtAjkOt.js";import"./GetAppTwoTone-DLbnaMET.js";import"./InfoOutlined-Dj4iY4U7.js";import"./PhoneTwoTone-ZS9gEmNB.js";import"./DeleteTwoTone-BfdLWm50.js";import"./CheckCircleTwoTone-BYYvvA8w.js";import"./DropdownMenu-BeEHa-dP.js";import"./Button-B7nY5Hwz.js";import"./createSimplePaletteValueFilter-CRdqsfK_.js";import"./ButtonBase-5haTo7cl.js";import"./CircularProgress-BVQwjipO.js";import"./Typography-CLfHpKLg.js";import"./index-Dl8PO9Nn.js";import"./extendSxProp-BYC18Z55.js";import"./Fade-2xZaPCmM.js";import"./Paper-C3ljaFl1.js";import"./ClickAwayListener-w9wbA2ba.js";import"./MenuList-BVxCD6wz.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-6NgNyqEK.js";import"./MenuItem-PkMJ9Ivc.js";import"./dividerClasses-BkIZhIb2.js";import"./ListItemIcon-C1cgQhM6.js";import"./ListItemText-DT3Sny1Y.js";import"./Divider-D4UK92Tw.js";import"./IconSvgButton-BM4QN9ID.js";import"./IconButton-Dwf6nyQC.js";import"./index-DwJl0tNW.js";import"./getThemeProps-CcY3c29N.js";import"./Box-Cpe7AX1D.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
