import{n as e}from"./chunk-jRWAZmH_.js";import{HS as t,Hn as n,Vn as r}from"./iframe-DdE_KseG.js";import{n as i,t as a}from"./ComplexMenu-BqZ2N_wz.js";var o,s,c,l,u;e((()=>{n(),i(),o=t(),s={title:`UI/ComplexMenu`,component:a},c=e=>()=>{console.log(`Item clicked`,e)},l={args:{iconButtons:[{icon:`edit`,tooltipText:`This is an icon button`,onClick:c(`edit icon`)},{icon:`label`,tooltipText:`View annotations`,onClick:c(`label icon`)},{icon:`createVersion`,tooltipText:`Create new version`,onClick:c(`createVersion icon`)}],dropdownMenus:[{dropdownButtonText:`You can have...`,buttonProps:{endIcon:(0,o.jsx)(r,{icon:`upload`,wrap:!1})},items:[[{text:`Do something cool`,onClick:c(0)},{text:`This one has a tooltip`,tooltipText:`Some more info`,onClick:c(1)},{text:`This one is disabled`,disabled:!0,onClick:c(3)},{text:`This one has both`,disabled:!0,tooltipText:`You can't do this for reasons`,onClick:c(4)}],[{text:`You can organize actions into groups`,onClick:c(5)}]]},{dropdownButtonText:`...multiple dropdown menus!`,buttonProps:{endIcon:(0,o.jsx)(r,{icon:`download`,wrap:!1})},items:[[{text:`Do something cool`,onClick:c(0)},{text:`This one has a tooltip`,tooltipText:`Some more info`,onClick:c(1)},{text:`This one is disabled`,disabled:!0,onClick:c(3)},{text:`This one has both`,disabled:!0,tooltipText:`You can't do this for reasons`,onClick:c(4)}],[{text:`You can organize actions into groups`,onClick:c(5)}]]}]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Demo`]}))();export{l as Demo,u as __namedExportsOrder,s as default};