import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-QSWh_nl6.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C2O5wC_F.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BGfwP01d.js";import"./useAccessRequirements-BOSef9kn.js";import"./index-D_eAvhKF.js";import"./_baseOrderBy-CRclIjEo.js";import"./_baseIteratee-CFwgFnBf.js";import"./_baseMap-Bmwx28tM.js";import"./_baseEach-C5TZrtK0.js";import"./useInfiniteQuery-B5lzZVtS.js";import"./groupBy-DCcF1Wjb.js";import"./_createAggregator-CuoAgiS5.js";import"./DialogBase-D2MmUTIb.js";import"./Close-QryVeLEP.js";import"./HelpPopover-Bcffqgpu.js";import"./MarkdownPopover-c1W7vBzm.js";import"./LightTooltip-6Ty6ser2.js";import"./MarkdownSynapse-CJNodr3S.js";import"./SkeletonButton-Ca6I-8rV.js";import"./SkeletonInlineBlock-rFa2WtsV.js";import"./SkeletonTable-D0oXxerW.js";import"./SkeletonParagraph-C2ql9lI3.js";import"./EntityLink-BMm54chF.js";import"./useEntity-MJbU_Wul.js";import"./pickBy-BIj1us4f.js";import"./isString-CMmyCM5R.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-1drniFxT.js";import"./useGetEntityHeaders-BtVEVJH9.js";import"./EntityIcon-DMgPS5gs.js";import"./ErrorChip-BOfzNWnQ.js";import"./Chip-BVgBfsjl.js";import"./UserOrTeamBadge-BDYwJpGM.js";import"./useUserGroupHeader-Bv8jkTw1.js";import"./TeamBadge-UW9RvGOB.js";import"./UserBadge-B7mCgiDb.js";import"./useUserBundle-Dx6kjAkx.js";import"./MenuItem-DfWOa7RV.js";import"./Card-Dsubg--P.js";import"./UnmanagedACTAccessRequirementItem-CamoGeFz.js";import"./RequirementItem-DY9rgAhz.js";import"./LockTwoTone-CN_sO413.js";import"./ManagedACTAccessRequirementItemView-DG8XrmbK.js";import"./SelfSignAccessRequirementItem-DqJu9tuZ.js";import"./DataAccessRequestAccessorsFilesForm-Cjt_Q5yb.js";import"./enums-CBiIZhXi.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BuJy3fYB.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DgWKJELg.js";import"./UserSearchBox-DF1Xsyn1.js";import"./useDebouncedEffect-aeI6dmOh.js";import"./Autocomplete-DzJi86KT.js";import"./usePreviousProps-B1yfhd_h.js";import"./RadioGroup-FREedS_I.js";import"./Radio-DTee15_T.js";import"./SwitchBase-o_ZrMHWt.js";import"./FormGroup-BcZ_TaKC.js";import"./FormControlLabel-C2B2UHHo.js";import"./UploadDocumentField-BiEmHjZJ.js";import"./FileUpload-CMzOwXhq.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CfUk16QD.js";import"./GridLegacy-BXLE0htJ.js";import"./ResearchProjectForm-BOz5mWVm.js";import"./TextFieldWithWordLimit-B6FpUfoJ.js";import"./AuthenticatedRequirement-BTWbDLrs.js";import"./CertificationRequirement-BYBStw2y.js";import"./TwoFactorAuthEnabledRequirement-B469KoPO.js";import"./ValidationRequirement-fPcwrS_X.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D_ziJfss.js";import"./RejectDataAccessRequestModal-DyxLxlTu.js";import"./CannedRejectionDialog-DIakKOlY.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CX4ewaN9.js";import"./Checkbox-CqoChSP_.js";import"./Grid-7NTKiOpp.js";import"./upperFirst-CYKWKndK.js";import"./_stringToArray-DbLtAhvp.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
