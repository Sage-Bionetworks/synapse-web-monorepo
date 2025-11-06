import{at as g,j as e,r as w}from"./iframe-ynK1h1ZQ.js";import{S as v}from"./SynapseNavDrawer-BCYTxy42.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-ZCqDgrZf.js";import"./useInfiniteQuery-C_WgtIFm.js";import"./useDownloadList-Dttpaz3z.js";import"./waitForAsyncResult-D84rOecf.js";import"./CreateProjectModal-CdJdveWi.js";import"./ConfirmationDialog-_5j4EqxQ.js";import"./DialogBase-04kg5s93.js";import"./Close-BsDzgrCN.js";import"./HelpPopover-DR5Q4c37.js";import"./MarkdownPopover-Dyxx0IQ0.js";import"./LightTooltip-D_YZpsMa.js";import"./MarkdownSynapse-Cg823f1k.js";import"./SkeletonButton-Bwr03Ql7.js";import"./SkeletonInlineBlock-C3nmwKQa.js";import"./SkeletonTable-CyuXTNTX.js";import"./SkeletonParagraph-DikrQ7Cm.js";import"./SynapseHomepageNavBar-T3brWfHv.js";import"./SageResourcesPopover-CuqAoLtv.js";import"./Grid-BiX0S-HB.js";import"./index-B5clCFJM.js";import"./MenuItem-AKaHxYJT.js";import"./UserBadge-Czj3y833.js";import"./Card-BdM9B7UJ.js";import"./Chip-9C2a3vCF.js";import"./Slide-eFi3MyNu.js";import"./InputAdornment-BwhahNHn.js";import"./listItemButtonClasses-BkfcQ6Hr.js";import"./Badge-C6bQx4Ns.js";import"./usePreviousProps-CqtFs6TL.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
