import{j as i}from"./jsx-runtime-095bf462.js";import{I as n}from"./IconSvg-937ccc74.js";import{C as a}from"./ComplexMenu-a93a4220.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./SvgIcon-2fc096fa.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-ec547c4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./Tooltip-bd620372.js";import"./useTheme-b607537b.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./useForkRef-f2aa3d66.js";import"./TransitionGroupContext-0df7f063.js";import"./utils-724ac38b.js";import"./inheritsLoose-c82a83d4.js";import"./Clear-64952050.js";import"./DropdownMenu-ff32cfa4.js";import"./Button-999a9bbd.js";import"./ButtonBase-aaf12687.js";import"./emotion-react.browser.esm-722d93a9.js";import"./assertThisInitialized-081f9914.js";import"./Typography-26751034.js";import"./extendSxProp-cb9d3182.js";import"./Fade-753e10cb.js";import"./Paper-684852a0.js";import"./MenuList-2a79464a.js";import"./react-is.production.min-a192e302.js";import"./getScrollbarSize-ac846fe6.js";import"./Divider-0d1ca96d.js";import"./Box-45d8e94e.js";import"./IconButton-0779101e.js";const G={title:"UI/ComplexMenu",component:a},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const J=["Demo"];export{t as Demo,J as __namedExportsOrder,G as default};
//# sourceMappingURL=ComplexMenu.stories-d952a965.js.map
