import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-zheGqhAq.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-8EU-hn9U.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DrsojMe6.js";import"./useAccessRequirements-BXmZzqot.js";import"./index-Cdw1MH5n.js";import"./_baseOrderBy-BofzHugO.js";import"./_baseIteratee-DDo8Ap5B.js";import"./_baseMap-BkkmexWo.js";import"./_baseEach-CwsVC8cC.js";import"./useQueries-DXsUmBVl.js";import"./useInfiniteQuery-CG0Fso0D.js";import"./groupBy-F-VsfME8.js";import"./_createAggregator-ByOX6Z0f.js";import"./DialogBase-CTe4gN8d.js";import"./Close-Czuq5Lj0.js";import"./HelpPopover-JQdCNZBx.js";import"./MarkdownPopover-BacXeUFr.js";import"./LightTooltip-DB1oMCwe.js";import"./MarkdownSynapse-Ct83EToF.js";import"./SkeletonButton-DnBFAAqj.js";import"./SkeletonInlineBlock-DQ4vmVkM.js";import"./SkeletonTable-B_5GfUT7.js";import"./SkeletonParagraph-0XdWF-57.js";import"./EntityLink-DjzaTXlQ.js";import"./useEntity-CTIaPQug.js";import"./pickBy-DpS9WV9V.js";import"./isString-BR9QiN0Q.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BxFP7Sk5.js";import"./useGetEntityHeaders-79pLLWWY.js";import"./EntityIcon-D5_CwXyQ.js";import"./ErrorChip-DisYT-Ij.js";import"./Chip-BBw1-U_9.js";import"./UserOrTeamBadge-BRrWp7AN.js";import"./UserBadge-Bt736bOg.js";import"./MenuItem-Bwm8UOUj.js";import"./Card-EONa1C96.js";import"./TeamBadge-DMvgQY78.js";import"./UnmanagedACTAccessRequirementItem-vJN0-HJT.js";import"./RequirementItem-BtZHpRnd.js";import"./LockTwoTone-HQp8FIwe.js";import"./UserSearchBoxV2-CPMHnLX3.js";import"./useDebouncedEffect-CdMJhMdn.js";import"./use-deep-compare-effect.esm-zOhH6fqI.js";import"./uniq-CXMQvc5D.js";import"./without-CtsLl_vk.js";import"./Select-aab027f3.esm-D4uKsygW.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Cvgq1_Ob.js";import"./SelfSignAccessRequirementItem-Bna6bV6Q.js";import"./DataAccessRequestAccessorsFilesForm-DPwZHDfP.js";import"./enums-w-jvyQDK.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-B2XIqeL0.js";import"./RadioGroup-Crh2KpJr.js";import"./Radio-1JewHdMq.js";import"./SwitchBase-BkAcyxYn.js";import"./FormGroup-DEK-Px8-.js";import"./FormControlLabel-BJvY_HPF.js";import"./UploadDocumentField-By9E71eA.js";import"./FileUpload-CovUCme_.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Dxq3FusU.js";import"./GridLegacy-Bpw0yPVP.js";import"./ResearchProjectForm-DduYvmuY.js";import"./TextFieldWithWordLimit-DWawkwZL.js";import"./AuthenticatedRequirement-CdG75jcT.js";import"./CertificationRequirement-cXxlZK9z.js";import"./TwoFactorAuthEnabledRequirement-B7MNef-n.js";import"./ValidationRequirement-DUhdrDne.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CPlD2gGs.js";import"./RejectDataAccessRequestModal-ViYD_UWr.js";import"./CannedRejectionDialog-4I6Hqzyq.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-COSL1EcY.js";import"./Checkbox-mXxzWTsk.js";import"./Grid-DT4MUoeo.js";import"./upperFirst-C3GZZDbT.js";import"./_stringToArray-D6B-6lym.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
