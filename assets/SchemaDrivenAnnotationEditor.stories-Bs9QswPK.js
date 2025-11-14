import{jJ as T}from"./iframe-Zu8RvZUL.js";import{S as C}from"./SchemaDrivenAnnotationEditor-COmZrPBG.js";import"./index-r8ZA1smB.js";import"./useEntity-DG6bXMkL.js";import"./pickBy-11Sid5_3.js";import"./isString-CJhnVd9r.js";import"./_baseIteratee-DhVKAxYy.js";import"./useQueries-BV3GalOM.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DY2EkPTt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BKHAG3DL.js";import"./useSchema-Dg-ATksc.js";import"./index-CzWgka4H.js";import"./enums-Cfltgcql.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DSyukbW5.js";import"./uniq-3VVxXdvC.js";import"./forEach-B8iwwgef.js";import"./Grid-_ErRMDJp.js";import"./ListItem-CleU_4Ww.js";import"./listItemButtonClasses-BSHcDgpS.js";import"./ListItemIcon-C9wH0Ctr.js";import"./MenuItem-DJ5K5GB8.js";import"./ListItemText-CUu_B05f.js";import"./ArrowUpward-B89mmN-Z.js";import"./ContentCopy-CwI5RdBi.js";import"./FormControlLabel-DDX1vfdb.js";import"./Checkbox-9TspXcgn.js";import"./SwitchBase-CrY3cna5.js";import"./FormGroup-8eiXy_6n.js";import"./RadioGroup-CoxqlNh-.js";import"./Radio-LRNkMabF.js";import"./Slider-Cs4X5XjD.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DWaYymem.js";import"./DialogBase-D0lW8KgR.js";import"./Close-Ce4QSXM9.js";import"./HelpPopover-DTUJNc5J.js";import"./MarkdownPopover-CDbCCKmS.js";import"./LightTooltip-3uyB0mdk.js";import"./MarkdownSynapse-Bf4DcIpi.js";import"./SkeletonButton-WXJ0zPic.js";import"./SkeletonInlineBlock-CowlHzP_.js";import"./SkeletonTable-CPpj76Kj.js";import"./SkeletonParagraph-DoX1NVXB.js";import"./JsonSchemaForm-vfQsQ-sR.js";import"./GridLegacy-eNeiPsCB.js";import"./HelpTwoTone-ecJxUQTf.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DZY1M7jO.js";import"./_createAggregator-CscPbhX2.js";import"./_baseMap-D5VoDhU6.js";import"./DateTimePicker-CRw0XCsU.js";import"./useMobilePicker-42WBB-HG.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-fXG0GIPB.js";import"./index-C-A1emnN.js";import"./Chip-CUvuriGX.js";import"./Tabs-DlTHcOw-.js";import"./KeyboardArrowRight-_fWRlWH7.js";import"./Autocomplete-DTRF_AiO.js";import"./usePreviousProps-CxbZOgZo.js";import"./use-deep-compare-effect.esm-DC9AC14i.js";import"./TextWidget-CoUGg0cg.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
