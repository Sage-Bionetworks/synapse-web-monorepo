import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-BbBIbNbJ.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-eqUtPfJY.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-0wYv3_93.js";import"./useAccessRequirements-CBGLv5ao.js";import"./index-UMjXJfzL.js";import"./_baseOrderBy-DvNlOUFW.js";import"./_baseIteratee-4zm-yijX.js";import"./_baseMap-D-a7amfv.js";import"./_baseEach-KEo3Uqcu.js";import"./useQueries-BL7xbtea.js";import"./useInfiniteQuery-Dq3AohCE.js";import"./groupBy-Bi5iz9Qp.js";import"./_createAggregator-CXSKIbGK.js";import"./DialogBase-DRt0FohX.js";import"./Close-Di_kFtUw.js";import"./HelpPopover-CkUPARK8.js";import"./MarkdownPopover-DgQV4UBm.js";import"./LightTooltip-Ckf7mhk-.js";import"./MarkdownSynapse-a5yQxqx5.js";import"./SkeletonButton-C0rZfSx5.js";import"./SkeletonInlineBlock-DVbB2SaF.js";import"./SkeletonTable-DeosQDQ2.js";import"./SkeletonParagraph-Cre22j3C.js";import"./EntityLink-CeiJOH6X.js";import"./useEntity-Bj1_Aqx1.js";import"./pickBy-BDe1UelD.js";import"./isString-d2KaZuCr.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D7cfZbUS.js";import"./useGetEntityHeaders-DzVdA7aF.js";import"./EntityIcon-Co8jiaqv.js";import"./ErrorChip-DkuT6-uq.js";import"./Chip-BGbET8g7.js";import"./UserOrTeamBadge-DLRC_B-r.js";import"./UserBadge-h7JHA6Ak.js";import"./MenuItem-C_GiViVf.js";import"./Card-BSNHgx80.js";import"./TeamBadge-CMR_5LRt.js";import"./UnmanagedACTAccessRequirementItem-C0TAKLvF.js";import"./RequirementItem-BlDwcH4r.js";import"./LockTwoTone-S0aJqkW7.js";import"./UserSearchBoxV2-TygQWuxq.js";import"./useDebouncedEffect-DCfbw7rb.js";import"./use-deep-compare-effect.esm-DK8jsI9o.js";import"./uniq-Ncn24Eei.js";import"./without-BHRnFZwV.js";import"./Select-aab027f3.esm-baO3FIkz.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-qgBDU0lD.js";import"./SelfSignAccessRequirementItem-ClVsvlXV.js";import"./DataAccessRequestAccessorsFilesForm-BTzhZzCV.js";import"./enums-DI2O-eSh.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-ZPcZZkkb.js";import"./RadioGroup-BNYQCNsD.js";import"./Radio-BemUBMNW.js";import"./SwitchBase-Oj29ESmW.js";import"./FormGroup-D8Qkj9uR.js";import"./FormControlLabel-xeZuQ2kI.js";import"./UploadDocumentField-FSsinYJK.js";import"./FileUpload-Bf1PLaRH.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BkfgUxp3.js";import"./GridLegacy-DNpwJ1o-.js";import"./ResearchProjectForm-BC71C-Lt.js";import"./TextFieldWithWordLimit-DO2lIgN2.js";import"./AuthenticatedRequirement-Dpo3LfSu.js";import"./CertificationRequirement-B2VByc3F.js";import"./TwoFactorAuthEnabledRequirement-lriWAa7W.js";import"./ValidationRequirement-TeYZZT2v.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-D7jgCIgt.js";import"./RejectDataAccessRequestModal-BVBcflck.js";import"./CannedRejectionDialog-DvC3dIWV.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-B72wlxd4.js";import"./Checkbox-ChI1OoXu.js";import"./Grid-D2o60fm5.js";import"./upperFirst-D5kGgksa.js";import"./_stringToArray-BbaaQybA.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
