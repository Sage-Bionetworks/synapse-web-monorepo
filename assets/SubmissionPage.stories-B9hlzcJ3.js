import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-C9UTN7n5.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-K_eIUk1I.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bz4xgFLC.js";import"./useAccessRequirements-3GKgLa2M.js";import"./index-C0fxb07w.js";import"./_baseOrderBy-wpc6i2AL.js";import"./_baseIteratee-C6RusqKP.js";import"./_baseMap-CwOwxQ_D.js";import"./_baseEach-CdgYGI7S.js";import"./useInfiniteQuery-DWfE7Y6F.js";import"./groupBy-nSJA0xJf.js";import"./_createAggregator-CPJ6Uj_y.js";import"./DialogBase-Mn6aWoit.js";import"./Close-CvxtVEvK.js";import"./HelpPopover-DluswABb.js";import"./MarkdownPopover-C9AtG64Z.js";import"./LightTooltip-DamcjSi2.js";import"./MarkdownSynapse-CW6ImeEG.js";import"./SkeletonButton-DrgaJ-bm.js";import"./SkeletonInlineBlock-D-Jy1SSP.js";import"./SkeletonTable-BS4xHemf.js";import"./SkeletonParagraph-C7pb8176.js";import"./EntityLink-CxYmyYoh.js";import"./useEntity-wCUUthKY.js";import"./pickBy-D3qrbo5r.js";import"./isString-DH2pOUh7.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-P91ojiDp.js";import"./useGetEntityHeaders-CW9wNnEz.js";import"./EntityIcon-D1i1100e.js";import"./ErrorChip-B_E_vK7e.js";import"./Chip-kWAD_96F.js";import"./UserOrTeamBadge-BGrwALGA.js";import"./useUserGroupHeader-DBo-Weqm.js";import"./TeamBadge-BP__OOdm.js";import"./UserBadge-CKhduYdW.js";import"./useUserBundle-B2NBOQIN.js";import"./MenuItem-CX39S6wD.js";import"./Card-l1x67oDf.js";import"./UnmanagedACTAccessRequirementItem-BmbbdIJr.js";import"./RequirementItem-vkMnBEA0.js";import"./LockTwoTone-Bq9iMu0B.js";import"./ManagedACTAccessRequirementItemView-DcNkER4a.js";import"./SelfSignAccessRequirementItem-BM_eyDzY.js";import"./DataAccessRequestAccessorsFilesForm-BG0A6-XC.js";import"./enums-BT8oHgc7.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CMvJDA2N.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Dn7WGB83.js";import"./UserSearchBox-sm9LaiV-.js";import"./useDebouncedEffect-y-WAkDO4.js";import"./Autocomplete-qFUnN2Zt.js";import"./usePreviousProps-CdqKSC2f.js";import"./RadioGroup-BcD3fC8o.js";import"./Radio-TAn0w4yP.js";import"./SwitchBase-CC_UmhM1.js";import"./FormGroup-DElMUxtZ.js";import"./FormControlLabel-DVTQJ-pq.js";import"./UploadDocumentField-BwxI5tHS.js";import"./FileUpload-CgkEzP7F.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B_o7v_9z.js";import"./GridLegacy-B1RlyKjO.js";import"./ResearchProjectForm-80s9fRU4.js";import"./TextFieldWithWordLimit-zj1xrtqB.js";import"./AuthenticatedRequirement-CqXxq5lN.js";import"./CertificationRequirement-CfAwG5E9.js";import"./TwoFactorAuthEnabledRequirement-DE-IWf5x.js";import"./ValidationRequirement-LUa4VynX.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-mrIjvvNQ.js";import"./RejectDataAccessRequestModal-DvkiMM2h.js";import"./CannedRejectionDialog-CmztHa50.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DQr-jfg-.js";import"./Checkbox-EGzeyNI9.js";import"./Grid-UfL_zCbJ.js";import"./upperFirst-P6SbilB-.js";import"./_stringToArray-CWWzRGBt.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
