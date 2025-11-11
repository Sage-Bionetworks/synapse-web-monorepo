import{at as g,j as e,r as w}from"./iframe-eAL3LCN3.js";import{S as v}from"./SynapseNavDrawer-x_CLQqDw.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-B3dJ8uZe.js";import"./useInfiniteQuery-BIjxq0oU.js";import"./useDownloadList-c6a0a6ak.js";import"./waitForAsyncResult-DrTaKYVT.js";import"./CreateProjectModal-BuGpr8HQ.js";import"./ConfirmationDialog-BmYHNfkM.js";import"./DialogBase-VybCyXNM.js";import"./Close-B1d24Q-1.js";import"./HelpPopover-oNhZ2sNv.js";import"./MarkdownPopover-C79aMDza.js";import"./LightTooltip-B-34NBpO.js";import"./MarkdownSynapse-CpKA-VNQ.js";import"./SkeletonButton-aT1VkMB9.js";import"./SkeletonInlineBlock-04pSbxC0.js";import"./SkeletonTable-BgcTNkHb.js";import"./SkeletonParagraph-DUeQUQ73.js";import"./SynapseHomepageNavBar-C7HEltWA.js";import"./SageResourcesPopover-CVfKKsbq.js";import"./Grid-DjAh0WD2.js";import"./index-Dfyq_HAj.js";import"./MenuItem-BJhOgCUi.js";import"./UserBadge-ZP5JTHXX.js";import"./Card-BZPVWLl9.js";import"./Chip-BhAQmrv0.js";import"./Slide-KlhF848G.js";import"./InputAdornment-BcnpsIzg.js";import"./listItemButtonClasses-BbPpudDY.js";import"./Badge-zC_cEFMw.js";import"./usePreviousProps-C8PHFUeo.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
