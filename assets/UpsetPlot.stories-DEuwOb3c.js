import{U as L}from"./UpsetPlot-ZG-mtDus.js";import{f as u}from"./index-C6asW7MW.js";import"./jsx-runtime-C3ogRbLI.js";import"./index-7Bqgw_Nk.js";import"./iframe-76Ft5xlu.js";import"./LargeButton-Ds1ilCPL.js";import"./DefaultPropsProvider-DjwvSCQ6.js";import"./createTheme-DZnemi5A.js";import"./Button-DPTABYes.js";import"./createSimplePaletteValueFilter-B5Afh-Cr.js";import"./useTimeout-CrYJWRws.js";import"./ButtonBase-IClCv5pr.js";import"./useForkRef-0c5Xled9.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BKEAHSP2.js";import"./useFiles-Dm5G10cS.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-Cu1_hkM-.js";import"./OrientationBanner-CU3A5aiX.js";import"./index-CSuriLJp.js";import"./spreadSx-CwcO6WA9.js";import"./react-CqKh3AxL.js";import"./FullWidthAlert-DPZhA9eJ.js";import"./Alert-GmDE_fQh.js";import"./useSlot-_DOKpZQU.js";import"./createSvgIcon-D0sXf-9N.js";import"./Close-DHdhE8Ij.js";import"./IconButton-7GiAwj0K.js";import"./Paper-D1p4MEKu.js";import"./useTheme-CfhzM8OT.js";import"./useTheme-DX10MvBa.js";import"./Stack-Bsk1SXWK.js";import"./extendSxProp-TmA7a6n0.js";import"./getThemeProps-ltRrQ4k_.js";import"./Box-TXIhPUVR.js";import"./AlertTitle-BFYluwcq.js";import"./Typography-Di-Dztpm.js";import"./index-7Er0euq9.js";import"./ClickAwayListener-DDZ5zP33.js";import"./getReactElementRef-C5JhnwkH.js";import"./index-COejetYF.js";import"./index-DVpd846o.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-5HnAqb89.js";import"./Tooltip-CzwSX8Xn.js";import"./index-Cn3a4A7j.js";import"./useControlled-BIY0s71L.js";import"./Popper-B_IiIxz5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-BYlql_kZ.js";import"./utils-BrMZ7D3t.js";import"./Link-BdOeldiG.js";import"./Collapse-pdvdDRED.js";import"./_baseUniq-bm2RQmM0.js";import"./_Uint8Array-D5eLjQqb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-rpww-nrg.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CliP6LJJ.js";import"./isEqual-h6k8NwMA.js";import"./merge-CnjsetUv.js";import"./_initCloneObject-DGLMpSFd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DYV9CmU4.js";import"./inputBaseClasses-D-axTxXE.js";import"./calculateFriendlyFileSize-Yd1LXqV5.js";import"./CheckCircleTwoTone-D3Fvz0TX.js";import"./InfoTwoTone-CIGZbw3d.js";import"./useMutation-DHWjdRbY.js";import"./dayjs.min-B6l9Knyo.js";import"./chunk-AYJ5UCUI-BkHYh9MM.js";import"./cloneDeep-CUx7sbYF.js";import"./Skeleton-DftmuptQ.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dhj_L4mr.js";import"./Backdrop-dhpRYX13.js";import"./LinearProgress-DZXZWjg7.js";import"./index-DK_3Ipvl.js";import"./index-CnNDQFXI.js";import"./index-CCqGtFx7.js";import"./const-Doag8klc.js";import"./index-DOJoXbVh.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
