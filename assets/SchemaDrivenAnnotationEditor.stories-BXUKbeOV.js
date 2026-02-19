import{jG as p}from"./iframe-05B79XZ4.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Dppa9IUi.js";import"./index-Chi_LkuB.js";import"./useEntity-BBgR9ZOs.js";import"./pickBy-B2D8woLZ.js";import"./isString-CO1VSkJm.js";import"./_baseIteratee-DXgMmV7G.js";import"./useQueries-DXkCjI1X.js";import"./useSuspenseQuery-DXOpFrh-.js";import"./useInfiniteQuery-BL4rT7lo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cw4P0fYX.js";import"./useSchema-DjCfss9o.js";import"./index-k9iUf9L-.js";import"./enums-CXAymB4G.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DDJYCD3q.js";import"./uniq-DLebYPQT.js";import"./forEach-CWOCpBhE.js";import"./Add-9tZ-Fp5O.js";import"./Grid-DxtXvbXE.js";import"./ListItem-BDJ8bk3W.js";import"./listItemButtonClasses-BcaI3SIE.js";import"./ListItemIcon-e_NB9SQd.js";import"./MenuItem-CVPsdyof.js";import"./ListItemText-DFs7kTvm.js";import"./ArrowUpward-odLR4ewL.js";import"./ContentCopy-RVDyLpJ4.js";import"./FormControlLabel-Bw9mk1Z6.js";import"./Checkbox-DMe8JDwK.js";import"./SwitchBase-a3tunUWH.js";import"./FormGroup-Ce6ZtnjO.js";import"./RadioGroup-Ck6-wrTD.js";import"./Radio-DjM_illo.js";import"./Slider-D4NG1Owe.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Bn0uFIx_.js";import"./DialogBase-DuQ9TKuQ.js";import"./Close-DqDldpZI.js";import"./HelpPopover-CaC791WE.js";import"./MarkdownPopover-DBcqFb8R.js";import"./LightTooltip-DHbNXpmV.js";import"./MarkdownSynapse-9V8zeGJ5.js";import"./SkeletonButton-DSpQmtG3.js";import"./SkeletonInlineBlock-DysL0dN-.js";import"./SkeletonTable-CUmGP5q5.js";import"./SkeletonParagraph-CCYsd3b9.js";import"./JsonSchemaForm-CyWqx5PN.js";import"./GridLegacy-CCIhejqE.js";import"./HelpTwoTone-CUsDiYqH.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-zO3xe8JE.js";import"./_createAggregator-C5Prnb_K.js";import"./_baseMap-Y6mqOJtS.js";import"./DateTimePicker-DbkfieMu.js";import"./useMobilePicker-D8A9YPsU.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D9pjaW7D.js";import"./index-Daq82rHX.js";import"./Chip-MTPGu8Dp.js";import"./Tabs-k8jHFQpO.js";import"./KeyboardArrowRight-vZyOK3Cc.js";import"./Autocomplete-kgBKQwEE.js";import"./usePreviousProps-J0GCPjn7.js";import"./use-deep-compare-effect.esm-1sKVwYDA.js";import"./TextWidget-BCWAWbuc.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
