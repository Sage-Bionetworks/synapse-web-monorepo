import{U as L}from"./UpsetPlot-hezFFAYa.js";import{f as u}from"./index-BVd4JqmL.js";import"./jsx-runtime-BOssrIDV.js";import"./index-BXr5u63t.js";import"./iframe-jXusbjiN.js";import"./LargeButton-DCAAotZa.js";import"./DefaultPropsProvider-YuAh3bo4.js";import"./createTheme-Dkl7Y4yb.js";import"./Button-Dkr2nqwA.js";import"./createSimplePaletteValueFilter-XZnksDVV.js";import"./useTimeout-COW-I31o.js";import"./ButtonBase-CgqjwQZw.js";import"./useForkRef-B7f5jpRB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DHE3ItbA.js";import"./useFiles-Dk7Y_Nx5.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-iLcJVUdE.js";import"./OrientationBanner-BA69Y1B_.js";import"./index-ChgzdHEn.js";import"./spreadSx-CwcO6WA9.js";import"./react-BiBE7bay.js";import"./FullWidthAlert-1swh-oi6.js";import"./Alert-Dj-jhBZf.js";import"./useSlot-71x-NEBk.js";import"./createSvgIcon-BIqWz6KN.js";import"./Close-CsXX81aH.js";import"./IconButton-DppKuphb.js";import"./Paper-DmRNZxxk.js";import"./useTheme-BIdGBwOw.js";import"./useTheme-DncJ3SY5.js";import"./Stack-BVGU81rW.js";import"./extendSxProp-BNATOJDG.js";import"./getThemeProps-CygbOGhA.js";import"./Box-B1ywKeef.js";import"./AlertTitle-jQTaOtnM.js";import"./Typography-DHX5VFhU.js";import"./index-C-KGKi86.js";import"./ClickAwayListener-B-JuY7qH.js";import"./getReactElementRef-Dg_8_k5E.js";import"./index-Du3UB5VM.js";import"./index-Cws3gyQD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DHXcHxbb.js";import"./Tooltip-C4Ve-pRM.js";import"./index-BFRX0HOw.js";import"./useControlled-CcUhfYFU.js";import"./Popper-DSdT4H1W.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-Bl24eGam.js";import"./utils-Bjh2wWFO.js";import"./Link-DnPRzKJi.js";import"./Collapse-C70VOik0.js";import"./_baseUniq-vKA3Gk_K.js";import"./_Uint8Array-1QdDsNlj.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DYtMQQjs.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DSeeBTIW.js";import"./isEqual-BbZSPr7_.js";import"./merge-DBNXSsLA.js";import"./_initCloneObject-oBnhfAdD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZbPgA0i.js";import"./inputBaseClasses-DM6ptO9y.js";import"./calculateFriendlyFileSize-B3XNtTeU.js";import"./CheckCircleTwoTone-DLXzCQ85.js";import"./InfoTwoTone-DKzuQ3Gz.js";import"./useMutation-sYVm67BA.js";import"./dayjs.min-DPtZqfJ-.js";import"./chunk-AYJ5UCUI-BueI0DTQ.js";import"./cloneDeep-DIWeTv6i.js";import"./Skeleton-BrzN3685.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DR8EsIKE.js";import"./Backdrop-gfVrn1EU.js";import"./LinearProgress-kywY5A7u.js";import"./index-BHm2jKir.js";import"./index-CmLRlHUK.js";import"./index-CNx-A_Id.js";import"./const-Doag8klc.js";import"./index-BdkxJvB6.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
