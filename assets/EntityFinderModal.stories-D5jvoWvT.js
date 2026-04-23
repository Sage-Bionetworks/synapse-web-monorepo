import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,t as n}from"./EntityFinderModal-CPGeau84.js";import{DualPane as r,SinglePane as i,t as a}from"./EntityFinder.stories-Cv32BRer.js";var o,s,c,l,u;e((()=>{a(),t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Synapse/EntityFinderModal`,component:n,args:{onConfirm:o(),onCancel:o()}},c={args:{configuration:{...r.args},show:!0,title:`Select Files`,titleHelpPopoverProps:{markdownText:`Some text to help you`,helpUrl:`https://help.synapse.org/docs/Datasets.2611281979.html`,placement:`right`},promptCopy:`Select a project to find Access Requirements that are associated with that project. Access Requirements will be found if the Access Requirement is applied to the project, or if it is applied to any item inside the project.`,confirmButtonCopy:`Select`}},l={args:{...c.args,configuration:{...i.args}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: {
      ...EntityFinderDualPane.args
    },
    show: true,
    title: 'Select Files',
    titleHelpPopoverProps: {
      markdownText: 'Some text to help you',
      helpUrl: 'https://help.synapse.org/docs/Datasets.2611281979.html',
      placement: 'right'
    },
    promptCopy: 'Select a project to find Access Requirements that are associated with that project. Access Requirements will be found if the Access Requirement is applied to the project, or if it is applied to any item inside the project.',
    confirmButtonCopy: 'Select'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...{
      ...DualPane.args,
      configuration: {
        ...EntityFinderSinglePane.args
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`DualPane`,`SinglePane`]}))();export{c as DualPane,l as SinglePane,u as __namedExportsOrder,s as default};