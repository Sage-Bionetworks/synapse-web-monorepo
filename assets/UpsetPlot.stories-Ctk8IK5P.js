import{U as L}from"./UpsetPlot-C5_mBWZW.js";import{f as u}from"./index-BkPfQNio.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BBj-VvJe.js";import"./DefaultPropsProvider-mrWzkTQJ.js";import"./createTheme-CE6qXHe9.js";import"./index-C9-TIdL_.js";import"./iframe-DeZrw8cL.js";import"./Button-DnYIz2mR.js";import"./createSimplePaletteValueFilter-Cua6TkTN.js";import"./useTimeout-B4nm8K8G.js";import"./ButtonBase-CL_IFWn3.js";import"./useForkRef-Cx9b2vUF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DX21bKx9.js";import"./useFiles-DfmUZ-4E.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-DBjjddIw.js";import"./OrientationBanner-VFV71Tjc.js";import"./index-BHmtFBB_.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ck9EPeEi.js";import"./FullWidthAlert-Bmh1NRie.js";import"./Alert-EAD1eTrF.js";import"./useSlot-DtPBphoa.js";import"./createSvgIcon-B8DyheYB.js";import"./Close-BrwXfVJ8.js";import"./IconButton-DNzR0rYH.js";import"./Paper-8UdBM9kL.js";import"./useTheme-pTqndlnn.js";import"./useTheme-CcEl__P7.js";import"./Stack-qqZTI9Mk.js";import"./extendSxProp-DYJ4qHcb.js";import"./getThemeProps-U5h5w87F.js";import"./Box-c1acJzBY.js";import"./AlertTitle-DrvONvNQ.js";import"./Typography-DFKsi_Yp.js";import"./index-DoRmc9IV.js";import"./ClickAwayListener-Csbn-psG.js";import"./getReactElementRef-CHn9vIIS.js";import"./index-BNzjogy-.js";import"./index-BlCl8FJn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CKjqUnz6.js";import"./Tooltip-aIej-TC0.js";import"./index-C4bFR0fr.js";import"./useControlled-CJ0jTomz.js";import"./Popper-CgflTmuC.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-B0zK9_y9.js";import"./QueryClientProvider-CrJTSCTY.js";import"./Link-dppmAxhW.js";import"./Collapse-Cj6ee3Yt.js";import"./_baseUniq-Bwu5nO20.js";import"./_Uint8Array-DJNgTM6y.js";import"./isArray-P9V5rfrS.js";import"./_getTag-B_GSssIH.js";import"./isEqual-CyfHpJRg.js";import"./merge-D2V9CcG9.js";import"./_initCloneObject-BuBhIP8E.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-qoxQnxF9.js";import"./inputBaseClasses-ktaLCHeI.js";import"./calculateFriendlyFileSize-DsdtZKta.js";import"./CheckCircleTwoTone-DCRdFQaj.js";import"./InfoTwoTone-COSNQhZA.js";import"./useMutation-igh3-1pD.js";import"./dayjs.min-bQ2v5w_u.js";import"./chunk-AYJ5UCUI-CcGUCHcD.js";import"./cloneDeep-DlSGhKsq.js";import"./Skeleton-zcL_PViR.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Df8Q3o2o.js";import"./Backdrop-IJOpZ84Q.js";import"./LinearProgress-Dvb2KGCe.js";import"./index-B0flN0KA.js";import"./index-Ba-A0N1R.js";import"./index-JmBCBnX6.js";import"./const-BP60AzNb.js";import"./index-LqR40kQA.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
