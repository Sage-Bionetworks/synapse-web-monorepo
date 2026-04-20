import{jx as p}from"./iframe-CFYObmv2.js";import{S as a}from"./SchemaDrivenAnnotationEditor-TOyAuEhT.js";import"./index-Chi_LkuB.js";import"./useEntity-Dm7QhD3_.js";import"./pickBy-C9MrKhu7.js";import"./isString-CpJrndPS.js";import"./_baseIteratee-BYzSMaDv.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DrJ287ay.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CeCyyWeM.js";import"./useSchema-BU4qLrR4.js";import"./index-B9VLeUz5.js";import"./enums-b-weuK70.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CNVYPDDa.js";import"./uniq-Bn3jAV91.js";import"./forEach-UWyboym_.js";import"./Add-CuES-WTM.js";import"./Grid-pC3FVRxR.js";import"./ListItem-BF6lJWtr.js";import"./listItemButtonClasses-tdOIFwDw.js";import"./ListItemIcon-DyrB9PTr.js";import"./MenuItem-1x19aVl7.js";import"./ListItemText-DO0AMVi0.js";import"./ArrowUpward-6TbHA7kD.js";import"./ContentCopy-Cis_bZOh.js";import"./FormControlLabel-X6sNt4uF.js";import"./Checkbox-DqoMzdfH.js";import"./SwitchBase-CeR8qk8o.js";import"./FormGroup-BzpXD0bL.js";import"./RadioGroup-DWFObhjv.js";import"./Radio-ZTuIi7So.js";import"./Slider-CkvQsHsX.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CL-fo0eW.js";import"./DialogBase-RIdyfWbA.js";import"./Close-Bc2bfKRm.js";import"./HelpPopover-X5bLlJph.js";import"./MarkdownPopover-BK0N2ea-.js";import"./LightTooltip-CtPj8f6G.js";import"./MarkdownSynapse-EyWbEoPB.js";import"./SkeletonButton-BAoT4yfs.js";import"./SkeletonInlineBlock-B8gtORn3.js";import"./SkeletonTable-D1Oc41tF.js";import"./SkeletonParagraph-2BG-wyQ2.js";import"./JsonSchemaForm-D8eI4ZgD.js";import"./GridLegacy-Cnf4-4oQ.js";import"./HelpTwoTone-VTRHW0MA.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C0xIZ_mx.js";import"./_createAggregator-BsrnQ7nt.js";import"./_baseMap-YiQ3K5X2.js";import"./DateTimePicker-C-mbChMw.js";import"./useMobilePicker-evK2P1Ed.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BbcHVSig.js";import"./index-DTq8PnfG.js";import"./Chip-DVyYNIMf.js";import"./Tabs-CWGfN-hl.js";import"./KeyboardArrowRight-DZ7uehMx.js";import"./Autocomplete-B0dqw6JS.js";import"./usePreviousProps-BAn1aaJG.js";import"./use-deep-compare-effect.esm-C4Xmrwqt.js";import"./TextWidget-_3HhR7vP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
