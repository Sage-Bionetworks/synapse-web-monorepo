import{ax as a,r as i,j as r}from"./iframe-BnuiMoX_.js";import{S as c}from"./SynapseNavDrawer-D6CcE_R4.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DqOKI0Q3.js";import"./useInfiniteQuery-BmLi_mNn.js";import"./useDownloadList-Djw_qbtB.js";import"./waitForAsyncResult-bGj7IFB6.js";import"./useUserBundle-MQOAsYfr.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-CnwnTvI0.js";import"./ConfirmationDialog-trKeO__a.js";import"./DialogBase-ZChlIQOE.js";import"./Close-DJ29z905.js";import"./HelpPopover-x83RozMQ.js";import"./MarkdownPopover-Cm0YthTk.js";import"./LightTooltip-DUGbboAh.js";import"./MarkdownSynapse-DkYu3x07.js";import"./SkeletonButton-CgoQvaBi.js";import"./SkeletonInlineBlock-DxCr7zGd.js";import"./SkeletonTable-B_UPgtXl.js";import"./SkeletonParagraph-BQZp8fCk.js";import"./RadioGroup-iS6x-pe0.js";import"./Radio-2zVdB3VL.js";import"./SwitchBase-FDevkp1d.js";import"./FormGroup-B5iNv033.js";import"./FormControlLabel-DGDrtWSS.js";import"./Chip-iaML2TUf.js";import"./SynapseHomepageNavBar-DSQ_9iZT.js";import"./SageResourcesPopover-Dr8UGgn9.js";import"./Grid-CqU-Fml2.js";import"./index-Jll9ObM-.js";import"./MenuItem-CJFsHkvO.js";import"./UserBadge-C04__7Q8.js";import"./Card-C1dzVdqQ.js";import"./searchDefaults-CfgatUXl.js";import"./Slide-Boc2jAjb.js";import"./InputAdornment-CRm3jirr.js";import"./listItemButtonClasses-B1OKIsgL.js";import"./Badge-BKKTXCSU.js";import"./usePreviousProps-DWT1NPvn.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
