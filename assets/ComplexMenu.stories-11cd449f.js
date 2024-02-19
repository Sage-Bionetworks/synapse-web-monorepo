import{j as t}from"./jsx-runtime-9dc53467.js";import{I as i}from"./IconSvg-b2c8dc9b.js";import{C as a}from"./ComplexMenu-95f04de1.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-397996e3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-87b6157a.js";import"./Tooltip-e8bd1358.js";import"./useTheme-58bb7d64.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-08403985.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-830530e5.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./ErrorOutlined-20d019ce.js";import"./GetAppTwoTone-ce03f56d.js";import"./InfoOutlined-e67f3aa8.js";import"./CheckCircleTwoTone-8a62494f.js";import"./DropdownMenu-71860406.js";import"./Button-a2b8b546.js";import"./ButtonBase-651ec7a9.js";import"./emotion-react.browser.esm-6130a288.js";import"./assertThisInitialized-081f9914.js";import"./Typography-62cfc992.js";import"./extendSxProp-c4113ea3.js";import"./Fade-3c4a970e.js";import"./Paper-625f2e68.js";import"./MenuList-7e60caa0.js";import"./index-c71daf5e.js";import"./getScrollbarSize-ac846fe6.js";import"./List-507b8078.js";import"./MenuItem-100d659d.js";import"./dividerClasses-3ebb5c26.js";import"./ListItemText-6aa96f84.js";import"./Divider-1f110b7b.js";import"./ClickAwayListener-3907f9d7.js";import"./Box-737945d6.js";import"./IconButton-30f6f351.js";const X={title:"UI/ComplexMenu",component:a},o=s=>()=>{console.log("Item clicked",s)},n={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:t(i,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:t(i,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Z=["Demo"];export{n as Demo,Z as __namedExportsOrder,X as default};
