import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-AuqRm6Xj.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CG3Yc8fn.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Ck-b4j4g.js";import"./useAccessRequirements-CAqgXTxN.js";import"./index-D5YJAeH4.js";import"./_baseOrderBy-QA6TCxfl.js";import"./_baseIteratee-VmDtVic5.js";import"./_baseMap-B9GZp46S.js";import"./_baseEach-CbR7Csp5.js";import"./useInfiniteQuery-CwU4w13D.js";import"./groupBy-CvqRaqir.js";import"./_createAggregator-BtQAak8v.js";import"./DialogBase-Bp-oXsnD.js";import"./Close-wXc8W0YL.js";import"./HelpPopover-u8xzPavD.js";import"./MarkdownPopover-Dmj83Psx.js";import"./LightTooltip-BMQNdjTq.js";import"./MarkdownSynapse-DiqCpyPK.js";import"./SkeletonButton-De9SiVJE.js";import"./SkeletonInlineBlock-CL4j-wc-.js";import"./SkeletonTable-C0VRg4xn.js";import"./SkeletonParagraph-B6IfoMOd.js";import"./EntityLink-DOi20-gG.js";import"./useEntity-C-6R0MnF.js";import"./pickBy-C1skkiRy.js";import"./isString-CmiKb-kR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DhR_HRI3.js";import"./useGetEntityHeaders-DXbBnZmt.js";import"./EntityIcon-B-LU0QLq.js";import"./ErrorChip-CgEeHnEz.js";import"./Chip-DC7pM5qx.js";import"./UserOrTeamBadge-Cdcrt_cw.js";import"./UserBadge-94-bM4a7.js";import"./useUserBundle-B1FabnzQ.js";import"./MenuItem-e1skeM_z.js";import"./Card-D38Rt5-Y.js";import"./TeamBadge-OO8nhNc2.js";import"./UnmanagedACTAccessRequirementItem-BqBBbuAe.js";import"./RequirementItem-Bwiihhdd.js";import"./LockTwoTone-DJ797Ifb.js";import"./ManagedACTAccessRequirementItemView--PwKVTxt.js";import"./SelfSignAccessRequirementItem-DLJyUbf8.js";import"./DataAccessRequestAccessorsFilesForm-C8_oazDC.js";import"./enums-DqIDqCng.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BnnTlw4E.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-cXnJ3Rr6.js";import"./UserSearchBox-DGIHJwIi.js";import"./useDebouncedEffect-Dl0caD6t.js";import"./Autocomplete-C2p2_ZC-.js";import"./usePreviousProps-CeiRwp8W.js";import"./RadioGroup-5zH9ftG3.js";import"./Radio-BmcBe5E_.js";import"./SwitchBase-DkN8Vn3a.js";import"./FormGroup-CgpqwVTC.js";import"./FormControlLabel-hQp6mAf4.js";import"./UploadDocumentField-BZnVJRJ0.js";import"./FileUpload-B8OtA5Vc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B5uvtQoQ.js";import"./GridLegacy-BtG_kqNZ.js";import"./ResearchProjectForm-ILTs8940.js";import"./TextFieldWithWordLimit-DSl1DGiO.js";import"./AuthenticatedRequirement-Da_nZ385.js";import"./CertificationRequirement-7V1L1_o9.js";import"./TwoFactorAuthEnabledRequirement-DGpi-z0s.js";import"./ValidationRequirement-HC3-OpkZ.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D9G1Qz4c.js";import"./RejectDataAccessRequestModal-B9dt4ArR.js";import"./CannedRejectionDialog-PHbvJOYV.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-VlIF6_Hw.js";import"./Checkbox-MxfcR8V3.js";import"./Grid-DZvB9Er5.js";import"./upperFirst-Ds8KtOl2.js";import"./_stringToArray-CNcORhQd.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
