import{jI as p}from"./iframe-MmUnwf_I.js";import{S as a}from"./SchemaDrivenAnnotationEditor-ZT1I0u0B.js";import"./index-Chi_LkuB.js";import"./useEntity-Dp_Npi43.js";import"./pickBy-CCWt6Y2F.js";import"./isString-CEdUjgis.js";import"./_baseIteratee-DuWwUvju.js";import"./useQueries-BtYNrF4R.js";import"./useSuspenseQuery-BiDsxdrf.js";import"./useInfiniteQuery-B-kwFNwz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CYL14dsn.js";import"./useSchema-DqASv2An.js";import"./index-RwB1wuS4.js";import"./enums-Dp_3--3s.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CKJISio3.js";import"./uniq-BTaYoBVF.js";import"./forEach-CWOCpBhE.js";import"./Add-D-lB--_2.js";import"./Grid-CwnxfaSd.js";import"./ListItem-B6oOD1HX.js";import"./listItemButtonClasses-D-FBEpbo.js";import"./ListItemIcon-BLCeWMZs.js";import"./MenuItem-D3dfLHqd.js";import"./ListItemText-DqnfdmBT.js";import"./ArrowUpward-LaevlluO.js";import"./ContentCopy-C1QnNHBF.js";import"./FormControlLabel-kiBD7IDn.js";import"./Checkbox-BQeLkSuG.js";import"./SwitchBase-DN75FVfu.js";import"./FormGroup-Dbch2PMw.js";import"./RadioGroup-4rXJ3o2l.js";import"./Radio-BkTDhJEK.js";import"./Slider-DOeVBXaD.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-GHfYW2YY.js";import"./DialogBase-jau6DM0L.js";import"./Close-B3vYte_0.js";import"./HelpPopover-DtES8MA2.js";import"./MarkdownPopover-DoWodOdq.js";import"./LightTooltip-4Nk8Q6mg.js";import"./MarkdownSynapse-CVJ0Q6XW.js";import"./SkeletonButton-I9hMZOT-.js";import"./SkeletonInlineBlock-Di0FCUFm.js";import"./SkeletonTable-BLb5k01Q.js";import"./SkeletonParagraph-_n4WmOaG.js";import"./JsonSchemaForm-DOsQeI9t.js";import"./GridLegacy-CNkeljxy.js";import"./HelpTwoTone-DvRSkDcI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BmAVbJ1H.js";import"./_createAggregator-KQ0-5P_H.js";import"./_baseMap-Bk2mvBia.js";import"./DateTimePicker-xBIteLC6.js";import"./useMobilePicker-C0g0g2jY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-PaM0gnVl.js";import"./index-DFpfHoB1.js";import"./Chip-p99lz26K.js";import"./Tabs-DC5hZ85J.js";import"./KeyboardArrowRight-hF7N5d3m.js";import"./Autocomplete--_VlOnDt.js";import"./usePreviousProps-BnWTg5Uo.js";import"./use-deep-compare-effect.esm-BqBQcVZ-.js";import"./TextWidget-CqCmEHr8.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
