import{at as g,j as e,r as w}from"./iframe-DIMEjUPI.js";import{S as v}from"./SynapseNavDrawer-BhEXyL78.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-T5_4i-nq.js";import"./useInfiniteQuery-B3QbwDE7.js";import"./useDownloadList-CkTPkPRn.js";import"./waitForAsyncResult-CzVQMPp-.js";import"./CreateProjectModal-DAQf-tJF.js";import"./ConfirmationDialog-B1FlComz.js";import"./DialogBase-BDHvanOc.js";import"./Close-C8OV6fZk.js";import"./HelpPopover-CaBwlcgk.js";import"./MarkdownPopover-DzSTgYwR.js";import"./LightTooltip-Cm8af4zC.js";import"./MarkdownSynapse-Bhx1KV-s.js";import"./SkeletonButton-ojrK8vH7.js";import"./SkeletonInlineBlock-Dg59gf8O.js";import"./SkeletonTable-DUsfALmI.js";import"./SkeletonParagraph-DE5PaDJj.js";import"./SynapseHomepageNavBar-DKLiQqwl.js";import"./SageResourcesPopover-Db_ETQkT.js";import"./Grid-yk5XGKmz.js";import"./index-DFMTwDmD.js";import"./MenuItem-BkjCu_eC.js";import"./UserBadge-ewXLXfpL.js";import"./Card-DixV1MtV.js";import"./Chip-ZO2rUNAI.js";import"./Slide-Da2DqGwz.js";import"./InputAdornment-CkQHZRPZ.js";import"./listItemButtonClasses-y5Z8JbLJ.js";import"./Badge-DuthT5Ot.js";import"./usePreviousProps-8ZeCNWQS.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
