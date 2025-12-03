import{ay as g,j as r,r as w}from"./iframe-oNn-8uxy.js";import{S as v}from"./SynapseNavDrawer-D83WsTGw.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-9i6byrid.js";import"./useInfiniteQuery-BMvK8V8y.js";import"./useDownloadList-FXHEJMPz.js";import"./waitForAsyncResult-BzJP5Xg-.js";import"./useUserBundle-BvaO0LNa.js";import"./useSuspenseQuery-yMS-8lGQ.js";import"./CreateProjectModal-CKWvVUEo.js";import"./ConfirmationDialog-SzA8si7K.js";import"./DialogBase-B-cSqcPd.js";import"./Close-BSLNouGJ.js";import"./HelpPopover-CEM-d7vz.js";import"./MarkdownPopover-Cg7ChiRL.js";import"./LightTooltip-DLMoSUZw.js";import"./MarkdownSynapse-ChplHHtD.js";import"./SkeletonButton-D_D34Tmd.js";import"./SkeletonInlineBlock-B6YJwBFk.js";import"./SkeletonTable-iW-77ZUO.js";import"./SkeletonParagraph-DAXRxcWE.js";import"./SynapseHomepageNavBar-Co3FCnzW.js";import"./SageResourcesPopover-CKZUntWd.js";import"./Grid-B6PH2Zpw.js";import"./index-BI05yMk-.js";import"./MenuItem-2EGLr3CI.js";import"./UserBadge-bqUdhPgI.js";import"./Card-Dp1pXqZt.js";import"./Chip-D6UDoJiu.js";import"./Slide-DgFcOBP6.js";import"./InputAdornment-C89tsuJ7.js";import"./listItemButtonClasses-CFDgqxPI.js";import"./Badge-B0_DQT7x.js";import"./usePreviousProps-Bcna0YUH.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
