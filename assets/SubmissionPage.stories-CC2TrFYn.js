import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-Dbbh8EoS.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-hhSolpUA.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DiyH0Yfa.js";import"./useAccessRequirements-C2qVnv1S.js";import"./index-C5FBv2d-.js";import"./_baseOrderBy-BqQw7fHP.js";import"./_baseIteratee-Cv68UzAc.js";import"./_baseMap-uGS4ydDB.js";import"./_baseEach-B2oUF5fZ.js";import"./useInfiniteQuery-DwX98EP2.js";import"./groupBy-BYr-O8fp.js";import"./_createAggregator-B88630wK.js";import"./DialogBase-DP21qmxt.js";import"./Close-Dh11qsnE.js";import"./HelpPopover-D9KVZzsy.js";import"./MarkdownPopover-BphtwQmM.js";import"./LightTooltip-CYhWOoK6.js";import"./MarkdownSynapse-Na_JpKhK.js";import"./SkeletonButton-BznCZj-O.js";import"./SkeletonInlineBlock-BfsUoAAw.js";import"./SkeletonTable-Cpo7iVUX.js";import"./SkeletonParagraph-DMnuMidF.js";import"./EntityLink-naADock1.js";import"./useEntity-C7229iuw.js";import"./pickBy-euuktPBy.js";import"./isString-Crns8k2p.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bz0ZdlYf.js";import"./useGetEntityHeaders-DWuHFpFD.js";import"./EntityIcon-B87JxmSB.js";import"./ErrorChip-DJeBG0Mg.js";import"./Chip-D58Qw1vN.js";import"./UserOrTeamBadge-CE87R9fa.js";import"./UserBadge-ckycABX-.js";import"./useUserBundle-CZY1dyhP.js";import"./MenuItem-DT6oAegc.js";import"./Card-DZlEFsDn.js";import"./TeamBadge-Do94J_Rs.js";import"./UnmanagedACTAccessRequirementItem-CUZ8ruBn.js";import"./RequirementItem-BWsoZjC6.js";import"./LockTwoTone-CO30526V.js";import"./UserSearchBoxV2-Bkon8712.js";import"./useDebouncedEffect-CHzn7SW6.js";import"./use-deep-compare-effect.esm-DpPyWBYt.js";import"./uniq-C2nxWVi4.js";import"./without-CCHEkGxF.js";import"./Select-aab027f3.esm-Cp_aXnVH.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DMcImWpL.js";import"./SelfSignAccessRequirementItem-CBecq4HU.js";import"./DataAccessRequestAccessorsFilesForm-HZCg6zxA.js";import"./enums-CssWh4Bo.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Dbjm3lOB.js";import"./RadioGroup-CdbZSHeK.js";import"./Radio-Cw3OIANI.js";import"./SwitchBase-z6kwMqP-.js";import"./FormGroup-DLmCsInn.js";import"./FormControlLabel-jfsl2tBz.js";import"./UploadDocumentField-vTHhY96p.js";import"./FileUpload-BF1y4fhu.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BZxqqNfY.js";import"./GridLegacy-z_jjh39R.js";import"./ResearchProjectForm-rkqfHN6t.js";import"./TextFieldWithWordLimit-ByRapuRL.js";import"./AuthenticatedRequirement-zY2EGwkJ.js";import"./CertificationRequirement-COnjPjxb.js";import"./TwoFactorAuthEnabledRequirement-DHVr8HHg.js";import"./ValidationRequirement-Cm25_ffO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DxWzPYnc.js";import"./RejectDataAccessRequestModal-BpHKXGgE.js";import"./CannedRejectionDialog-B4WeUZgj.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DgOVI2l3.js";import"./Checkbox-CL29762Y.js";import"./Grid-CQsegt0C.js";import"./upperFirst-DqDmgRWc.js";import"./_stringToArray-CjoC6bkO.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
