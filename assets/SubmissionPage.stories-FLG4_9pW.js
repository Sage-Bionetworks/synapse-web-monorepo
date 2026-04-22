import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-KW3Ki4s5.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BnPh1EIg.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BUNlHtLl.js";import"./useAccessRequirements-CpHsZk-y.js";import"./index-CBVoQ7Md.js";import"./_baseOrderBy-nJrzT3qc.js";import"./_baseIteratee-Cq4s9rvn.js";import"./_baseMap-BQL-gxEZ.js";import"./_baseEach-fBObMu14.js";import"./useInfiniteQuery-B3Zfqdzl.js";import"./groupBy-BHw10tz_.js";import"./_createAggregator-BWmKJXy-.js";import"./DialogBase-CUOBFy-j.js";import"./Close-Cj_UWN_d.js";import"./HelpPopover-CtFwS0Vq.js";import"./MarkdownPopover-BFr6QtMT.js";import"./LightTooltip-DxSrPZ77.js";import"./MarkdownSynapse-Bf8TJuFS.js";import"./SkeletonButton-Bn8xeqTi.js";import"./SkeletonInlineBlock-Cx7fF-gW.js";import"./SkeletonTable-DKXzhoLj.js";import"./SkeletonParagraph-iKwtI13n.js";import"./EntityLink-1AqP0csA.js";import"./useEntity-BfHK77a0.js";import"./pickBy-bS4bFqsd.js";import"./isString-BDA1_wrZ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2a3n16o.js";import"./useGetEntityHeaders-zv2TIPZF.js";import"./EntityIcon-VbOgzeCp.js";import"./ErrorChip-DKuNveDB.js";import"./Chip-M2qGtBYy.js";import"./UserOrTeamBadge-DaBJZHjy.js";import"./UserBadge-CKE8L02R.js";import"./useUserBundle-DcHRF-pN.js";import"./MenuItem-Cxj9mVkl.js";import"./Card-BJGUbHlx.js";import"./TeamBadge-3V3sElnX.js";import"./UnmanagedACTAccessRequirementItem-DksxyZ-S.js";import"./RequirementItem-9DxxgL7d.js";import"./CheckTwoTone-CRfeMWeQ.js";import"./ManagedACTAccessRequirementItemView-DRL30qbq.js";import"./SelfSignAccessRequirementItem-CVW2hxLN.js";import"./DataAccessRequestAccessorsFilesForm-5alb1IUK.js";import"./enums-cdZvaRsE.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DT6wMWai.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CiHXaPKq.js";import"./UserSearchBox-ycH3wZtb.js";import"./useDebouncedEffect-DI29ADIv.js";import"./Autocomplete-BW2G6CrW.js";import"./usePreviousProps-pcPmgYqd.js";import"./RadioGroup-BmiYPJB7.js";import"./Radio-DP9THWnr.js";import"./SwitchBase-Bk1kmRTR.js";import"./FormGroup-VCMvMds2.js";import"./FormControlLabel-DD0DDA_y.js";import"./UploadDocumentField-BV31ELpG.js";import"./FileUpload-DjzXP5Wh.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Czg0BW59.js";import"./GridLegacy-DUUOqm4c.js";import"./ResearchProjectForm-DTa-oZjE.js";import"./TextFieldWithWordLimit-VZcD22uO.js";import"./AuthenticatedRequirement-bcRd6jMC.js";import"./CertificationRequirement-D1MpWVn_.js";import"./TwoFactorAuthEnabledRequirement-Bfmzv_FF.js";import"./ValidationRequirement-BP3jexOT.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-VbffeF7r.js";import"./RejectDataAccessRequestModal-CwQT9Dc7.js";import"./CannedRejectionDialog-DomDWS5t.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Bz6P-Mwf.js";import"./Checkbox-D-msWVBX.js";import"./Grid-ByDfa41p.js";import"./upperFirst-DPA9-TF1.js";import"./_stringToArray-CF7PN5Kk.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
