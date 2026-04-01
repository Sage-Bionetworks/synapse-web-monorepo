import{ay as a,j as r,r as i}from"./iframe-CvDTy6mw.js";import{S as c}from"./SynapseNavDrawer-DvHbWYIb.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B4kotDp3.js";import"./useInfiniteQuery-BDzyB6fR.js";import"./useDownloadList-C3J8ppaf.js";import"./waitForAsyncResult-CSzkxjpI.js";import"./useUserBundle-Dj5B8O2o.js";import"./CreateProjectModal-CvUtQSZZ.js";import"./ConfirmationDialog-Cfqxxxlf.js";import"./DialogBase-DQQSlD3x.js";import"./Close-d7PqJiCL.js";import"./HelpPopover-Bk8Cc2qG.js";import"./MarkdownPopover-CX1rkX4a.js";import"./LightTooltip-Cn6AM7tu.js";import"./MarkdownSynapse-BqOzEXKP.js";import"./SkeletonButton-DrRqzwrL.js";import"./SkeletonInlineBlock-DRwNak6O.js";import"./SkeletonTable-DjmsDm7y.js";import"./SkeletonParagraph-DAWCny1c.js";import"./SynapseHomepageNavBar-80Z3HH_4.js";import"./SageResourcesPopover-CtzoyXdq.js";import"./Grid-B7-Uodf9.js";import"./index-CEVa6roL.js";import"./MenuItem-DnOuV5Bw.js";import"./UserBadge-PoyEvAzl.js";import"./Card-DQ_YpR0y.js";import"./Chip-DmppX2NC.js";import"./searchDefaults-GFwFdwgY.js";import"./Slide-AcsAGqXT.js";import"./InputAdornment-Cd5p1xI2.js";import"./listItemButtonClasses-DMs0uJ6l.js";import"./Badge-Cnp_X0CD.js";import"./usePreviousProps-0ca6yt6K.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
