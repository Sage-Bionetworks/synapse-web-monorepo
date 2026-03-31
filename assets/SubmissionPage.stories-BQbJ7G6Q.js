import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-Cr4rsgj7.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CyehCR-Z.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Czvjzqim.js";import"./useAccessRequirements-BGgjFa_W.js";import"./index-MNSnOiaj.js";import"./_baseOrderBy-BW78dBFQ.js";import"./_baseIteratee-Dve3eWDj.js";import"./_baseMap-DKB-r9b8.js";import"./_baseEach-CDRD4QoG.js";import"./useInfiniteQuery-B_Omzybh.js";import"./groupBy-UZD0Dnec.js";import"./_createAggregator-DKdzWf8w.js";import"./DialogBase-1oSnX0hp.js";import"./Close-Ci5OvHK6.js";import"./HelpPopover-DdF66tTF.js";import"./MarkdownPopover-D3AmFDvC.js";import"./LightTooltip-DsylXgAu.js";import"./MarkdownSynapse-CDDbIt-9.js";import"./SkeletonButton-C33Abn2f.js";import"./SkeletonInlineBlock-w--GqSHA.js";import"./SkeletonTable-wr8tjygS.js";import"./SkeletonParagraph-DJhgoEyf.js";import"./EntityLink-DyXZON0X.js";import"./useEntity-B9L-Sybc.js";import"./pickBy-Ch7QJSfL.js";import"./isString-Da5fPHJA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DH4DPEtp.js";import"./useGetEntityHeaders-CN9DEAkS.js";import"./EntityIcon-at1FYYlq.js";import"./ErrorChip-RVaJ3kdx.js";import"./Chip-DjKXoZBc.js";import"./UserOrTeamBadge--RkABSyb.js";import"./UserBadge-DqLO5d9Y.js";import"./useUserBundle-DQ1m5zbR.js";import"./MenuItem-Ct9EBmwz.js";import"./Card-9HzHl1Tz.js";import"./TeamBadge-B7ohMNpE.js";import"./UnmanagedACTAccessRequirementItem-CuheEAYt.js";import"./RequirementItem-swvPOpxq.js";import"./LockTwoTone-DCAMJ9VB.js";import"./UserSearchBoxV2-Bpqkx5NX.js";import"./useDebouncedEffect-0pFZfXf8.js";import"./use-deep-compare-effect.esm-BYNnqYvv.js";import"./uniq-CQTanI-X.js";import"./without-BiUzHpja.js";import"./Select-aab027f3.esm-CUIJHzZR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DoysA6xJ.js";import"./SelfSignAccessRequirementItem-B-nd6nQE.js";import"./DataAccessRequestAccessorsFilesForm-1D8DACYz.js";import"./enums-DOlWEN8c.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BxgHZZsb.js";import"./RadioGroup-BxFOFkKg.js";import"./Radio-Bc4FiNE9.js";import"./SwitchBase-Cc_wLOhS.js";import"./FormGroup-X4WJ_3Ki.js";import"./FormControlLabel-B7TVOkEX.js";import"./UploadDocumentField-B84IcN7s.js";import"./FileUpload-D7kBE9TH.js";import"./ManagedACTAccessRequirementFormWikiWrapper-dzcKbjh9.js";import"./GridLegacy-D6KuXYJd.js";import"./ResearchProjectForm-CRR-vwr2.js";import"./TextFieldWithWordLimit-BCPfxODB.js";import"./AuthenticatedRequirement-C1Y8fE5b.js";import"./CertificationRequirement-XWztpoaY.js";import"./TwoFactorAuthEnabledRequirement-CIWfiN30.js";import"./ValidationRequirement-BuYg4su6.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DMLQKmFT.js";import"./RejectDataAccessRequestModal-D1k3K01T.js";import"./CannedRejectionDialog-D2Ka5Z3m.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D9Jug8b8.js";import"./Checkbox-c-nz78k5.js";import"./Grid-WJmRpyZS.js";import"./upperFirst-DR0i9Lp8.js";import"./_stringToArray-xld9z9Gr.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
