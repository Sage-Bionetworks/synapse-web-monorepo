import{n as e}from"./chunk-zsgVPwQN.js";import{T as t,t as n}from"./dist-CZriqqvC.js";import{d as r,u as i}from"./useEntitySelection-D2naIGud.js";import{i as a,n as o,r as s,t as c}from"./EntityFinder-DSI2FYix.js";var l,u,d,f,p,m=e((()=>{n(),o(),a(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Synapse/EntityFinder`,component:c,argTypes:{versionSelection:{options:[`REQUIRED`,`DISABLED`,`TRACKED`,`UNTRACKED`],control:{type:`select`}}}},d={args:{treeOnly:!1,initialScope:s.CURRENT_PROJECT,projectId:`syn5550376`,initialContainer:`syn5550376`,selectMultiple:!0,visibleTypesInList:Object.values(t),versionSelection:i.TRACKED,onSelectedChange:l(),selectableTypes:Object.values(t)}},f={args:{treeOnly:!0,initialScope:s.CURRENT_PROJECT,projectId:`syn5550376`,initialContainer:`syn5550376`,selectMultiple:!1,visibleTypesInTree:[t.project,t.folder,t.table],versionSelection:i.DISALLOWED,onSelectedChange:l(),selectableTypes:[t.project,t.folder]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    treeOnly: false,
    initialScope: FinderScope.CURRENT_PROJECT,
    projectId: 'syn5550376',
    initialContainer: 'syn5550376',
    selectMultiple: true,
    visibleTypesInList: Object.values(EntityType),
    versionSelection: VersionSelectionType.TRACKED,
    onSelectedChange: fn(),
    selectableTypes: Object.values(EntityType)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    treeOnly: true,
    initialScope: FinderScope.CURRENT_PROJECT,
    projectId: 'syn5550376',
    initialContainer: 'syn5550376',
    selectMultiple: false,
    visibleTypesInTree: [EntityType.project, EntityType.folder, EntityType.table],
    versionSelection: VersionSelectionType.DISALLOWED,
    onSelectedChange: fn(),
    selectableTypes: [EntityType.project, EntityType.folder]
  }
}`,...f.parameters?.docs?.source}}},p=[`DualPane`,`SinglePane`]}));m();export{d as DualPane,f as SinglePane,p as __namedExportsOrder,u as default,m as t};