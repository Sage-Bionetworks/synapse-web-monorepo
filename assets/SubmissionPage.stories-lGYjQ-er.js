import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-Dc6hcGlJ.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BYZ3ucNB.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CMfxcvpw.js";import"./useAccessRequirements-2G0nuv52.js";import"./index-jKqhNBOG.js";import"./_baseOrderBy-B3rxzeQp.js";import"./_baseIteratee-Dcg-twG3.js";import"./_baseMap-By4jZFbc.js";import"./_baseEach-BNXLUMD5.js";import"./useQueries-PilZ9A-3.js";import"./useInfiniteQuery-IUWpIdre.js";import"./groupBy-CpxPfojF.js";import"./_createAggregator-qgP1sgYs.js";import"./DialogBase-BCuTdDbU.js";import"./Close-Bu2yudNY.js";import"./HelpPopover-BxBUcBpZ.js";import"./MarkdownPopover-BqZuBojY.js";import"./LightTooltip-BLobyLjn.js";import"./MarkdownSynapse-9j4LJb_F.js";import"./SkeletonButton-BXWOXl9N.js";import"./SkeletonInlineBlock-CGB-MCvO.js";import"./SkeletonTable-C5xUm_Zr.js";import"./SkeletonParagraph-BA9ytrTV.js";import"./EntityLink-CbRaiwgj.js";import"./useEntity-EuS0GL07.js";import"./pickBy-rPJ8kE5L.js";import"./isString-DEpfqNYm.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dr2PcLgD.js";import"./useGetEntityHeaders-D-FB3pNh.js";import"./EntityIcon-DAIHvS2N.js";import"./ErrorChip-Cu8M2WXs.js";import"./Chip-DqtQxgW8.js";import"./UserOrTeamBadge-DJhSh2pf.js";import"./UserBadge-H-ZUUhh9.js";import"./MenuItem-CX3e5zAM.js";import"./Card-XI7C-k8U.js";import"./TeamBadge-CRyOzZ5j.js";import"./UnmanagedACTAccessRequirementItem-sKE5kVkI.js";import"./RequirementItem-BVIgxCpF.js";import"./LockTwoTone-D0ELs7Zh.js";import"./UserSearchBoxV2-Du9brpZJ.js";import"./useDebouncedEffect-Dcl0CwkH.js";import"./use-deep-compare-effect.esm-DAxrCKuX.js";import"./uniq-CmgWG2RM.js";import"./without-Csfr21Xn.js";import"./Select-aab027f3.esm-CzWM7AzP.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DS9mUVJP.js";import"./SelfSignAccessRequirementItem-By3xhnCG.js";import"./DataAccessRequestAccessorsFilesForm-CVfG7iWH.js";import"./enums-UwKpX976.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DnFHq-45.js";import"./RadioGroup-CuWQ_Yuu.js";import"./Radio-C26y0G_W.js";import"./SwitchBase-BDfbjiC7.js";import"./FormGroup-DLuoz1Mh.js";import"./FormControlLabel-Bn_oKwrc.js";import"./UploadDocumentField-r4y0oTvo.js";import"./FileUpload-hNUyMGUE.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DhCFIWwM.js";import"./GridLegacy-CQPZzRnS.js";import"./ResearchProjectForm-D8KfY-hQ.js";import"./TextFieldWithWordLimit-Dfb0EjBv.js";import"./AuthenticatedRequirement-afV6eBTs.js";import"./CertificationRequirement-CerS99Hz.js";import"./TwoFactorAuthEnabledRequirement-D-fYZRIP.js";import"./ValidationRequirement-c4v0ifbS.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-PmNt4Mvg.js";import"./RejectDataAccessRequestModal-CUG8Yi7h.js";import"./CannedRejectionDialog-D1fz6eM2.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BDYlXH9A.js";import"./Checkbox-B_hMZXjl.js";import"./Grid-CeYYAj7u.js";import"./upperFirst-DGaRuQpA.js";import"./_stringToArray-DwV9deMF.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
