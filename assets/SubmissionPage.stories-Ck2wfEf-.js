import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-BdkWYmI6.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DD8R0zNq.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BcUQXB7l.js";import"./useAccessRequirements-CFFEoY2r.js";import"./index-Bp1wqoF0.js";import"./_baseOrderBy-BnLkH5nT.js";import"./_baseIteratee-ptUCm6t2.js";import"./_baseMap-BOTv4vr1.js";import"./_baseEach-CsBmLHQn.js";import"./useQueries-DeoRDPpB.js";import"./useInfiniteQuery-DuX9lKhO.js";import"./groupBy-Bs-Wio_f.js";import"./_createAggregator-Booac5Gn.js";import"./DialogBase-AFyAqR5r.js";import"./Close-uDi--C--.js";import"./HelpPopover-B9Z4iGdd.js";import"./MarkdownPopover-BHBiy4N1.js";import"./LightTooltip-CG5Avdd3.js";import"./MarkdownSynapse-Bv4Hlehq.js";import"./SkeletonButton-DYpS-IT5.js";import"./SkeletonInlineBlock-B4ZEP19M.js";import"./SkeletonTable-BveBy0vn.js";import"./SkeletonParagraph-CVsqmSli.js";import"./EntityLink-iq-aitxi.js";import"./useEntity-Doo2tavu.js";import"./pickBy-M47jCh3s.js";import"./isString-CKIVBHgV.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DlmY_pl1.js";import"./useGetEntityHeaders-DJ1qRJ5j.js";import"./EntityIcon-CouWsDwh.js";import"./ErrorChip-BZANIkxx.js";import"./Chip-4C804CUR.js";import"./UserOrTeamBadge-CNLk5cG4.js";import"./UserBadge-D-KTw3YH.js";import"./MenuItem-CP_h11Bc.js";import"./Card-CgIKbIE3.js";import"./TeamBadge-BnE9f3G8.js";import"./UnmanagedACTAccessRequirementItem-B5rqXQD9.js";import"./RequirementItem-DEgrwK3j.js";import"./LockTwoTone-Clb3wrwT.js";import"./UserSearchBoxV2-DxFTM3J-.js";import"./useDebouncedEffect-jE7eDe3B.js";import"./use-deep-compare-effect.esm-CYFJiE3Q.js";import"./uniq-DIhhH-87.js";import"./without-Csmwb1vv.js";import"./Select-aab027f3.esm-CyGbFhuL.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DFhD6zIf.js";import"./SelfSignAccessRequirementItem-B0Qn2h_P.js";import"./DataAccessRequestAccessorsFilesForm-8135k_C3.js";import"./enums-CXEo6kZq.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-D0DGu7Co.js";import"./RadioGroup-CTX06fls.js";import"./Radio-CJJ6IxKi.js";import"./SwitchBase-C3xkbGp3.js";import"./FormGroup-D9wGIS-c.js";import"./FormControlLabel-BPc4wiF1.js";import"./UploadDocumentField-oz8EpdEG.js";import"./FileUpload-DUu6v39f.js";import"./ManagedACTAccessRequirementFormWikiWrapper-ZVEFpbPJ.js";import"./GridLegacy-DlkAPlR7.js";import"./ResearchProjectForm-BJMCxunG.js";import"./TextFieldWithWordLimit-BTFVRbNx.js";import"./AuthenticatedRequirement-Cs5d-AcK.js";import"./CertificationRequirement-CCl4L5t9.js";import"./TwoFactorAuthEnabledRequirement-BN45GzNQ.js";import"./ValidationRequirement-DMxfHjoH.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BzKpg_f3.js";import"./RejectDataAccessRequestModal-XuZoI6Y2.js";import"./CannedRejectionDialog-z0_R6hv6.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-D261UfJ4.js";import"./Checkbox-CH08XeSr.js";import"./Grid-Bf8-FmNM.js";import"./upperFirst-DmE_uXAe.js";import"./_stringToArray-CDzDh0JQ.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
