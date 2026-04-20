import{jx as p}from"./iframe-sZrYZ6Wp.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CdDgJqqp.js";import"./index-Chi_LkuB.js";import"./useEntity-BdTDitRz.js";import"./pickBy-Cd1Av1Ne.js";import"./isString-DDXRacac.js";import"./_baseIteratee-BL55nfgn.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-C5HUZHaI.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-OITnaEqS.js";import"./useSchema-B1be7M9G.js";import"./index-CfoZXHdA.js";import"./enums-rCwj05L6.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BReJ2H88.js";import"./uniq-CAgylSLG.js";import"./forEach-UWyboym_.js";import"./Add-BYbXoMNm.js";import"./Grid-BbQwRq5Y.js";import"./ListItem-DyI3v5uA.js";import"./listItemButtonClasses-D6nsu7sC.js";import"./ListItemIcon-B-Fg8lgR.js";import"./MenuItem-2yGPkNWm.js";import"./ListItemText-BnsgOaQr.js";import"./ArrowUpward-CKGU1TWk.js";import"./ContentCopy-BuDxyB0P.js";import"./FormControlLabel-DawJBkuM.js";import"./Checkbox-LRYr4g4U.js";import"./SwitchBase-W3Oi4NaW.js";import"./FormGroup-Cu8TvdXt.js";import"./RadioGroup-DjuYVx1n.js";import"./Radio-BQoXyLIs.js";import"./Slider-DhqGeGM1.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Bxj212oG.js";import"./DialogBase-DJn9LdSy.js";import"./Close-DmLJxOz2.js";import"./HelpPopover-CFZvRBgC.js";import"./MarkdownPopover-BPe5k0vL.js";import"./LightTooltip-PwS5hn6t.js";import"./MarkdownSynapse-B356jbGy.js";import"./SkeletonButton--UCUv7uI.js";import"./SkeletonInlineBlock-RlErow6J.js";import"./SkeletonTable-ChIFdfhg.js";import"./SkeletonParagraph-QSdi-JVA.js";import"./JsonSchemaForm-BUKe6tbb.js";import"./GridLegacy-DWpuLsdg.js";import"./HelpTwoTone-DUf2hQ4u.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BwB3CFiq.js";import"./_createAggregator-Dv6e7ETw.js";import"./_baseMap-BOgugKtI.js";import"./DateTimePicker-vAYbjGxz.js";import"./useMobilePicker-CNbAQE0z.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-sFKFiQTY.js";import"./index-DHfNFGWR.js";import"./Chip-BvOGwdWK.js";import"./Tabs-CZ9LYJMn.js";import"./KeyboardArrowRight-B1-YfXcK.js";import"./Autocomplete-oEmViLzX.js";import"./usePreviousProps-zdMDBRmY.js";import"./use-deep-compare-effect.esm-CsdEkjUl.js";import"./TextWidget-BEEPwj11.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
