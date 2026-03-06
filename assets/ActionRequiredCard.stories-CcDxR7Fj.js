import{j as t,fH as r,Y as a,B as n}from"./iframe-CDA0-aTC.js";import{W as i}from"./WideButton-7HAHH70O.js";import{A as s}from"./ActionRequiredCard-Bq5nKPHl.js";import"./index-Chi_LkuB.js";import"./Icon-BtLTyiGO.js";import"./mouse-ChJohxDO.js";import"./SortDown-DL1lakEz.js";const h={title:"Download/ActionRequiredCard",component:s,tags:["autodocs"],argTypes:{actionNode:{options:["Button","Button with text (Sharing Settings)"],mapping:{Button:t.jsx(i,{variant:"contained",children:"Start"}),"Button with text (Sharing Settings)":t.jsxs(t.Fragment,{children:[t.jsx(a,{variant:"smallText1",sx:{color:"grey.700"},children:"Contact an administrator to request download permission"}),t.jsx(n,{variant:"outlined",children:"View Sharing Settings"})]})}}}},o={args:{isLoading:!0}},e={args:{isLoading:!1,title:"The title of the card",description:"The description of the card",actionNode:"Button",iconType:r,count:42}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    title: 'The title of the card',
    description: 'The description of the card',
    actionNode: 'Button',
    iconType: EASY_DIFFICULTY,
    count: 42
  }
}`,...e.parameters?.docs?.source}}};const x=["Loading","Card"];export{e as Card,o as Loading,x as __namedExportsOrder,h as default};
