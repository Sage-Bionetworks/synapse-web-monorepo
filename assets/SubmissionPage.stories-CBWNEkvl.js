import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-b13k1F7I.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DZYdh0If.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CiMmjB3H.js";import"./useAccessRequirements-C_2FPiVV.js";import"./index-BnGRXv6y.js";import"./_baseOrderBy-GD0DasP4.js";import"./_baseIteratee-23LNJ6-w.js";import"./_baseMap-DxEPckuz.js";import"./_baseEach-CnMRyE2M.js";import"./useInfiniteQuery-BuA9b8--.js";import"./groupBy-Cgdw_bRr.js";import"./_createAggregator-DRIV1Ao2.js";import"./DialogBase-UKhXgfvV.js";import"./Close-BXhjNoKM.js";import"./HelpPopover-DLt1mKAE.js";import"./MarkdownPopover-HHq_PWe6.js";import"./LightTooltip-C-QkzhbA.js";import"./MarkdownSynapse-DgVHOn26.js";import"./SkeletonButton-DVR5pv_e.js";import"./SkeletonInlineBlock-DRQHTWc8.js";import"./SkeletonTable-DL4vBEzw.js";import"./SkeletonParagraph-fVALJo5f.js";import"./EntityLink-CN1oPUQL.js";import"./useEntity-DRqW8oup.js";import"./pickBy-DljaCT6B.js";import"./isString-47yTQKmz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CHgiIjNJ.js";import"./useGetEntityHeaders-9wAdbWzp.js";import"./EntityIcon-CQ6uc2UA.js";import"./ErrorChip-lyFve5ja.js";import"./Chip-DjWJ18GV.js";import"./UserOrTeamBadge-BccMONXY.js";import"./UserBadge-CsnCA53P.js";import"./useUserBundle-earXxlZb.js";import"./MenuItem-DH1v1_Sf.js";import"./Card-Ctn6KCGb.js";import"./TeamBadge-BDdzFKaF.js";import"./UnmanagedACTAccessRequirementItem-D01zlPoI.js";import"./RequirementItem-BMJM-OD4.js";import"./LockTwoTone-B-KBD6Jw.js";import"./ManagedACTAccessRequirementItemView-C46WF9z-.js";import"./SelfSignAccessRequirementItem-BMJsqVLv.js";import"./DataAccessRequestAccessorsFilesForm-BgcmZgas.js";import"./enums-jOBQv3an.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CGBvLNmc.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Dv_EU9TG.js";import"./UserSearchBox-CXUMS53t.js";import"./useDebouncedEffect-2rm6Hem2.js";import"./Autocomplete-DG-a6nC4.js";import"./usePreviousProps-CbDsT3dl.js";import"./RadioGroup-DltUBXtG.js";import"./Radio-2Hg0FfFc.js";import"./SwitchBase-C4-cm1yw.js";import"./FormGroup-DIUewMg5.js";import"./FormControlLabel-CCbquEuR.js";import"./UploadDocumentField-DmJmaz6U.js";import"./FileUpload-DAIsnBdK.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C3Cc9BU8.js";import"./GridLegacy-CtlSbo_h.js";import"./ResearchProjectForm-BHUIiwcW.js";import"./TextFieldWithWordLimit-BzTbA9Yb.js";import"./AuthenticatedRequirement-f4JAskCl.js";import"./CertificationRequirement-Bs_1xcSr.js";import"./TwoFactorAuthEnabledRequirement-BTRNBWz4.js";import"./ValidationRequirement-BrvB6w8w.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D_YkM2gl.js";import"./RejectDataAccessRequestModal-LC3ear-o.js";import"./CannedRejectionDialog-Dle_gkiK.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DlQ1ryI4.js";import"./Checkbox-QC8XFCZJ.js";import"./Grid-DVknrE2l.js";import"./upperFirst-D61JcFJw.js";import"./_stringToArray-mU-lGfHq.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
