import{g as u,a as e,q as d,u as t,kq as i,kr as c,H as s,ks as R,l as m,kt as E,ku as _,a1 as I,dO as S,k9 as O}from"./iframe-DPduZJWc.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Cbvqt01O.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DKgUhtG3.js";import"./useAccessRequirements-BASpsQ9K.js";import"./index-B0RvRGln.js";import"./_baseOrderBy-36WQqxTb.js";import"./_baseIteratee-BLVygEfb.js";import"./_baseMap-14uFFhMQ.js";import"./_baseEach-1m_fayOA.js";import"./useInfiniteQuery-B39iFfDz.js";import"./groupBy-DXXHUlzk.js";import"./_createAggregator-BLbYlQxB.js";import"./DialogBase-6R3r0e7Y.js";import"./Close-BuwZ34Px.js";import"./HelpPopover-DelJm9J0.js";import"./MarkdownPopover-DPdOVRGX.js";import"./LightTooltip-CxIVI24Y.js";import"./MarkdownSynapse-C1S9WvZX.js";import"./SkeletonButton-CKk23r94.js";import"./SkeletonInlineBlock-DbjHmb1S.js";import"./SkeletonTable-BeG2UwMn.js";import"./SkeletonParagraph-D5PcDpGR.js";import"./EntityLink-CvkPdwtk.js";import"./useEntity-B7GWjYKE.js";import"./pickBy-BjVoKohw.js";import"./isString-DiLk9f6z.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DcvUE9Q3.js";import"./useGetEntityHeaders-CEDESzZu.js";import"./EntityIcon-CwEbN4er.js";import"./ErrorChip-B3BUIUgX.js";import"./Chip-CpsfZ-DY.js";import"./UserOrTeamBadge-Boi2h605.js";import"./UserBadge-CNWRLDr6.js";import"./useUserBundle-B2AE4q5G.js";import"./MenuItem-1gOTYJyP.js";import"./Card-BKd7BOj_.js";import"./TeamBadge-C_lNBz9e.js";import"./UnmanagedACTAccessRequirementItem-DxLKpuay.js";import"./RequirementItem-DPW_4O22.js";import"./LockTwoTone-DLM8q8-1.js";import"./UserSearchBoxV2-CdF2LXRM.js";import"./useDebouncedEffect-nRzyOxJ7.js";import"./use-deep-compare-effect.esm-B4WO_muK.js";import"./uniq-DV-Xgi6k.js";import"./without-tX-9QcUq.js";import"./Select-aab027f3.esm-BrWon-Qw.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DzwvIBWN.js";import"./SelfSignAccessRequirementItem-C_RIvdpt.js";import"./DataAccessRequestAccessorsFilesForm-Bs8Tnb8s.js";import"./enums-DvEmqR6Z.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BceimmI9.js";import"./RadioGroup-DGUX2nCv.js";import"./Radio-Bx-ZEiUl.js";import"./SwitchBase-Fu9-MOwD.js";import"./FormGroup-DBwMX7Of.js";import"./FormControlLabel-BpkEw7nL.js";import"./UploadDocumentField-B9kzt5rG.js";import"./FileUpload-DJoS_598.js";import"./ManagedACTAccessRequirementFormWikiWrapper-a14BAu7N.js";import"./GridLegacy-CnBOQiKC.js";import"./ResearchProjectForm-BfrObkys.js";import"./TextFieldWithWordLimit-cdu4krkY.js";import"./AuthenticatedRequirement-Cgq1S52e.js";import"./CertificationRequirement-7js9ntxm.js";import"./TwoFactorAuthEnabledRequirement-D9YeBLfi.js";import"./ValidationRequirement-CIyOrXhz.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-kpKgXLHZ.js";import"./RejectDataAccessRequestModal-CIImeYxS.js";import"./CannedRejectionDialog-C2qYV_NN.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-LpXAB-ow.js";import"./Checkbox-Ds1rV2cF.js";import"./Grid-BFgV-dQk.js";import"./upperFirst-DJUelSLs.js";import"./_stringToArray-ScbD4FNg.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
