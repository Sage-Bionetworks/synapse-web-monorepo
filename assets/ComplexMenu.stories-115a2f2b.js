import{j as t}from"./jsx-runtime-9dc53467.js";import{I as i}from"./IconSvg-a7217c47.js";import{C as a}from"./ComplexMenu-74a002e3.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-396e3e24.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-3c6f4d83.js";import"./Tooltip-801f2a9c.js";import"./useTheme-e79ecbc0.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-c431c788.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-6fa73630.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useIsFocusVisible-18cd238e.js";import"./ErrorOutlined-6f3ac166.js";import"./GetAppTwoTone-d672483d.js";import"./InfoOutlined-e9da64e0.js";import"./CheckCircleTwoTone-c37d81c7.js";import"./DropdownMenu-76f2f938.js";import"./Button-33299b2c.js";import"./ButtonBase-8587e55b.js";import"./emotion-react.browser.esm-5fddd3df.js";import"./assertThisInitialized-081f9914.js";import"./Typography-1d068b0b.js";import"./extendSxProp-1372051e.js";import"./Fade-240af196.js";import"./Paper-411d859b.js";import"./MenuList-b0aba911.js";import"./index-c71daf5e.js";import"./getScrollbarSize-ac846fe6.js";import"./List-a6975dc7.js";import"./MenuItem-4ee45934.js";import"./dividerClasses-b0ef5b8b.js";import"./ListItemText-f556c874.js";import"./Divider-94881329.js";import"./ClickAwayListener-3b20c94f.js";import"./Box-8faf86fd.js";import"./IconButton-f820fa46.js";const X={title:"UI/ComplexMenu",component:a},o=s=>()=>{console.log("Item clicked",s)},n={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:t(i,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:t(i,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
