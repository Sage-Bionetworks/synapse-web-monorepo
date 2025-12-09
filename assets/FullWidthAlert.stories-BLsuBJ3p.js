import{ay as g,j as r,r as w}from"./iframe-mfaqAuKn.js";import{S as v}from"./SynapseNavDrawer-CuKIgGr0.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-BnrU-6cu.js";import"./useInfiniteQuery-CFl_zl7K.js";import"./useDownloadList-CDtojrFL.js";import"./waitForAsyncResult-DY7fr6WO.js";import"./useUserBundle-DyICHo5Z.js";import"./useSuspenseQuery-Ck8XhOTY.js";import"./CreateProjectModal-BYwoswwu.js";import"./ConfirmationDialog-DK1C4L_H.js";import"./DialogBase-BA7H051B.js";import"./Close-YScbRJtZ.js";import"./HelpPopover-CYTH5UW2.js";import"./MarkdownPopover-B-BPuZn1.js";import"./LightTooltip-BuyZuxhp.js";import"./MarkdownSynapse-ChHwalJV.js";import"./SkeletonButton-Df6Re1Ke.js";import"./SkeletonInlineBlock-B--4faiZ.js";import"./SkeletonTable-CQAWTA0x.js";import"./SkeletonParagraph-BK2WyijI.js";import"./SynapseHomepageNavBar-E2ylMKjp.js";import"./SageResourcesPopover-B01PL65K.js";import"./Grid-Dx1aGtKO.js";import"./index-D3AHZnx8.js";import"./MenuItem-Ce4v9NmO.js";import"./UserBadge-Bqjav_Ws.js";import"./Card-DtMWtPD2.js";import"./Chip-BGU9tTve.js";import"./Slide-DldX5p6B.js";import"./InputAdornment-DD_Sxn2L.js";import"./listItemButtonClasses-BwnT3NXq.js";import"./Badge-Ctv-GPtE.js";import"./usePreviousProps-CqXvmQnd.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
