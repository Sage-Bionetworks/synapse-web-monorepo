import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-osdcj8gT.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-_9ui20xR.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DlYz9RvA.js";import"./useAccessRequirements-By8ZR-4J.js";import"./index-D_1mjmCL.js";import"./_baseOrderBy-A39yyPqs.js";import"./_baseIteratee-B5HvQivk.js";import"./_baseMap-I-hgX6EY.js";import"./_baseEach-DnD5uJJS.js";import"./useInfiniteQuery-DDd67-Kv.js";import"./groupBy-jTFN_fze.js";import"./_createAggregator-BhE1KRBO.js";import"./DialogBase-N9EllxpT.js";import"./Close-CI21Ui92.js";import"./HelpPopover-CmhCvPiW.js";import"./MarkdownPopover-BfzWYQCj.js";import"./LightTooltip-CcryAZ-X.js";import"./MarkdownSynapse-3y9hwyMU.js";import"./SkeletonButton-EtCgm8ml.js";import"./SkeletonInlineBlock-FlaxgqQX.js";import"./SkeletonTable-EGvSypPy.js";import"./SkeletonParagraph-DQAjuogP.js";import"./EntityLink-Bp1Ydb85.js";import"./useEntity-ZuIv_x_h.js";import"./pickBy-tfZNLt_m.js";import"./isString-C6XgMWDt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BYgAZyXG.js";import"./useGetEntityHeaders-DWsd3Bao.js";import"./EntityIcon-CapODEbF.js";import"./ErrorChip-6HVYKzzC.js";import"./Chip-B7nPIvxj.js";import"./UserOrTeamBadge-CEIHRdPK.js";import"./UserBadge-0tdCENRL.js";import"./useUserBundle-BBw-Xd7Y.js";import"./MenuItem-DiVh5dQ0.js";import"./Card-DetatTvP.js";import"./TeamBadge-D5euMTqM.js";import"./UnmanagedACTAccessRequirementItem-C5LaxWne.js";import"./RequirementItem-BqwPeb8d.js";import"./LockTwoTone-C_ELCtst.js";import"./UserSearchBoxV2-CpHNcknV.js";import"./useDebouncedEffect-C64-OqTz.js";import"./use-deep-compare-effect.esm-BhHazn6g.js";import"./uniq-WMrsDV3H.js";import"./without--wtbCOJB.js";import"./Select-aab027f3.esm-LpKro3UP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Cc34RZ4X.js";import"./SelfSignAccessRequirementItem-CBoXsjTA.js";import"./DataAccessRequestAccessorsFilesForm-oFombabM.js";import"./enums-Q1bgsEHR.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BWB_ILQ9.js";import"./RadioGroup-DI9ERbku.js";import"./Radio-nWvn6tHe.js";import"./SwitchBase-BiHoovb6.js";import"./FormGroup-tf74GFfs.js";import"./FormControlLabel-Cd2OUa17.js";import"./UploadDocumentField-QK8tR2qb.js";import"./FileUpload-DTaORj6g.js";import"./ManagedACTAccessRequirementFormWikiWrapper-pMAQsZOH.js";import"./GridLegacy-Bh_aemYL.js";import"./ResearchProjectForm-ofspKUS-.js";import"./TextFieldWithWordLimit-CG8ktBwP.js";import"./AuthenticatedRequirement-D_0bbvmz.js";import"./CertificationRequirement-Dh1xkz8r.js";import"./TwoFactorAuthEnabledRequirement-BqDcllYW.js";import"./ValidationRequirement-G5OK_h7Z.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DUVYmXaM.js";import"./RejectDataAccessRequestModal-CIbyG4ec.js";import"./CannedRejectionDialog-DgRd2UGw.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CvWs2KTG.js";import"./Checkbox-mFQANwtw.js";import"./Grid-CrljGsoP.js";import"./upperFirst-D_wCE4yv.js";import"./_stringToArray-DQC860sv.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
