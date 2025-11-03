import{ay as g,j as e,r as w}from"./iframe-DM9RvezN.js";import{S as v}from"./SynapseNavDrawer-BIl6p30Q.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-4JJAL2ae.js";import"./useInfiniteQuery-oJo5Itzj.js";import"./useDownloadList-DRljCaIU.js";import"./waitForAsyncResult-MEJ8kGK3.js";import"./CreateProjectModal-DbaNoL-0.js";import"./ConfirmationDialog-Dl-jK7QM.js";import"./DialogBase-BAhxc9kZ.js";import"./Close-CuPbI5yA.js";import"./HelpPopover-C6nQ_3VR.js";import"./MarkdownPopover-DBancuF8.js";import"./LightTooltip-ywjxPoX5.js";import"./MarkdownSynapse-CE6jraB4.js";import"./SkeletonButton-GB1PBqFT.js";import"./SkeletonInlineBlock-74TZwrl_.js";import"./SkeletonTable-DWBPPyUA.js";import"./SkeletonParagraph-BhCOGAD2.js";import"./SynapseHomepageNavBar-Durc373j.js";import"./SageResourcesPopover-Db76GVKt.js";import"./Grid-BjH0Dgb5.js";import"./index-DqaILKWS.js";import"./MenuItem-Dpv8sefJ.js";import"./UserBadge-kFRXYAH-.js";import"./Card-0KjgSdyq.js";import"./Chip-BTSRizg_.js";import"./Slide-BPUNxcsC.js";import"./InputAdornment-BEO5xCDe.js";import"./listItemButtonClasses-BCKjpHxj.js";import"./Badge-DtPBva05.js";import"./usePreviousProps-DZ-rCkR2.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
