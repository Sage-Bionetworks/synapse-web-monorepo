import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-D6P0nkNQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B7kp1Dm_.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BnConxZ-.js";import"./useAccessRequirements--XIHuGmg.js";import"./index-ClysohDO.js";import"./_baseOrderBy-TCniqArR.js";import"./_baseIteratee-CU8XNsfN.js";import"./_baseMap-c8a03t3y.js";import"./_baseEach-DEfOtqE_.js";import"./useInfiniteQuery-BabK25aM.js";import"./groupBy-BpwDx7OY.js";import"./_createAggregator-B_r-JxGO.js";import"./DialogBase-CYnhOgAU.js";import"./Close-BEd3pYVj.js";import"./HelpPopover-CaKE4C1W.js";import"./MarkdownPopover-C0soPO-I.js";import"./LightTooltip-Q195xsL6.js";import"./MarkdownSynapse-Csu_X-L3.js";import"./SkeletonButton-CpvcVcC6.js";import"./SkeletonInlineBlock-cwgAS3YS.js";import"./SkeletonTable-B5s8sRSp.js";import"./SkeletonParagraph-Dny_21Xp.js";import"./EntityLink-CdffyvgF.js";import"./useEntity-CYJXIEUn.js";import"./pickBy-n2ZPQlcK.js";import"./isString-BnRjPazD.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BU7atwFz.js";import"./useGetEntityHeaders-bIkgrE29.js";import"./EntityIcon-DrCkpZrq.js";import"./ErrorChip-C8AFXqDu.js";import"./Chip-BsvDvlw9.js";import"./UserOrTeamBadge-4CHYFhob.js";import"./UserBadge-BfOkKJj6.js";import"./useUserBundle-Da75ZNju.js";import"./MenuItem-BFhkC2rz.js";import"./Card-Km0k0NLl.js";import"./TeamBadge-Cz55Lg_4.js";import"./UnmanagedACTAccessRequirementItem-BQHC97_w.js";import"./RequirementItem-h3mF5Q3u.js";import"./CheckTwoTone-CcKjX1KY.js";import"./ManagedACTAccessRequirementItemView-DpMy3-dL.js";import"./SelfSignAccessRequirementItem-C06MUqF5.js";import"./DataAccessRequestAccessorsFilesForm-FQNJJN9f.js";import"./enums-BfxA0lae.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DeV4X-ky.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BDSI77Zt.js";import"./UserSearchBox-Bo-K_kMI.js";import"./useDebouncedEffect-Bs2LG_Ac.js";import"./Autocomplete-DqltHcl4.js";import"./usePreviousProps-Duwj02pS.js";import"./RadioGroup-_08wv5Uc.js";import"./Radio-5QzAgrml.js";import"./SwitchBase-Cxiym2LW.js";import"./FormGroup-C0FtPd7k.js";import"./FormControlLabel-C3dQ3TAO.js";import"./UploadDocumentField-hgUgvBBf.js";import"./FileUpload-pMAK9gOG.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BFlncBVv.js";import"./GridLegacy-COOgj5XT.js";import"./ResearchProjectForm-VVGaweCX.js";import"./TextFieldWithWordLimit-Duo0F24O.js";import"./AuthenticatedRequirement-ELj50m96.js";import"./CertificationRequirement-C2GypM36.js";import"./TwoFactorAuthEnabledRequirement-CSOhgTI1.js";import"./ValidationRequirement-Ct-uRUVp.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-syWTiRR1.js";import"./RejectDataAccessRequestModal-BfW9IsyE.js";import"./CannedRejectionDialog-BoZWX1R4.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DbhMChYr.js";import"./Checkbox-BbO_eIS6.js";import"./Grid-BDZmSCq2.js";import"./upperFirst-BPDVDv7N.js";import"./_stringToArray-X6SmT2C1.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
