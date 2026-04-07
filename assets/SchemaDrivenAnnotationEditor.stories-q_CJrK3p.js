import{jw as p}from"./iframe-CkF2RhKN.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Dr0Rw2wS.js";import"./index-Chi_LkuB.js";import"./useEntity-zBm3Or6t.js";import"./pickBy-BbztYAG1.js";import"./isString-B5YIl0UX.js";import"./_baseIteratee-BEB7CkmA.js";import"./useInfiniteQuery-B7jSsWM4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-fPh8GeMM.js";import"./useSchema-DuaYfWk3.js";import"./index-BEjXcbAd.js";import"./enums-4tIhtR9A.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CNkAXNOm.js";import"./uniq-BQf6mj1k.js";import"./forEach-UWyboym_.js";import"./Add-DwNXc-wx.js";import"./Grid-bBoM1obv.js";import"./ListItem-l8Rfb5x-.js";import"./listItemButtonClasses-D_9PsBch.js";import"./ListItemIcon-zFglj-mE.js";import"./MenuItem-Bn_zQ0BD.js";import"./ListItemText-C5qtM1Lh.js";import"./ArrowUpward-BwF1fuzv.js";import"./ContentCopy-BinCzYHc.js";import"./FormControlLabel-CvAqaT5C.js";import"./Checkbox-BYhyDoP4.js";import"./SwitchBase-Cfp9yLa-.js";import"./FormGroup-BR5FRJsD.js";import"./RadioGroup-CoaKiYED.js";import"./Radio-zariHem2.js";import"./Slider-CXLnaiHs.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Dx2givAp.js";import"./DialogBase-BynSzgi7.js";import"./Close-C30i0cHB.js";import"./HelpPopover-8yvHKAte.js";import"./MarkdownPopover-ChhMW5W_.js";import"./LightTooltip-C4-8pTH-.js";import"./MarkdownSynapse-CUvWST4S.js";import"./SkeletonButton-szKajW48.js";import"./SkeletonInlineBlock-BHo_rHpz.js";import"./SkeletonTable-_Ae5KVb-.js";import"./SkeletonParagraph-D5pjFcDJ.js";import"./JsonSchemaForm-DHGFcKdk.js";import"./GridLegacy-DC6clkfb.js";import"./HelpTwoTone-DhGEnruq.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-8fi1MwwI.js";import"./_createAggregator-BfBp1QZf.js";import"./_baseMap-DTKDCLFE.js";import"./DateTimePicker-Dw51vm6T.js";import"./useMobilePicker-BXvNRuwO.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CSB9Jqcy.js";import"./index-Ci6ZMoUD.js";import"./Chip-BzTGJFEB.js";import"./Tabs-ChEzzDaN.js";import"./KeyboardArrowRight-yi5L5RKQ.js";import"./Autocomplete-BYnMiYQ2.js";import"./usePreviousProps-DoqDJIYb.js";import"./use-deep-compare-effect.esm-DCtQGU8E.js";import"./TextWidget-Drz-aI8l.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
