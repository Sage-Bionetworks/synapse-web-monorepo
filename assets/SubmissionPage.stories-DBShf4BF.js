import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-DGqgB8og.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Cn_-576f.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BjfuUug4.js";import"./useAccessRequirements-456E7uRE.js";import"./index-CX9m2Res.js";import"./_baseOrderBy-Cbznb6y6.js";import"./_baseIteratee-DwFq8RQx.js";import"./_baseMap-CYaJztLS.js";import"./_baseEach-CnHvp2pQ.js";import"./useQueries-B2G60Uy5.js";import"./useInfiniteQuery-CvHOf2NU.js";import"./groupBy-CmL_4A0w.js";import"./_createAggregator-DTuk2jBt.js";import"./DialogBase-BdfEWFiQ.js";import"./Close-1BktUZ1s.js";import"./HelpPopover-D7QaDdbI.js";import"./MarkdownPopover-Baf-6UEB.js";import"./LightTooltip-CD7bmaAv.js";import"./MarkdownSynapse-DybE5CEs.js";import"./SkeletonButton-VHDypD6K.js";import"./SkeletonInlineBlock-CDJCDGy_.js";import"./SkeletonTable-B050jOXg.js";import"./SkeletonParagraph-_skZGHOU.js";import"./EntityLink-BFI8sX8U.js";import"./useEntity-BVFUuXsO.js";import"./pickBy-SCKhelpd.js";import"./isString-DU16H64l.js";import"./useSuspenseQuery-DgAqulHC.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B4w4L0be.js";import"./useGetEntityHeaders-_bwTSHwm.js";import"./EntityIcon-rcrW1cUU.js";import"./ErrorChip-D1EckApm.js";import"./Chip-C9fzpOls.js";import"./UserOrTeamBadge-B7Gndvzh.js";import"./UserBadge-BsFNS6_M.js";import"./useUserBundle-DaZ17bF_.js";import"./MenuItem-ClmHPDmJ.js";import"./Card-C9DQJ7Ku.js";import"./TeamBadge-rUQcXBov.js";import"./UnmanagedACTAccessRequirementItem-CeBxY18L.js";import"./RequirementItem-QT8LCN-L.js";import"./LockTwoTone-C_1WVWvt.js";import"./UserSearchBoxV2-CNlLBw9i.js";import"./useDebouncedEffect-ChT8Sg8i.js";import"./use-deep-compare-effect.esm-nKvRvxU0.js";import"./uniq-CfNDoASc.js";import"./without-Dz2h17YF.js";import"./Select-aab027f3.esm-DWLPbzR4.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-C3tB9jnu.js";import"./SelfSignAccessRequirementItem-2FkI7kFf.js";import"./DataAccessRequestAccessorsFilesForm-C_rVH-TP.js";import"./enums--X3e1hTy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-3iLExHC9.js";import"./RadioGroup-DQme-WCR.js";import"./Radio-BR8C3wZu.js";import"./SwitchBase-Dc5MPTRj.js";import"./FormGroup-CqSFv4fO.js";import"./FormControlLabel-BPG4FuVu.js";import"./UploadDocumentField-BNy8zv4U.js";import"./FileUpload-BCsW72GR.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cl9HkdsO.js";import"./GridLegacy-cqg69e9T.js";import"./ResearchProjectForm-_iB6-06q.js";import"./TextFieldWithWordLimit-DjqylJTZ.js";import"./AuthenticatedRequirement-DYlMmMrg.js";import"./CertificationRequirement-DqPrKoR3.js";import"./TwoFactorAuthEnabledRequirement-qgB7R3T2.js";import"./ValidationRequirement-NgJmfBE1.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-JRdjqsMY.js";import"./RejectDataAccessRequestModal-V4RUkkWj.js";import"./CannedRejectionDialog-C3OhHvT9.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DuodJ_BP.js";import"./Checkbox-BtyRJrp1.js";import"./Grid-s7cBGH0l.js";import"./upperFirst-C4AeOJRQ.js";import"./_stringToArray-C0JhL2vb.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
