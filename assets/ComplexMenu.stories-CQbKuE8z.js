import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CaRUEo8B.js";import{C as p}from"./ComplexMenu-CBdOUqKf.js";import"./createSvgIcon-CTE3VzQH.js";import"./index-CGbt02rg.js";import"./iframe-DZLnBXRp.js";import"./createTheme-DlPP5FLd.js";import"./DefaultPropsProvider-Bh69SfpX.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-AdI2zGZv.js";import"./useTheme-B1XcoYyi.js";import"./Tooltip-Bo2j0bzr.js";import"./index-BoByUbsy.js";import"./useSlot-CjInwJ78.js";import"./useForkRef-BuWvzGyB.js";import"./useTimeout-DVTsv0WP.js";import"./useControlled-CttVXnNd.js";import"./getReactElementRef-BgTk7-9b.js";import"./index-D3f-rpui.js";import"./index-BP559Jzy.js";import"./Grow-DypgN_s2.js";import"./Popper-BCdjvqXc.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-8PryBuk4.js";import"./ContentCopyTwoTone-tVEYvr9O.js";import"./HelpOutlineTwoTone-BYUeQvr1.js";import"./ErrorOutlined-DQRQUy78.js";import"./GetAppTwoTone-DcV-wNtY.js";import"./InfoOutlined-fv7BJMkA.js";import"./PhoneTwoTone-Cqtx4RuL.js";import"./DeleteTwoTone-I7Wh-EJ8.js";import"./CheckCircleTwoTone-aYDqywWC.js";import"./DropdownMenu-NFN3kEcb.js";import"./Button-BQgLiUAy.js";import"./createSimplePaletteValueFilter-DuAffrVq.js";import"./ButtonBase-BRlvOhoB.js";import"./CircularProgress-DEKY0fuh.js";import"./Typography-nZ7v7MHZ.js";import"./index-BFIimsw4.js";import"./extendSxProp-CoKOIChi.js";import"./Fade-Brmw86Ac.js";import"./Paper-CGhngFYT.js";import"./ClickAwayListener-DQGm0c4K.js";import"./MenuList-D48e5Pob.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-DWk1IEWm.js";import"./MenuItem-Btxn_rxa.js";import"./dividerClasses-CqHyQJ5q.js";import"./ListItemIcon-DNqdjMjA.js";import"./ListItemText-Dix4B6MX.js";import"./Divider-BbW2Z9h8.js";import"./IconSvgButton-Kd5WIOUN.js";import"./IconButton-AJS7gHdS.js";import"./index-BJl9SjLh.js";import"./getThemeProps-WjTpBOt0.js";import"./Box-HsxDjwyr.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
