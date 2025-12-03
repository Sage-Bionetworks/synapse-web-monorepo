import{jF as T}from"./iframe-C0ErQzQQ.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CSgUVcDP.js";import"./index-r8ZA1smB.js";import"./useEntity-Clvf9s8c.js";import"./pickBy-Dr1Khwmo.js";import"./isString-DuHi3MGw.js";import"./_baseIteratee-BUndEki0.js";import"./useQueries-DLniHFa7.js";import"./useSuspenseQuery-B5vEEZkD.js";import"./useInfiniteQuery-D92iBfwZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-cmXjN1t3.js";import"./useSchema-BHI86MCS.js";import"./index-BBr89hQi.js";import"./enums-BPuMjZSn.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-SGImkhl7.js";import"./uniq-D0WnBq-1.js";import"./forEach-B8iwwgef.js";import"./Grid-d1KTcnXE.js";import"./ListItem-DGTgIogn.js";import"./listItemButtonClasses-6tZSeXTA.js";import"./ListItemIcon-BPJY7iSh.js";import"./MenuItem-C5fdYvEk.js";import"./ListItemText-AsWUJcka.js";import"./ArrowUpward-AY0UCOdf.js";import"./ContentCopy-DKdJYILf.js";import"./FormControlLabel-DIoiy-48.js";import"./Checkbox-CwXx_aG3.js";import"./SwitchBase-D3AXOLrZ.js";import"./FormGroup-DmWeiVKr.js";import"./RadioGroup-BzozT_1k.js";import"./Radio-uPSGveKS.js";import"./Slider-BHQdCV-F.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BsTDsadA.js";import"./DialogBase-BqMUco36.js";import"./Close-CTHKIKbo.js";import"./HelpPopover-D3wJnDj8.js";import"./MarkdownPopover-DEfGytzJ.js";import"./LightTooltip-D15VDo9s.js";import"./MarkdownSynapse-BgQ-o5LF.js";import"./SkeletonButton-CiuQHyYv.js";import"./SkeletonInlineBlock-BE6gLgZl.js";import"./SkeletonTable-BS5GIgke.js";import"./SkeletonParagraph-DNevJqyo.js";import"./JsonSchemaForm-DgbK39de.js";import"./GridLegacy-CKrQfPZS.js";import"./HelpTwoTone-bEVCqB9F.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BzgKq1bS.js";import"./_createAggregator-BAUKrAjp.js";import"./_baseMap-BLf9ASmK.js";import"./DateTimePicker-DHIYMV1C.js";import"./useMobilePicker-CwwE4uzi.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BXQvtHb8.js";import"./index-CXBiRWT3.js";import"./Chip-X7blzzMj.js";import"./Tabs-DFH5QJNH.js";import"./KeyboardArrowRight-DnmCQghk.js";import"./Autocomplete-92eR4_lh.js";import"./usePreviousProps-Cg_FpUDN.js";import"./use-deep-compare-effect.esm-DqKHiehK.js";import"./TextWidget-DKEygTgA.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
