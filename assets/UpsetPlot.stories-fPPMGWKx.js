import{U as L}from"./UpsetPlot-BBJKsvaZ.js";import{f as u}from"./index-BoTJOu7R.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DP9sfoNk.js";import"./DefaultPropsProvider-DR7_-YAs.js";import"./createTheme-BHAg5tEe.js";import"./index-0FUO4iVK.js";import"./iframe-DM38aeMQ.js";import"./Button-DwRl1m3f.js";import"./createSimplePaletteValueFilter-DERnL5M9.js";import"./useTimeout-ByWjq-eU.js";import"./ButtonBase-CcjRDjmt.js";import"./useForkRef-DxePPmVc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ByfLseIu.js";import"./useFiles-DqOED7Vm.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BthOpQLB.js";import"./OrientationBanner-xWDnb_8x.js";import"./index-CiGjdKGK.js";import"./spreadSx-CwcO6WA9.js";import"./react-C2d4DyXu.js";import"./FullWidthAlert-Cx03XuvY.js";import"./Alert-udWcAUQY.js";import"./useSlot-DZfTNSFS.js";import"./createSvgIcon-CfvJ11Oa.js";import"./Close-Cg62tY8L.js";import"./IconButton-_bwpt4ca.js";import"./Paper-lAHe8OpX.js";import"./useTheme-NzQR0i01.js";import"./useTheme-Bnf3h8G0.js";import"./Stack-CsZGKSJy.js";import"./extendSxProp-DoeCfCx7.js";import"./getThemeProps-CmMpLADq.js";import"./Box-DPFXD5kJ.js";import"./AlertTitle-BBIZ10VR.js";import"./Typography-B8zdMFE9.js";import"./index-Ozhlb9U6.js";import"./ClickAwayListener-BXtl8q7p.js";import"./getReactElementRef-DH0foITJ.js";import"./index-qN2NPw-a.js";import"./index-CGaPGV5L.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CYZ1JjRs.js";import"./Tooltip-CJb_CvWe.js";import"./index-BNBf6lAj.js";import"./useControlled-B6dAQYhR.js";import"./Popper-DOrV1LRN.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DEzStqmt.js";import"./QueryClientProvider-BV8zLBvL.js";import"./Link-NI2pPKYc.js";import"./Collapse-BbakI7R6.js";import"./_baseUniq-CwnmLVm2.js";import"./_Uint8Array-DEUqcpre.js";import"./isArray-DV5BwaHp.js";import"./_getTag-BlOI61fG.js";import"./isEqual-CoMwnfdJ.js";import"./merge-_TaKl8B5.js";import"./_initCloneObject-C2F5HBS3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C9uEJt8L.js";import"./inputBaseClasses-B4Lv6z-u.js";import"./calculateFriendlyFileSize-t9JGByLX.js";import"./CheckCircleTwoTone-DD06cB11.js";import"./InfoTwoTone-Dew1zR_M.js";import"./useMutation-B_FbfBom.js";import"./dayjs.min-REswNT-I.js";import"./chunk-AYJ5UCUI-QqhSiyQh.js";import"./cloneDeep-Ba2vXAv3.js";import"./Skeleton-D1xnNsuB.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-FKPaVxAH.js";import"./Backdrop-CGE6dyG4.js";import"./LinearProgress-cLbmiIoY.js";import"./index-CIiSx_Uf.js";import"./index-CdcUjX-t.js";import"./index-BA79Dmjk.js";import"./const-BP60AzNb.js";import"./index-DD3SBBMU.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
