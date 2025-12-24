import{ay as g,j as r,r as w}from"./iframe-Djv8MYNB.js";import{S as v}from"./SynapseNavDrawer-C9lMns4H.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DcXNh_qN.js";import"./useInfiniteQuery-By8at75o.js";import"./useDownloadList-CjYBJ5jc.js";import"./waitForAsyncResult-2GUI2rev.js";import"./useUserBundle-tM9bsliG.js";import"./useSuspenseQuery-Bke-3bkA.js";import"./CreateProjectModal-C8zM2mQb.js";import"./ConfirmationDialog-Cxl5Efnn.js";import"./DialogBase-Bt09srou.js";import"./Close-Df0WyQYw.js";import"./HelpPopover-DVpvTiRQ.js";import"./MarkdownPopover-p5QWJMaq.js";import"./LightTooltip-CPJ4gklA.js";import"./MarkdownSynapse-D11UdXjT.js";import"./SkeletonButton-D377GQsO.js";import"./SkeletonInlineBlock-Bo6_99BY.js";import"./SkeletonTable-5bHQrafN.js";import"./SkeletonParagraph-CvIzEYe-.js";import"./SynapseHomepageNavBar-LFN5_fOp.js";import"./SageResourcesPopover-BTuyoaGQ.js";import"./Grid-SmLd1_qQ.js";import"./index-DkUUvlSe.js";import"./MenuItem-B1PtcVYM.js";import"./UserBadge-BO7tdhe5.js";import"./Card-_to_Ymcq.js";import"./Chip-BC_6TuQR.js";import"./Slide-CXw3mFHx.js";import"./InputAdornment-Dw9gZJsw.js";import"./listItemButtonClasses-DsZo8FHL.js";import"./Badge-BO72v9WW.js";import"./usePreviousProps-BGqOKyt1.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
