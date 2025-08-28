import{U as L}from"./UpsetPlot-DDjpemMs.js";import{f as u}from"./index-0dGKByLS.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BjmiSrV-.js";import"./DefaultPropsProvider-CxJAbJPQ.js";import"./createTheme-BCP9qvjK.js";import"./index-DF7lk3Yl.js";import"./iframe-C_AUxWZn.js";import"./Button-BwtQDMEd.js";import"./createSimplePaletteValueFilter-CnNLxdoE.js";import"./useTimeout-B0lT4z1u.js";import"./ButtonBase-Bw4PF_aW.js";import"./useForkRef-1mKUaoDZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CX1nzmWd.js";import"./useFiles-D02evhEe.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-DYII5bnk.js";import"./OrientationBanner-m5y_RC38.js";import"./index-DC_9J_1p.js";import"./spreadSx-CwcO6WA9.js";import"./react-DvrjyBqV.js";import"./FullWidthAlert-DriynDve.js";import"./Alert-BRf044np.js";import"./useSlot-CMxSN5Bn.js";import"./createSvgIcon-CrJstOSp.js";import"./Close-BONs9ZBx.js";import"./IconButton-B2Nn3-Mn.js";import"./Paper-CO4yL9sw.js";import"./useTheme-ChuUKpJp.js";import"./useTheme-DO7hrzbR.js";import"./Stack-Dd0taEvK.js";import"./extendSxProp-SS-hjWkf.js";import"./getThemeProps-CTDhhYmo.js";import"./Box-CkXfPhrv.js";import"./AlertTitle-nSydvO7Q.js";import"./Typography-CyAicYx7.js";import"./index-Co94yF7T.js";import"./ClickAwayListener-CbbHW0hy.js";import"./getReactElementRef-DLB_inmL.js";import"./index-C3mlNnCy.js";import"./index-BtpDFBPo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-oRqweoyj.js";import"./Tooltip-D1DqUxpw.js";import"./index-DViHecYa.js";import"./useControlled-CsHT0ykU.js";import"./Popper-DigATxW6.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-DGY7BQDS.js";import"./QueryClientProvider-C10E43BM.js";import"./Link-DGDizL6J.js";import"./Collapse-BKJvd63-.js";import"./_baseUniq-BBUqvk3x.js";import"./_Uint8Array-4qu2iXy-.js";import"./isArray-DN8gbOlb.js";import"./_getTag-N-Fkp5RY.js";import"./isEqual-DLzrhfAb.js";import"./merge-Btpvv75M.js";import"./_initCloneObject-CAVenSk4.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-COicTICi.js";import"./inputBaseClasses-C3sSt4lC.js";import"./calculateFriendlyFileSize-BXAHpDS2.js";import"./CheckCircleTwoTone-DXold5XT.js";import"./InfoTwoTone-B1NTw75b.js";import"./useMutation-DY8-ifgv.js";import"./dayjs.min-Buta2DO-.js";import"./chunk-AYJ5UCUI-CS7CcU8n.js";import"./cloneDeep-8ISftUsd.js";import"./Skeleton-DhQvFQgP.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B0PiepE6.js";import"./Backdrop-C6x2XYLO.js";import"./LinearProgress-GBhQ-Zjh.js";import"./index-_xFZAYgk.js";import"./index-BVY71aU6.js";import"./index-BvoA0aF9.js";import"./const-BP60AzNb.js";import"./index-B-n24jKv.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
