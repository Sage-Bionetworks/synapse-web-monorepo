import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-DUgvw_e1.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DYiSYZSu.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CE2VOExk.js";import"./useAccessRequirements-e0J-uQ6G.js";import"./index-D5BySe1V.js";import"./_baseOrderBy-BA14F0fV.js";import"./_baseIteratee-DEPznUuf.js";import"./_baseMap-CaX1bcDJ.js";import"./_baseEach-DYGtEyDy.js";import"./useQueries-CSyyVGU0.js";import"./useInfiniteQuery-DR51fsMw.js";import"./groupBy-BqtP3Yrr.js";import"./_createAggregator-CuroeDcY.js";import"./DialogBase-0-bDisQA.js";import"./Close-BEr3H63z.js";import"./HelpPopover-BS0U5Svz.js";import"./MarkdownPopover-8PnwzX9y.js";import"./LightTooltip-pkrnltrn.js";import"./MarkdownSynapse-C3JndqNi.js";import"./SkeletonButton-CHYteE0_.js";import"./SkeletonInlineBlock-C0f092qz.js";import"./SkeletonTable-wy_brudp.js";import"./SkeletonParagraph-zF20ua7-.js";import"./EntityLink-CAqjujtb.js";import"./useEntity-D5Wm4qKm.js";import"./pickBy-CfLXoUS2.js";import"./isString-BaxO8cnH.js";import"./useSuspenseQuery-ox9OnZJk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjR-jaM9.js";import"./useGetEntityHeaders-vwe8_vj5.js";import"./EntityIcon-B-Y05S76.js";import"./ErrorChip-xtIq5SxP.js";import"./Chip-D6AY4yga.js";import"./UserOrTeamBadge-BR8pSTgs.js";import"./UserBadge-D8J1ZLdA.js";import"./useUserBundle-DplDm6GV.js";import"./MenuItem-DFV-o_UX.js";import"./Card-BDbGewBq.js";import"./TeamBadge-ilp_6bmi.js";import"./useRealmPrincipals-fdFgSFA-.js";import"./UnmanagedACTAccessRequirementItem-CjHSVJbI.js";import"./RequirementItem-DzbAvzD6.js";import"./LockTwoTone-G3f_IcGU.js";import"./UserSearchBoxV2-C-SnilQ_.js";import"./useDebouncedEffect-BfM37di2.js";import"./use-deep-compare-effect.esm-CjYY6bBe.js";import"./uniq-4I4fGcu8.js";import"./without-CFz4Jv-t.js";import"./Select-aab027f3.esm-ka4o34aa.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B_QL16Zp.js";import"./SelfSignAccessRequirementItem-CtGl9ygY.js";import"./DataAccessRequestAccessorsFilesForm-CgSshZ_1.js";import"./enums-CEIjLvSD.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CsqvUA3v.js";import"./RadioGroup-PgMCeIGk.js";import"./Radio-DJaDrtli.js";import"./SwitchBase-BVmFI5tz.js";import"./FormGroup-DTxPkf0s.js";import"./FormControlLabel-B9NBpo6a.js";import"./UploadDocumentField-BhCg9ROz.js";import"./FileUpload-DIaMquOt.js";import"./ManagedACTAccessRequirementFormWikiWrapper-QOXiQ8Rf.js";import"./GridLegacy-CzbNvx7s.js";import"./ResearchProjectForm-DQP3iZyN.js";import"./TextFieldWithWordLimit-D_N5b2j8.js";import"./AuthenticatedRequirement-8M_gEErl.js";import"./CertificationRequirement-rQizAgy7.js";import"./TwoFactorAuthEnabledRequirement-B9bBmXlc.js";import"./ValidationRequirement-p0zK1Mxs.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-f3mJSywV.js";import"./RejectDataAccessRequestModal-FuKrjy5x.js";import"./CannedRejectionDialog-ZisidQkT.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Bvq2Xms7.js";import"./Checkbox-PIprMSav.js";import"./Grid-CBalzoNK.js";import"./upperFirst-BVDc_1Kp.js";import"./_stringToArray-CY9jB99f.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
