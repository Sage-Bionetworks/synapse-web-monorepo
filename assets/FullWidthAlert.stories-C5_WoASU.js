import{ay as g,j as e,r as w}from"./iframe-kh7i1csa.js";import{S as v}from"./SynapseNavDrawer-DEgnNL-z.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DKlZftXy.js";import"./useInfiniteQuery-DYbKlyxH.js";import"./useDownloadList-D2qxBtG8.js";import"./waitForAsyncResult-V4_ZeFtV.js";import"./CreateProjectModal-CYL6vLEf.js";import"./ConfirmationDialog-BNscjmOg.js";import"./DialogBase-BL1IBdld.js";import"./Close-Cx-5EQFG.js";import"./HelpPopover-BJBDK_g9.js";import"./MarkdownPopover-4Eys4uDE.js";import"./LightTooltip-CpgsJh3_.js";import"./MarkdownSynapse-BXo153sN.js";import"./SkeletonButton-B_CN37W2.js";import"./SkeletonInlineBlock-ClnumZW6.js";import"./SkeletonTable-BqcwQAxC.js";import"./SkeletonParagraph-BnqUYHvv.js";import"./SynapseHomepageNavBar-Cp1PwXaQ.js";import"./SageResourcesPopover-RtXZtUlZ.js";import"./Grid-nnrsqVv6.js";import"./index-BmXyVNEx.js";import"./MenuItem-CfQGt1HR.js";import"./UserBadge-CdRmIen3.js";import"./Card-CcySjyv2.js";import"./Chip-BOVRxSkP.js";import"./Slide-Ka8W1RBl.js";import"./InputAdornment-BAgkfdty.js";import"./listItemButtonClasses-CHWCFeWd.js";import"./Badge-D2zypvOl.js";import"./usePreviousProps-iOEW2BmJ.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
