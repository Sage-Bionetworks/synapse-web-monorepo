import{jx as p}from"./iframe-BHpb1ner.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CXcRPLd5.js";import"./index-Chi_LkuB.js";import"./useEntity-DZd2XXl3.js";import"./pickBy-DampMGkr.js";import"./isString-DIvAB8YF.js";import"./_baseIteratee-DkA3wBze.js";import"./useInfiniteQuery-zxcnvMhO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-td2Biw1M.js";import"./useSchema-Lh7frrRT.js";import"./index-BgpKcgol.js";import"./enums-CiLvd8OJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B-GHBlQE.js";import"./uniq-CxS0q-i_.js";import"./forEach-CWOCpBhE.js";import"./Add-BwtXNX4U.js";import"./Grid-DXXI8_-f.js";import"./ListItem-Dw7Z8Blg.js";import"./listItemButtonClasses-VYj_cBrn.js";import"./ListItemIcon-BQa1fOCs.js";import"./MenuItem-tefU5X3f.js";import"./ListItemText-DmHytjSg.js";import"./ArrowUpward-DcwkG2_S.js";import"./ContentCopy-C-82JevS.js";import"./FormControlLabel-tODm-4uQ.js";import"./Checkbox-CKMpfQYH.js";import"./SwitchBase-D-w4aRLo.js";import"./FormGroup-Cj8qCBQK.js";import"./RadioGroup-X_4-sGdy.js";import"./Radio-DzpJv-Uw.js";import"./Slider-D9qT8isI.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BBn8sgdh.js";import"./DialogBase-BbLmDA72.js";import"./Close-a0iRQpbL.js";import"./HelpPopover-CnWfGqNH.js";import"./MarkdownPopover-C_qk4xql.js";import"./LightTooltip-BOjaJFFL.js";import"./MarkdownSynapse-DDUpKj2I.js";import"./SkeletonButton-L8FvKIZ9.js";import"./SkeletonInlineBlock-CZB6gyiy.js";import"./SkeletonTable-C5MYC27c.js";import"./SkeletonParagraph-DtQNsEbz.js";import"./JsonSchemaForm-utfv61PI.js";import"./GridLegacy-BG0WA2ha.js";import"./HelpTwoTone-BXZSsRrz.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Ctq7EJYQ.js";import"./_createAggregator-C6PP0tjI.js";import"./_baseMap-BrueBaHk.js";import"./DateTimePicker-CnebF8Hh.js";import"./useMobilePicker-D3YQZ9M7.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Cs6EwrEI.js";import"./index-6DuJwvLX.js";import"./Chip-BwbGtSpr.js";import"./Tabs-BN4VB5Hv.js";import"./KeyboardArrowRight-DZ9giVSm.js";import"./Autocomplete-Cp6uPlL5.js";import"./usePreviousProps-Cj9LjJ91.js";import"./use-deep-compare-effect.esm-C_pN1kev.js";import"./TextWidget-DPjjb0Ms.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
