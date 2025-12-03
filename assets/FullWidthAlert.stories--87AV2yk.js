import{ay as g,j as r,r as w}from"./iframe-CrIG5yS4.js";import{S as v}from"./SynapseNavDrawer-jfF-obcS.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-6EzGXDq8.js";import"./useInfiniteQuery-C039Rys8.js";import"./useDownloadList-wzV9jtxi.js";import"./waitForAsyncResult-DySxmhxy.js";import"./useUserBundle-WiP6qAW2.js";import"./useSuspenseQuery-BDF5CGHD.js";import"./CreateProjectModal-D6pMV6Vw.js";import"./ConfirmationDialog-yahK5x44.js";import"./DialogBase-CybwzTY6.js";import"./Close-5QnQ5lpW.js";import"./HelpPopover-C0SNysP_.js";import"./MarkdownPopover-oRHyMW2V.js";import"./LightTooltip-BhZaRT-T.js";import"./MarkdownSynapse-Cuq8Dn9Z.js";import"./SkeletonButton-C2iZcuLE.js";import"./SkeletonInlineBlock-DCJOzeCR.js";import"./SkeletonTable-CZxqZr7Y.js";import"./SkeletonParagraph-BI2gfc3a.js";import"./SynapseHomepageNavBar-P3h5aSJM.js";import"./SageResourcesPopover-CtZ9Yijz.js";import"./Grid-4tN69aUJ.js";import"./index-CkF7h5xt.js";import"./MenuItem-DGqfgEGw.js";import"./UserBadge-BoI25jFW.js";import"./Card-B7wB9TR3.js";import"./Chip-Cq9C0rq5.js";import"./Slide-DFRxO0qi.js";import"./InputAdornment-DX87peCP.js";import"./listItemButtonClasses-B0aS_Qro.js";import"./Badge-o9Qtwk4k.js";import"./usePreviousProps-Dt07BJ5Q.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
