import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-vUTu6M8D.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BIArzzlF.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D_x4JiEn.js";import"./useAccessRequirements-Oj0TN5gc.js";import"./index-DwgiIHef.js";import"./_baseOrderBy-TErK5KDZ.js";import"./_baseIteratee-BvpquvUu.js";import"./_baseMap-DTuWLxma.js";import"./_baseEach-DYOJ9REo.js";import"./useQueries-Bv2f7GHO.js";import"./useInfiniteQuery-i4mklQoJ.js";import"./groupBy-DSmp0AG2.js";import"./_createAggregator-C0fgzwxc.js";import"./DialogBase-B4OLAYCG.js";import"./Close-BcTGfgsy.js";import"./HelpPopover-BizYwA07.js";import"./MarkdownPopover-CLoC-k0L.js";import"./LightTooltip-pWgB8TwE.js";import"./MarkdownSynapse-CF0aiU3p.js";import"./SkeletonButton-BfImOAlj.js";import"./SkeletonInlineBlock-Dw1qUrgT.js";import"./SkeletonTable-CYuF7-ZU.js";import"./SkeletonParagraph-DI0oUi2H.js";import"./EntityLink-DP78KUE2.js";import"./useEntity-CJyHliIQ.js";import"./pickBy-ttRy5A60.js";import"./isString-Vkflck2t.js";import"./useSuspenseQuery-p_6e0XOX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HV3Xzo9J.js";import"./useGetEntityHeaders-ChaomBsO.js";import"./EntityIcon-CqdFzg0s.js";import"./ErrorChip-kLcmsZi-.js";import"./Chip-Cogs__Re.js";import"./UserOrTeamBadge-n4rY9vFx.js";import"./UserBadge-DThzTs_4.js";import"./useUserBundle-Bg0iomTg.js";import"./MenuItem-BXKyPNc4.js";import"./Card-B4xCTS0I.js";import"./TeamBadge-D8GTQRXx.js";import"./UnmanagedACTAccessRequirementItem-CyG8VtxA.js";import"./RequirementItem-C3gDhzMS.js";import"./LockTwoTone-DhQ0seaC.js";import"./UserSearchBoxV2-BRbuOOtr.js";import"./useDebouncedEffect-CfDWS-jS.js";import"./use-deep-compare-effect.esm-C6KiqeQ4.js";import"./uniq-DWYdI45G.js";import"./without-CilDNi99.js";import"./Select-aab027f3.esm-BPCT0NNh.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BLr-nD-Q.js";import"./SelfSignAccessRequirementItem-BIONZu6A.js";import"./DataAccessRequestAccessorsFilesForm-DQUWzfEQ.js";import"./enums-CRcEvnq1.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D6ZPj8Cb.js";import"./RadioGroup-DdSaXuWK.js";import"./Radio-CVDckbqi.js";import"./SwitchBase-CB13ZOLZ.js";import"./FormGroup-BL1vJtir.js";import"./FormControlLabel-h8bmr6Y_.js";import"./UploadDocumentField-DR9_dNz3.js";import"./FileUpload-6DEmzupZ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DhKf1F2S.js";import"./GridLegacy-8b3AP-Ig.js";import"./ResearchProjectForm-COKgRKwG.js";import"./TextFieldWithWordLimit-BlEX9ish.js";import"./AuthenticatedRequirement-DoNOoAUy.js";import"./CertificationRequirement-BytXhJ8j.js";import"./TwoFactorAuthEnabledRequirement-DIuKknvu.js";import"./ValidationRequirement-D1vq7j7a.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BA_CvK2I.js";import"./RejectDataAccessRequestModal-CndQOS20.js";import"./CannedRejectionDialog-D4FMuGtZ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BPtNL54i.js";import"./Checkbox-Db2xzulm.js";import"./Grid-B1qkZWS2.js";import"./upperFirst-Bx-jjJD4.js";import"./_stringToArray-PiJZ8St7.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
