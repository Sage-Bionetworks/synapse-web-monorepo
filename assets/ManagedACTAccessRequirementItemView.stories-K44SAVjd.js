import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CR4qI0Ep.js";import{ht as n,t as r,w as i}from"./dist-jiKX-16m.js";import{i as a,u as o}from"./mockAccessRequirements-DHvPpred.js";import{n as s,t as c}from"./MarkdownSynapse-B20Qte90.js";import{n as l,t as u}from"./ManagedACTAccessRequirementItemView-CCtkRRKg.js";var d,f,p,m,h,g,_,v,y,b,x;e((()=>{s(),a(),r(),l(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Governance/Data Access Request Flow/Requirements/ManagedACTAccessRequirementItem`,component:u,args:{accessRequirement:o,wikiPage:(0,d.jsx)(c,{markdown:`These are the AR instructions presented to the user.
1. Fill out this form
2. Wait a bit
3. We will give you access`}),isLoading:!1,onRejectTerms:f(),onRequestAccess:f(),onCancelDataAccessRequest:f(),cancelRequestIsPending:!1},tags:[`autodocs`]},m={args:{accessRequirementStatus:{accessRequirementId:String(o.id),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!1}}},h={args:{accessRequirementStatus:{accessRequirementId:String(o.id),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!0,currentSubmissionStatus:{submissionId:`1`,submittedBy:`123456`,modifiedOn:`2023-05-10T16:54:53.333Z`,state:n.APPROVED}}}},g={args:{accessRequirementStatus:{accessRequirementId:String(o.id),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!1,currentSubmissionStatus:{submissionId:`1`,submittedBy:`123456`,modifiedOn:`2023-05-10T16:54:53.333Z`,state:n.SUBMITTED}}}},_={args:{accessRequirementStatus:{accessRequirementId:String(o.id),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!1,currentSubmissionStatus:{submissionId:`1`,submittedBy:`123456`,modifiedOn:`2023-05-10T16:54:53.333Z`,state:n.CANCELLED}}}},v={args:{accessRequirementStatus:{accessRequirementId:String(o.id),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!1,expiredOn:`2023-05-10T16:54:53.333Z`,currentSubmissionStatus:{submissionId:`1`,submittedBy:`123456`,modifiedOn:`2023-05-10T16:54:53.333Z`,state:n.APPROVED}}}},y={args:{accessRequirementStatus:{accessRequirementId:String(o.id),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!1,currentSubmissionStatus:{submissionId:`1`,submittedBy:`123456`,modifiedOn:`2023-05-10T16:54:53.333Z`,state:n.REJECTED,rejectedReason:`This is a mock rejection reason for testing purposes.`}}}},b={args:{accessRequirementStatus:{accessRequirementId:String(o.id),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!1},restrictionInformation:{objectId:o.id,restrictionLevel:i.CONTROLLED_BY_ACT,hasUnmetAccessRequirement:!0,restrictionDetails:[{accessRequirementId:o.id,isApproved:!1,isMet:!0,isExempt:!0}]}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: true,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.APPROVED
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.SUBMITTED
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.CANCELLED
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      expiredOn: '2023-05-10T16:54:53.333Z',
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.APPROVED
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.REJECTED,
        rejectedReason: 'This is a mock rejection reason for testing purposes.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false
    },
    restrictionInformation: {
      objectId: mockManagedACTAccessRequirement.id,
      restrictionLevel: RestrictionLevel.CONTROLLED_BY_ACT,
      hasUnmetAccessRequirement: true,
      restrictionDetails: [{
        accessRequirementId: mockManagedACTAccessRequirement.id,
        isApproved: false,
        isMet: true,
        isExempt: true
      }]
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Approved`,`Pending`,`Cancelled`,`Expired`,`Rejected`,`ExemptFromAccessRequirement`]}))();export{h as Approved,_ as Cancelled,m as Default,b as ExemptFromAccessRequirement,v as Expired,g as Pending,y as Rejected,x as __namedExportsOrder,p as default};