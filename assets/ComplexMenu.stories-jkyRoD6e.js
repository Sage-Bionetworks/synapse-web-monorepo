import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-3ecnZ-ah.js";import{C as p}from"./ComplexMenu-DBqp1cUk.js";import"./createSvgIcon-Dvlo-p3N.js";import"./index-C0YALZQz.js";import"./iframe-C4ix3hWR.js";import"./createTheme-C9Yd5-wm.js";import"./DefaultPropsProvider-BaeKOKQ6.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-7IS2TKwD.js";import"./useTheme-BMHAz49G.js";import"./Tooltip-BMzFZUM0.js";import"./index-Ck0HNX7_.js";import"./useSlot-dvUBOlYM.js";import"./useForkRef-BIB30eql.js";import"./useTimeout-CAkteiZD.js";import"./useControlled-CsPICl5Q.js";import"./getReactElementRef-CDLdFmX1.js";import"./index-HfouNIaw.js";import"./index-BAarkWvg.js";import"./Grow-CvjOcJ_V.js";import"./Popper-ySgvMYOx.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-HI3aCN5C.js";import"./ContentCopyTwoTone-DbpXlKfZ.js";import"./HelpOutlineTwoTone-C6BxZfge.js";import"./ErrorOutlined-DYE84B5j.js";import"./GetAppTwoTone-Co2HRy_w.js";import"./InfoOutlined-nfu41j4f.js";import"./PhoneTwoTone-Cj642nu-.js";import"./DeleteTwoTone-D0jx7_dJ.js";import"./CheckCircleTwoTone-CZzNVvfI.js";import"./DropdownMenu-RKHdV6uu.js";import"./Button-CKtQREg-.js";import"./createSimplePaletteValueFilter-Dhw4lf7H.js";import"./ButtonBase-DH9Ov36O.js";import"./CircularProgress-2GLfT7Hs.js";import"./Typography-Dkw7b_5d.js";import"./index-D96GLD0m.js";import"./extendSxProp-Bm1yDns3.js";import"./Fade-CWId73Dt.js";import"./Paper-DcnJEfW5.js";import"./ClickAwayListener-CSXPHlBT.js";import"./MenuList-MTVdY0vQ.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CdLKK0bg.js";import"./MenuItem-B_4n9weI.js";import"./dividerClasses-Bfc_2h6a.js";import"./ListItemIcon-BoOl9iuy.js";import"./ListItemText-BxU7SDfC.js";import"./Divider-Bkq3j92t.js";import"./IconSvgButton-DxG56F_u.js";import"./IconButton-BV4SsEJa.js";import"./index-D7c63PBb.js";import"./getThemeProps-DNL-t9j-.js";import"./Box-ChNzIem_.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
