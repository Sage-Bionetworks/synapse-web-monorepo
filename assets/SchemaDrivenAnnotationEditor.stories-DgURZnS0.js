import{jC as C}from"./iframe-BaLjRbxV.js";import{S as T}from"./SchemaDrivenAnnotationEditor-8NHgT_jE.js";import"./index-r8ZA1smB.js";import"./useEntity-Dxf6u6dv.js";import"./pickBy-CTDFDvlL.js";import"./isString-D57dOGgm.js";import"./_baseIteratee-DSMfcoPD.js";import"./useQueries-BG08BzmQ.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BKbW_T3d.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CB9jZsng.js";import"./useSchema-vRq0EAMr.js";import"./index-DftWtekq.js";import"./enums-FDDBZdXm.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BPR38kYI.js";import"./uniq-Cjs6CA2m.js";import"./forEach-B8iwwgef.js";import"./Grid-DXUoF1k2.js";import"./ListItem-IcHhswYb.js";import"./listItemButtonClasses-zTMmTepl.js";import"./ListItemIcon-CbaQVbi_.js";import"./MenuItem-CmlP5UgZ.js";import"./ListItemText-CPp_ZxW3.js";import"./ArrowUpward-BD0j2eUZ.js";import"./ContentCopy-CQzctUqC.js";import"./FormControlLabel-BeQpfg_x.js";import"./Checkbox-CmQZLcxz.js";import"./SwitchBase-CB7olyeo.js";import"./FormGroup-jAPpei11.js";import"./RadioGroup-wJFwoQNJ.js";import"./Radio-BDTe1i3K.js";import"./Slider-DBpfOGWc.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BerI96kx.js";import"./DialogBase-DQC5Xm4N.js";import"./Close-DUVDmgA5.js";import"./HelpPopover-HEhffQ-9.js";import"./MarkdownPopover-D0-hXxlT.js";import"./LightTooltip-Df4OWJg3.js";import"./MarkdownSynapse-D5dupBHl.js";import"./SkeletonButton-BCO3ltYO.js";import"./SkeletonInlineBlock-DlbO9j3B.js";import"./SkeletonTable-DRhIcjmz.js";import"./SkeletonParagraph-2OOcKN6S.js";import"./JsonSchemaForm-CmwbwkGk.js";import"./GridLegacy-C9fo58PV.js";import"./HelpTwoTone-BjONEOJh.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-Cg_OvppJ.js";import"./_createAggregator-DkZh1I6i.js";import"./_baseMap-D8bdCiPL.js";import"./DateTimePicker-BoTKFAeL.js";import"./useMobilePicker-B8Jo2F4h.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-_gLMoaHD.js";import"./index-Bf6lqsG1.js";import"./Chip-BNDtClPI.js";import"./Tabs-DIHHwB3I.js";import"./KeyboardArrowRight-D-UY3Jq0.js";import"./Autocomplete-e82M9zyG.js";import"./usePreviousProps-9NqsbF4o.js";import"./use-deep-compare-effect.esm-B-oB1mUD.js";import"./TextWidget-BT8zetj6.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:T,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${C.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Lr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Lr as __namedExportsOrder,Kr as default};
