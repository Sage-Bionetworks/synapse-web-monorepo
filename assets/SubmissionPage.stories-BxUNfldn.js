import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-CK9LwFro.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CZkxvhC7.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-YVTRfdpY.js";import"./useAccessRequirements-DgSyxERp.js";import"./index-BisQv3gR.js";import"./_baseOrderBy-B7Ja_XJE.js";import"./_baseIteratee-D0W9oXXs.js";import"./_baseMap-BxMZGUb8.js";import"./_baseEach-D6x_jnH3.js";import"./useInfiniteQuery-D4l8wj4_.js";import"./groupBy-BjWzwSg9.js";import"./_createAggregator-Dc45wu4j.js";import"./DialogBase-B2Q9QfSf.js";import"./Close-9sqFRZ8O.js";import"./HelpPopover-Ds-0QjK6.js";import"./MarkdownPopover-DsuaVFQU.js";import"./LightTooltip-DnfCpu70.js";import"./MarkdownSynapse-Cc1yLr_j.js";import"./SkeletonButton-BDlPnboj.js";import"./SkeletonInlineBlock-CxEf_EaS.js";import"./SkeletonTable-ycMK6xwc.js";import"./SkeletonParagraph-BI7CR1TI.js";import"./EntityLink-CgYjAGTf.js";import"./useEntity-C7yCzu2y.js";import"./pickBy-DtlktYT1.js";import"./isString-1n4YuqPD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DRRv1QRo.js";import"./useGetEntityHeaders-8XdKvJ0s.js";import"./EntityIcon-DqKFVo5X.js";import"./ErrorChip-C_ng-GEm.js";import"./Chip-CRLyozh0.js";import"./UserOrTeamBadge-CBm6RPBU.js";import"./UserBadge-D66c8QAm.js";import"./useUserBundle-CbV-ctfJ.js";import"./MenuItem-4nfAFdIM.js";import"./Card-Da6m2K6p.js";import"./TeamBadge-Bss-ZnjZ.js";import"./UnmanagedACTAccessRequirementItem-B8VC01w-.js";import"./RequirementItem-CJiTQwIV.js";import"./LockTwoTone-BfCqvpcV.js";import"./UserSearchBoxV2-DeyLaBhj.js";import"./useDebouncedEffect-B_4plHpu.js";import"./use-deep-compare-effect.esm-SLXqSMue.js";import"./uniq-CxS-uYLh.js";import"./without-3tFQiPJ0.js";import"./Select-aab027f3.esm-D86d0Vyl.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-t48TjQS_.js";import"./SelfSignAccessRequirementItem-QVQuiBzT.js";import"./DataAccessRequestAccessorsFilesForm-DDj1iEC-.js";import"./enums-BiX3mQOs.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BHy1EEJK.js";import"./RadioGroup-C41WLwjU.js";import"./Radio-DKKFEZB2.js";import"./SwitchBase-BsMN4EVq.js";import"./FormGroup-DAY708Xh.js";import"./FormControlLabel-By4Xq7o_.js";import"./UploadDocumentField-Ces8uaby.js";import"./FileUpload-C2U0la7r.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CEzeNwxA.js";import"./GridLegacy-BE_3R853.js";import"./ResearchProjectForm-BkVRV_9y.js";import"./TextFieldWithWordLimit-DofqCnau.js";import"./AuthenticatedRequirement-DI3NXhk0.js";import"./CertificationRequirement-DEDYVh5q.js";import"./TwoFactorAuthEnabledRequirement-S2FYFlqs.js";import"./ValidationRequirement-BFeXUfsY.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C9wbt35V.js";import"./RejectDataAccessRequestModal-DMxasnv3.js";import"./CannedRejectionDialog-BXpiy4BI.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DPJPP9eh.js";import"./Checkbox-Te6sd5RK.js";import"./Grid-vZDnzv9a.js";import"./upperFirst-Dq3Z-jY0.js";import"./_stringToArray-Cut1Mrmq.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
