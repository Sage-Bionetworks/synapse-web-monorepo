import{jx as p}from"./iframe-CxvUBa5Y.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CsJAdzM6.js";import"./index-Chi_LkuB.js";import"./useEntity-elaFZDLe.js";import"./pickBy-L2Xf9tQn.js";import"./isString-D0HJjUrM.js";import"./_baseIteratee-D_GPTcqf.js";import"./useInfiniteQuery-BZm90861.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B-yMRRyv.js";import"./useSchema-H69NIogd.js";import"./index-Da0ex5jY.js";import"./enums-DpA7-pb2.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BFcEHZkD.js";import"./uniq-C4hXfMbU.js";import"./forEach-UWyboym_.js";import"./Add-7DNMef2P.js";import"./Grid-DHGOxpyh.js";import"./ListItem-C-OjmJ8p.js";import"./listItemButtonClasses-D_qmBppn.js";import"./ListItemIcon-BPDDbQ82.js";import"./MenuItem-DuGrHJFB.js";import"./ListItemText-f59ortP7.js";import"./ArrowUpward-DgyPo6B8.js";import"./ContentCopy-DQa-s1RS.js";import"./FormControlLabel-BSBqVtPb.js";import"./Checkbox-CXn5HuEC.js";import"./SwitchBase-CVvjvYlh.js";import"./FormGroup-CNY4G8xR.js";import"./RadioGroup-B83kizDa.js";import"./Radio-AyHQ9lqS.js";import"./Slider-DVeNZayu.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DHjGwc95.js";import"./DialogBase-CwWInD0g.js";import"./Close-CiAhw48q.js";import"./HelpPopover-T0cT0kQU.js";import"./MarkdownPopover-Ciurpa6y.js";import"./LightTooltip-BgyTyQ_i.js";import"./MarkdownSynapse-CvjlntGs.js";import"./SkeletonButton-DyDLkSqK.js";import"./SkeletonInlineBlock-Bhdwhqi9.js";import"./SkeletonTable-BIWVFjZB.js";import"./SkeletonParagraph-D_UqSVhv.js";import"./JsonSchemaForm-CuH640iN.js";import"./GridLegacy-Ix32iGX4.js";import"./HelpTwoTone-CKTcBqMw.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B0YRAlbm.js";import"./_createAggregator-DyJw0YoK.js";import"./_baseMap-DWDiPcEf.js";import"./DateTimePicker-Cyz9PCkP.js";import"./useMobilePicker-BSDKtg6B.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C5q0dHp4.js";import"./index-C1Mm4JJE.js";import"./Chip-CztKYxS2.js";import"./Tabs-Dgc0D0ej.js";import"./KeyboardArrowRight-B8hoNxeR.js";import"./Autocomplete-DEfQgYUs.js";import"./usePreviousProps-D3-uNmK_.js";import"./use-deep-compare-effect.esm-DVCF_x2N.js";import"./TextWidget-BZp1aWyV.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
