import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-DnxOmzjq.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-UHP8lgK1.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-9c9KdQTZ.js";import"./useAccessRequirements-Dd_a-IF6.js";import"./index-CXjrgaVo.js";import"./_baseOrderBy-x4-CC6Wy.js";import"./_baseIteratee-C_T2x48z.js";import"./_baseMap-DlgqdAJU.js";import"./_baseEach-MCwZYOPx.js";import"./useInfiniteQuery-BiSYghaZ.js";import"./groupBy-DN4idoer.js";import"./_createAggregator-M3bEv3sR.js";import"./DialogBase-D3z_RB8X.js";import"./Close-BG6pWxxQ.js";import"./HelpPopover-7iTAnRZF.js";import"./MarkdownPopover-BBvcdCrE.js";import"./LightTooltip-DBTB_o03.js";import"./MarkdownSynapse-Dhwl4QzF.js";import"./SkeletonButton-BsjS3fr7.js";import"./SkeletonInlineBlock-Df91B-1t.js";import"./SkeletonTable-CwpgexC9.js";import"./SkeletonParagraph-gynKm0um.js";import"./EntityLink-BEUxyjpZ.js";import"./useEntity-DJslnMA8.js";import"./pickBy-BhKGT5ho.js";import"./isString-Cg4EQByH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D5DN4xp6.js";import"./useGetEntityHeaders-smdE_G0i.js";import"./EntityIcon-0qAgNDDN.js";import"./ErrorChip-CTTtNNJG.js";import"./Chip-IfgFn8uB.js";import"./UserOrTeamBadge-DGoyMStx.js";import"./UserBadge-C7ZoT0us.js";import"./useUserBundle-ecNJunIY.js";import"./MenuItem-CSaQiiYA.js";import"./Card-CWfitOUI.js";import"./TeamBadge-Dyvy-Kew.js";import"./UnmanagedACTAccessRequirementItem-Bgy9pfdq.js";import"./RequirementItem-15ukqZy5.js";import"./LockTwoTone-DfoqfKLY.js";import"./ManagedACTAccessRequirementItemView-BoIaurxr.js";import"./SelfSignAccessRequirementItem-B0IiaCtv.js";import"./DataAccessRequestAccessorsFilesForm-CyA0DLgt.js";import"./enums-CjAbXm-J.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DDGLeeV4.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Cn75LVuW.js";import"./UserSearchBox-D1_xXPdQ.js";import"./useDebouncedEffect-CRvtYT14.js";import"./Autocomplete-DapLW15v.js";import"./usePreviousProps-DDp_4LnU.js";import"./RadioGroup-CqFf0k8y.js";import"./Radio-BmkwTj_l.js";import"./SwitchBase-D18-gFmO.js";import"./FormGroup-BQ8Ffcll.js";import"./FormControlLabel-DRARADOY.js";import"./UploadDocumentField-Cj0tb7t0.js";import"./FileUpload-CuXbWl4_.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DI2Z3R9F.js";import"./GridLegacy-Zi_1yQ7f.js";import"./ResearchProjectForm-Y2lRHQ5w.js";import"./TextFieldWithWordLimit-CAHZkHjs.js";import"./AuthenticatedRequirement-zNeUn0k8.js";import"./CertificationRequirement-Bbxr4Kry.js";import"./TwoFactorAuthEnabledRequirement-8zZbG_Jh.js";import"./ValidationRequirement-j7JOJz-A.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C3DmN9kP.js";import"./RejectDataAccessRequestModal-BIEoWtgL.js";import"./CannedRejectionDialog-B6j4Arje.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DmtyRXb1.js";import"./Checkbox-z9I2CIKw.js";import"./Grid-B--VudpN.js";import"./upperFirst-D3xLTNsB.js";import"./_stringToArray-BLjVFVWE.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
