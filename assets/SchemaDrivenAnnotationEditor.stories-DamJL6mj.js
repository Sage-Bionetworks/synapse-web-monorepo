import{jw as p}from"./iframe-C9UTN7n5.js";import{S as a}from"./SchemaDrivenAnnotationEditor-qadbxy4r.js";import"./index-Chi_LkuB.js";import"./useEntity-wCUUthKY.js";import"./pickBy-D3qrbo5r.js";import"./isString-DH2pOUh7.js";import"./_baseIteratee-C6RusqKP.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DWfE7Y6F.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-P91ojiDp.js";import"./useSchema-DGiidPkp.js";import"./index-D-oEOCtz.js";import"./enums-BT8oHgc7.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CdgYGI7S.js";import"./uniq-CMvJDA2N.js";import"./forEach-UWyboym_.js";import"./Add-Cd8xzT8w.js";import"./Grid-UfL_zCbJ.js";import"./ListItem-BV4Jjguv.js";import"./listItemButtonClasses-Dh3m0zIa.js";import"./ListItemIcon-BjVLfDVr.js";import"./MenuItem-CX39S6wD.js";import"./ListItemText-DZH8ZHAz.js";import"./ArrowUpward-BlQpV-xU.js";import"./ContentCopy-SPpl7gsa.js";import"./FormControlLabel-DVTQJ-pq.js";import"./Checkbox-EGzeyNI9.js";import"./SwitchBase-CC_UmhM1.js";import"./FormGroup-DElMUxtZ.js";import"./RadioGroup-BcD3fC8o.js";import"./Radio-TAn0w4yP.js";import"./Slider-CTs5Z9hV.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DQr-jfg-.js";import"./DialogBase-Mn6aWoit.js";import"./Close-CvxtVEvK.js";import"./HelpPopover-DluswABb.js";import"./MarkdownPopover-C9AtG64Z.js";import"./LightTooltip-DamcjSi2.js";import"./MarkdownSynapse-CW6ImeEG.js";import"./SkeletonButton-DrgaJ-bm.js";import"./SkeletonInlineBlock-D-Jy1SSP.js";import"./SkeletonTable-BS4xHemf.js";import"./SkeletonParagraph-C7pb8176.js";import"./JsonSchemaForm-BeQJVmbF.js";import"./GridLegacy-B1RlyKjO.js";import"./HelpTwoTone-DTXkd1NI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-nSJA0xJf.js";import"./_createAggregator-CPJ6Uj_y.js";import"./_baseMap-CwOwxQ_D.js";import"./DateTimePicker-CATq1dLa.js";import"./useMobilePicker-CPRaeE6n.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BgHugj3i.js";import"./index-C0fxb07w.js";import"./Chip-kWAD_96F.js";import"./Tabs-CYVUwAu5.js";import"./KeyboardArrowRight-CFDP3z_9.js";import"./Autocomplete-qFUnN2Zt.js";import"./usePreviousProps-CdqKSC2f.js";import"./use-deep-compare-effect.esm-CIQKtXO6.js";import"./TextWidget-BXN4QAKC.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
