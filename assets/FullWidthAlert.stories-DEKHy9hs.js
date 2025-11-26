import{at as g,j as e,r as w}from"./iframe-DbV7x0Bc.js";import{S as v}from"./SynapseNavDrawer-BSN8CLQu.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-IcJdAb4M.js";import"./useInfiniteQuery-CQxVeuk5.js";import"./useDownloadList-DW9G_217.js";import"./waitForAsyncResult-CpQAJoNL.js";import"./CreateProjectModal-Cw1VwV88.js";import"./ConfirmationDialog-fMOwxCoC.js";import"./DialogBase-BD7SYBJ5.js";import"./Close--0rVQaHw.js";import"./HelpPopover-D60yTUPQ.js";import"./MarkdownPopover-CeZB9GVN.js";import"./LightTooltip-Djp-H0Gj.js";import"./MarkdownSynapse-jLoV8o0B.js";import"./SkeletonButton-CEdKSSw-.js";import"./SkeletonInlineBlock-DPkHUg7t.js";import"./SkeletonTable-D35PHSUs.js";import"./SkeletonParagraph-CtXDblG_.js";import"./SynapseHomepageNavBar-B9VGYmRE.js";import"./SageResourcesPopover-BITxdh_6.js";import"./Grid-C1yu_EgY.js";import"./index-D2Qrjv69.js";import"./MenuItem-tbPVUwvL.js";import"./UserBadge-CSeyrS-i.js";import"./Card-BlOhhd1x.js";import"./Chip-Df3eRAme.js";import"./Slide-D-rAIbeg.js";import"./InputAdornment-CD8h06zt.js";import"./listItemButtonClasses-B5QWTHx6.js";import"./Badge-DVD_8EcH.js";import"./usePreviousProps-Ce7xHsAY.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
