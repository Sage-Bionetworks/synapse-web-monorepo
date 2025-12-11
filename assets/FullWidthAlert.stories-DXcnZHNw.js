import{ay as g,j as r,r as w}from"./iframe-DGqgB8og.js";import{S as v}from"./SynapseNavDrawer-Dm9uftu6.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-3iLExHC9.js";import"./useInfiniteQuery-CvHOf2NU.js";import"./useDownloadList-BflgT4YQ.js";import"./waitForAsyncResult-VArvAqyx.js";import"./useUserBundle-DaZ17bF_.js";import"./useSuspenseQuery-DgAqulHC.js";import"./CreateProjectModal-C3fzNIcV.js";import"./ConfirmationDialog-DuodJ_BP.js";import"./DialogBase-BdfEWFiQ.js";import"./Close-1BktUZ1s.js";import"./HelpPopover-D7QaDdbI.js";import"./MarkdownPopover-Baf-6UEB.js";import"./LightTooltip-CD7bmaAv.js";import"./MarkdownSynapse-DybE5CEs.js";import"./SkeletonButton-VHDypD6K.js";import"./SkeletonInlineBlock-CDJCDGy_.js";import"./SkeletonTable-B050jOXg.js";import"./SkeletonParagraph-_skZGHOU.js";import"./SynapseHomepageNavBar-CyiMhQnk.js";import"./SageResourcesPopover-wp0X1YBo.js";import"./Grid-s7cBGH0l.js";import"./index-CX9m2Res.js";import"./MenuItem-ClmHPDmJ.js";import"./UserBadge-BsFNS6_M.js";import"./Card-C9DQJ7Ku.js";import"./Chip-C9fzpOls.js";import"./Slide-CGxDqdJ_.js";import"./InputAdornment-pKurmRqd.js";import"./listItemButtonClasses-CEGYmnUZ.js";import"./Badge-CW5ADcE8.js";import"./usePreviousProps-Bgsqcx8u.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Z=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,Z as __namedExportsOrder,Y as default};
