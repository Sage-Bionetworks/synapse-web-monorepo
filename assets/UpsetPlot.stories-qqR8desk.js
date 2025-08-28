import{U as L}from"./UpsetPlot-C4EhFrkm.js";import{f as u}from"./index-Bi74rw9E.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BxLrB2q4.js";import"./DefaultPropsProvider-B_1_wKWC.js";import"./createTheme-Qw6dCODO.js";import"./index-CWpaGFK7.js";import"./iframe-CJwrIpof.js";import"./Button-CA46tzHk.js";import"./createSimplePaletteValueFilter-DNCeFqr7.js";import"./useTimeout-CzHT3KD_.js";import"./ButtonBase-Wr9y_zmM.js";import"./useForkRef-ByDnI1AI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C8YsOKf9.js";import"./useFiles-DO1cPBl7.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-BliToi0e.js";import"./OrientationBanner-DGX7LYY4.js";import"./index-BRBsISmc.js";import"./spreadSx-CwcO6WA9.js";import"./react-4i24zxDG.js";import"./FullWidthAlert-7dmevFvZ.js";import"./Alert-e1fdK64c.js";import"./useSlot-CS4KC0jU.js";import"./createSvgIcon-D1X3oUr7.js";import"./Close-Bw8m5Hef.js";import"./IconButton-Gs_sYVQS.js";import"./Paper-BVPD3mQe.js";import"./useTheme-DHciqbbk.js";import"./useTheme-6nf7h3Tc.js";import"./Stack-Bf8FV3-F.js";import"./extendSxProp-BByHy23N.js";import"./getThemeProps-CCMOZlfl.js";import"./Box-C-eGKuIR.js";import"./AlertTitle-CG-a6DqA.js";import"./Typography-B79vr9v9.js";import"./index-CMKHL7or.js";import"./ClickAwayListener-46oNtdkb.js";import"./getReactElementRef-86s1n294.js";import"./index-D6cMwY1N.js";import"./index-D2WEh5JI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CIJVMZUl.js";import"./Tooltip-D6q9sssE.js";import"./index-uY5dmQq2.js";import"./useControlled-VdZXMxh4.js";import"./Popper-Fyhhd020.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-DrawGXCF.js";import"./QueryClientProvider-CFTn6vB9.js";import"./Link-yQq2R-UK.js";import"./Collapse-BOJ3O8As.js";import"./_baseUniq-DB7Cxeo-.js";import"./_Uint8Array-B8CGF7rC.js";import"./isArray-BrJsc936.js";import"./_getTag-BOtS_nWm.js";import"./isEqual-pCpS_l18.js";import"./merge-D9QsSWfJ.js";import"./_initCloneObject-Br1VFpBs.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BBSHnXK7.js";import"./inputBaseClasses-DbIpK7Kh.js";import"./calculateFriendlyFileSize-B39fPYuC.js";import"./CheckCircleTwoTone-CxSYaKRq.js";import"./InfoTwoTone-CnjItO4h.js";import"./useMutation-Dbv4F8QA.js";import"./dayjs.min-DiMZjeZL.js";import"./chunk-AYJ5UCUI-CERoDU_H.js";import"./cloneDeep-h3S60Dr-.js";import"./Skeleton-NVnaak77.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DOg6xT_u.js";import"./Backdrop-D4RcT-8N.js";import"./LinearProgress-Cnrt-yUV.js";import"./index-CySTLxx4.js";import"./index-MFx96FWD.js";import"./index-D4b_RIs7.js";import"./const-BP60AzNb.js";import"./index-CaQPOyz0.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
