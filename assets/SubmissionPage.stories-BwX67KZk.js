import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-BZoqbf8T.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-B7aaAI_7.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CpWcCK5Q.js";import"./useAccessRequirements-A5CQN6C_.js";import"./index-DD9jDIum.js";import"./_baseOrderBy-DKrZBwa7.js";import"./_baseIteratee-x9q7dVdV.js";import"./_baseMap-BD2hY9d2.js";import"./_baseEach-o2iNJkzb.js";import"./useQueries-V-XKKRJy.js";import"./useInfiniteQuery-DDBDj7dn.js";import"./groupBy-U78t9lNv.js";import"./_createAggregator-BtINjljN.js";import"./DialogBase-CcQFp5O5.js";import"./Close-BmiGShPN.js";import"./HelpPopover-JjpkA04K.js";import"./MarkdownPopover-UFqyqYVS.js";import"./LightTooltip-C01xIOBo.js";import"./MarkdownSynapse-BhKULhlF.js";import"./SkeletonButton-CNv8YWby.js";import"./SkeletonInlineBlock-CT4iLvxR.js";import"./SkeletonTable-Cbhot3O8.js";import"./SkeletonParagraph-BxFUaFhk.js";import"./EntityLink-BjUlPwu6.js";import"./useEntity-DYsdQDgR.js";import"./pickBy-KIS95m-A.js";import"./isString-Bq9Em4Mr.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BF5-pJwy.js";import"./useGetEntityHeaders-BQkUdUXk.js";import"./EntityIcon-BJ1n6_3r.js";import"./ErrorChip-zU1sXc-d.js";import"./Chip-DWh3L3o0.js";import"./UserOrTeamBadge-DC_SSTi4.js";import"./UserBadge-ueMkJ81N.js";import"./MenuItem-97gDT1Wf.js";import"./Card-BVJDHK3N.js";import"./TeamBadge-BudB82KV.js";import"./UnmanagedACTAccessRequirementItem-BSVoagXl.js";import"./RequirementItem-Bg9DsPU8.js";import"./LockTwoTone-D4wOj644.js";import"./UserSearchBoxV2-DHebsS1_.js";import"./useDebouncedEffect-CZ4552fQ.js";import"./use-deep-compare-effect.esm-DsSeDtiF.js";import"./uniq-BadwzQtJ.js";import"./without-tYc0_zmA.js";import"./Select-aab027f3.esm-G7yrvEqB.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-hbwvrO27.js";import"./SelfSignAccessRequirementItem-CYTCVPtK.js";import"./DataAccessRequestAccessorsFilesForm-z9cc6mAR.js";import"./enums-BYHBoqUy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-qY2otCsS.js";import"./RadioGroup-CnSaVFMF.js";import"./Radio-Bqg0OkXP.js";import"./SwitchBase-b-Epk7F3.js";import"./FormGroup-C-mD4jOJ.js";import"./FormControlLabel-DbZXuN4t.js";import"./UploadDocumentField-CHpm-ya3.js";import"./FileUpload-DjN3l5aT.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BDWQkuPi.js";import"./GridLegacy-B3M6YblN.js";import"./ResearchProjectForm-B5Em6oLS.js";import"./TextFieldWithWordLimit-CYNpvHYn.js";import"./AuthenticatedRequirement-CKnzJs_7.js";import"./CertificationRequirement-Xzm00gxX.js";import"./TwoFactorAuthEnabledRequirement-CSsHW5FD.js";import"./ValidationRequirement-DhMRkeRy.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DV5iguYS.js";import"./RejectDataAccessRequestModal-CkgqSg0E.js";import"./CannedRejectionDialog-DMKkkoCs.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BvotHdXo.js";import"./Checkbox-Bj9CoxMt.js";import"./Grid-KGWSaruy.js";import"./upperFirst-Bgjcdb1Y.js";import"./_stringToArray-ByvxzmDO.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
