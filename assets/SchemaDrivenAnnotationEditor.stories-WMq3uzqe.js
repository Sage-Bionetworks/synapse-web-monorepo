import{ju as p}from"./iframe-qVlGQSuu.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BIvDHANH.js";import"./index-Chi_LkuB.js";import"./useEntity-Ct505i-Y.js";import"./pickBy-CICyjPiu.js";import"./isString-BzRHITTW.js";import"./_baseIteratee-BMx8UgrR.js";import"./useInfiniteQuery-BvxwsDiv.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DUfbyb2m.js";import"./useSchema-M49hbzz4.js";import"./index-CFXy9WMk.js";import"./enums-B8xqUN7w.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Gi_mbc02.js";import"./uniq-DkHOgfhe.js";import"./forEach-CWOCpBhE.js";import"./Add-BAad3Swa.js";import"./Grid-tYZNKxew.js";import"./ListItem-CcfgXQtS.js";import"./listItemButtonClasses-DuNAD9yD.js";import"./ListItemIcon-Bua1wLTM.js";import"./MenuItem-DFE2FoA8.js";import"./ListItemText-CcxoAkq7.js";import"./ArrowUpward-CULJnWnh.js";import"./ContentCopy-BT4IOSi6.js";import"./FormControlLabel-w4lUi-nf.js";import"./Checkbox-KSRMygSt.js";import"./SwitchBase-BeFAjXOG.js";import"./FormGroup-IGeDLAqs.js";import"./RadioGroup-BId-jOsM.js";import"./Radio-CP_FqIkz.js";import"./Slider-m2YXpjsf.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Ds9LhYtk.js";import"./DialogBase-zjWOIfZo.js";import"./Close-DTZpuwIC.js";import"./HelpPopover-BHPw_eXc.js";import"./MarkdownPopover-CmvfCcSZ.js";import"./LightTooltip-D3Im4lvV.js";import"./MarkdownSynapse-DTMlkJjz.js";import"./SkeletonButton-BV9DAa_g.js";import"./SkeletonInlineBlock-DBJoLAHS.js";import"./SkeletonTable-bCltNDze.js";import"./SkeletonParagraph-DMHFsIQV.js";import"./JsonSchemaForm-BLIVimo-.js";import"./GridLegacy-CqcFOcfW.js";import"./HelpTwoTone-DDeyGVF-.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DSNywsRH.js";import"./_createAggregator-3T-BPCUx.js";import"./_baseMap-Cti1-MBK.js";import"./DateTimePicker-BrvD_oBf.js";import"./useMobilePicker---JTEHZc.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DQCEf4x8.js";import"./index-Be9oNlvR.js";import"./Chip-BBDwaxyK.js";import"./Tabs-BqOLlFf4.js";import"./KeyboardArrowRight-tiNw6D97.js";import"./Autocomplete-D-Abkj-b.js";import"./usePreviousProps-BEDn6Prc.js";import"./use-deep-compare-effect.esm-CyEeuigF.js";import"./TextWidget-CsuENhrF.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
