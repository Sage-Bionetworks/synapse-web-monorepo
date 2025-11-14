import{jJ as T}from"./iframe-BnETViYe.js";import{S as C}from"./SchemaDrivenAnnotationEditor-D0aWa7iQ.js";import"./index-r8ZA1smB.js";import"./useEntity-C6p_NrjE.js";import"./pickBy-CsRlTggi.js";import"./isString-DbDKXoQd.js";import"./_baseIteratee-ClPPPdqy.js";import"./useQueries-CZq_142Z.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-C73-i-7k.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DZsIq2C9.js";import"./useSchema-D81ViuXY.js";import"./index-BUQeRHJU.js";import"./enums-C4IE_DdM.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-UM9MKom9.js";import"./uniq-I3Z8EEDb.js";import"./forEach-B8iwwgef.js";import"./Grid-Bez3ZFd_.js";import"./ListItem-P2Kn5T0k.js";import"./listItemButtonClasses-BfL6-Aoa.js";import"./ListItemIcon-DsxGHfw6.js";import"./MenuItem-BuXD1mJM.js";import"./ListItemText-DehghrfF.js";import"./ArrowUpward-CQFOGWAV.js";import"./ContentCopy-L_HTDeZN.js";import"./FormControlLabel-DQI_vNgk.js";import"./Checkbox-CGsodViY.js";import"./SwitchBase-B4WwzahN.js";import"./FormGroup-E1c6W9cb.js";import"./RadioGroup-CEmX6Yid.js";import"./Radio-EoEdDMxh.js";import"./Slider-Ds1Yu60z.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BIpXV5M8.js";import"./DialogBase-QlbSbh1_.js";import"./Close-rvN_S8Vv.js";import"./HelpPopover-DK9Tpj6o.js";import"./MarkdownPopover-BvzvlMrF.js";import"./LightTooltip-j7NzfZhS.js";import"./MarkdownSynapse-Bip7xTA3.js";import"./SkeletonButton-DC6QAxqn.js";import"./SkeletonInlineBlock-CvdUTVnt.js";import"./SkeletonTable-C-IptaAB.js";import"./SkeletonParagraph-Cc0HWYg7.js";import"./JsonSchemaForm-IboSVYyi.js";import"./GridLegacy-CM0-BlIu.js";import"./HelpTwoTone-PwbTKuDq.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-USzHAzO1.js";import"./_createAggregator-CO97MU5-.js";import"./_baseMap-BS8DVFvS.js";import"./DateTimePicker-jaBF5bCb.js";import"./useMobilePicker-fJMs94pU.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BD2o1EZI.js";import"./index-DAJANqDt.js";import"./Chip-7gWmkBqZ.js";import"./Tabs-CBy5zr4g.js";import"./KeyboardArrowRight-eNDk1Lxb.js";import"./Autocomplete-DTAck24m.js";import"./usePreviousProps-DBnnk-PV.js";import"./use-deep-compare-effect.esm-3-Rq1_uz.js";import"./TextWidget-CDI7ecvu.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
