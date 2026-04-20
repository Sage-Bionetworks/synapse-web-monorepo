import{jx as p}from"./iframe-BnuiMoX_.js";import{S as a}from"./SchemaDrivenAnnotationEditor-rWpov1ue.js";import"./index-Chi_LkuB.js";import"./useEntity-BZdZQARv.js";import"./pickBy-EI1FWKdl.js";import"./isString-fNqKPnY6.js";import"./_baseIteratee-CAfW7TLG.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BmLi_mNn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cd9CwkMP.js";import"./useSchema-BhZdw0C_.js";import"./index-BYkuWlMu.js";import"./enums-tpaUHWV7.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BqK8_kug.js";import"./uniq-lOHwK7VR.js";import"./forEach-UWyboym_.js";import"./Add-CsC5gDhp.js";import"./Grid-CqU-Fml2.js";import"./ListItem-D5svrYbh.js";import"./listItemButtonClasses-B1OKIsgL.js";import"./ListItemIcon-RNw-gLt2.js";import"./MenuItem-CJFsHkvO.js";import"./ListItemText-DkvJRVa3.js";import"./ArrowUpward-CS7iz8qP.js";import"./ContentCopy-B_XgZhOh.js";import"./FormControlLabel-DGDrtWSS.js";import"./Checkbox-DbZ9UnIo.js";import"./SwitchBase-FDevkp1d.js";import"./FormGroup-B5iNv033.js";import"./RadioGroup-iS6x-pe0.js";import"./Radio-2zVdB3VL.js";import"./Slider-Dm4fqoTW.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-trKeO__a.js";import"./DialogBase-ZChlIQOE.js";import"./Close-DJ29z905.js";import"./HelpPopover-x83RozMQ.js";import"./MarkdownPopover-Cm0YthTk.js";import"./LightTooltip-DUGbboAh.js";import"./MarkdownSynapse-DkYu3x07.js";import"./SkeletonButton-CgoQvaBi.js";import"./SkeletonInlineBlock-DxCr7zGd.js";import"./SkeletonTable-B_UPgtXl.js";import"./SkeletonParagraph-BQZp8fCk.js";import"./JsonSchemaForm-Bqq_CMKU.js";import"./GridLegacy-COdQJWh6.js";import"./HelpTwoTone-DaYearul.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-0_OLJJNb.js";import"./_createAggregator-BbQMAFis.js";import"./_baseMap-P5cfwgYq.js";import"./DateTimePicker-C4S_KJCB.js";import"./useMobilePicker-BGME4DlW.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CRm3jirr.js";import"./index-Jll9ObM-.js";import"./Chip-iaML2TUf.js";import"./Tabs-CvJCiwSR.js";import"./KeyboardArrowRight-DAiYrBjO.js";import"./Autocomplete-DDE1rP2z.js";import"./usePreviousProps-DWT1NPvn.js";import"./use-deep-compare-effect.esm-piBgwoQx.js";import"./TextWidget-DzBu5zJ5.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
