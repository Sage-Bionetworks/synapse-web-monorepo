import{n as e}from"./chunk-jRWAZmH_.js";import{ah as t,vh as n}from"./iframe-DdE_KseG.js";import{d as r,u as i}from"./useEntitySelection-ai9vmIQF.js";import{i as a,n as o,r as s,t as c}from"./EntityFinder-BsPehkwp.js";var l,u,d,f,p,m=e((()=>{t(),o(),a(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Synapse/EntityFinder`,component:c,argTypes:{versionSelection:{options:[`REQUIRED`,`DISABLED`,`TRACKED`,`UNTRACKED`],control:{type:`select`}}}},d={args:{treeOnly:!1,initialScope:s.CURRENT_PROJECT,projectId:`syn5550376`,initialContainer:`syn5550376`,selectMultiple:!0,visibleTypesInList:Object.values(n),versionSelection:i.TRACKED,onSelectedChange:l(),selectableTypes:Object.values(n)}},f={args:{treeOnly:!0,initialScope:s.CURRENT_PROJECT,projectId:`syn5550376`,initialContainer:`syn5550376`,selectMultiple:!1,visibleTypesInTree:[n.project,n.folder,n.table],versionSelection:i.DISALLOWED,onSelectedChange:l(),selectableTypes:[n.project,n.folder]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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