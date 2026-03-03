import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-B_O9kSix.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage--xmI365J.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BTPBZHgA.js";import"./useAccessRequirements-C48nzhrP.js";import"./index-CIA9_xQz.js";import"./_baseOrderBy-DW79tZ4P.js";import"./_baseIteratee-yjnrhNzg.js";import"./_baseMap-DN0Mni7r.js";import"./_baseEach-CfBB6sdk.js";import"./useInfiniteQuery-BhNmSgI4.js";import"./groupBy-C15yHdf_.js";import"./_createAggregator-Jh0YJ0SL.js";import"./DialogBase-DwQ32IO2.js";import"./Close-BwmNujrW.js";import"./HelpPopover-CCcniF6w.js";import"./MarkdownPopover-DRJsMIka.js";import"./LightTooltip-GgpSSUJ5.js";import"./MarkdownSynapse-DfLA11xe.js";import"./SkeletonButton-BM1gzNpw.js";import"./SkeletonInlineBlock-B4Ftzl0H.js";import"./SkeletonTable-DPjCujA-.js";import"./SkeletonParagraph-CyxH5Rsx.js";import"./EntityLink-JzBeVkJY.js";import"./useEntity-CRghs1UI.js";import"./pickBy-BvX4lrYi.js";import"./isString-C6ja5JhB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C1kMZ-wS.js";import"./useGetEntityHeaders-B1__sdlU.js";import"./EntityIcon-BdMqIhbN.js";import"./ErrorChip-BsWMTcV1.js";import"./Chip-DJkWIvUs.js";import"./UserOrTeamBadge-BfQs934r.js";import"./UserBadge-DxRMin_1.js";import"./useUserBundle-BrtD0xy9.js";import"./MenuItem-BcwwJPC9.js";import"./Card-DeLay9_m.js";import"./TeamBadge-BmxBGDC-.js";import"./UnmanagedACTAccessRequirementItem-CIWKE5Ox.js";import"./RequirementItem-BIrSio0c.js";import"./LockTwoTone-B0nyoaMG.js";import"./UserSearchBoxV2-B3nPo0zB.js";import"./useDebouncedEffect-BPILdPo4.js";import"./use-deep-compare-effect.esm-BXI7_gf7.js";import"./uniq-CkScBwqE.js";import"./without-CCFk_7Et.js";import"./Select-aab027f3.esm-C0FY3x0P.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Djcwr84e.js";import"./SelfSignAccessRequirementItem-nrj7xDbz.js";import"./DataAccessRequestAccessorsFilesForm-CHyb2Bdr.js";import"./enums-DcHDNg2a.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-_dl49Mca.js";import"./RadioGroup-B8Pmw6xC.js";import"./Radio-BRhsJlQp.js";import"./SwitchBase-BTC1pAKz.js";import"./FormGroup-HvZULV_t.js";import"./FormControlLabel-BIGrXLA0.js";import"./UploadDocumentField-CrPUKkHI.js";import"./FileUpload-uNSTcgZJ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BhXV0tcW.js";import"./GridLegacy-BNGnip9i.js";import"./ResearchProjectForm-BjMKQypz.js";import"./TextFieldWithWordLimit-ftXfJ7KQ.js";import"./AuthenticatedRequirement-DiTSiHw3.js";import"./CertificationRequirement-CA6-1zJg.js";import"./TwoFactorAuthEnabledRequirement-Dz2NwB2K.js";import"./ValidationRequirement-BL6m6ZHG.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Biu4mmWW.js";import"./RejectDataAccessRequestModal-D565dS7q.js";import"./CannedRejectionDialog-CLyB8qjp.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DzRI3wIo.js";import"./Checkbox-S3ZkMNUz.js";import"./Grid-DpqNCaG6.js";import"./upperFirst-VIDeSkKN.js";import"./_stringToArray-BjAqpVUC.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
