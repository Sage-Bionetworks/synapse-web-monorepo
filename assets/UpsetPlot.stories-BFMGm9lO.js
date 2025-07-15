import{U as L}from"./UpsetPlot-BhiRWrQY.js";import{f as u}from"./index-B4EA5aKo.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DkNKbOii.js";import"./DefaultPropsProvider-BTOUfGRS.js";import"./createTheme-B91DJHrN.js";import"./index-kWfO1b8W.js";import"./iframe-By96TQWQ.js";import"./Button-CzXiqLg_.js";import"./createSimplePaletteValueFilter-KaRNHIe0.js";import"./useTimeout-BdUQTmjn.js";import"./ButtonBase-DIX3Cycn.js";import"./useForkRef-DBAE2GrT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-cSDlTyUq.js";import"./useFiles-XlYi__ia.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CevsBxut.js";import"./OrientationBanner-XjXkQFGf.js";import"./index-CUMi74ji.js";import"./spreadSx-CwcO6WA9.js";import"./react-DSBbWTc0.js";import"./FullWidthAlert-D7C_0Stn.js";import"./Alert-D-pb2H1j.js";import"./useSlot-ujAwTHqc.js";import"./createSvgIcon-Cp1oITzz.js";import"./Close-BdGznF6u.js";import"./IconButton-vAFrChUr.js";import"./Paper-ekV4xe_V.js";import"./useTheme-BMoMpada.js";import"./useTheme-DEV96GkA.js";import"./Stack-BhLVBw8q.js";import"./extendSxProp-DNcow1wX.js";import"./getThemeProps-DjcGU8Oi.js";import"./Box-slc6oXgZ.js";import"./AlertTitle-CxOeK-BY.js";import"./Typography-BV-cLTY-.js";import"./index-CriQJ39W.js";import"./ClickAwayListener-CUvB1OJE.js";import"./getReactElementRef-DKCtVBG6.js";import"./index-BwgFhjOU.js";import"./index-DC25QyMN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CJrCLzG9.js";import"./Tooltip-Bzrfh0ED.js";import"./index-BAEc8w3z.js";import"./useControlled-C7AUTfoO.js";import"./Popper-C9I_P9mN.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BSWJfU5w.js";import"./QueryClientProvider-BS4uGJ-4.js";import"./Link-Dd_Wytey.js";import"./Collapse-C1Jn_lEP.js";import"./_baseUniq-CiNswBH0.js";import"./_Uint8Array-DG-m6Jkd.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BXZkekwU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B21mZ_aF.js";import"./isEqual-qlM1PUl9.js";import"./merge-Ddn0WFBi.js";import"./_initCloneObject-C20PbAIW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cjqb-NKo.js";import"./inputBaseClasses-deewK7ko.js";import"./calculateFriendlyFileSize-CPTEi5e1.js";import"./CheckCircleTwoTone-Bt1CO-SL.js";import"./InfoTwoTone-BrocV6h_.js";import"./useMutation-C8ZiN1JX.js";import"./dayjs.min-B-dEJ4xI.js";import"./chunk-AYJ5UCUI-BzXwQl6l.js";import"./cloneDeep-B66VrETt.js";import"./Skeleton-C-fjOIbM.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-UwwbVBdL.js";import"./Backdrop-BrmJ7lND.js";import"./LinearProgress-COYmlzsp.js";import"./index-80mMEggo.js";import"./index-Li5jP2Ki.js";import"./index-BKdh-8SV.js";import"./const-BP60AzNb.js";import"./index-C0Vwgpx8.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
