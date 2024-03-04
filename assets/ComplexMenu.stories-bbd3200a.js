import{j as t}from"./jsx-runtime-9dc53467.js";import{I as i}from"./IconSvg-dc6fa014.js";import{C as a}from"./ComplexMenu-0ed616e1.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-b657d91b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createTheme-d609db80.js";import"./styled-bb145c31.js";import"./Tooltip-248f4fe4.js";import"./useTheme-a28bb397.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-2f9de6a4.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-19a63403.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useIsFocusVisible-18cd238e.js";import"./ErrorOutlined-5d3a6347.js";import"./GetAppTwoTone-6e3519f9.js";import"./InfoOutlined-aa78e498.js";import"./CheckCircleTwoTone-6570b572.js";import"./DropdownMenu-48295de9.js";import"./Button-065a21d4.js";import"./ButtonBase-0719e676.js";import"./emotion-react.browser.esm-ca9fe929.js";import"./assertThisInitialized-081f9914.js";import"./Typography-f217f607.js";import"./extendSxProp-7fb4e09f.js";import"./Fade-05777e49.js";import"./Paper-35c12a01.js";import"./MenuList-acf5f616.js";import"./index-c71daf5e.js";import"./getScrollbarSize-ac846fe6.js";import"./List-81115ae1.js";import"./MenuItem-9dd34ee5.js";import"./dividerClasses-ed167313.js";import"./ListItemText-766155b3.js";import"./Divider-f85fbd3b.js";import"./ClickAwayListener-3b20c94f.js";import"./Box-f6adec47.js";import"./IconButton-9b53499e.js";const Z={title:"UI/ComplexMenu",component:a},o=s=>()=>{console.log("Item clicked",s)},n={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:t(i,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:t(i,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const $=["Demo"];export{n as Demo,$ as __namedExportsOrder,Z as default};
