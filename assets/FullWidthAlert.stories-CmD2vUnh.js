import{at as g,j as e,r as w}from"./iframe-Zu8RvZUL.js";import{S as v}from"./SynapseNavDrawer-C-oAbKUR.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-BVop7Ud6.js";import"./useInfiniteQuery-DY2EkPTt.js";import"./useDownloadList-BbS0F4XD.js";import"./waitForAsyncResult-SpHtqb6W.js";import"./CreateProjectModal-DNNRCSvW.js";import"./ConfirmationDialog-DWaYymem.js";import"./DialogBase-D0lW8KgR.js";import"./Close-Ce4QSXM9.js";import"./HelpPopover-DTUJNc5J.js";import"./MarkdownPopover-CDbCCKmS.js";import"./LightTooltip-3uyB0mdk.js";import"./MarkdownSynapse-Bf4DcIpi.js";import"./SkeletonButton-WXJ0zPic.js";import"./SkeletonInlineBlock-CowlHzP_.js";import"./SkeletonTable-CPpj76Kj.js";import"./SkeletonParagraph-DoX1NVXB.js";import"./SynapseHomepageNavBar-D0arUA05.js";import"./SageResourcesPopover-BK0jOM1e.js";import"./Grid-_ErRMDJp.js";import"./index-C-A1emnN.js";import"./MenuItem-DJ5K5GB8.js";import"./UserBadge-BWB7RQzA.js";import"./Card-6xQl6A3R.js";import"./Chip-CUvuriGX.js";import"./Slide-BE9eTcHn.js";import"./InputAdornment-fXG0GIPB.js";import"./listItemButtonClasses-BSHcDgpS.js";import"./Badge-C5G9pOE5.js";import"./usePreviousProps-CxbZOgZo.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
