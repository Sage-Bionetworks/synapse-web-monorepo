import{jJ as T}from"./iframe-B9o6ulgU.js";import{S as C}from"./SchemaDrivenAnnotationEditor-AlA4nUzj.js";import"./index-r8ZA1smB.js";import"./useEntity-5a0SBMIF.js";import"./pickBy-CfdE4eqp.js";import"./isString-C-D2gbfq.js";import"./_baseIteratee-CBt9dape.js";import"./useQueries-C3uV33GD.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-kNzCWB85.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4AaPqvkr.js";import"./useSchema-CQMiHEZ5.js";import"./index-CELvob-A.js";import"./enums-DhOvVagF.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BoVOpmuL.js";import"./uniq-yZI0ZKTx.js";import"./forEach-B8iwwgef.js";import"./Grid-C3CpraHr.js";import"./ListItem-BxuoG3sj.js";import"./listItemButtonClasses-CSkNAwo0.js";import"./ListItemIcon-uqTxUWZ8.js";import"./MenuItem-DlWBPIOu.js";import"./ListItemText-CtB6t8Zo.js";import"./ArrowUpward-DNOizo_U.js";import"./ContentCopy-CKeAvrkz.js";import"./FormControlLabel-CMl1Nsw_.js";import"./Checkbox-CrnRjipf.js";import"./SwitchBase-DnGYhQqV.js";import"./FormGroup-DoMZA8Fi.js";import"./RadioGroup-B-Diak5W.js";import"./Radio-BFghs_X6.js";import"./Slider-B4UdtncA.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-0cY4R4NJ.js";import"./DialogBase-DvQ37JZ_.js";import"./Close-Cr1Q2hlA.js";import"./HelpPopover-B3caARoU.js";import"./MarkdownPopover-C5YeO7AB.js";import"./LightTooltip-nJQSerho.js";import"./MarkdownSynapse-DSGkOyxP.js";import"./SkeletonButton-BXySJEex.js";import"./SkeletonInlineBlock-BVBMyQK3.js";import"./SkeletonTable-CEQwMQho.js";import"./SkeletonParagraph-BgTZ32N4.js";import"./JsonSchemaForm-C0I7HGj3.js";import"./GridLegacy-BaULWEBy.js";import"./HelpTwoTone-DtygNhMi.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CbbMHC66.js";import"./_createAggregator-QHYuWoxs.js";import"./_baseMap-C229BfOD.js";import"./DateTimePicker-hFSKWCvy.js";import"./useMobilePicker-xpBloV4a.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-Bw_6EkKp.js";import"./index-Cr_TSGSN.js";import"./Chip-BZa4nVPR.js";import"./Tabs-42HTkARD.js";import"./KeyboardArrowRight-2YJIVL7M.js";import"./Autocomplete-BePFo6rM.js";import"./usePreviousProps-D6TuvjuT.js";import"./use-deep-compare-effect.esm-Clbxr4tw.js";import"./TextWidget-DJCuuOLZ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
