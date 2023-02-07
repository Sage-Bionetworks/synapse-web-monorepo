import{j as i}from"./jsx-runtime-670450c2.js";import{I as n}from"./IconSvg-9c13dbe8.js";import{C as a}from"./ComplexMenu-fbc99edb.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./SvgIcon-a4f5cf68.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-9b57412c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-ddba1ff0.js";import"./useTheme-5ece020a.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./DropdownMenu-e7e90acf.js";import"./Button-475c86c5.js";import"./ButtonBase-a1be1f9a.js";import"./emotion-react.browser.esm-515d14f4.js";import"./assertThisInitialized-081f9914.js";import"./Typography-f91bff1f.js";import"./Fade-d5cf0a46.js";import"./Paper-64de23a0.js";import"./MenuList-95210a92.js";import"./index-1aacdabe.js";import"./List-c0df0758.js";import"./Divider-b591ce1b.js";import"./Box-dec363f1.js";import"./IconButton-6e69f6c0.js";const y={title:"UI/ComplexMenu",component:a},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const A=["Demo"];export{t as Demo,A as __namedExportsOrder,y as default};
//# sourceMappingURL=ComplexMenu.stories-32d891bf.js.map
