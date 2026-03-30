import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-DIHgldxa.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B9DmHosk.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Cg-HADGA.js";import"./useAccessRequirements-BXImRjuM.js";import"./index-DnH41gKI.js";import"./_baseOrderBy-ASpvx6Fd.js";import"./_baseIteratee-Co0Mhj_4.js";import"./_baseMap-DOg7hwfO.js";import"./_baseEach-BM-VXKp0.js";import"./useInfiniteQuery-C7SfxOXc.js";import"./groupBy-Cy2FTdOV.js";import"./_createAggregator-Y-Oqz1LK.js";import"./DialogBase-BoGr-CRZ.js";import"./Close-B9FxdBmj.js";import"./HelpPopover-CojtIfyp.js";import"./MarkdownPopover-Brc4t5Ga.js";import"./LightTooltip-BLPTEgz7.js";import"./MarkdownSynapse-VQjxuG79.js";import"./SkeletonButton-CflRIFGp.js";import"./SkeletonInlineBlock-eDwQJ6BQ.js";import"./SkeletonTable-kyH1U49B.js";import"./SkeletonParagraph-Bj2Sqp59.js";import"./EntityLink-DJXfKZPF.js";import"./useEntity-C5K14HDn.js";import"./pickBy-YfaqetyA.js";import"./isString-Ol6H3siH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DN9g0Aiw.js";import"./useGetEntityHeaders-x9X5rfLu.js";import"./EntityIcon-5Ifo2YPZ.js";import"./ErrorChip-_TWxeC_c.js";import"./Chip-RTYTkfR-.js";import"./UserOrTeamBadge-D-hzGlWk.js";import"./UserBadge-wF921RXQ.js";import"./useUserBundle-DlpivQb3.js";import"./MenuItem-CAWhO3PR.js";import"./Card-CXOm8pHh.js";import"./TeamBadge-g3mHkV8L.js";import"./UnmanagedACTAccessRequirementItem-DLZEwqaB.js";import"./RequirementItem-BRtUaaxU.js";import"./LockTwoTone-BCUqnVqB.js";import"./UserSearchBoxV2-Bn-E5-fg.js";import"./useDebouncedEffect-6ML1Mvmn.js";import"./use-deep-compare-effect.esm-DS48TQUp.js";import"./uniq-BY1boyVs.js";import"./without-tBnXhLhx.js";import"./Select-aab027f3.esm-CzA7hAL4.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C9aqBoM6.js";import"./SelfSignAccessRequirementItem-CDm6hQtU.js";import"./DataAccessRequestAccessorsFilesForm-CL7aunic.js";import"./enums-DaoRynqS.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B8bmNLya.js";import"./RadioGroup-9Mo_BuPT.js";import"./Radio-B4NrnNRa.js";import"./SwitchBase-DMcEJh9k.js";import"./FormGroup-DGuDXGb-.js";import"./FormControlLabel-BU8VsySU.js";import"./UploadDocumentField-DSTCaEXu.js";import"./FileUpload-CH4bXj7I.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CLlbMml-.js";import"./GridLegacy-BB5G6PtN.js";import"./ResearchProjectForm-DsvZrVxw.js";import"./TextFieldWithWordLimit-BTzDoa1K.js";import"./AuthenticatedRequirement-B52UbyeB.js";import"./CertificationRequirement-BrB3A9Dm.js";import"./TwoFactorAuthEnabledRequirement-DO0pggJF.js";import"./ValidationRequirement-DxDqpJPT.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-NMuVHn3r.js";import"./RejectDataAccessRequestModal-DoMvWtiX.js";import"./CannedRejectionDialog-DBccuCmb.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-B1pUQtYb.js";import"./Checkbox-B53VCuVQ.js";import"./Grid-BJrpEgUY.js";import"./upperFirst-p29jGT0w.js";import"./_stringToArray-DDzasdPY.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
