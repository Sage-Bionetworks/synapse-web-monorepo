import{A as t}from"./AccountLevelBadge-jL8dJo8o.js";import{J as o}from"./iframe-BMVoK9rQ.js";import"./Card-dTGT8nbt.js";import"./index-Chi_LkuB.js";const n={title:"UI/AccountLevelBadge",component:t},e={args:{badgeType:"certified"}},r={args:{badgeType:"certified",buttonProps:{variant:"outlined",children:"Revoke Certification",onClick:()=>o("Revoke Certification Clicked","success")}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    badgeType: 'certified'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    badgeType: 'certified',
    buttonProps: {
      variant: 'outlined',
      children: 'Revoke Certification',
      onClick: () => displayToast('Revoke Certification Clicked', 'success')
    }
  }
}`,...r.parameters?.docs?.source}}};const d=["Certified","CertifiedRevokable"];export{e as Certified,r as CertifiedRevokable,d as __namedExportsOrder,n as default};
