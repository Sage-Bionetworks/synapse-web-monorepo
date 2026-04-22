import{jx as p}from"./iframe-CseC-baw.js";import{S as a}from"./SchemaDrivenAnnotationEditor-uNvV_brr.js";import"./index-Chi_LkuB.js";import"./useEntity-IS8-aX6E.js";import"./pickBy-BLqDP6KE.js";import"./isString-CDFSk2zC.js";import"./_baseIteratee-FkIOi2kZ.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BZ_GGw6g.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DQ3kjnM1.js";import"./useSchema-DExudqge.js";import"./index-yGHzEE1f.js";import"./enums-B9YqTcqs.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-I5MBxf0i.js";import"./uniq-BmWqfc-v.js";import"./forEach-UWyboym_.js";import"./Add-CkHDS6fW.js";import"./Grid-DLfQ-OhD.js";import"./ListItem-YIxnHUO0.js";import"./listItemButtonClasses-BOJ5pjAV.js";import"./ListItemIcon-DXFJYkM1.js";import"./MenuItem-JA9eMCvt.js";import"./ListItemText-D0rMxaam.js";import"./ArrowUpward-gi6O49Oz.js";import"./ContentCopy-CQLvwZZ3.js";import"./FormControlLabel-yR_OFq_k.js";import"./Checkbox-cR5eTvXg.js";import"./SwitchBase-viy3IhPp.js";import"./FormGroup-DkbuhrfL.js";import"./RadioGroup-qkGp_qqA.js";import"./Radio-BOtMyg1i.js";import"./Slider-CbODXOh-.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CcRCdpta.js";import"./DialogBase-BvEmiGuX.js";import"./Close-CEWvO-tT.js";import"./HelpPopover-Bv1OIhKO.js";import"./MarkdownPopover-jmvUxWZs.js";import"./LightTooltip-Dys4qYAB.js";import"./MarkdownSynapse-DWH-mAwE.js";import"./SkeletonButton-CcHwUw1K.js";import"./SkeletonInlineBlock-dgjaDxOx.js";import"./SkeletonTable-BSCFUHCb.js";import"./SkeletonParagraph-BnipCtVU.js";import"./JsonSchemaForm-Di4Vw3M5.js";import"./GridLegacy-BT3u4m13.js";import"./HelpTwoTone-3RH16ec0.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CX0VHO6r.js";import"./_createAggregator-D6vInaaC.js";import"./_baseMap-ChkSHv-Q.js";import"./DateTimePicker-B54GFHl_.js";import"./useMobilePicker-D5dJquX_.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CAgOA8W-.js";import"./index-Cs-oxnB7.js";import"./Chip-8D96B7uR.js";import"./Tabs-BF7rMN_1.js";import"./KeyboardArrowRight-CuyrQo4h.js";import"./Autocomplete-B0cmA3-q.js";import"./usePreviousProps-DrR79Lb9.js";import"./use-deep-compare-effect.esm-CR1_NEAv.js";import"./TextWidget-DlbKoiNh.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
