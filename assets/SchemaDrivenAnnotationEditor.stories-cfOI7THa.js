import{jx as p}from"./iframe-BfPCYB0E.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BJbMgOd4.js";import"./index-Chi_LkuB.js";import"./useEntity-DHIcQkQl.js";import"./pickBy-JCuXjl7E.js";import"./isString-BUiSeu9X.js";import"./_baseIteratee-Nxg2-rLG.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DBxaVkr7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-EhsdYR-5.js";import"./useSchema-HtKNyKZr.js";import"./index-BmYPB97M.js";import"./enums-BIhw-tSz.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BAX3P3MS.js";import"./uniq-CQheWXsd.js";import"./forEach-UWyboym_.js";import"./Add-C4D4UNxo.js";import"./Grid-Cez_EO-F.js";import"./ListItem-CwxPB7Q5.js";import"./listItemButtonClasses-DnXgjUQR.js";import"./ListItemIcon-CorColEt.js";import"./MenuItem-Clc-tiPV.js";import"./ListItemText-DKbCRJN7.js";import"./ArrowUpward-uh3iEG7_.js";import"./ContentCopy--WshlvLQ.js";import"./FormControlLabel-CGx1NWxI.js";import"./Checkbox-BMpqBgV6.js";import"./SwitchBase-VO4fuz7d.js";import"./FormGroup-B5XwpuBX.js";import"./RadioGroup-MlJOR3Si.js";import"./Radio-Bsj327EO.js";import"./Slider-DKZl9axT.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-8SnXnQ-s.js";import"./DialogBase-BW5bnvAH.js";import"./Close-Buelrktg.js";import"./HelpPopover-BsJ_8UVh.js";import"./MarkdownPopover-TvgvUYyl.js";import"./LightTooltip-CdZMPFTC.js";import"./MarkdownSynapse-DczAMsEj.js";import"./SkeletonButton-Cp9NnTu7.js";import"./SkeletonInlineBlock-D4QJhjaO.js";import"./SkeletonTable-O-QCdGWt.js";import"./SkeletonParagraph-KYHFxt8I.js";import"./JsonSchemaForm-OAJI9lRz.js";import"./GridLegacy-C1cLP8b0.js";import"./HelpTwoTone-lZW4S_Je.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BzxdwT3S.js";import"./_createAggregator-CQoelJE5.js";import"./_baseMap-DMrCzabq.js";import"./DateTimePicker-DX3bvofi.js";import"./useMobilePicker-CVf2A0-U.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B5pujrVX.js";import"./index-LtIvAFo0.js";import"./Chip-CozfZRmm.js";import"./Tabs-Cg-ZYokO.js";import"./KeyboardArrowRight-CGJrf5bY.js";import"./Autocomplete-D4zfTzAQ.js";import"./usePreviousProps-ClStBmCy.js";import"./use-deep-compare-effect.esm-CwVwik8w.js";import"./TextWidget-AOf1c-8B.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
