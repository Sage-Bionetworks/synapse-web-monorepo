import{jF as p}from"./iframe-81JeKJJY.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Cw5L7lUw.js";import"./index-Chi_LkuB.js";import"./useEntity-Cz5Bw4rt.js";import"./pickBy-Bl67QIhz.js";import"./isString-C4Ei_WmE.js";import"./_baseIteratee-lj1Fn_3g.js";import"./useQueries-DsAAcLRN.js";import"./useSuspenseQuery-CSCSqsGh.js";import"./useInfiniteQuery-Du-dGdgl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BiUzTEC2.js";import"./useSchema-BBpprnHh.js";import"./index-D3nSfUu2.js";import"./enums-CePEsuMd.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BIYGB8bs.js";import"./uniq-Brkggy5I.js";import"./forEach-CWOCpBhE.js";import"./Add-DKXn60_C.js";import"./Grid-4r4V-CeP.js";import"./ListItem-DwgOBYpm.js";import"./listItemButtonClasses-BsodkClp.js";import"./ListItemIcon-CMK0cDcI.js";import"./MenuItem-K-et9hkH.js";import"./ListItemText-WP3qN3UI.js";import"./ArrowUpward-Dm0OwEJT.js";import"./ContentCopy-BSb6nWpS.js";import"./FormControlLabel-BaV3Om6I.js";import"./Checkbox-CHiOWLEM.js";import"./SwitchBase-D4AAeaOV.js";import"./FormGroup-Dd3VPbQo.js";import"./RadioGroup-DmrKLDrT.js";import"./Radio-CezlPheF.js";import"./Slider-C-SFNbXj.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BVlCcFDa.js";import"./DialogBase-D68R31mJ.js";import"./Close-6ce7Xvww.js";import"./HelpPopover-DYuSk176.js";import"./MarkdownPopover-Bj6RQTTJ.js";import"./LightTooltip-DwzQ7zV9.js";import"./MarkdownSynapse-lWMCRscm.js";import"./SkeletonButton-DXhUVC8E.js";import"./SkeletonInlineBlock-D-xx-S6B.js";import"./SkeletonTable-CUpkK98S.js";import"./SkeletonParagraph-c7JB1JZa.js";import"./JsonSchemaForm-kadQ-3ju.js";import"./GridLegacy-DS0aqMbC.js";import"./HelpTwoTone-BKcz1ivM.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C5Sp597I.js";import"./_createAggregator-De0mxy3G.js";import"./_baseMap-D7XNcdNx.js";import"./DateTimePicker-DUQWEAr9.js";import"./useMobilePicker-vbStbiIJ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-FjWrqdCx.js";import"./index-hxZfLxrn.js";import"./Chip-BUhAw0AO.js";import"./Tabs-Dur5Mr0p.js";import"./KeyboardArrowRight-oIlptSzV.js";import"./Autocomplete-DG2R_BIw.js";import"./usePreviousProps-nLhrLwy5.js";import"./use-deep-compare-effect.esm-BdyvMGg8.js";import"./TextWidget-BnnWL2BJ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
