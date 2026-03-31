import{jx as p}from"./iframe-DI5oOWnE.js";import{S as a}from"./SchemaDrivenAnnotationEditor-qn4vdpBA.js";import"./index-Chi_LkuB.js";import"./useEntity-B_4VWDkv.js";import"./pickBy-B-IsmZoO.js";import"./isString-BVjChegR.js";import"./_baseIteratee-DqpkiyQF.js";import"./useInfiniteQuery-BxuX-z1J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CohGdH5g.js";import"./useSchema-BLq_JgQc.js";import"./index-DD9-M6xv.js";import"./enums-BHaY5CAs.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BgfcCDwM.js";import"./uniq-maDaqVgj.js";import"./forEach-CWOCpBhE.js";import"./Add-CWBdSbmq.js";import"./Grid-CZN7Ki67.js";import"./ListItem-D_hkv-Q5.js";import"./listItemButtonClasses-CMqfqGUg.js";import"./ListItemIcon-sGEcy-bG.js";import"./MenuItem-BZc7CYee.js";import"./ListItemText-B9ckxjih.js";import"./ArrowUpward-BeotKVy1.js";import"./ContentCopy-BFcKfDA4.js";import"./FormControlLabel-BG_p1zhf.js";import"./Checkbox-j3vYPN6O.js";import"./SwitchBase-chH9wrOw.js";import"./FormGroup-i82iJbL-.js";import"./RadioGroup-DvzIv4YN.js";import"./Radio-bQR5C53o.js";import"./Slider-B-E0QosY.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Bhb-7VQY.js";import"./DialogBase-Jgs4FWnV.js";import"./Close-B-CGi6eH.js";import"./HelpPopover-2ce9FsNc.js";import"./MarkdownPopover-D05MpzJD.js";import"./LightTooltip-BEWvn8Re.js";import"./MarkdownSynapse-Dgvqt2C_.js";import"./SkeletonButton-CwiRfCnX.js";import"./SkeletonInlineBlock-5UtZsnHV.js";import"./SkeletonTable-h5dOlVIm.js";import"./SkeletonParagraph-JG7mPZxB.js";import"./JsonSchemaForm-DR3ZpchD.js";import"./GridLegacy-CRLr2fpn.js";import"./HelpTwoTone-C7AKrTIM.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-AuSVDgMV.js";import"./_createAggregator-aVNNmHoX.js";import"./_baseMap-Dju9eJVG.js";import"./DateTimePicker-DoqARpg7.js";import"./useMobilePicker-BT9zkgl1.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CuAtSIh7.js";import"./index-CS5gCP_E.js";import"./Chip-CmH7z8y-.js";import"./Tabs-k9faPO6c.js";import"./KeyboardArrowRight-BFDAmeph.js";import"./Autocomplete-iGk6pvXN.js";import"./usePreviousProps-v0ivzAPn.js";import"./use-deep-compare-effect.esm-BlARVJqo.js";import"./TextWidget-DAOEkxh5.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
