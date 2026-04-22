import{jx as p}from"./iframe-bna6ux0d.js";import{S as a}from"./SchemaDrivenAnnotationEditor-4JMYmWiw.js";import"./index-Chi_LkuB.js";import"./useEntity-BhGKEimr.js";import"./pickBy-DFerox6m.js";import"./isString-B7Kehlqn.js";import"./_baseIteratee-BTmoqNJP.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BY6Y6iWU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BDnwF9uX.js";import"./useSchema-CKSw275o.js";import"./index-CMOpYK18.js";import"./enums-BTtdgzor.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Clh7uFEL.js";import"./uniq-DNcMbgPJ.js";import"./forEach-UWyboym_.js";import"./Add-fjl8iWDL.js";import"./Grid-CBuvr_YL.js";import"./ListItem-DRSgKKyv.js";import"./listItemButtonClasses-g5sUZ5P1.js";import"./ListItemIcon-CUfJw_X_.js";import"./MenuItem-BE6gGCeL.js";import"./ListItemText-DatloDCc.js";import"./ArrowUpward-I2Fv3JmJ.js";import"./ContentCopy-DVn6t_9l.js";import"./FormControlLabel-CxLJMSC7.js";import"./Checkbox-BBLtg65l.js";import"./SwitchBase-D6zfVctk.js";import"./FormGroup-T1VjgIuY.js";import"./RadioGroup-0ODu0eoD.js";import"./Radio-3on40aJi.js";import"./Slider-N12wiKyG.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Dnw58mjo.js";import"./DialogBase-DHwP3U6I.js";import"./Close-BHQzAyPk.js";import"./HelpPopover-BFjmdZ6s.js";import"./MarkdownPopover-kqSOJAjB.js";import"./LightTooltip-DeQMhnGN.js";import"./MarkdownSynapse-DhbP1fl7.js";import"./SkeletonButton-CvFlnbQG.js";import"./SkeletonInlineBlock-BZMaSP8M.js";import"./SkeletonTable-l3mzz3bl.js";import"./SkeletonParagraph-BWjRwEhH.js";import"./JsonSchemaForm-B_qQymt3.js";import"./GridLegacy-DB59pgUY.js";import"./HelpTwoTone-DTJR54Ve.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Cf8p-2Hl.js";import"./_createAggregator-CPAZDQfA.js";import"./_baseMap-BhRjv0-x.js";import"./DateTimePicker-Ch2hIrae.js";import"./useMobilePicker-iu8alEv4.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DpMOogZ9.js";import"./index-BPlgQcL-.js";import"./Chip-ezXqmltp.js";import"./Tabs-C53BSAUR.js";import"./KeyboardArrowRight-Crz34rJd.js";import"./Autocomplete-ykx5fh-k.js";import"./usePreviousProps-K1h_Q3p0.js";import"./use-deep-compare-effect.esm-BmXEM7aN.js";import"./TextWidget-B9FWP5OO.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
