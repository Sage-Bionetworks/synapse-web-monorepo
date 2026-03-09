import{jy as p}from"./iframe-CCrcZxgU.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C_xHk9hy.js";import"./index-Chi_LkuB.js";import"./useEntity-CaXvVkPm.js";import"./pickBy-LV4paVeK.js";import"./isString-Czclw4dB.js";import"./_baseIteratee-DKTdiFzP.js";import"./useInfiniteQuery-1J2BPHjO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DIyq_LAQ.js";import"./useSchema-CFBPnvFR.js";import"./index-1zSpE4Q0.js";import"./enums-DoNvCV0y.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-w-ECc3U0.js";import"./uniq-C5y9uiBh.js";import"./forEach-CWOCpBhE.js";import"./Add-DJsbC0aA.js";import"./Grid-BBptQ3XV.js";import"./ListItem-PU0ILmJV.js";import"./listItemButtonClasses-DBBBInAv.js";import"./ListItemIcon-BXPOw-9g.js";import"./MenuItem-BOrJnNIc.js";import"./ListItemText-BJ5mgZCY.js";import"./ArrowUpward-BwIGOTK5.js";import"./ContentCopy-5IXLJRUS.js";import"./FormControlLabel-4WFQ0_kJ.js";import"./Checkbox-CTa9HHu3.js";import"./SwitchBase-Bn9II5pr.js";import"./FormGroup-BmoqV3KF.js";import"./RadioGroup-Bf8ekqgl.js";import"./Radio-CGUhauwV.js";import"./Slider-Fg88vwJI.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D414-GDQ.js";import"./DialogBase-CeubuD3-.js";import"./Close-CM4W6Pks.js";import"./HelpPopover-BR72KBQJ.js";import"./MarkdownPopover-BZ4yirLT.js";import"./LightTooltip-BQGvE2MH.js";import"./MarkdownSynapse-FC1rcF9v.js";import"./SkeletonButton-BtsVrZX-.js";import"./SkeletonInlineBlock-D21wux6D.js";import"./SkeletonTable-Ba707JDB.js";import"./SkeletonParagraph--DCUjqtN.js";import"./JsonSchemaForm-C4qcKD7A.js";import"./GridLegacy-DqF10TWz.js";import"./HelpTwoTone-DUuZ4WWc.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DamAuluv.js";import"./_createAggregator-C6ipTSht.js";import"./_baseMap-BMwtKdev.js";import"./DateTimePicker-RVH2DRXL.js";import"./useMobilePicker-BPSVgqdy.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Bc1aF6fK.js";import"./index-DOETxQEh.js";import"./Chip-BosvP6Bi.js";import"./Tabs-hsaDgFub.js";import"./KeyboardArrowRight-DlxQeLq6.js";import"./Autocomplete-c4_-buWX.js";import"./usePreviousProps-CqWCcIps.js";import"./use-deep-compare-effect.esm-DIYMX9jp.js";import"./TextWidget-DJi5UimJ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
