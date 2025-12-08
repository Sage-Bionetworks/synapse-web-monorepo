import{ay as g,j as r,r as w}from"./iframe-DVXODLNu.js";import{S as v}from"./SynapseNavDrawer-Ckpcn6CD.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DDsvKSaG.js";import"./useInfiniteQuery-BezuufV7.js";import"./useDownloadList-k8q1Nts2.js";import"./waitForAsyncResult-BbKcG866.js";import"./useUserBundle-BkjAxlSt.js";import"./useSuspenseQuery-sm4bvu-Z.js";import"./CreateProjectModal-U3Ucfn3F.js";import"./ConfirmationDialog-DPilllRq.js";import"./DialogBase-CV0H5xOa.js";import"./Close-CWDc50NR.js";import"./HelpPopover-095Yn2au.js";import"./MarkdownPopover-cDp6lRwo.js";import"./LightTooltip-UuB-IIfM.js";import"./MarkdownSynapse-CTK4Gw0-.js";import"./SkeletonButton-C9WhwSFv.js";import"./SkeletonInlineBlock-rd-Pq8Ur.js";import"./SkeletonTable-MyquJLbe.js";import"./SkeletonParagraph-DapPZsJe.js";import"./SynapseHomepageNavBar-YiFk3xFR.js";import"./SageResourcesPopover-B8-1k3_o.js";import"./Grid-PNkqt1O4.js";import"./index-Bd7KE_sO.js";import"./MenuItem-BqHSezmF.js";import"./UserBadge-LmUrHAa6.js";import"./Card-Bb4flCVP.js";import"./Chip-Cr5hy2JG.js";import"./Slide-B8du_40y.js";import"./InputAdornment-sbfeXHws.js";import"./listItemButtonClasses-wVJFmvzZ.js";import"./Badge-FEPs_x1s.js";import"./usePreviousProps-E5TmmVJE.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
