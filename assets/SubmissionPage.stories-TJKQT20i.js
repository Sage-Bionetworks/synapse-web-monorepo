import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-C0ErQzQQ.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-B_aDA1Ra.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-0sawp-Vo.js";import"./useAccessRequirements-C8oIbdHR.js";import"./index-CXBiRWT3.js";import"./_baseOrderBy-BwYmr6BE.js";import"./_baseIteratee-BUndEki0.js";import"./_baseMap-BLf9ASmK.js";import"./_baseEach-SGImkhl7.js";import"./useQueries-DLniHFa7.js";import"./useInfiniteQuery-D92iBfwZ.js";import"./groupBy-BzgKq1bS.js";import"./_createAggregator-BAUKrAjp.js";import"./DialogBase-BqMUco36.js";import"./Close-CTHKIKbo.js";import"./HelpPopover-D3wJnDj8.js";import"./MarkdownPopover-DEfGytzJ.js";import"./LightTooltip-D15VDo9s.js";import"./MarkdownSynapse-BgQ-o5LF.js";import"./SkeletonButton-CiuQHyYv.js";import"./SkeletonInlineBlock-BE6gLgZl.js";import"./SkeletonTable-BS5GIgke.js";import"./SkeletonParagraph-DNevJqyo.js";import"./EntityLink-Cv-n3WJX.js";import"./useEntity-Clvf9s8c.js";import"./pickBy-Dr1Khwmo.js";import"./isString-DuHi3MGw.js";import"./useSuspenseQuery-B5vEEZkD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-cmXjN1t3.js";import"./useGetEntityHeaders-DJgU77_V.js";import"./EntityIcon-BElRlGRL.js";import"./ErrorChip-Da5VOZTj.js";import"./Chip-X7blzzMj.js";import"./UserOrTeamBadge-B9X7uqzO.js";import"./UserBadge-BHfpUK-d.js";import"./useUserBundle-Cvm8I5oN.js";import"./MenuItem-C5fdYvEk.js";import"./Card-CxCLAc-d.js";import"./TeamBadge-DNE3Om81.js";import"./UnmanagedACTAccessRequirementItem-6hDyk06m.js";import"./RequirementItem-CRVar7tc.js";import"./LockTwoTone-C7broPUp.js";import"./UserSearchBoxV2-YzY4i8-1.js";import"./useDebouncedEffect-DPVrOdqK.js";import"./use-deep-compare-effect.esm-DqKHiehK.js";import"./uniq-D0WnBq-1.js";import"./without-BujwWr7j.js";import"./Select-aab027f3.esm-CIc1ESqH.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DRtbENyx.js";import"./SelfSignAccessRequirementItem-llsXQNws.js";import"./DataAccessRequestAccessorsFilesForm-Cpr9pCOd.js";import"./enums-BPuMjZSn.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-B9UiSNJF.js";import"./RadioGroup-BzozT_1k.js";import"./Radio-uPSGveKS.js";import"./SwitchBase-D3AXOLrZ.js";import"./FormGroup-DmWeiVKr.js";import"./FormControlLabel-DIoiy-48.js";import"./UploadDocumentField-CrmuvGSk.js";import"./FileUpload-DGd86hE1.js";import"./ManagedACTAccessRequirementFormWikiWrapper-SnFxXrHo.js";import"./GridLegacy-CKrQfPZS.js";import"./ResearchProjectForm-DQQC-Aa1.js";import"./TextFieldWithWordLimit-C1OmAXg_.js";import"./AuthenticatedRequirement-Cye322MC.js";import"./CertificationRequirement-B1l4ERTJ.js";import"./TwoFactorAuthEnabledRequirement-DP-3Ubgc.js";import"./ValidationRequirement-BzWaOzHS.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-B0o-ZVqf.js";import"./RejectDataAccessRequestModal-D6S5J6Cr.js";import"./CannedRejectionDialog-BhwbpTK-.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BsTDsadA.js";import"./Checkbox-CwXx_aG3.js";import"./Grid-d1KTcnXE.js";import"./upperFirst-BCWcpPx-.js";import"./_stringToArray-BA7WXhsd.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,R;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
