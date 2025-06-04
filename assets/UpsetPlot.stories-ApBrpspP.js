import{U as L}from"./UpsetPlot-B5WH697X.js";import{f as u}from"./index-BOjUT36h.js";import"./jsx-runtime-CRy6x3sP.js";import"./index-CE2Ac4IV.js";import"./iframe-BdAv9r7b.js";import"./LargeButton-Cno5IfrI.js";import"./DefaultPropsProvider-_g6l0FJe.js";import"./createTheme-Chr0Mdmk.js";import"./Button-DG4g__Z5.js";import"./ButtonBase-D1lRUUMa.js";import"./useTimeout-CBH_whYp.js";import"./TransitionGroupContext-CxN-DzGm.js";import"./useForkRef-C6Z4Jw8F.js";import"./useIsFocusVisible-dvxC9prE.js";import"./useEventCallback-B2yVaD7P.js";import"./useFiles-Cxf8eV4n.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-Dr3_l-La.js";import"./OrientationBanner-CJcNE3jz.js";import"./index-33x153AN.js";import"./spreadSx-CwcO6WA9.js";import"./react-BGcvK65e.js";import"./FullWidthAlert-DcvBOpAA.js";import"./Alert-B2s1bC-M.js";import"./resolveComponentProps-CP6vIIt2.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CiHFREdi.js";import"./Close-BIDKcCyq.js";import"./IconButton-Df9li5yN.js";import"./Paper-BO3sHqW8.js";import"./Stack-N50kn1Mv.js";import"./getThemeProps-BS_qL9ir.js";import"./useTheme-XiVtr3LS.js";import"./Box-etwwWi4O.js";import"./AlertTitle-DpdAxaYw.js";import"./Typography-cABtXJa_.js";import"./useTheme-DiZnRNE7.js";import"./Grow-DjIVuFVR.js";import"./index-e1WoLxJ7.js";import"./utils-BbQ6ehAh.js";import"./ClickAwayListener-Cku9OPRg.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CSpbyYgv.js";import"./index-D1UKly7L.js";import"./useControlled-DkdtTMBP.js";import"./useId-BRVnYYpi.js";import"./Popper-BLUMdNSt.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-CHFprEsD.js";import"./utils-DzX4tJbb.js";import"./Link-CbuyVXAA.js";import"./Collapse-DQAQjUwZ.js";import"./isNil-shTrIGGc.js";import"./_Uint8Array-B9mZlz1W.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BPkWATOE.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CRCrmKl4.js";import"./_getTag-DPXvVhQY.js";import"./tinycolor-Begke6kS.js";import"./Fade-BePaFpCm.js";import"./Skeleton-D2sKrEc4.js";import"./inputBaseClasses-CzYtpewL.js";import"./calculateFriendlyFileSize-6zAl83cW.js";import"./CheckCircleTwoTone-t841N9sD.js";import"./InfoTwoTone-ClHbIujv.js";import"./useMutation-Cdlk9RaF.js";import"./isEqual-_ddOeoH0.js";import"./dayjs.min-KU4kcmn5.js";import"./chunk-AYJ5UCUI-Bsd4FnUA.js";import"./cloneDeep-C8UhJl5n.js";import"./_initCloneObject-BYZKyK7O.js";import"./merge-Be5BfqC_.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B-sF4Vvf.js";import"./Backdrop-BiH4YTul.js";import"./LinearProgress-DT084dyS.js";import"./index-CP12T5s3.js";import"./index-CI8n5EU1.js";import"./const-Doag8klc.js";import"./index-CUTfQsT8.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
