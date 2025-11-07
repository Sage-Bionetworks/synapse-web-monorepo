import{at as g,j as e,r as w}from"./iframe-B4CHAk6x.js";import{S as v}from"./SynapseNavDrawer-H8-jcgCZ.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-r-m_L-Nj.js";import"./useInfiniteQuery-BfVD3mCM.js";import"./useDownloadList-CC96xPsN.js";import"./waitForAsyncResult-CXBmhk4m.js";import"./CreateProjectModal-B9132N9y.js";import"./ConfirmationDialog-DfKypV0q.js";import"./DialogBase-iAyUtvLT.js";import"./Close-DqUoeWnG.js";import"./HelpPopover-Dkch2fNl.js";import"./MarkdownPopover-Cr665fP1.js";import"./LightTooltip-CSn5B8sG.js";import"./MarkdownSynapse-BVqNsxRc.js";import"./SkeletonButton-CPwz8mIe.js";import"./SkeletonInlineBlock-DNU7D5U5.js";import"./SkeletonTable-RSxhuQlc.js";import"./SkeletonParagraph-DDHYucUN.js";import"./SynapseHomepageNavBar-CwtbnByi.js";import"./SageResourcesPopover-Fg68QXc0.js";import"./Grid-CfVXHtUY.js";import"./index-E3ZsUzEa.js";import"./MenuItem-lGKzud5I.js";import"./UserBadge-CxJlSlvP.js";import"./Card-BXYY888f.js";import"./Chip-D5KlvdWr.js";import"./Slide-BxCDWr47.js";import"./InputAdornment-FB8TLj_W.js";import"./listItemButtonClasses-jgplJjM1.js";import"./Badge-mSi6JwIw.js";import"./usePreviousProps-B6lXH9VI.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
