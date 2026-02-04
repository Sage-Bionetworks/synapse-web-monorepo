import{ay as a,j as r,r as i}from"./iframe-9zwml_ZL.js";import{S as c}from"./SynapseNavDrawer-CXIZr_-C.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CLkgx-hP.js";import"./useInfiniteQuery-BQlxA6Iu.js";import"./useDownloadList-DbLomJOJ.js";import"./waitForAsyncResult-xFvQUvkh.js";import"./useGetFeatureFlag-BtbmEojT.js";import"./useUserBundle-MekiU7Qn.js";import"./useSuspenseQuery-DROjoE-r.js";import"./CreateProjectModal-qyH2036U.js";import"./ConfirmationDialog-_IRTHH0j.js";import"./DialogBase-Hity4xAw.js";import"./Close-Bx_JZLf8.js";import"./HelpPopover-Cf3W3rHJ.js";import"./MarkdownPopover-BsgLS8bs.js";import"./LightTooltip-BlBY8chN.js";import"./MarkdownSynapse-eByBmLQG.js";import"./SkeletonButton-C8wU0a4y.js";import"./SkeletonInlineBlock-D9CRPwvT.js";import"./SkeletonTable-CtHOf3Y6.js";import"./SkeletonParagraph-jYvf1dwm.js";import"./SynapseHomepageNavBar-DB2KElZq.js";import"./SageResourcesPopover-CtDpMarN.js";import"./Grid-BP7miAi3.js";import"./index-qxRvCYco.js";import"./MenuItem-DDbuquWO.js";import"./UserBadge-roJgG6JX.js";import"./Card-DAP4jV0y.js";import"./Chip-D5tNn4lG.js";import"./Slide-B0DgRPVJ.js";import"./InputAdornment-D8LtOSth.js";import"./listItemButtonClasses-BHTt-fvf.js";import"./Badge-BtWKTeBG.js";import"./usePreviousProps-Bp904u-r.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
