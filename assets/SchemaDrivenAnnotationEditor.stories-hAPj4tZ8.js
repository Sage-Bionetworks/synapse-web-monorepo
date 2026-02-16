import{jJ as p}from"./iframe-BQ-FyWsS.js";import{S as a}from"./SchemaDrivenAnnotationEditor-qbvRONxp.js";import"./index-Chi_LkuB.js";import"./useEntity-Cy5Mg2dp.js";import"./pickBy-BvN_jGL3.js";import"./isString-CYdSqs19.js";import"./_baseIteratee-D1Tm5upA.js";import"./useQueries-CogN6Y-I.js";import"./useSuspenseQuery-DUVSvPvg.js";import"./useInfiniteQuery-BmVO0mhr.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CPRwldBA.js";import"./useSchema-B6m5Lqwn.js";import"./index-BmJ_pYC5.js";import"./enums-QVC8CdqK.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DzmUJdB4.js";import"./uniq-4tH-WeBy.js";import"./forEach-CWOCpBhE.js";import"./Add-BRpiQKgM.js";import"./Grid-CLjI5wvp.js";import"./ListItem-Bz_4FR8n.js";import"./listItemButtonClasses-DOsnuBW-.js";import"./ListItemIcon-DatkJvN2.js";import"./MenuItem-CdJwdcJ1.js";import"./ListItemText-4RIwDx9Y.js";import"./ArrowUpward-BUiG-c5D.js";import"./ContentCopy-BI6q3T-t.js";import"./FormControlLabel-0XzmGWH_.js";import"./Checkbox-BSd_DIyD.js";import"./SwitchBase-B5Q_tRt4.js";import"./FormGroup-DpJpMpn8.js";import"./RadioGroup-a4p79gCI.js";import"./Radio-YcL-o3iN.js";import"./Slider-D0bZMS9M.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CdZxz-42.js";import"./DialogBase-Dt2niwwh.js";import"./Close-D_CGw3dB.js";import"./HelpPopover-B1pDuJfg.js";import"./MarkdownPopover-CUwT3SOT.js";import"./LightTooltip-DhzMlioI.js";import"./MarkdownSynapse-mIczoqmL.js";import"./SkeletonButton-BZyaXej1.js";import"./SkeletonInlineBlock-D_nLMWfH.js";import"./SkeletonTable-DUCbFLJl.js";import"./SkeletonParagraph-D-enYo3q.js";import"./JsonSchemaForm-DQ7JgluW.js";import"./GridLegacy-pZGnzAo9.js";import"./HelpTwoTone-DYP_ZR6D.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C8YH4lS9.js";import"./_createAggregator-BekciudF.js";import"./_baseMap-BilfFXZ5.js";import"./DateTimePicker-DcDh09xw.js";import"./useMobilePicker-D5k2-PlW.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C-jgvWZN.js";import"./index-B8FvutqA.js";import"./Chip-zSUCPrxT.js";import"./Tabs-BXbM8SeW.js";import"./KeyboardArrowRight-CYvO4mDN.js";import"./Autocomplete-BAPlWgI1.js";import"./usePreviousProps-B9-mIaoj.js";import"./use-deep-compare-effect.esm-CEJVc6R6.js";import"./TextWidget-4Rnh_UPO.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
