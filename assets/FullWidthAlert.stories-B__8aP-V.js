import{at as g,j as e,r as w}from"./iframe-CQAvee5F.js";import{S as v}from"./SynapseNavDrawer-BCacqrMy.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-Babau2bk.js";import"./useInfiniteQuery-Dh-acjx4.js";import"./useDownloadList-C-KHSRuM.js";import"./waitForAsyncResult-6UgCj3Ml.js";import"./CreateProjectModal-BntDjJHB.js";import"./ConfirmationDialog-ClzkjvZo.js";import"./DialogBase-A7SeZij4.js";import"./Close-BdW4XSEx.js";import"./HelpPopover-DL3O30BL.js";import"./MarkdownPopover-CxnxngRT.js";import"./LightTooltip-DUFjrAlt.js";import"./MarkdownSynapse-CHoFalek.js";import"./SkeletonButton-BbTQsPlY.js";import"./SkeletonInlineBlock-QfDnwJMw.js";import"./SkeletonTable-n8bsuBVZ.js";import"./SkeletonParagraph-BHKzvjmx.js";import"./SynapseHomepageNavBar-CVTg9tpV.js";import"./SageResourcesPopover-oUPIRZ8V.js";import"./Grid-BJFbT69z.js";import"./index-Cqst0OBx.js";import"./MenuItem-CHCA8JKh.js";import"./UserBadge-ChS5ZWfy.js";import"./Card-DLy0NJ-o.js";import"./Chip-yjRG6i6C.js";import"./Slide-BRgjDafd.js";import"./InputAdornment-D58XGx7V.js";import"./listItemButtonClasses-4LElYcsT.js";import"./Badge-1mEfD1s5.js";import"./usePreviousProps-wNUX2g6d.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
