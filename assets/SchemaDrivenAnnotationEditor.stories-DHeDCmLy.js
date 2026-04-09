import{jw as p}from"./iframe-I9EoyWQf.js";import{S as a}from"./SchemaDrivenAnnotationEditor-qDzMRdTP.js";import"./index-Chi_LkuB.js";import"./useEntity-B4TqUGVZ.js";import"./pickBy-BeiKyk-k.js";import"./isString-XDvs-I67.js";import"./_baseIteratee-DhR4h-9n.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-ybg8uaKh.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CuHV45TU.js";import"./useSchema-DksuvVvV.js";import"./index-DsiOWTx8.js";import"./enums-8cgiUEQs.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BVz6q7ID.js";import"./uniq-CLjsbMfP.js";import"./forEach-UWyboym_.js";import"./Add-qCh88foO.js";import"./Grid-DGbFvsXq.js";import"./ListItem-B2eHdVkL.js";import"./listItemButtonClasses-B12uDCc1.js";import"./ListItemIcon-CUP62TT1.js";import"./MenuItem-DLjd3Exv.js";import"./ListItemText-Df32_r6G.js";import"./ArrowUpward-D6w6n80W.js";import"./ContentCopy-DVrf4Dsu.js";import"./FormControlLabel-C49ko43X.js";import"./Checkbox-BsQp1kE6.js";import"./SwitchBase-BW1Maf3V.js";import"./FormGroup-C41ocM17.js";import"./RadioGroup-Cuzzsepz.js";import"./Radio-BWflztxx.js";import"./Slider-CwvyjTkE.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cn8YG5nL.js";import"./DialogBase-mhO3z0mU.js";import"./Close-C4Fuzij-.js";import"./HelpPopover-CSkKFQDG.js";import"./MarkdownPopover-CZrsA1Ve.js";import"./LightTooltip-BjpzGQlc.js";import"./MarkdownSynapse-DmmReL7B.js";import"./SkeletonButton-BZ4IW0NV.js";import"./SkeletonInlineBlock-CnFxuHgE.js";import"./SkeletonTable-Daoy3Wk1.js";import"./SkeletonParagraph-C2Jym8Lt.js";import"./JsonSchemaForm-Dm73qj6x.js";import"./GridLegacy-l83Rb-Nw.js";import"./HelpTwoTone-Bt-GuUMW.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B4esnzru.js";import"./_createAggregator-DB6F1KSI.js";import"./_baseMap-C2ThkLcN.js";import"./DateTimePicker-DzSS3gTp.js";import"./useMobilePicker-BXCTPsBR.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-_ugYBIXR.js";import"./index-BR8vhpyy.js";import"./Chip-qFrw06qV.js";import"./Tabs-C9zi191O.js";import"./KeyboardArrowRight-BQehpILQ.js";import"./Autocomplete-DjJ8XXAP.js";import"./usePreviousProps-D8JQgpCi.js";import"./use-deep-compare-effect.esm-JUBw2Hxl.js";import"./TextWidget-C0x0nZKY.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
