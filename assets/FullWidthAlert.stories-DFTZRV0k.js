import{ay as g,j as r,r as w}from"./iframe-k9YwU_Xc.js";import{S as v}from"./SynapseNavDrawer-DieRd-27.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-hW7ny4IX.js";import"./useInfiniteQuery-CV6-OEbg.js";import"./useDownloadList-XkphseQ2.js";import"./waitForAsyncResult-CCFBiSaY.js";import"./useUserBundle-Ciq97Tj-.js";import"./useSuspenseQuery-CiFSWrMs.js";import"./CreateProjectModal-CC3QzOX2.js";import"./ConfirmationDialog-CAwv6LBe.js";import"./DialogBase-Gl_HIGD-.js";import"./Close-DFr4W5W5.js";import"./HelpPopover-dwgbsbh_.js";import"./MarkdownPopover-DALnZxkA.js";import"./LightTooltip-mwT1Csao.js";import"./MarkdownSynapse-Dx4lD55G.js";import"./SkeletonButton-BEjusTzn.js";import"./SkeletonInlineBlock-Cb_-AWMb.js";import"./SkeletonTable-aVeOh9ct.js";import"./SkeletonParagraph-Btg7J19e.js";import"./SynapseHomepageNavBar-BYQhJYEh.js";import"./SageResourcesPopover-BBi_xOuB.js";import"./Grid-G8CgmtPB.js";import"./index-DfC-1pI_.js";import"./MenuItem-xt1g1Ufs.js";import"./UserBadge-DuQvc6Dg.js";import"./Card-BUvqTfdV.js";import"./Chip-CKkKYJUZ.js";import"./Slide-BUImSv9L.js";import"./InputAdornment-xFLYHLEt.js";import"./listItemButtonClasses-COA1h9CO.js";import"./Badge-1IjaZbxy.js";import"./usePreviousProps-C2vfI3xn.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
