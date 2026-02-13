import{j as n,am as i}from"./iframe-D-KER6Qh.js";import{D as s}from"./DropdownMenu-DAL0jgJZ.js";import"./index-Chi_LkuB.js";import"./MenuItem-Dh0Z5Zi9.js";import"./ListItemIcon-cBO_aXnj.js";import"./ListItemText-CSiIWwEZ.js";const m={title:"UI/DropdownMenu",component:s},o=e=>()=>{console.log("Item clicked",e)},t={args:{dropdownButtonText:"Dropdown Menu Button",buttonProps:{endIcon:n.jsx(i,{icon:"verticalEllipsis",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
