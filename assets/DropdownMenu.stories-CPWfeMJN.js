import{j as r,am as a}from"./iframe-ynK1h1ZQ.js";import{D as l}from"./DropdownMenu-DBDw7wLB.js";import"./index-r8ZA1smB.js";import"./MenuItem-AKaHxYJT.js";import"./ListItemIcon-CS6MTSyq.js";import"./ListItemText-98c85xoB.js";const k={title:"UI/DropdownMenu",component:l},o=s=>()=>{console.log("Item clicked",s)},t={args:{dropdownButtonText:"Dropdown Menu Button",buttonProps:{endIcon:r.jsx(a,{icon:"verticalEllipsis",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}};var e,n,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const h=["Demo"];export{t as Demo,h as __namedExportsOrder,k as default};
