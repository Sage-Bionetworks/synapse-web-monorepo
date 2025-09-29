import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CUWfL4Gw.js";import{C as p}from"./ComplexMenu-DpiVKmUx.js";import"./createSvgIcon-D3jU8-M9.js";import"./index-sbO4x94I.js";import"./iframe-B7VjNHo_.js";import"./createTheme-iVg2ALkG.js";import"./DefaultPropsProvider-CRtidxfI.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DhBETySk.js";import"./useTheme-CYmu3bRJ.js";import"./Tooltip-CJHx95Zp.js";import"./index-R2QlNZel.js";import"./useSlot-C9f_lDyM.js";import"./useForkRef-CYTdLXIx.js";import"./useTimeout-CGLlUFdL.js";import"./useControlled-CfdyZ7Xn.js";import"./getReactElementRef-BtsaYvD6.js";import"./index-DzYd1Bc_.js";import"./index-BKNU1Rjh.js";import"./Grow-ChyhBvRk.js";import"./Popper-BuFN7FXQ.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-ByJFlKyH.js";import"./ContentCopyTwoTone-BwCPsUnN.js";import"./HelpOutlineTwoTone-DRdgsGsY.js";import"./ErrorOutlined-CnTArT07.js";import"./GetAppTwoTone-BHKGpNuS.js";import"./InfoOutlined-d4iCJ-sL.js";import"./PhoneTwoTone-RjW_ANkL.js";import"./DeleteTwoTone-CggRgpD0.js";import"./CheckCircleTwoTone-3LbkrL10.js";import"./DropdownMenu-CyMu7wTH.js";import"./Button-BK6paxd1.js";import"./createSimplePaletteValueFilter-C8f66SCi.js";import"./ButtonBase-COsjseQ1.js";import"./CircularProgress-D013myXI.js";import"./Typography-DRTW8NuR.js";import"./index-DZ4LX7su.js";import"./extendSxProp-DFEfVq7i.js";import"./Fade-dEjfEC7w.js";import"./Paper-Cpv8FcM0.js";import"./ClickAwayListener-BSIiFOtQ.js";import"./MenuList-CMIdnYPy.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DrTdv_XI.js";import"./MenuItem-BQ9mqmjq.js";import"./dividerClasses-BgUOcg-O.js";import"./ListItemIcon-DGLgTebz.js";import"./ListItemText-w5TWXUgS.js";import"./Divider-PuZKbWUd.js";import"./IconSvgButton-ClV5JjLD.js";import"./IconButton-tGIn719_.js";import"./index-3orqEYfJ.js";import"./getThemeProps-DM9gIAd0.js";import"./Box-DravUX6M.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
