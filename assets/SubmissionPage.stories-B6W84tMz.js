import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-ClOjSJTq.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CXBxs6G5.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-JCkFkyBE.js";import"./useAccessRequirements-lD4_jFjj.js";import"./index-35chbdE6.js";import"./_baseOrderBy-Db020ehJ.js";import"./_baseIteratee-DSUbmYQr.js";import"./_baseMap-CzWHLApD.js";import"./_baseEach-DVm10B22.js";import"./useInfiniteQuery-KGAKspLs.js";import"./groupBy-CA2ydlz7.js";import"./_createAggregator-Dz6W_S6v.js";import"./DialogBase-B-Ztm902.js";import"./Close-Bm9lWJyo.js";import"./HelpPopover-C7jMTeEB.js";import"./MarkdownPopover-Bc65lpb5.js";import"./LightTooltip-BNOwvCMp.js";import"./MarkdownSynapse-BDWo9JUV.js";import"./SkeletonButton-_jksuL_Y.js";import"./SkeletonInlineBlock-BlfzAWSG.js";import"./SkeletonTable-j4z7TzDn.js";import"./SkeletonParagraph-C8wM_A5n.js";import"./EntityLink-UP3hfZru.js";import"./useEntity-B5q0foS7.js";import"./pickBy-tj_hzmtS.js";import"./isString-D-YS4RG8.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BuxfqmKk.js";import"./useGetEntityHeaders-C62MEdMW.js";import"./EntityIcon-CCEPTjL6.js";import"./ErrorChip-Cpey7UJM.js";import"./Chip-CnxOiplN.js";import"./UserOrTeamBadge-C23S8KZO.js";import"./UserBadge-BJCbmXWW.js";import"./useUserBundle-F9LYJoss.js";import"./MenuItem-DYvQjb0q.js";import"./Card-ChQtRhb_.js";import"./TeamBadge-Ce6zs6pC.js";import"./UnmanagedACTAccessRequirementItem-BVkR7ol1.js";import"./RequirementItem-JPtwOHBM.js";import"./LockTwoTone-In6UQemI.js";import"./ManagedACTAccessRequirementItemView-BtpqwZX3.js";import"./SelfSignAccessRequirementItem-Ct4ZDbWV.js";import"./DataAccessRequestAccessorsFilesForm-5UpIKfEc.js";import"./enums-BfvqQesP.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BzOjiWUl.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DnQddRpy.js";import"./UserSearchBox-TiAKfxMp.js";import"./useDebouncedEffect-BKM7Wg5j.js";import"./Autocomplete-SfvGNW1s.js";import"./usePreviousProps-D9lcDy2V.js";import"./RadioGroup-CW7vhLhh.js";import"./Radio-aXYQtjHX.js";import"./SwitchBase-CdsD8oG7.js";import"./FormGroup-CJnG9yeP.js";import"./FormControlLabel-CFZjeheO.js";import"./UploadDocumentField-DrBUpjcq.js";import"./FileUpload-nHJl4OHf.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C-XHO2va.js";import"./GridLegacy-Co_eJg5n.js";import"./ResearchProjectForm-B0huvbaY.js";import"./TextFieldWithWordLimit-BbHc2cmL.js";import"./AuthenticatedRequirement-aHekR-23.js";import"./CertificationRequirement-BHhm0O13.js";import"./TwoFactorAuthEnabledRequirement-BbMxE24q.js";import"./ValidationRequirement-BuKWIv9J.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B2qEMMcv.js";import"./RejectDataAccessRequestModal-dl3OxVLI.js";import"./CannedRejectionDialog-DXBb2BKu.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BJVxGzfJ.js";import"./Checkbox-CeKJbUBf.js";import"./Grid-DffX279F.js";import"./upperFirst-Fohds5Cf.js";import"./_stringToArray-D3Ldcqvh.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
