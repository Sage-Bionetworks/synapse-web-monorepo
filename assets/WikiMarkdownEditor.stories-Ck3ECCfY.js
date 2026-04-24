import{n as e}from"./chunk-zsgVPwQN.js";import{D as t,t as n}from"./dist-jiKX-16m.js";import{a as r,i,n as a}from"./mockWiki-Dg7Uunft.js";import{n as o,r as s,t as c}from"./mockWikiPageKey-DjcWEXbq.js";import{n as l,t as u}from"./WikiMarkdownEditor-C0AXz2zC.js";var d,f,p,m,h;e((()=>{a(),c(),n(),l(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Synapse/WikiMarkdownEditor`,component:u,parameters:{stack:`mock`},argTypes:{ownerObjectType:{control:{type:`select`},options:[t.ACCESS_REQUIREMENT,t.ENTITY,t.EVALUATION]}}},p={args:{open:!0,ownerObjectType:o.ownerObjectType,ownerObjectId:o.ownerObjectId,wikiPage:i,onCancel:d(),onSave:d()}},m={args:{open:!0,ownerObjectType:s.ownerObjectType,ownerObjectId:s.ownerObjectId,wikiPage:r,onCancel:d(),onSave:d()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    ownerObjectType: mockEntityRootWikiPageKey.ownerObjectType,
    ownerObjectId: mockEntityRootWikiPageKey.ownerObjectId,
    wikiPage: mockEntityRootWikiPage,
    onCancel: fn(),
    onSave: fn()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    ownerObjectType: mockEntityWikiPageKey.ownerObjectType,
    ownerObjectId: mockEntityWikiPageKey.ownerObjectId,
    wikiPage: mockEntityWikiPage,
    onCancel: fn(),
    onSave: fn()
  }
}`,...m.parameters?.docs?.source}}},h=[`MockWikiRootPage`,`MockWikiSubpage`]}))();export{p as MockWikiRootPage,m as MockWikiSubpage,h as __namedExportsOrder,f as default};