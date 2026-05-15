import{n as e}from"./chunk-jRWAZmH_.js";import{HS as t,Hn as n,Vn as r}from"./iframe-DdE_KseG.js";import{n as i,t as a}from"./DropdownMenu-CKs3VAXW.js";var o,s,c,l,u;e((()=>{i(),n(),o=t(),s={title:`UI/DropdownMenu`,component:a},c=e=>()=>{console.log(`Item clicked`,e)},l={args:{dropdownButtonText:`Dropdown Menu Button`,buttonProps:{endIcon:(0,o.jsx)(r,{icon:`verticalEllipsis`,wrap:!1})},items:[[{text:`Do something cool`,onClick:c(0)},{text:`This one has a tooltip`,tooltipText:`Some more info`,onClick:c(1)},{text:`This one is disabled`,disabled:!0,onClick:c(3)},{text:`This one has both`,disabled:!0,tooltipText:`You can't do this for reasons`,onClick:c(4)}],[{text:`You can organize actions into groups`,onClick:c(5)}]]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Demo`]}))();export{l as Demo,u as __namedExportsOrder,s as default};