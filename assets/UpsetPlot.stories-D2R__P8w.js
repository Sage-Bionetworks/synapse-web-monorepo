import{U as L}from"./UpsetPlot-Csdcmv_T.js";import{f as u}from"./index-DjKI1XNK.js";import"./jsx-runtime-jRxYWCwX.js";import"./index-2wQoqSko.js";import"./iframe-xHFrq_F7.js";import"./LargeButton-y3HMfms5.js";import"./DefaultPropsProvider-B8PV_5sS.js";import"./createTheme-CNfVkL0H.js";import"./Button-Buu_9ObU.js";import"./createSimplePaletteValueFilter-CuaYVmHN.js";import"./useTimeout-DFO7OOTS.js";import"./ButtonBase-BGHCXqvG.js";import"./useForkRef-DMvEYMis.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C0_0v47y.js";import"./useFiles-BvsKTpC9.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-CYbpNqdT.js";import"./OrientationBanner-Br5nTvCd.js";import"./index-B61ox3Gx.js";import"./spreadSx-CwcO6WA9.js";import"./react-DomoPTqD.js";import"./FullWidthAlert-DV2WW6p2.js";import"./Alert-Bw5q--Vv.js";import"./useSlot-BfLx_dOI.js";import"./createSvgIcon-B9-0rLwX.js";import"./Close-C1W94XMr.js";import"./IconButton-DHSMjmzi.js";import"./Paper-D4CfMZ_X.js";import"./useTheme-P2ktGu7N.js";import"./useTheme-ScBftXUZ.js";import"./Stack-fr08Gq8W.js";import"./extendSxProp-CVj7jJdy.js";import"./getThemeProps-CnB1RaPH.js";import"./Box-CFkFfEu6.js";import"./AlertTitle-HqYM7drA.js";import"./Typography-DV3DT36E.js";import"./index-BFzG-4ZV.js";import"./ClickAwayListener-Y9Lb_tSy.js";import"./getReactElementRef-BlC79LIf.js";import"./index-CGFHOidS.js";import"./index-BZkBlZdR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CX5cENy7.js";import"./Tooltip-Mh1fqoQC.js";import"./index-DEUTnh1D.js";import"./useControlled-CcplrN4J.js";import"./Popper-BDiYjOKN.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CRzB6f_r.js";import"./utils-D_wBfMna.js";import"./Link-6hsepPpX.js";import"./Collapse-B4sq3tJt.js";import"./_baseUniq-BVzMqi3s.js";import"./_Uint8Array-DJsLV1MS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DndHkETJ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CxyUzIgx.js";import"./isEqual-DmMMLn4B.js";import"./merge-BLyFTkJy.js";import"./_initCloneObject-CzREK7U6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bmxjpoc6.js";import"./inputBaseClasses-YkhN0Aa7.js";import"./calculateFriendlyFileSize-CZlcI_M7.js";import"./CheckCircleTwoTone-lp2UGx41.js";import"./InfoTwoTone-Dvj7YSLa.js";import"./useMutation-DX80x01_.js";import"./dayjs.min-DjYfhnJH.js";import"./chunk-AYJ5UCUI-D9w80p0W.js";import"./cloneDeep-CCsqOGsc.js";import"./Skeleton-b6FhVeVz.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CMoXlb3F.js";import"./Backdrop-DPWoqdYq.js";import"./LinearProgress-D3QwP3py.js";import"./index-DOg35LrU.js";import"./index-CXZMU0lY.js";import"./index-CKIYFztT.js";import"./const-Doag8klc.js";import"./index-CIfdIDmm.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
