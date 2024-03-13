import{A as j}from"./AccessRequirementRelatedProjectsList-C1D1CofW.js";import{M as P}from"./getEndpoint-CjoHA800.js";import{l as I}from"./index-B5BH-cye.js";import{c as g}from"./ApplicationSessionManager-CZGL6_Dw.js";import"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OrientationBanner-_f-Wk-V6.js";import"./FullWidthAlert-jMrvQqfp.js";import"./Alert-jLvJNeQC.js";import"./createTheme-2XtGYoE4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-DMoHWj5j.js";import"./styled-CPWjInoX.js";import"./mergeSlotProps-ih6DGlm4.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BSLA1zlB.js";import"./createSvgIcon-ClnqzT54.js";import"./Paper-DYLu205z.js";import"./IconButton-DUzhqGqo.js";import"./ButtonBase-xB_9igmm.js";import"./TransitionGroupContext-B1FFUpIO.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useIsFocusVisible-Chjat8DO.js";import"./Stack-wDqeWMTC.js";import"./Box-qzYP1vnN.js";import"./AlertTitle-DGMjNv9d.js";import"./Typography-BhttL55U.js";import"./utils-SU9mu0D7.js";import"./index-BtM5VmRH.js";import"./Grow-DHJeVGyA.js";import"./ClickAwayListener-CVXPLwF5.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-XprEAl00.js";import"./index-CJ-wfEIf.js";import"./Button-BOCcoe4v.js";import"./useAccessRequirements-Hopa4_gx.js";import"./useQueries-Dp6JWiNL.js";import"./useMutation-BiO-q3tw.js";import"./useInfiniteQuery-BXzC9lyw.js";import"./useMediaQuery-DuJLfkgp.js";import"./sortBy-Dub1191j.js";import"./_baseFlatten-CQqQPSAB.js";import"./_getAllKeys-D4jqnHbs.js";import"./isArray-D3Xc0Edl.js";import"./_Uint8Array-BypDT5Ps.js";import"./_Map-W_LbVzGG.js";import"./_baseTimes-DoMoQz2v.js";import"./_getTag-7fqy2l2P.js";import"./toString-DMqudUWC.js";import"./isSymbol-BVHl_2sa.js";import"./_baseIteratee-KHctvnqt.js";import"./_getMatchData-Dvs3BNB8.js";import"./_cacheHas-DFFdrG_S.js";import"./_setToArray-CSiN_fit.js";import"./identity-DKeuBCMA.js";import"./_baseFor-CpEDs2Sd.js";import"./_baseRest-6bl_2T60.js";import"./_overRest-Ctve69FT.js";import"./_isIterateeCall-B-8PPihj.js";import"./QueryFilterUtils-DKhirLZ_.js";import"./SynapseConstants-8sEa_Tkp.js";import"./isNumber-IkxNlUCJ.js";import"./EntityLink-Cr4FXB_s.js";import"./useEntity--GmFvbPp.js";import"./isEqualWith-DRrYiOw9.js";import"./pick-mAFmzPDL.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./toInteger-wfy7oWZN.js";import"./_baseClone-C0DTE4NL.js";import"./_initCloneObject-Cv5HhKD3.js";import"./_baseUnset-ChLgcsft.js";import"./_baseSlice-F8doVSIJ.js";import"./isPlainObject-zHgHEaNo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./EntityIcon-BEZj9jsE.js";import"./index-C-UbkUMQ.js";import"./IconSvg--XoCrLds.js";import"./ErrorOutlined-BhDYotgP.js";import"./GetAppTwoTone-DGNvw6OX.js";import"./InfoOutlined-G1tbAqgK.js";import"./CheckCircleTwoTone-B5Iaww82.js";import"./ErrorChip-W-lKk5aa.js";import"./Chip-wMvD6Pzg.js";import"./Avatar-1vKdsY-O.js";import"./Link-BXqr-BaG.js";import"./Skeleton-BQPHOfbB.js";import"./colorManipulator-CieAV1Z7.js";import"./pluralize-kXjzuMdn.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./List-n4ZFYRWO.js";import"./ListItem-DCqp_74J.js";import"./listItemButtonClasses-COsUWZnI.js";import"./isMuiElement-BxNAcTwJ.js";import"./events-CXH2uRM3.js";import"./util-HBHsAbUw.js";import"./index-Dkma3SP6.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-CBfzdnva.js";import"./inputBaseClasses-DIwNn5yR.js";import"./Fade--kK2ZsE4.js";import"./dayjs.min-BIwLhz4I.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./StringUtils-D4kDWP8q.js";const gt={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,d,R;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      rest.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, async (req, res, ctx) => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return res(ctx.status(200), ctx.json(zeroRelatedProjects));
      })]
    }
  }
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const At=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,At as __namedExportsOrder,gt as default};
