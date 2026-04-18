import{jx as p}from"./iframe-vLBQZPS1.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BvTT1gYQ.js";import"./index-Chi_LkuB.js";import"./useEntity-B8YDBI_I.js";import"./pickBy-Rr7aYo8C.js";import"./isString-uOCvHjpj.js";import"./_baseIteratee-BmZJlmI5.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CjBQlBHx.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Czhkwfxc.js";import"./useSchema-CjloR87q.js";import"./index-aLValGXo.js";import"./enums-B7u62GDg.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D90opGFA.js";import"./uniq-DXH_1cJh.js";import"./forEach-UWyboym_.js";import"./Add-pRwupm-j.js";import"./Grid-DVwtr0_z.js";import"./ListItem-DQfdo3rS.js";import"./listItemButtonClasses-BZulfIb5.js";import"./ListItemIcon-CuIzOczP.js";import"./MenuItem-B9IS4RBy.js";import"./ListItemText-MOP-0Nah.js";import"./ArrowUpward-BFzb6Nj-.js";import"./ContentCopy-r1zLbuPp.js";import"./FormControlLabel-ChegGM40.js";import"./Checkbox-C06X4GkF.js";import"./SwitchBase-BpROeQ6w.js";import"./FormGroup-iWuYtkuX.js";import"./RadioGroup-C9fhpGnL.js";import"./Radio-BdaDAdcS.js";import"./Slider-Kre0TDAm.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DhT3Kl3D.js";import"./DialogBase-MXOqe2PM.js";import"./Close-w9C8mbRP.js";import"./HelpPopover-BDS7EbF2.js";import"./MarkdownPopover-DJzEVvrc.js";import"./LightTooltip-FFjGpbV1.js";import"./MarkdownSynapse-LkluOMjb.js";import"./SkeletonButton-Bpq0DUhs.js";import"./SkeletonInlineBlock-Ck9MEOcu.js";import"./SkeletonTable-vLDxttH1.js";import"./SkeletonParagraph-BdLk36IL.js";import"./JsonSchemaForm-DLIWlRR9.js";import"./GridLegacy-EvU_M67X.js";import"./HelpTwoTone-B2G_q6Ee.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DU2gDHbs.js";import"./_createAggregator-Bvib6mQz.js";import"./_baseMap-BExDUO8C.js";import"./DateTimePicker-B2cCzy2-.js";import"./useMobilePicker-BhsvPRg1.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Bm9VBhG0.js";import"./index-huQsABd9.js";import"./Chip-BwFdox-s.js";import"./Tabs-CSYxMOK3.js";import"./KeyboardArrowRight-B7v4pY-Y.js";import"./Autocomplete-BxsEBMw_.js";import"./usePreviousProps-ChDDB4-s.js";import"./use-deep-compare-effect.esm-zF8cRjUt.js";import"./TextWidget-D-8oRtBR.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
