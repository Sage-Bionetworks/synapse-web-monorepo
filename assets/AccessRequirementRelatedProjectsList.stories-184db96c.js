import{A as j}from"./AccessRequirementRelatedProjectsList-f026ed46.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-643c5ae5.js";import{a9 as g}from"./SynapseClient-ceb0e6d4.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./OrientationBanner-1c6f5b11.js";import"./FullWidthAlert-88a09c3d.js";import"./Alert-34cc4490.js";import"./styled-01bfb76d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-af041161.js";import"./Paper-b990f44f.js";import"./IconButton-e4815158.js";import"./ButtonBase-f3be4fb1.js";import"./emotion-react.browser.esm-04dee135.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-b0292d83.js";import"./extendSxProp-e91f91cb.js";import"./Box-ddce9904.js";import"./AlertTitle-1d33b140.js";import"./Typography-10432b83.js";import"./useTheme-541c21f5.js";import"./Grow-5b2ac6ed.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-7ba61cee.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-3e2f7ab3.js";import"./Button-6cf38875.js";import"./useAccessRequirements-78b78f76.js";import"./useMutation-dd95c1dd.js";import"./useInfiniteQuery-49bff1c8.js";import"./useMediaQuery-facaab58.js";import"./sortBy-5833bcc7.js";import"./hasIn-9f27088b.js";import"./_Uint8Array-98add9bc.js";import"./_getTag-a0ec24ca.js";import"./isArray-5e3f9107.js";import"./_baseTimes-8715be3e.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-806f8014.js";import"./_baseIsEqual-5ae1325b.js";import"./_cacheHas-9c553a57.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-b81a47b3.js";import"./_overRest-1404b737.js";import"./_isIterateeCall-ce2bb82d.js";import"./EntityLink-5bde0433.js";import"./useEntity-00649ded.js";import"./isEqual-592f8fa4.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./pick-ab089642.js";import"./_baseClone-dc93fc3a.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-75ceb805.js";import"./useGetEntityHeaders-188593c1.js";import"./EntityIcon-eefbc71a.js";import"./index-7db48dfb.js";import"./IconSvg-3c89f0af.js";import"./ErrorOutlined-6b31cdea.js";import"./GetAppTwoTone-8acfb280.js";import"./InfoOutlined-1c91e984.js";import"./CheckCircleTwoTone-5c97bb6f.js";import"./ErrorChip-01210c0d.js";import"./Chip-3ab3a829.js";import"./Avatar-b9207744.js";import"./Link-980677d0.js";import"./Skeleton-c327557e.js";import"./pluralize-9f2b9a2f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-94bb762a.js";import"./ListItem-5947e5d7.js";import"./listItemButtonClasses-592b9053.js";import"./isMuiElement-bce4c331.js";import"./util-c0197ce2.js";import"./index-4166e284.js";import"./SynapseConstants-567f6998.js";import"./InfoTwoTone-1a20b6d6.js";import"./inputBaseClasses-9710a733.js";import"./Fade-7e0b73d6.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const it={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,a,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const st=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,st as __namedExportsOrder,it as default};
//# sourceMappingURL=AccessRequirementRelatedProjectsList.stories-184db96c.js.map
