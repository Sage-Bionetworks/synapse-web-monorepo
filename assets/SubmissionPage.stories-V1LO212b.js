import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-xQMv0B7c.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-rhX1L1sd.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DUwJY4xU.js";import"./useAccessRequirements-CS4PK7gM.js";import"./index-CXBvLS03.js";import"./_baseOrderBy-CoiZOdYB.js";import"./_baseIteratee-CSd0qoWC.js";import"./_baseMap-B4rPe6R-.js";import"./_baseEach-BGb-mPrr.js";import"./useInfiniteQuery-B0ejREUV.js";import"./groupBy-bv1hsZ0J.js";import"./_createAggregator-CAdqLHe9.js";import"./DialogBase-BBkRPs_T.js";import"./Close-BXgmGCmp.js";import"./HelpPopover-gF13SbSs.js";import"./MarkdownPopover-B19tLMSb.js";import"./LightTooltip-CxGW4K1V.js";import"./MarkdownSynapse-CaHYMk_z.js";import"./SkeletonButton-BO78PNXN.js";import"./SkeletonInlineBlock-DTwWIKu1.js";import"./SkeletonTable-C8xyrBR9.js";import"./SkeletonParagraph-B_dMNDrm.js";import"./EntityLink-BkSqVf9-.js";import"./useEntity-Bub6w0mt.js";import"./pickBy-Dz9fSFLS.js";import"./isString-BV9IZ56Z.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Yb-HzIGK.js";import"./useGetEntityHeaders-BT56odZ9.js";import"./EntityIcon-Dr_GtkmV.js";import"./ErrorChip-BhVoFYl3.js";import"./Chip-T-Cvxbkm.js";import"./UserOrTeamBadge-BDeoBNcA.js";import"./UserBadge-Dy2rNvc3.js";import"./useUserBundle-CwvRZ8ZR.js";import"./MenuItem-CFXGxp9X.js";import"./Card-Djer30mf.js";import"./TeamBadge-D5j9eOzO.js";import"./UnmanagedACTAccessRequirementItem-DK-RiJOC.js";import"./RequirementItem-CdyHYI5Q.js";import"./CheckTwoTone-eGxGGwrd.js";import"./ManagedACTAccessRequirementItemView-C0UEsYWU.js";import"./SelfSignAccessRequirementItem-CQixO_uS.js";import"./DataAccessRequestAccessorsFilesForm-Cg4Guu1l.js";import"./enums-B2pY9zzL.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BTkV8g8p.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CkeZMOjV.js";import"./UserSearchBox-35hob7Gf.js";import"./useDebouncedEffect-BEyucQ_z.js";import"./Autocomplete-BIwzOm9_.js";import"./usePreviousProps-vfY-8rpx.js";import"./RadioGroup-CgN6Lzx7.js";import"./Radio-D69wXDzv.js";import"./SwitchBase-BC6L5hXz.js";import"./FormGroup-BGkderdo.js";import"./FormControlLabel-GDbx5q6Y.js";import"./UploadDocumentField-Ba7_ChF7.js";import"./FileUpload-BII46BsX.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BjkU0gVS.js";import"./GridLegacy-CvuJQ9fU.js";import"./ResearchProjectForm-Dnj5pcl-.js";import"./TextFieldWithWordLimit-1LJkhwrZ.js";import"./AuthenticatedRequirement-Bk8WqQxD.js";import"./CertificationRequirement-BDA0CuXL.js";import"./TwoFactorAuthEnabledRequirement-BbJ7SBLf.js";import"./ValidationRequirement-BDBW2fVa.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-ZpySVn1H.js";import"./RejectDataAccessRequestModal-KX6kyRCZ.js";import"./CannedRejectionDialog-BZ99855C.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Dog3I0Kz.js";import"./Checkbox-BTp39wUH.js";import"./Grid-BaquKNQu.js";import"./upperFirst-TsxSqB1z.js";import"./_stringToArray-CFZ18beS.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
