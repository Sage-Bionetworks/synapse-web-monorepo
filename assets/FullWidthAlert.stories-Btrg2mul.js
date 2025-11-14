import{at as g,j as e,r as w}from"./iframe-BbBIbNbJ.js";import{S as v}from"./SynapseNavDrawer-DJE0B-tH.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-ZPcZZkkb.js";import"./useInfiniteQuery-Dq3AohCE.js";import"./useDownloadList-BNeoJIsJ.js";import"./waitForAsyncResult-7j9vObFg.js";import"./CreateProjectModal-Bqf4XOXf.js";import"./ConfirmationDialog-B72wlxd4.js";import"./DialogBase-DRt0FohX.js";import"./Close-Di_kFtUw.js";import"./HelpPopover-CkUPARK8.js";import"./MarkdownPopover-DgQV4UBm.js";import"./LightTooltip-Ckf7mhk-.js";import"./MarkdownSynapse-a5yQxqx5.js";import"./SkeletonButton-C0rZfSx5.js";import"./SkeletonInlineBlock-DVbB2SaF.js";import"./SkeletonTable-DeosQDQ2.js";import"./SkeletonParagraph-Cre22j3C.js";import"./SynapseHomepageNavBar-imHNZAt1.js";import"./SageResourcesPopover-C4wwlC8O.js";import"./Grid-D2o60fm5.js";import"./index-UMjXJfzL.js";import"./MenuItem-C_GiViVf.js";import"./UserBadge-h7JHA6Ak.js";import"./Card-BSNHgx80.js";import"./Chip-BGbET8g7.js";import"./Slide-DN1nnKPF.js";import"./InputAdornment-DN95oK0_.js";import"./listItemButtonClasses-BFYBw6Jf.js";import"./Badge-DXWfyYmS.js";import"./usePreviousProps-ZyPIebbH.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const X=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,X as __namedExportsOrder,V as default};
