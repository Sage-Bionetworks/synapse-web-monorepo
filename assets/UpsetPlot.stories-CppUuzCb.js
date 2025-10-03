import{U as L}from"./UpsetPlot-OzZH29HP.js";import{f as u}from"./index-B_VFCC8a.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-IC1VxDr7.js";import"./DefaultPropsProvider-BXgXJOYE.js";import"./createTheme-TuqmvCHd.js";import"./index-Rd2swjmm.js";import"./iframe-CXAxgruz.js";import"./Button-BbbnNSgV.js";import"./createSimplePaletteValueFilter-I39MDwlM.js";import"./useTimeout-B1Gaupyv.js";import"./ButtonBase-SlYjLBEH.js";import"./useForkRef-C6Hxgw1c.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DePpf9Xr.js";import"./useFiles-Ah-QMMVe.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-XsXCMBgO.js";import"./OrientationBanner-DfVgOy4M.js";import"./index-BWJnohk0.js";import"./spreadSx-CwcO6WA9.js";import"./react-BApqYDyB.js";import"./FullWidthAlert-BmqfxTfb.js";import"./Alert-CCZCxDnF.js";import"./useSlot-Dkzr42VA.js";import"./createSvgIcon-C9iQk-bv.js";import"./Close-DCDeVnbe.js";import"./IconButton-CyqRcr44.js";import"./Paper-BfdEPQLJ.js";import"./useTheme-COUAZuoX.js";import"./useTheme-D5J_Lubc.js";import"./Stack-BgMCCB8s.js";import"./useThemeProps-CsD4iJ62.js";import"./getThemeProps-C7aU0N0h.js";import"./extendSxProp-BEqNfaz4.js";import"./Box-C1rpSzmp.js";import"./AlertTitle-DigLp6pg.js";import"./Typography-BMdAKFRJ.js";import"./index-CNp3TF0s.js";import"./ClickAwayListener-BukZ-mWk.js";import"./getReactElementRef-C70_vEbO.js";import"./index-BnG4WIQw.js";import"./index-BdU_PVcS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-frQ6Hdr3.js";import"./Tooltip-Bodc1hDc.js";import"./index-eFiUvJZl.js";import"./useControlled-DV9JfbO_.js";import"./Popper-B_NbVk8A.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-xEUhumnM.js";import"./QueryClientProvider-CKp6Cdu0.js";import"./Link-DJSxCMVl.js";import"./Collapse-Djxal_Co.js";import"./_baseUniq-DPC7unBD.js";import"./_Uint8Array-DiPMYHJc.js";import"./isArray-BKjPFGFw.js";import"./_getTag-B97qJZKn.js";import"./isEqual-CTDb6a_A.js";import"./noop-DX6rZLP_.js";import"./merge-Bi0YVhuS.js";import"./_initCloneObject-Du3oUuAw.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dr4GrnsL.js";import"./inputBaseClasses-BUA8z3Qv.js";import"./calculateFriendlyFileSize-DFvfx4N-.js";import"./CheckCircleTwoTone-C7oNrQEJ.js";import"./InfoTwoTone-BlOTsixa.js";import"./useMutation-CCZv9b7z.js";import"./dayjs.min-HpAO55uO.js";import"./chunk-AYJ5UCUI-CQrmzzWS.js";import"./cloneDeep--SZltrec.js";import"./Skeleton-BgzeM125.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-9P7SsoST.js";import"./Backdrop-CXVt1Wd7.js";import"./LinearProgress-DQJkWatN.js";import"./index-Dsok7rDS.js";import"./index-DXei-qb4.js";import"./index-9U9v1fKy.js";import"./const-BP60AzNb.js";import"./index-DZyZcKg_.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
