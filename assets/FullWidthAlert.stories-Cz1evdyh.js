import{ay as g,j as r,r as w}from"./iframe-k0ljdA_F.js";import{S as v}from"./SynapseNavDrawer-BzqPppOJ.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-aW0PEpBQ.js";import"./useInfiniteQuery-Cnf3ehf_.js";import"./useDownloadList-CA5iFK8l.js";import"./waitForAsyncResult-zK_h8XQ3.js";import"./useUserBundle-BcDALtg_.js";import"./useSuspenseQuery-Cfzbe5_g.js";import"./CreateProjectModal-CknPEvXJ.js";import"./ConfirmationDialog-C7naKC_4.js";import"./DialogBase-c3ATuGjo.js";import"./Close-B2VeJ_9n.js";import"./HelpPopover-CNpAlynd.js";import"./MarkdownPopover-DByvkR9q.js";import"./LightTooltip-DSQf6_14.js";import"./MarkdownSynapse-Bd3GMcDJ.js";import"./SkeletonButton-DocMgp-F.js";import"./SkeletonInlineBlock-D4J3mBmr.js";import"./SkeletonTable-C0DTQRTT.js";import"./SkeletonParagraph-BXN5laEg.js";import"./SynapseHomepageNavBar-Cr2L77Oy.js";import"./SageResourcesPopover-BssJy8kP.js";import"./Grid-DNfAXZdo.js";import"./index-C-u29sTD.js";import"./MenuItem-CVgChaV5.js";import"./UserBadge-Bz8d8XxV.js";import"./Card-DSLWP5ai.js";import"./Chip-DuFcu8oc.js";import"./Slide-CVuTCVHh.js";import"./InputAdornment-BmQ5yXny.js";import"./listItemButtonClasses-CAkmNDe4.js";import"./Badge-BCZRMRzI.js";import"./usePreviousProps-DL4rC1NY.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Z=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,Z as __namedExportsOrder,Y as default};
