import{jx as p}from"./iframe-BfspjTcY.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Cg_ZjN6z.js";import"./index-Chi_LkuB.js";import"./useEntity-FGC_VSuz.js";import"./pickBy-Djadq0qK.js";import"./isString-C5yhpn54.js";import"./_baseIteratee-BDr_3Jg_.js";import"./useInfiniteQuery-FUajPpu4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjvZUiVi.js";import"./useSchema-BC_-EdGd.js";import"./index-DiG_OqSv.js";import"./enums-DNtspZau.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CKxKqa6S.js";import"./uniq-Yrv0fQYR.js";import"./forEach-CWOCpBhE.js";import"./Add-DPv9n5JG.js";import"./Grid-IcPGk4Ih.js";import"./ListItem-CmbCyKxv.js";import"./listItemButtonClasses-C-o7y1-n.js";import"./ListItemIcon-C3nglhNZ.js";import"./MenuItem-CJRlDMpO.js";import"./ListItemText-D-K6cKW1.js";import"./ArrowUpward-oh8VHBRj.js";import"./ContentCopy-zuCvkKNQ.js";import"./FormControlLabel-Genaqmo5.js";import"./Checkbox-B0O3bzZ6.js";import"./SwitchBase-TiYknOKh.js";import"./FormGroup-TmxyLql-.js";import"./RadioGroup-C3A7_6_M.js";import"./Radio-DMdomMkT.js";import"./Slider-a8vj-PHV.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DD_w1pfY.js";import"./DialogBase-YXAFhqm6.js";import"./Close-CgzhAH0t.js";import"./HelpPopover-BxZZ394S.js";import"./MarkdownPopover-BHvvQ330.js";import"./LightTooltip-CyF_hJD9.js";import"./MarkdownSynapse-CyM223lc.js";import"./SkeletonButton-CkY0YDZ2.js";import"./SkeletonInlineBlock-PuABnjtw.js";import"./SkeletonTable-BM0lpKNC.js";import"./SkeletonParagraph-Snv-dM4k.js";import"./JsonSchemaForm-BYIu0qTQ.js";import"./GridLegacy-DUnJeieX.js";import"./HelpTwoTone-eCTN6t2b.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CQO3PXi7.js";import"./_createAggregator-qJzUWh6L.js";import"./_baseMap-ZHm_eqdn.js";import"./DateTimePicker-DUQnf3Nd.js";import"./useMobilePicker-Cy90_td1.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D5mU8ThJ.js";import"./index-C387dLAZ.js";import"./Chip-BneT6US4.js";import"./Tabs-BnuDtMUh.js";import"./KeyboardArrowRight-CnKNFwO_.js";import"./Autocomplete-B1d6L3h6.js";import"./usePreviousProps-DAkLKBz6.js";import"./use-deep-compare-effect.esm-BWbxHWJ2.js";import"./TextWidget-NCtPJP7w.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
