import{n as e}from"./chunk-jRWAZmH_.js";import{d as t,u as n}from"./CardContainerLogic-Bx40fcvG.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Explore/StandaloneQueryWrapper`,component:n},i={args:{sql:`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`,columnLinks:[{matchColumnName:`studyOrProject`,isMarkdown:!0}]}},a={args:{sql:`SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')`}},o={args:{name:`Top Level Controls demo`,hideDownload:!1,sql:`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`,showTopLevelControls:!0}},s={args:{name:`Entity column image preview demo`,hideDownload:!1,sql:`SELECT * FROM syn52743383`,showTopLevelControls:!0,columnLinks:[{matchColumnName:`fuse_mask`,isEntityImage:!0}]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sql: \`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10\`,
    columnLinks: [{
      matchColumnName: 'studyOrProject',
      isMarkdown: true
    }]
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sql: \`SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')\`
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Top Level Controls demo',
    hideDownload: false,
    sql: \`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10\`,
    showTopLevelControls: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Entity column image preview demo',
    hideDownload: false,
    sql: 'SELECT * FROM syn52743383',
    showTopLevelControls: true,
    columnLinks: [{
      matchColumnName: 'fuse_mask',
      isEntityImage: true
    }]
  }
}`,...s.parameters?.docs?.source}}},c=[`WithoutTopLevelControls`,`WithColumnAlias`,`TopLevelControls`,`ImagePreviewsDemo`]}))();export{s as ImagePreviewsDemo,o as TopLevelControls,a as WithColumnAlias,i as WithoutTopLevelControls,c as __namedExportsOrder,r as default};