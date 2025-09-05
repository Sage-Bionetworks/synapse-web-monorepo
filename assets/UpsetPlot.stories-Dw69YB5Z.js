import{U as L}from"./UpsetPlot-ByejgaJP.js";import{f as u}from"./index-ID_D9Tff.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D2y2wMdq.js";import"./DefaultPropsProvider-IA8PyDsh.js";import"./createTheme-uZyfii9J.js";import"./index-DC_F6LC3.js";import"./iframe-Dzq2XZAY.js";import"./Button-BF8aAEkM.js";import"./createSimplePaletteValueFilter-D03VuJDr.js";import"./useTimeout-CQQZ1-To.js";import"./ButtonBase-C7QCcZ9j.js";import"./useForkRef-D7I1FwBO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BmYsIlrJ.js";import"./useFiles-D_Jzezen.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-B24uwL7H.js";import"./OrientationBanner-Bzpnatw7.js";import"./index-5AUC81Rv.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAQWyoiE.js";import"./FullWidthAlert-RK7cjeY8.js";import"./Alert-BBtsbdxl.js";import"./useSlot-CMQ7l9V4.js";import"./createSvgIcon-fotE-8V0.js";import"./Close-9I607_XN.js";import"./IconButton-BOqOkpuw.js";import"./Paper-DqTB2d7e.js";import"./useTheme-BJnMudwe.js";import"./useTheme-Dbhdk_AW.js";import"./Stack-CsQgmpOy.js";import"./extendSxProp-Dubew6gA.js";import"./getThemeProps-CdHcYIvs.js";import"./Box-BMvETEd-.js";import"./AlertTitle-CF11nEVt.js";import"./Typography-6ljS8WSa.js";import"./index-5Vl8GNRO.js";import"./ClickAwayListener-cPSXo_7Q.js";import"./getReactElementRef-Dqx5Gd2m.js";import"./index-CxSdzjMe.js";import"./index-Cr3It6Nz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gIniXPfT.js";import"./Tooltip-K10xvHWr.js";import"./index-Cp1Xui9X.js";import"./useControlled-BHKoj0WG.js";import"./Popper-DzbGTkmd.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-CgX23BOz.js";import"./QueryClientProvider-BJ02iD0i.js";import"./Link-BfaPB7SL.js";import"./Collapse-Ca7dhEVy.js";import"./_baseUniq-9aYP-DvN.js";import"./_Uint8Array-Dl24TG1b.js";import"./isArray-DVqPlFSm.js";import"./_getTag-B8uRlY8z.js";import"./isEqual-Cx0fd_nO.js";import"./merge-CwTy9me0.js";import"./_initCloneObject-CVT5RH-2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-VmjN6dao.js";import"./inputBaseClasses-K2LQzToB.js";import"./calculateFriendlyFileSize-Gdm1D_jE.js";import"./CheckCircleTwoTone-BfTHwYaO.js";import"./InfoTwoTone-DdxWIabw.js";import"./useMutation-FhdIYqNP.js";import"./dayjs.min-Bv7VhKIm.js";import"./chunk-AYJ5UCUI-cJ-Mesdm.js";import"./cloneDeep-DZzAGQd1.js";import"./Skeleton-BGNF9a_J.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-ClEXZUo3.js";import"./Backdrop-CiZq_ViK.js";import"./LinearProgress-Dpv01EUt.js";import"./index-CaUC5J7k.js";import"./index-CScYXv8i.js";import"./index-D6k1c_w1.js";import"./const-BP60AzNb.js";import"./index-BOkUlbD4.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
