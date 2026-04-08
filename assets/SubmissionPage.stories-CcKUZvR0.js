import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-DvDRa5Q6.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-t2aAQXzb.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-WZZVOzAP.js";import"./useAccessRequirements-43ONejHS.js";import"./index-DCaH_YMW.js";import"./_baseOrderBy-B5hExVXf.js";import"./_baseIteratee-CmNCC7oz.js";import"./_baseMap-BG4Szxcl.js";import"./_baseEach-CMAF8SZ0.js";import"./useInfiniteQuery-zp3UrFFS.js";import"./groupBy-9ZI6trbj.js";import"./_createAggregator-DWhcJogl.js";import"./DialogBase-C4ETi5eI.js";import"./Close-LY7gHL5l.js";import"./HelpPopover-eW4-Xo3-.js";import"./MarkdownPopover-DkJdSjeV.js";import"./LightTooltip-CEbfXtfJ.js";import"./MarkdownSynapse-DpW9Rmmz.js";import"./SkeletonButton-DldMG8YD.js";import"./SkeletonInlineBlock-CqjLFWuf.js";import"./SkeletonTable-BUXMgZAX.js";import"./SkeletonParagraph-DNQOFkBl.js";import"./EntityLink-CbShp25v.js";import"./useEntity-DiocNvqG.js";import"./pickBy-CYz8iHO0.js";import"./isString-DXLKKj12.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DdudX2f2.js";import"./useGetEntityHeaders-whNjPgbz.js";import"./EntityIcon-D1Nxz1mH.js";import"./ErrorChip-DuLjw1m2.js";import"./Chip-dgVEWiiO.js";import"./UserOrTeamBadge-DvGSFVbO.js";import"./useUserGroupHeader-Di1qf-9O.js";import"./TeamBadge-CvVZSTwn.js";import"./UserBadge-DSzzvC5n.js";import"./useUserBundle-BPf8B545.js";import"./MenuItem-CBuG7QWi.js";import"./Card-C4dlgrEE.js";import"./UnmanagedACTAccessRequirementItem-MlP4N0YW.js";import"./RequirementItem-BsEiYJv_.js";import"./LockTwoTone-fBGqxHZi.js";import"./ManagedACTAccessRequirementItemView-ByGqeC4u.js";import"./SelfSignAccessRequirementItem-Bisv-EtK.js";import"./DataAccessRequestAccessorsFilesForm-e6lt1k-9.js";import"./enums-BfZC44HI.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-cjoB-8xF.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BoEJ0ZLX.js";import"./UserSearchBox-Dt5Xw7MC.js";import"./useDebouncedEffect-BtDyulUe.js";import"./Autocomplete-Duafx-n8.js";import"./usePreviousProps-2pyxAmjn.js";import"./RadioGroup-BezTVJLI.js";import"./Radio-9-xX1iPR.js";import"./SwitchBase-CRLg36Mp.js";import"./FormGroup-C1yesecY.js";import"./FormControlLabel-CKHXVKum.js";import"./UploadDocumentField-B4bRJBDa.js";import"./FileUpload-Cd_e_UHo.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DeDEnrk8.js";import"./GridLegacy-BgXMX0Cu.js";import"./ResearchProjectForm-XIS5c2zg.js";import"./TextFieldWithWordLimit-D2SAnM73.js";import"./AuthenticatedRequirement-CyivBLrq.js";import"./CertificationRequirement-qQq2zxQP.js";import"./TwoFactorAuthEnabledRequirement-CQKhBanY.js";import"./ValidationRequirement-DAappCXs.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Ds3--oiE.js";import"./RejectDataAccessRequestModal-CBzds7WJ.js";import"./CannedRejectionDialog-BCKCHAmj.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Cst2iXxg.js";import"./Checkbox-Cn1-qDlO.js";import"./Grid-DLUmUbFh.js";import"./upperFirst-C5oQdrOI.js";import"./_stringToArray-CFf1zAOG.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
