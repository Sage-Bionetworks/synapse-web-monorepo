import{jx as p}from"./iframe-CDo31VQT.js";import{S as a}from"./SchemaDrivenAnnotationEditor-mKIoaHMu.js";import"./index-Chi_LkuB.js";import"./useEntity-uUVj_auO.js";import"./pickBy-BCJRYgtr.js";import"./isString-BtfLA6Fx.js";import"./_baseIteratee-22si1V97.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-zNzDu-Ai.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DHi9K3Vb.js";import"./useSchema-DrwKrg7P.js";import"./index-DLk_hMlk.js";import"./enums-CvhQjBcK.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D9qbLuld.js";import"./uniq-C8IpQzj8.js";import"./forEach-UWyboym_.js";import"./Add-BkpX0DdB.js";import"./Grid-B6QExvce.js";import"./ListItem-DqmEqhXu.js";import"./listItemButtonClasses-B5zecWfz.js";import"./ListItemIcon-Dz6nw2W9.js";import"./MenuItem-CM8kbxyL.js";import"./ListItemText-DpGNmlBr.js";import"./ArrowUpward-Cr2IMyG_.js";import"./ContentCopy-DOE-ei54.js";import"./FormControlLabel-D6JSzQu3.js";import"./Checkbox-BRd7sRay.js";import"./SwitchBase-UfViqCLi.js";import"./FormGroup-Cf4VLm4P.js";import"./RadioGroup-DrxPVbpC.js";import"./Radio-BZWIAEbQ.js";import"./Slider-BYYFyaHl.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-C5P_AirD.js";import"./DialogBase-E8WFtgAh.js";import"./Close-CuElEuLY.js";import"./HelpPopover-C32osPto.js";import"./MarkdownPopover-CvGVbAgl.js";import"./LightTooltip-xFNFrir-.js";import"./MarkdownSynapse-BY4P5oyv.js";import"./SkeletonButton-5CdV1WvK.js";import"./SkeletonInlineBlock-DWU8rLPE.js";import"./SkeletonTable-DUiAsn0J.js";import"./SkeletonParagraph-KDbQ1Dqi.js";import"./JsonSchemaForm-Cu5UUP25.js";import"./GridLegacy-DCUrUgoW.js";import"./HelpTwoTone-CpsqOQRI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DZccC2K2.js";import"./_createAggregator-CCSf8ylh.js";import"./_baseMap-DRCaeSez.js";import"./DateTimePicker-u5b-DwzO.js";import"./useMobilePicker-CjFSX0YQ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CNJrB_wJ.js";import"./index-n3RJ91jU.js";import"./Chip-B6hxaUER.js";import"./Tabs-D8rwUmLT.js";import"./KeyboardArrowRight-kAZ2KuTk.js";import"./Autocomplete-TnARubMI.js";import"./usePreviousProps-CMRxk_ZT.js";import"./use-deep-compare-effect.esm-DpNStlOT.js";import"./TextWidget-SkkcY5Cv.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
