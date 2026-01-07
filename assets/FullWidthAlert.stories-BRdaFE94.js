import{ay as g,j as r,r as w}from"./iframe-B9AXyISm.js";import{S as v}from"./SynapseNavDrawer-BDmsAfnK.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DLn2NorR.js";import"./useInfiniteQuery-B0uiA_PZ.js";import"./useDownloadList-D08GBRwR.js";import"./waitForAsyncResult-BBkRzh-x.js";import"./useUserBundle-D_B9FjL8.js";import"./useSuspenseQuery-DfskErri.js";import"./CreateProjectModal-D71bTlm5.js";import"./ConfirmationDialog-BV4A4Qpg.js";import"./DialogBase-Bv_6iVkM.js";import"./Close-NnOmK_QN.js";import"./HelpPopover-BKGnMhYA.js";import"./MarkdownPopover-CQwXLXPz.js";import"./LightTooltip-C9EShGL9.js";import"./MarkdownSynapse-ACifc84y.js";import"./SkeletonButton-C-q75hZ2.js";import"./SkeletonInlineBlock-BZYL3GN_.js";import"./SkeletonTable-DJaYvBkh.js";import"./SkeletonParagraph-DZGMGLgg.js";import"./SynapseHomepageNavBar-DJ5-76Ig.js";import"./SageResourcesPopover-1MKs68qN.js";import"./Grid-EI8bT8L_.js";import"./index-DcvNn4X2.js";import"./MenuItem-Dn2OBO7e.js";import"./UserBadge-BtAxa-D8.js";import"./Card-DPm0MPSs.js";import"./Chip-CoCC-fi6.js";import"./Slide-CJUC_Y7j.js";import"./InputAdornment-0d8bMAhF.js";import"./listItemButtonClasses-CohNsYvv.js";import"./Badge-CuRAaqNG.js";import"./usePreviousProps-C19tVBDD.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
