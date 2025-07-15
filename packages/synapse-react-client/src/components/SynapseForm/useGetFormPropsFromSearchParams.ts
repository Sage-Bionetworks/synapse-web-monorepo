import { useSearchParams } from 'react-router'

export function useGetFormPropsFromSearchParams() {
  const [searchParams] = useSearchParams()

  const formGroupId = searchParams.get('formGroupId')!
  const formDataId = searchParams.get('formDataId') ?? undefined
  const dataFileHandleId = searchParams.get('dataFileHandleId') ?? undefined
  const submittedParam = searchParams.get('submitted')
  const submitted = Boolean(submittedParam) && submittedParam !== 'false'

  return { formGroupId, formDataId, dataFileHandleId, submitted }
}
