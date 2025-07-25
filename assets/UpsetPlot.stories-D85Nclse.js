import{U as L}from"./UpsetPlot-2RTfmyAz.js";import{f as u}from"./index-nOnOjSCJ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BslOXkmT.js";import"./DefaultPropsProvider-O5C3Nb5V.js";import"./createTheme-CDEh_gyq.js";import"./index-DU4SLi9J.js";import"./iframe-Bfwj0iXb.js";import"./Button-DXmJT6ep.js";import"./createSimplePaletteValueFilter-_czc63Ld.js";import"./useTimeout-Cv6Xn-hD.js";import"./ButtonBase-DUpvGjcQ.js";import"./useForkRef-DDzWHa86.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BkyMLXJh.js";import"./useFiles-B9Ai-UlC.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BjoB8Yq8.js";import"./OrientationBanner-B-48TzxW.js";import"./index-CVNRqfdb.js";import"./spreadSx-CwcO6WA9.js";import"./react-CsB8eMO1.js";import"./FullWidthAlert-C4c4nrUq.js";import"./Alert-BOOSKKXC.js";import"./useSlot-M8QHKYsT.js";import"./createSvgIcon-KfFU4xlR.js";import"./Close-Bz5kL9hp.js";import"./IconButton-B6O4QuMS.js";import"./Paper-DzJ9zCwF.js";import"./useTheme-BOXwNS7p.js";import"./useTheme-DfTRQ5NP.js";import"./Stack-DtBxeKgf.js";import"./extendSxProp-BmoXLdEd.js";import"./getThemeProps-Ctvuhzed.js";import"./Box-G3UN5WwW.js";import"./AlertTitle-DwLbdHBw.js";import"./Typography-Dn0pzKpw.js";import"./index-DdQixD_e.js";import"./ClickAwayListener-CzTmjh7U.js";import"./getReactElementRef-D_-Z4SH1.js";import"./index-D5pYcz72.js";import"./index-BHG7DML_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-QqJL00_P.js";import"./Tooltip-ym9zZME9.js";import"./index-K-1dBNVW.js";import"./useControlled-CAL9XoXW.js";import"./Popper-DwzmlPr4.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-BfdwJsnD.js";import"./QueryClientProvider-CS6hpE-e.js";import"./Link-Bvdjd7Dg.js";import"./Collapse-D6PZnJm0.js";import"./_baseUniq-sYypte9g.js";import"./_Uint8Array-CcNYxfvW.js";import"./isArray-CREtuNeo.js";import"./_getTag-B-TVfm_w.js";import"./isEqual-D5Ef-xMe.js";import"./merge-vaAZnYBP.js";import"./_initCloneObject-Cs9xP4-p.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CTHLoFAw.js";import"./inputBaseClasses-BKOSJzOf.js";import"./calculateFriendlyFileSize-C72QSjRW.js";import"./CheckCircleTwoTone-Drn0uul7.js";import"./InfoTwoTone-DRCzNUzR.js";import"./useMutation-jBpFkcP6.js";import"./dayjs.min-yDFrPE4q.js";import"./chunk-AYJ5UCUI-BWRTzIku.js";import"./cloneDeep-BDS_U0xj.js";import"./Skeleton-BoH6z_QQ.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DuBnG1ky.js";import"./Backdrop-C0jjlwGp.js";import"./LinearProgress-CAmKb2MG.js";import"./index-3EzTHV96.js";import"./index-pzQb_LM_.js";import"./index-Bzm7CqsP.js";import"./const-BP60AzNb.js";import"./index-wpDTtuHu.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
