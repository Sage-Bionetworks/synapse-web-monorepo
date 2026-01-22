import{j as n,al as i}from"./iframe-Du5t3CHa.js";import{D as s}from"./DropdownMenu-D4It7LWy.js";import"./index-Chi_LkuB.js";import"./MenuItem-B06U7Mh-.js";import"./ListItemIcon-DVp2GuzA.js";import"./ListItemText-BI_g0eEm.js";const m={title:"UI/DropdownMenu",component:s},o=e=>()=>{console.log("Item clicked",e)},t={args:{dropdownButtonText:"Dropdown Menu Button",buttonProps:{endIcon:n.jsx(i,{icon:"verticalEllipsis",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    dropdownButtonText: 'Dropdown Menu Button',
    buttonProps: {
      endIcon: <IconSvg icon="verticalEllipsis" wrap={false} />
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
  }
}`,...t.parameters?.docs?.source}}};const u=["Demo"];export{t as Demo,u as __namedExportsOrder,m as default};
