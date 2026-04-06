import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BPNyJNxm.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-XlsFkNyF.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B8rUQwb3.js";import"./useAccessRequirements-CPn0ZvtY.js";import"./index-Br3ickc1.js";import"./_baseOrderBy-roILrO3o.js";import"./_baseIteratee-j2vHxdg-.js";import"./_baseMap-vlPjx_9F.js";import"./_baseEach-CZ4hYEvj.js";import"./useInfiniteQuery-XrkzDwnB.js";import"./groupBy-DQGAI_e_.js";import"./_createAggregator-T_6oP6Of.js";import"./DialogBase-DSrJGPMK.js";import"./Close-wqX4il5f.js";import"./HelpPopover-cbCWQpx5.js";import"./MarkdownPopover-DYWWH0E2.js";import"./LightTooltip-D69z1M63.js";import"./MarkdownSynapse-D3aSYsDm.js";import"./SkeletonButton-DKmXtnFb.js";import"./SkeletonInlineBlock-YVxGd7KG.js";import"./SkeletonTable-DBeYWS70.js";import"./SkeletonParagraph-BxBZJF2o.js";import"./EntityLink-AjRi6V-b.js";import"./useEntity-g0LGIseq.js";import"./pickBy-DiD8FMOP.js";import"./isString-LELON9p1.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DQkGL32t.js";import"./useGetEntityHeaders-CR1lm3HN.js";import"./EntityIcon-BKz4CsgU.js";import"./ErrorChip-BhmEl-76.js";import"./Chip-Hk6f0McD.js";import"./UserOrTeamBadge-37LRL7Gh.js";import"./UserBadge-BPa7l308.js";import"./useUserBundle-D2j_CZi9.js";import"./MenuItem-CEXBRyzq.js";import"./Card-B4zIQ-hG.js";import"./TeamBadge-DEYlikwi.js";import"./UnmanagedACTAccessRequirementItem-DZxVoSE4.js";import"./RequirementItem-CV8j8IiE.js";import"./LockTwoTone-DEjdlvxe.js";import"./ManagedACTAccessRequirementItemView-DqWTaBFm.js";import"./SelfSignAccessRequirementItem-Ct7QnDVh.js";import"./DataAccessRequestAccessorsFilesForm-22cTLGn6.js";import"./enums-DLwho4m7.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-WHQqfLoB.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Cn2MANg_.js";import"./UserSearchBox-B0co5a5L.js";import"./useDebouncedEffect-CpYTiak8.js";import"./Autocomplete-BP7i1wvE.js";import"./usePreviousProps--x0xYk9p.js";import"./RadioGroup-CocA3QwB.js";import"./Radio-CiW1w_Pp.js";import"./SwitchBase-BHyxwE7g.js";import"./FormGroup-DdzO-B-4.js";import"./FormControlLabel-DMh_lHXX.js";import"./UploadDocumentField-BHMA9-6D.js";import"./FileUpload-DYv_agrk.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DZrmvNPj.js";import"./GridLegacy-C7hN4aXS.js";import"./ResearchProjectForm-DQb0GcCs.js";import"./TextFieldWithWordLimit-BnEGx6Il.js";import"./AuthenticatedRequirement-OlHDGaz9.js";import"./CertificationRequirement-i13vPSJf.js";import"./TwoFactorAuthEnabledRequirement-By8J-3WJ.js";import"./ValidationRequirement-f5i5Hb8A.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B7gD_Gy_.js";import"./RejectDataAccessRequestModal-BfPb3jTB.js";import"./CannedRejectionDialog-D0u_QAFZ.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BpyGFD_j.js";import"./Checkbox-G1oNYZiA.js";import"./Grid-BO2Ij0QT.js";import"./upperFirst-ByG2WLne.js";import"./_stringToArray-3y_jUrCI.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
