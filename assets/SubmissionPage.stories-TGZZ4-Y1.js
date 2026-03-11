import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-BFOdDDU9.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BF4AN8Iq.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CHmfdJC-.js";import"./useAccessRequirements-CP42ArKm.js";import"./index-DDJJe_s9.js";import"./_baseOrderBy-DB_MZpkC.js";import"./_baseIteratee-BJyYAHwo.js";import"./_baseMap-D7kDkJWv.js";import"./_baseEach-C50d_HcC.js";import"./useInfiniteQuery-Dy46-GOZ.js";import"./groupBy-Dfja1gqi.js";import"./_createAggregator-CZjnnX8H.js";import"./DialogBase-CqjTgUyd.js";import"./Close-BiMPyEJa.js";import"./HelpPopover-BGoqvETW.js";import"./MarkdownPopover-DNOZWbzO.js";import"./LightTooltip-CvVy39ak.js";import"./MarkdownSynapse-CvUwVk43.js";import"./SkeletonButton-DqU7tug-.js";import"./SkeletonInlineBlock-DA2_ugLR.js";import"./SkeletonTable-YSrwQoxW.js";import"./SkeletonParagraph-tO6IeoMO.js";import"./EntityLink-BrxymmVB.js";import"./useEntity-Lcrqi5Tl.js";import"./pickBy-B3cb2NI1.js";import"./isString-DMM1tUYl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qy3h9EVn.js";import"./useGetEntityHeaders-DK68NbZs.js";import"./EntityIcon-BefpLbW2.js";import"./ErrorChip-F4teQfJ4.js";import"./Chip-D2x9BPaK.js";import"./UserOrTeamBadge-DLnp9v-B.js";import"./UserBadge-D59lDHcb.js";import"./useUserBundle-DCqqdgaq.js";import"./MenuItem-PnDY4AEM.js";import"./Card-O6nQpaBG.js";import"./TeamBadge-4rfQ6Ry9.js";import"./UnmanagedACTAccessRequirementItem-D5kKnmkz.js";import"./RequirementItem-B8IJs5L_.js";import"./LockTwoTone-BL0F47Ze.js";import"./UserSearchBoxV2-D6O3wM47.js";import"./useDebouncedEffect-DcT7lLhv.js";import"./use-deep-compare-effect.esm-Dix54tvZ.js";import"./uniq-DOCtMVWj.js";import"./without-DgaWB8hV.js";import"./Select-aab027f3.esm-CdOh-8hV.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C1YHfdHS.js";import"./SelfSignAccessRequirementItem-Asax7S4M.js";import"./DataAccessRequestAccessorsFilesForm-DjT3a412.js";import"./enums-B4vYx7ZF.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-es8Qfm3x.js";import"./RadioGroup-B1l1zvNg.js";import"./Radio-DuwzW3VN.js";import"./SwitchBase-BWakJaHi.js";import"./FormGroup-DzHJ7JMK.js";import"./FormControlLabel-C2HtIWRI.js";import"./UploadDocumentField-C2TjE-qn.js";import"./FileUpload-D3zCaskQ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-tu1HF2ZH.js";import"./GridLegacy-CcrBl3NU.js";import"./ResearchProjectForm-Nd7ycKzE.js";import"./TextFieldWithWordLimit-DqdB7FsP.js";import"./AuthenticatedRequirement-CDsNtPwf.js";import"./CertificationRequirement-7Eok-L3M.js";import"./TwoFactorAuthEnabledRequirement-DbYZKo1O.js";import"./ValidationRequirement-DP7WSeTw.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BJ5aX00J.js";import"./RejectDataAccessRequestModal-niJxAfkc.js";import"./CannedRejectionDialog-BZbyABTI.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DE_sDXrs.js";import"./Checkbox-BMEnJ1KU.js";import"./Grid-DZ39djx4.js";import"./upperFirst-CWVEt-e3.js";import"./_stringToArray-CstA7w_i.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
