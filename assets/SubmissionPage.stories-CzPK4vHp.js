import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-CQAvee5F.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-XGV0qE1j.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-SiJ7lr61.js";import"./useAccessRequirements-BkhEm2x9.js";import"./index-Cqst0OBx.js";import"./_baseOrderBy-YSR7nDHP.js";import"./_baseIteratee-Cl9aDW9N.js";import"./_baseMap-C8e87bzq.js";import"./_baseEach-Bhh-05-4.js";import"./useQueries-DVF01cqS.js";import"./useInfiniteQuery-Dh-acjx4.js";import"./groupBy-BhTNA55G.js";import"./_createAggregator-zGBbcbMe.js";import"./DialogBase-A7SeZij4.js";import"./Close-BdW4XSEx.js";import"./HelpPopover-DL3O30BL.js";import"./MarkdownPopover-CxnxngRT.js";import"./LightTooltip-DUFjrAlt.js";import"./MarkdownSynapse-CHoFalek.js";import"./SkeletonButton-BbTQsPlY.js";import"./SkeletonInlineBlock-QfDnwJMw.js";import"./SkeletonTable-n8bsuBVZ.js";import"./SkeletonParagraph-BHKzvjmx.js";import"./EntityLink-jS8jgls_.js";import"./useEntity-DK8472fX.js";import"./pickBy-DOjwenqt.js";import"./isString-By3SdYtK.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Blj-MaJb.js";import"./useGetEntityHeaders-DGjGVuoC.js";import"./EntityIcon-B8OJ8u0A.js";import"./ErrorChip-R-KWztFW.js";import"./Chip-yjRG6i6C.js";import"./UserOrTeamBadge-BGqT0PHu.js";import"./UserBadge-ChS5ZWfy.js";import"./MenuItem-CHCA8JKh.js";import"./Card-DLy0NJ-o.js";import"./TeamBadge-BC0DBUSc.js";import"./UnmanagedACTAccessRequirementItem-CsWW6_oa.js";import"./RequirementItem-DJD4JIFu.js";import"./LockTwoTone-CsEwHC8W.js";import"./UserSearchBoxV2-DDso0pcZ.js";import"./useDebouncedEffect-CJcFQkuy.js";import"./use-deep-compare-effect.esm-DC102v78.js";import"./uniq-D0pi3ffb.js";import"./without-BcXQhdk6.js";import"./Select-aab027f3.esm-DwycKIAM.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-XhAwDkgD.js";import"./SelfSignAccessRequirementItem-DSKMUr7i.js";import"./DataAccessRequestAccessorsFilesForm-BWxYtqIQ.js";import"./enums-eZ-GU6tI.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Babau2bk.js";import"./RadioGroup-DMENGTda.js";import"./Radio-pvaSUjJI.js";import"./SwitchBase-4nAtzau0.js";import"./FormGroup-G72LexTM.js";import"./FormControlLabel-CfYT5tSK.js";import"./UploadDocumentField-C8iJW_h5.js";import"./FileUpload-Di1LpRDg.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BhsFSuHj.js";import"./GridLegacy-Dnxc1oSU.js";import"./ResearchProjectForm-DTJ9HDPV.js";import"./TextFieldWithWordLimit-CftxxOUo.js";import"./AuthenticatedRequirement-CBLWimD8.js";import"./CertificationRequirement-BlS9sANS.js";import"./TwoFactorAuthEnabledRequirement-mdGceqik.js";import"./ValidationRequirement-C8jkDzjP.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-7MaEdNxc.js";import"./RejectDataAccessRequestModal-CVU3Dk6U.js";import"./CannedRejectionDialog-Dopk0I8h.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-ClzkjvZo.js";import"./Checkbox-B9l7tm8b.js";import"./Grid-BJFbT69z.js";import"./upperFirst-BACOXOfN.js";import"./_stringToArray-Bhj2PL-b.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
