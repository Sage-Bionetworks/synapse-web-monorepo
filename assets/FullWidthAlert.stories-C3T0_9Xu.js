import{ay as a,j as r,r as i}from"./iframe-Bvh78Lip.js";import{S as c}from"./SynapseNavDrawer-BnlWLHiC.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-ae00TuhB.js";import"./useInfiniteQuery-Bs48Hq-k.js";import"./useDownloadList-C655DxWc.js";import"./waitForAsyncResult-B0O19cxg.js";import"./useGetFeatureFlag-Dd5ay2i-.js";import"./useUserBundle-EnZFVQAK.js";import"./useSuspenseQuery-Bos4-4YQ.js";import"./CreateProjectModal-CNC3frKv.js";import"./ConfirmationDialog-Cmxx7cdh.js";import"./DialogBase-CCsdoegG.js";import"./Close-CJJqWftx.js";import"./HelpPopover-BLWEr8Pu.js";import"./MarkdownPopover-rYIJ3MR9.js";import"./LightTooltip-BdYR1aB0.js";import"./MarkdownSynapse-BqKPy748.js";import"./SkeletonButton-3kp2DVDd.js";import"./SkeletonInlineBlock-ferE3Pfl.js";import"./SkeletonTable-CLqiC9iF.js";import"./SkeletonParagraph-D3tb0h1Y.js";import"./SynapseHomepageNavBar-4Xxm2aLB.js";import"./SageResourcesPopover-DgxO_5Cs.js";import"./Grid-eXtr296u.js";import"./index-C5Az4rP9.js";import"./MenuItem-CDGWVe-G.js";import"./UserBadge-C91cu101.js";import"./Card-Bm2XEhIM.js";import"./Chip-BCnYHX9c.js";import"./Slide-CRm0O19m.js";import"./InputAdornment-D3O-nv6n.js";import"./listItemButtonClasses-BKblHEER.js";import"./Badge-BWO-H12B.js";import"./usePreviousProps-Dn9nd-S_.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
