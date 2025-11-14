import{at as g,j as e,r as w}from"./iframe-BnETViYe.js";import{S as v}from"./SynapseNavDrawer-UOjBhnF2.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CrFzyZcE.js";import"./useInfiniteQuery-C73-i-7k.js";import"./useDownloadList-EZn3WEdF.js";import"./waitForAsyncResult-DNzRqu8v.js";import"./CreateProjectModal-BagcTvOD.js";import"./ConfirmationDialog-BIpXV5M8.js";import"./DialogBase-QlbSbh1_.js";import"./Close-rvN_S8Vv.js";import"./HelpPopover-DK9Tpj6o.js";import"./MarkdownPopover-BvzvlMrF.js";import"./LightTooltip-j7NzfZhS.js";import"./MarkdownSynapse-Bip7xTA3.js";import"./SkeletonButton-DC6QAxqn.js";import"./SkeletonInlineBlock-CvdUTVnt.js";import"./SkeletonTable-C-IptaAB.js";import"./SkeletonParagraph-Cc0HWYg7.js";import"./SynapseHomepageNavBar-DxwL1uh9.js";import"./SageResourcesPopover-DxFzdq6G.js";import"./Grid-Bez3ZFd_.js";import"./index-DAJANqDt.js";import"./MenuItem-BuXD1mJM.js";import"./UserBadge-65z_ELHv.js";import"./Card-DOF_qhrk.js";import"./Chip-7gWmkBqZ.js";import"./Slide-D5y2mTQB.js";import"./InputAdornment-BD2o1EZI.js";import"./listItemButtonClasses-BfL6-Aoa.js";import"./Badge-C1EiYxKp.js";import"./usePreviousProps-DBnnk-PV.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
