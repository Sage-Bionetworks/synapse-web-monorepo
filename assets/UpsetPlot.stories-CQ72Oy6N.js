import{U as L}from"./UpsetPlot-DVpHi6mg.js";import{f as u}from"./index-CkvdPwmO.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BKTOd5mh.js";import"./DefaultPropsProvider---V3OlnO.js";import"./createTheme-CCW9jeh0.js";import"./index-DqVY_MdG.js";import"./iframe-B5rs55Pd.js";import"./Button-Dq-oY-14.js";import"./createSimplePaletteValueFilter-DMImf7ZH.js";import"./useTimeout-Cn7Uzbmj.js";import"./ButtonBase-uwFg90Zi.js";import"./useForkRef-BjME3TBq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-_VcLKcI3.js";import"./useFiles-Beh68O0r.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-D0NSmgCZ.js";import"./OrientationBanner-BZ8oNh3t.js";import"./index-BBkAb27i.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cy3MuSEQ.js";import"./FullWidthAlert-BtCkhzZ3.js";import"./Alert-BKYnRrQJ.js";import"./useSlot-HxkH3zom.js";import"./createSvgIcon-excwm1Bq.js";import"./Close-L3mo_2vy.js";import"./IconButton-D6h92Nv_.js";import"./Paper-ByAOIlTc.js";import"./useTheme-BQ11NupA.js";import"./useTheme-CAAyb6Hf.js";import"./Stack-Dz_8zDqt.js";import"./extendSxProp-eoSEBB6W.js";import"./getThemeProps-BvRhKV-H.js";import"./Box-O9YaUbMX.js";import"./AlertTitle-D8M-AeO7.js";import"./Typography-CmzLS_3x.js";import"./index-Cm_4ILsu.js";import"./ClickAwayListener-D_fSXknu.js";import"./getReactElementRef-BHEdfli1.js";import"./index-wGYHSRzj.js";import"./index-CZaeG_Zw.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-amcfaYIw.js";import"./Tooltip-BfyIksiy.js";import"./index-EjTZ2IHQ.js";import"./useControlled-CCY7r0wx.js";import"./Popper-YRgzSLhl.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-u57ZdOBo.js";import"./QueryClientProvider-D1Z109eC.js";import"./Link-CZH2FWuL.js";import"./Collapse-CTNMUOeL.js";import"./_baseUniq-5JOGYzKc.js";import"./_Uint8Array-DVWjLwzM.js";import"./isArray-BtIqvJez.js";import"./_getTag-NbEUeoAA.js";import"./isEqual-DD744pPA.js";import"./merge-B8auVx-M.js";import"./_initCloneObject-BBfrylM9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DJjZuyOW.js";import"./inputBaseClasses-C-wk8k42.js";import"./calculateFriendlyFileSize-DOc3ApXu.js";import"./CheckCircleTwoTone-BjPNSBnS.js";import"./InfoTwoTone-C06WRRzI.js";import"./useMutation-DdOlkJWg.js";import"./dayjs.min-CVRkaDCo.js";import"./chunk-AYJ5UCUI-CXz_weJf.js";import"./cloneDeep-cgBlVPgb.js";import"./Skeleton-CFdSDccd.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BupkQhtP.js";import"./Backdrop-B-qvJ3JW.js";import"./LinearProgress-ClABNLFt.js";import"./index-TT_Pqa3F.js";import"./index-CkyedG_l.js";import"./index-Ckyr2Gkn.js";import"./const-BP60AzNb.js";import"./index-CUM8pKu4.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
