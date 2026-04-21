import{jx as p}from"./iframe-DeCZWsOw.js";import{S as a}from"./SchemaDrivenAnnotationEditor-SkWYAwTK.js";import"./index-Chi_LkuB.js";import"./useEntity-CBiaU1hI.js";import"./pickBy-B-Moz5ZX.js";import"./isString-B4eYWujz.js";import"./_baseIteratee-CIfFj-z5.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-U4Po-hj0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D0P5jgr-.js";import"./useSchema-DKajJd0e.js";import"./index-CWeJ1Umv.js";import"./enums-B0Mg_tkc.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dz2eYAP2.js";import"./uniq-6nc1eT33.js";import"./forEach-UWyboym_.js";import"./Add-n_slhUiW.js";import"./Grid-BBpd3EAB.js";import"./ListItem-BaWnBC_W.js";import"./listItemButtonClasses-BuwylV9a.js";import"./ListItemIcon-0ET2p-cI.js";import"./MenuItem-BwXWDpmH.js";import"./ListItemText-Bj0KmY5Y.js";import"./ArrowUpward-Dsn_VX0i.js";import"./ContentCopy-DM7rQEqf.js";import"./FormControlLabel-CDGc6Svz.js";import"./Checkbox-BTel-voD.js";import"./SwitchBase-D0NKihTE.js";import"./FormGroup-CWTsMuWD.js";import"./RadioGroup-BHT7V9e6.js";import"./Radio-CLXsYHdC.js";import"./Slider-BYR55T2u.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BEm0Hfbq.js";import"./DialogBase-KILzPQhc.js";import"./Close-C8-LQoZ0.js";import"./HelpPopover-CwKb1-x2.js";import"./MarkdownPopover-jZMkPkG9.js";import"./LightTooltip-B9fHYLYn.js";import"./MarkdownSynapse-D0mIxpTT.js";import"./SkeletonButton-KOOFtLVu.js";import"./SkeletonInlineBlock-Dvt7Y2hl.js";import"./SkeletonTable-wLNyC9qX.js";import"./SkeletonParagraph-Bh8QkB1r.js";import"./JsonSchemaForm-Cnyyj_Rr.js";import"./GridLegacy-D7kYFndq.js";import"./HelpTwoTone-CJln82I3.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CBNs1UlB.js";import"./_createAggregator-CMKjUMA_.js";import"./_baseMap-DC3gc6Nz.js";import"./DateTimePicker-Ci_qmsW6.js";import"./useMobilePicker-DbYmQrlU.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-3sIY45zN.js";import"./index-C-sY2UDa.js";import"./Chip-Zt9ByBCz.js";import"./Tabs-lGtWFNia.js";import"./KeyboardArrowRight-Cl-VeQT_.js";import"./Autocomplete-BMy6RmqV.js";import"./usePreviousProps-Dy-mp2ym.js";import"./use-deep-compare-effect.esm-BbzFMXo5.js";import"./TextWidget-D2F6Ube7.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
