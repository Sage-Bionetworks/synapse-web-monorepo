import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-B-GWJNIk.js";import{C as p}from"./ComplexMenu-DnPv24We.js";import"./createSvgIcon-C2KnO3b1.js";import"./index-BlLk-Cpc.js";import"./iframe-DJCqPViV.js";import"./createTheme-BoMy76Wd.js";import"./DefaultPropsProvider-DvBkxC4C.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DDFbBi03.js";import"./useTheme-D2m2JSWe.js";import"./Tooltip-Dl_Yp1xA.js";import"./index-BCiEuy_k.js";import"./useSlot-CpdUPpqd.js";import"./useForkRef-CGY_Jpnx.js";import"./useTimeout-C_n07iHc.js";import"./useControlled-ByhA5hml.js";import"./getReactElementRef-WVFk0XF3.js";import"./index-cmVBkNr4.js";import"./index-C-9IeJIn.js";import"./Grow-tZoeOsj2.js";import"./Popper-BZ3v4Tpm.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BXw7Rmfc.js";import"./ContentCopyTwoTone-BHpGujgx.js";import"./HelpOutlineTwoTone-BPFw5rLv.js";import"./ErrorOutlined-CwfAGuxl.js";import"./GetAppTwoTone-Cepj9Nq4.js";import"./InfoOutlined-DQL_1FFY.js";import"./PhoneTwoTone-BJEXzDpJ.js";import"./DeleteTwoTone-DDf96kv2.js";import"./CheckCircleTwoTone-DcxIrYc5.js";import"./DropdownMenu-FO7oNPJw.js";import"./Button-CUHfRZHg.js";import"./createSimplePaletteValueFilter-rT-XZ6YK.js";import"./ButtonBase-BNSbuHrY.js";import"./CircularProgress-CYiXRZxW.js";import"./Typography-BbClb5JZ.js";import"./index-Dl9oXoY9.js";import"./extendSxProp-CBVJ6YUV.js";import"./Fade-CD2qHBnv.js";import"./Paper-fh_aPiaL.js";import"./ClickAwayListener-BgS_jDtg.js";import"./MenuList-CpXmpsVw.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BFtkXFw8.js";import"./MenuItem-UKCpWuio.js";import"./dividerClasses-CyDbhGqi.js";import"./ListItemIcon-Byc5006X.js";import"./ListItemText-hes-ZA_l.js";import"./Divider-CA6SqGbc.js";import"./IconSvgButton-B9hmy0Df.js";import"./IconButton-C7cq6q9W.js";import"./index-DPS_xzRc.js";import"./getThemeProps-MT1NWnOz.js";import"./Box-DQcvacV7.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
