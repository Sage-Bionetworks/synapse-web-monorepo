import{U as L}from"./UpsetPlot-pYHAYyta.js";import{f as u}from"./index-Bvcr85gZ.js";import"./jsx-runtime-ClaIEnyC.js";import"./index-DDcWLDIs.js";import"./iframe-kBzc5I9X.js";import"./LargeButton-CjIvhmQw.js";import"./DefaultPropsProvider-CBm7IyyT.js";import"./createTheme-Dz19H-VC.js";import"./Button-Nshi5qab.js";import"./createSimplePaletteValueFilter-DmE4WHhK.js";import"./useTimeout-DHCBaXHR.js";import"./ButtonBase-BYK1_kWt.js";import"./useForkRef-Z40z0sir.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BYEHzl82.js";import"./useFiles-BeI6iI9g.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-BY4t6a2L.js";import"./OrientationBanner-Bdx8CY0T.js";import"./index-cElvOhz6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BTz_mwGW.js";import"./FullWidthAlert-CSZuQmS5.js";import"./Alert-Cyec8PI2.js";import"./useSlot-33DlPPR_.js";import"./createSvgIcon-VEETglUU.js";import"./Close-DoDF2tG3.js";import"./IconButton-CqSdoNRj.js";import"./Paper-Bh1XizBi.js";import"./useTheme-jlfvOgKu.js";import"./useTheme-Do79h7sS.js";import"./Stack-KyJRB_fW.js";import"./extendSxProp-DLs20JVr.js";import"./getThemeProps-Bvx1WS8M.js";import"./Box-BfhIar-2.js";import"./AlertTitle-unmm4ajU.js";import"./Typography-s2pUz9cp.js";import"./index-CjWf20OR.js";import"./ClickAwayListener-BzomMqvC.js";import"./getReactElementRef-DYS2DWE7.js";import"./index-DYdpSk8F.js";import"./index-Bx27OGJb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C1D-JV1-.js";import"./Tooltip-DbizeQFz.js";import"./index-DPM8awAq.js";import"./useControlled-BX60-H1c.js";import"./Popper-CgB6h7RW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-BJB0MTmQ.js";import"./utils-CxwOnRZ-.js";import"./Link-ByfBNOGt.js";import"./Collapse-TBeMVRQ6.js";import"./_baseUniq-CRkQa94I.js";import"./_Uint8Array-DGArT5vS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BZ4BM3gL.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BwIYpIa5.js";import"./isEqual-URzIznFL.js";import"./merge-C0xFbuZc.js";import"./_initCloneObject-CfxBNJQU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZtCs22T.js";import"./inputBaseClasses-COhNe2x1.js";import"./calculateFriendlyFileSize-CV5dom1H.js";import"./CheckCircleTwoTone-DJLaUVjb.js";import"./InfoTwoTone-BmPAjTNP.js";import"./useMutation-CnYEb0-_.js";import"./dayjs.min-CvLX7WpR.js";import"./chunk-AYJ5UCUI-BSvTyutC.js";import"./cloneDeep-ChDPNWWl.js";import"./Skeleton-BRSgJ3lO.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DhWbxZSX.js";import"./Backdrop-Dqdd7GSP.js";import"./LinearProgress-BilphbAG.js";import"./index-CtJifO36.js";import"./index-DibU92fP.js";import"./index-OTagt6Y3.js";import"./const-Doag8klc.js";import"./index-mSQo0Pfe.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
