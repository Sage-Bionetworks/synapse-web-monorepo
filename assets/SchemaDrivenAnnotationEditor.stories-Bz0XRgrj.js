import{jw as p}from"./iframe-zB-jZjF1.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CzzTTVML.js";import"./index-Chi_LkuB.js";import"./useEntity-O8bJrzVR.js";import"./pickBy-Cdf8hihV.js";import"./isString-Cma2iw_R.js";import"./_baseIteratee-D_pQoQ0U.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery--NK2xn9-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HBiYxCDc.js";import"./useSchema-DG5aX7r4.js";import"./index-CHSVzlts.js";import"./enums-DMd-clyO.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BxbuAt9h.js";import"./uniq-BCGVJOr3.js";import"./forEach-UWyboym_.js";import"./Add-rny8Gxm-.js";import"./Grid-B5h6UUcr.js";import"./ListItem-B9DASHzs.js";import"./listItemButtonClasses-BkTygPr_.js";import"./ListItemIcon-BDNE-krv.js";import"./MenuItem-BWX0VE3I.js";import"./ListItemText-jqN6dybV.js";import"./ArrowUpward-p1Zq5Y8H.js";import"./ContentCopy-Dkqm10f9.js";import"./FormControlLabel-XYuCSYJu.js";import"./Checkbox-Du6iielx.js";import"./SwitchBase-BJlTVCbW.js";import"./FormGroup-DkNf8m6H.js";import"./RadioGroup-p-_cvwYP.js";import"./Radio-C0QAkrBr.js";import"./Slider-DhF4IJSj.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D8snEBXQ.js";import"./DialogBase-65T0H8Lc.js";import"./Close-DurIvuzE.js";import"./HelpPopover-tpWqXUpg.js";import"./MarkdownPopover-C_96Abiz.js";import"./LightTooltip-Bbhh6aTb.js";import"./MarkdownSynapse-DWu3M3VU.js";import"./SkeletonButton-DitOEAxO.js";import"./SkeletonInlineBlock-CeW9qPuC.js";import"./SkeletonTable-Xio-92ZC.js";import"./SkeletonParagraph-D0noDT_a.js";import"./JsonSchemaForm-DDPFUmk2.js";import"./GridLegacy-CeLvMfUZ.js";import"./HelpTwoTone-CdQxiSZF.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DhHhPaSS.js";import"./_createAggregator-BWvVSyyk.js";import"./_baseMap-3faxojLo.js";import"./DateTimePicker-eAMlae1b.js";import"./useMobilePicker-B4teuiOX.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BN-mcqH2.js";import"./index-CpNo1svs.js";import"./Chip-C8ZEijAb.js";import"./Tabs-BibuDBmf.js";import"./KeyboardArrowRight-CUWmwa5_.js";import"./Autocomplete-DdeAb70f.js";import"./usePreviousProps-Bo09v6Gt.js";import"./use-deep-compare-effect.esm-CI3Jr0wi.js";import"./TextWidget-VX1Jb9g4.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
