import{ay as g,j as r,r as w}from"./iframe-DslgKmO_.js";import{S as v}from"./SynapseNavDrawer-CGBMx01B.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-Cu1LchBz.js";import"./useInfiniteQuery-DxxIkqas.js";import"./useDownloadList-CF45iTfw.js";import"./waitForAsyncResult-B3GGJxY9.js";import"./useUserBundle-tammJvdO.js";import"./useSuspenseQuery-x1rZi4HF.js";import"./CreateProjectModal-Dm51d4rG.js";import"./ConfirmationDialog-CWzD-n3R.js";import"./DialogBase-Ityd6EiB.js";import"./Close-3QTznoYW.js";import"./HelpPopover-D-66GZ4O.js";import"./MarkdownPopover-Efr0b0ny.js";import"./LightTooltip-DtnUKaEX.js";import"./MarkdownSynapse-BtLlVZBF.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonTable-B6rYfEE0.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./SynapseHomepageNavBar-YERA0_jG.js";import"./SageResourcesPopover-BWTbJiBX.js";import"./Grid-DPWZ7bDy.js";import"./index-CeAJJ3j5.js";import"./MenuItem-CTidO0-V.js";import"./UserBadge-BanEe0Rj.js";import"./Card-CiAcqMR5.js";import"./Chip-BUIb0Z0i.js";import"./Slide-DrBE8msl.js";import"./InputAdornment-B8fX64h3.js";import"./listItemButtonClasses-XKo5iVko.js";import"./Badge-zWhMSQqn.js";import"./usePreviousProps-D79KkPg-.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
