import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BDH9K3aQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-ZYxyh4hr.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Dk-oPzk0.js";import"./useAccessRequirements-DABEgAy5.js";import"./index-BEXoIJDe.js";import"./_baseOrderBy-Dgg6c-Or.js";import"./_baseIteratee-gLwaiEgY.js";import"./_baseMap-CoKNYOGS.js";import"./_baseEach-C6kEqMCn.js";import"./useInfiniteQuery-CsOZNg3u.js";import"./groupBy-CsRRKJdh.js";import"./_createAggregator-CxLL64-G.js";import"./DialogBase-B3CH9IvN.js";import"./Close-BQ3Dsdqr.js";import"./HelpPopover-rgAqoORW.js";import"./MarkdownPopover-DSGPjAkb.js";import"./LightTooltip-CH8V7Sc-.js";import"./MarkdownSynapse-BfgcgRyQ.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonTable-DpnDnZ6A.js";import"./SkeletonParagraph-4XI-GQEQ.js";import"./EntityLink-DSce9suh.js";import"./useEntity-BCHA_6TA.js";import"./pickBy-DIU2iB-5.js";import"./isString-yINtZ7vY.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCJbb9bm.js";import"./useGetEntityHeaders-BLOU8M4r.js";import"./EntityIcon-BLJ6fJg1.js";import"./ErrorChip-B-_ogSw1.js";import"./Chip-DozeHiZL.js";import"./UserOrTeamBadge-BtOsH5S_.js";import"./UserBadge-B2zVNa36.js";import"./useUserBundle-BHTJB607.js";import"./MenuItem-x7e5wLEf.js";import"./Card-BL3I6Ntg.js";import"./TeamBadge-DAPD5zpQ.js";import"./UnmanagedACTAccessRequirementItem-ByCGv425.js";import"./RequirementItem-H4w1jjZ7.js";import"./CheckTwoTone-pYnYaaJv.js";import"./ManagedACTAccessRequirementItemView-B12tAVUu.js";import"./SelfSignAccessRequirementItem-nHLgsX5k.js";import"./DataAccessRequestAccessorsFilesForm-oHcTCLNz.js";import"./enums-D6cq4fo8.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-tViP_YN6.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DYSh8nX5.js";import"./UserSearchBox-CJ-fBakk.js";import"./useDebouncedEffect-B44LhlfG.js";import"./Autocomplete-CwnIKOhs.js";import"./usePreviousProps-DxAgpis0.js";import"./RadioGroup-B486Tz3Q.js";import"./Radio-B6e-jRet.js";import"./SwitchBase-DtmVnPYE.js";import"./FormGroup-Ccm6WI4f.js";import"./FormControlLabel-hO8hM_0u.js";import"./UploadDocumentField-CiX3f6dE.js";import"./FileUpload-CmI0DnkA.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DLE2Pmdx.js";import"./GridLegacy-DAzkTeTm.js";import"./ResearchProjectForm-DRkWXVYU.js";import"./TextFieldWithWordLimit-Cge7STdi.js";import"./AuthenticatedRequirement-CSZIcYqF.js";import"./CertificationRequirement-enlXZDfP.js";import"./TwoFactorAuthEnabledRequirement-C22ehKBf.js";import"./ValidationRequirement-CGpsxey0.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BrMJNa8K.js";import"./RejectDataAccessRequestModal-DduJKj5d.js";import"./CannedRejectionDialog--7pDv6eU.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Baaf23T_.js";import"./Checkbox-Bh-etNab.js";import"./Grid-DIRRIcGz.js";import"./upperFirst-DoudgIYh.js";import"./_stringToArray-D5WIerbU.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
