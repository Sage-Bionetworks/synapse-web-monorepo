import{jx as p}from"./iframe-ebumedXL.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B0YC6sva.js";import"./index-Chi_LkuB.js";import"./useEntity-8Ga6EkSh.js";import"./pickBy-BpZa6GB7.js";import"./isString-AT5xGzJd.js";import"./_baseIteratee-BZfyLuxI.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DYtjmNBb.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CfivZ6YV.js";import"./useSchema-Dh9HpH1u.js";import"./index-D04e9HpZ.js";import"./enums-CWjtjxud.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bpi3XsvX.js";import"./uniq-DcVzBxPM.js";import"./forEach-UWyboym_.js";import"./Add-KCQldIUL.js";import"./Grid-C5Yci4HF.js";import"./ListItem-Cl8t-CVO.js";import"./listItemButtonClasses-iA8X2Ldm.js";import"./ListItemIcon-De8Ww1nQ.js";import"./MenuItem-DMONT234.js";import"./ListItemText-DBn_Fq_h.js";import"./ArrowUpward-N_fuVuqv.js";import"./ContentCopy-D8KMj1tZ.js";import"./FormControlLabel-EbJgvWzn.js";import"./Checkbox-CZffvlFh.js";import"./SwitchBase-hiOfS_D4.js";import"./FormGroup-DbgWVAsY.js";import"./RadioGroup-C-Ce5FAn.js";import"./Radio-kqohRild.js";import"./Slider-6j0Vjx-I.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cl7cQ4Nu.js";import"./DialogBase-CStF3dxn.js";import"./Close-BrRtpMs2.js";import"./HelpPopover-BgDuyYAY.js";import"./MarkdownPopover-B-Z3CE2b.js";import"./LightTooltip-CgA2Jxaj.js";import"./MarkdownSynapse-BSPB6zOl.js";import"./SkeletonButton-ClK4nZ4V.js";import"./SkeletonInlineBlock--tfqxNwn.js";import"./SkeletonTable-D1WsuyYZ.js";import"./SkeletonParagraph-CjkSb5xZ.js";import"./JsonSchemaForm-BwdWqhF2.js";import"./GridLegacy-Ca8rc9it.js";import"./HelpTwoTone-DLluBdXt.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-3rF1zG_F.js";import"./_createAggregator-DgFRPDLi.js";import"./_baseMap-DuHHUBBV.js";import"./DateTimePicker-Chaoqk3f.js";import"./useMobilePicker-BHXoP4qW.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D8ElXNBT.js";import"./index-BXiypiiB.js";import"./Chip-DwqfSnWD.js";import"./Tabs-DHmY4uly.js";import"./KeyboardArrowRight-ggoTzCEZ.js";import"./Autocomplete-CEr_Ge2j.js";import"./usePreviousProps-UzYqkF7W.js";import"./use-deep-compare-effect.esm-9eJziB04.js";import"./TextWidget-Bt2l8jtY.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
