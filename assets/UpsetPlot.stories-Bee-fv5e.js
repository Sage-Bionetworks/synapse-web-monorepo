import{U as L}from"./UpsetPlot-BzC9R1hw.js";import{f as u}from"./index-Cdvs3c0U.js";import"./jsx-runtime-NVCZr_ns.js";import"./index-DqXgXlNK.js";import"./iframe-DkYBZzGH.js";import"./LargeButton-f7-9Eij4.js";import"./DefaultPropsProvider-DSM959ax.js";import"./createTheme-BuSDQGd8.js";import"./Button-CPXybp1H.js";import"./createSimplePaletteValueFilter-DnNpxDEw.js";import"./useTimeout-C22MGN7f.js";import"./ButtonBase-Cq46nDHL.js";import"./useForkRef-BCFgqSEg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DdAc_82n.js";import"./useFiles-DDO6EsJb.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CFVW9swV.js";import"./OrientationBanner-GuCD8r9s.js";import"./index-D-YRv47L.js";import"./spreadSx-CwcO6WA9.js";import"./react-kWxIu2q3.js";import"./FullWidthAlert-SXopet03.js";import"./Alert-L60c6DeB.js";import"./useSlot-Dl-E1NKa.js";import"./createSvgIcon-DD8UFdwY.js";import"./Close-BnByskHa.js";import"./IconButton-BGCozIdr.js";import"./Paper-DyXeEzRr.js";import"./useTheme-DKNiAsNc.js";import"./useTheme-DsH3VvJS.js";import"./Stack-KzgjgJbB.js";import"./extendSxProp-Cz2i_y6N.js";import"./getThemeProps-BfclNv8W.js";import"./Box--kKzkLBx.js";import"./AlertTitle-VXyF7-Q_.js";import"./Typography--U5fTk5p.js";import"./index-DZa2k1uQ.js";import"./ClickAwayListener-C8fzxYhd.js";import"./getReactElementRef-C1iBUGYO.js";import"./index-Tn-jAIgy.js";import"./index-DDsT1HKv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BpQSKb2P.js";import"./Tooltip-Blx6qlB6.js";import"./index-ebbK8OCN.js";import"./useControlled-CNW55rLB.js";import"./Popper-SeFOBi_H.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BAB9f2Ce.js";import"./utils-Bzp-b4VF.js";import"./Link-el_Jwsa5.js";import"./Collapse-CF1_ITFF.js";import"./_baseUniq-CkI7V0Bo.js";import"./_Uint8Array-Dzb2UzT5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Brborpti.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bn-u_oee.js";import"./isEqual-Bqge3gno.js";import"./merge-DaqGySnc.js";import"./_initCloneObject-B7HHl-Tf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DiLLBe5b.js";import"./inputBaseClasses-CCsmcbtl.js";import"./calculateFriendlyFileSize-DF2prR01.js";import"./CheckCircleTwoTone-Ctxs6cbR.js";import"./InfoTwoTone-CGHOYaGD.js";import"./useMutation-4T6MwN1T.js";import"./dayjs.min-DrOfxkxa.js";import"./chunk-AYJ5UCUI-D1eVrG0s.js";import"./cloneDeep-B9n5QnHZ.js";import"./Skeleton-C3ReD1Ow.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C40qwZOc.js";import"./Backdrop-D9vNN8uE.js";import"./LinearProgress-BO0Yo8Hg.js";import"./index-D8b4Izye.js";import"./index-C8FzwNZn.js";import"./index-BWDD8cu0.js";import"./const-Doag8klc.js";import"./index-C1jh7uN7.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
