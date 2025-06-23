import{U as L}from"./UpsetPlot-BV0CUYiJ.js";import{f as u}from"./index-B25X7Z7X.js";import"./jsx-runtime-C2zdKJwt.js";import"./index-CVh1Ipa7.js";import"./iframe-DvA1At3T.js";import"./LargeButton-BLoWwpKX.js";import"./DefaultPropsProvider-UWqbWpxF.js";import"./createTheme-BWtMJkqk.js";import"./Button-CWLDo0aq.js";import"./createSimplePaletteValueFilter-DAe34k5M.js";import"./useTimeout-CQnJRQmv.js";import"./ButtonBase-RPLFf9rD.js";import"./useForkRef-9eN_inJs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BhFXqvhB.js";import"./useFiles-vwJDhcJW.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-DKhjtb2A.js";import"./OrientationBanner-DdeIw4R5.js";import"./index-DSNjHJYf.js";import"./spreadSx-CwcO6WA9.js";import"./react-BxEHnInM.js";import"./FullWidthAlert-XWywqNuH.js";import"./Alert-CUgd9TuU.js";import"./useSlot-DDPOHm6f.js";import"./createSvgIcon-Bgt5hS8C.js";import"./Close-DRddyT85.js";import"./IconButton-BvfnLvJn.js";import"./Paper-CyCmlL1Y.js";import"./useTheme-DbZeLE77.js";import"./useTheme-iqUFZMBT.js";import"./Stack-BaAbaV6L.js";import"./extendSxProp-B1oyFkfJ.js";import"./getThemeProps-CMN7RrnV.js";import"./Box-CMAchTxS.js";import"./AlertTitle-CJMCoaRf.js";import"./Typography-D2DkYKYV.js";import"./index-BFPJ1VZ0.js";import"./ClickAwayListener-Cgkgf3jo.js";import"./getReactElementRef-IPwxiBWh.js";import"./index-Bt-y4T2Z.js";import"./index-BnMdIwEL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Djp00MY2.js";import"./Tooltip-BWvRAt5V.js";import"./index-C7NuAW-E.js";import"./useControlled-D_aFISVB.js";import"./Popper-Dk-Zkxvi.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-BbzlL3Qp.js";import"./utils-DToYn1OR.js";import"./Link-C6Ym6MsW.js";import"./Collapse-rwS9aSTb.js";import"./_baseUniq-BzmPl_Sm.js";import"./_Uint8Array-4o0NZ71j.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D11HbiLa.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Fq-fPTon.js";import"./isEqual-eKG6CiW1.js";import"./merge-DKMVabw-.js";import"./_initCloneObject-LJZTQyZs.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DyZk-6A5.js";import"./inputBaseClasses-B3DlAxML.js";import"./calculateFriendlyFileSize-Dt7Ai019.js";import"./CheckCircleTwoTone-DvEV9_7H.js";import"./InfoTwoTone-D2bcAgsD.js";import"./useMutation-DszXITcc.js";import"./dayjs.min-C2Wj_Xdb.js";import"./chunk-AYJ5UCUI-CQxyT5Nz.js";import"./cloneDeep-BVNTYblI.js";import"./Skeleton-DTzjIlY_.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen--SRJqMVH.js";import"./Backdrop-CYw2cb3E.js";import"./LinearProgress-CtA3FFSW.js";import"./index-W0meeMpN.js";import"./index-BSuyUkdi.js";import"./index-vemaa4oZ.js";import"./const-Doag8klc.js";import"./index-DZ0FEUmj.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
