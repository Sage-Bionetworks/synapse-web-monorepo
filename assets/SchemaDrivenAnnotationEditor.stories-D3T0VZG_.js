import{jw as p}from"./iframe-b13k1F7I.js";import{S as a}from"./SchemaDrivenAnnotationEditor-6r70WFb3.js";import"./index-Chi_LkuB.js";import"./useEntity-DRqW8oup.js";import"./pickBy-DljaCT6B.js";import"./isString-47yTQKmz.js";import"./_baseIteratee-23LNJ6-w.js";import"./useInfiniteQuery-BuA9b8--.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CHgiIjNJ.js";import"./useSchema-BmL0rtCq.js";import"./index-BQAfIRaz.js";import"./enums-jOBQv3an.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CnMRyE2M.js";import"./uniq-CGBvLNmc.js";import"./forEach-UWyboym_.js";import"./Add-D6QrtjvC.js";import"./Grid-DVknrE2l.js";import"./ListItem-DzDRJtuQ.js";import"./listItemButtonClasses-buvqHCdw.js";import"./ListItemIcon-DubDYiuq.js";import"./MenuItem-DH1v1_Sf.js";import"./ListItemText-Cmi9ODi0.js";import"./ArrowUpward-Cx676tPz.js";import"./ContentCopy-BiJxf3g1.js";import"./FormControlLabel-CCbquEuR.js";import"./Checkbox-QC8XFCZJ.js";import"./SwitchBase-C4-cm1yw.js";import"./FormGroup-DIUewMg5.js";import"./RadioGroup-DltUBXtG.js";import"./Radio-2Hg0FfFc.js";import"./Slider-Dqrd6hKK.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DlQ1ryI4.js";import"./DialogBase-UKhXgfvV.js";import"./Close-BXhjNoKM.js";import"./HelpPopover-DLt1mKAE.js";import"./MarkdownPopover-HHq_PWe6.js";import"./LightTooltip-C-QkzhbA.js";import"./MarkdownSynapse-DgVHOn26.js";import"./SkeletonButton-DVR5pv_e.js";import"./SkeletonInlineBlock-DRQHTWc8.js";import"./SkeletonTable-DL4vBEzw.js";import"./SkeletonParagraph-fVALJo5f.js";import"./JsonSchemaForm-ND-wduku.js";import"./GridLegacy-CtlSbo_h.js";import"./HelpTwoTone-BTgVkxjg.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Cgdw_bRr.js";import"./_createAggregator-DRIV1Ao2.js";import"./_baseMap-DxEPckuz.js";import"./DateTimePicker-BoJdzwlO.js";import"./useMobilePicker-Rjz4jJMP.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DEYxwdGc.js";import"./index-BnGRXv6y.js";import"./Chip-DjWJ18GV.js";import"./Tabs-CEXGJ2q4.js";import"./KeyboardArrowRight-CrQMuxYY.js";import"./Autocomplete-DG-a6nC4.js";import"./usePreviousProps-CbDsT3dl.js";import"./use-deep-compare-effect.esm-Dm_zg5_a.js";import"./TextWidget-DSmSSAjg.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
