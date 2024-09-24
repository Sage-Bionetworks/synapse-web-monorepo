import { cloneDeep, isEqual, uniqueId } from 'lodash-es'
import { SetOptional } from 'type-fest'

type BasicMockedCrudServiceConstructorOptions<
  T,
  TIDField extends keyof T = never,
> = {
  initialData?: T[]
  idField?: TIDField
  autoGenerateId?: boolean
}

export default class BasicMockedCrudService<
  T,
  TIDField extends keyof T = never,
> {
  private data: T[]
  private idField: TIDField | undefined
  private autoGenerateId: boolean | undefined

  constructor(options?: BasicMockedCrudServiceConstructorOptions<T, TIDField>) {
    this.data = cloneDeep(options?.initialData) || []
    this.idField = options?.idField
    this.autoGenerateId = options?.autoGenerateId
  }

  getAll() {
    return [...this.data]
  }

  getOneById(id: T[keyof T]): T | undefined {
    const idField = this.idField
    if (!idField) {
      throw new Error('idField is not defined')
    }
    return this.data.find(item => isEqual(item[idField], id))
  }

  getOneByPredicate(predicate: (value: T) => boolean): T | undefined {
    return this.data.find(predicate)
  }
  getOneByField(field: keyof T, value: T[typeof field]): T | undefined {
    return this.data.find(item => isEqual(item[field], value))
  }

  getMany(predicate: (value: T) => boolean): T[] {
    return this.data.filter(predicate)
  }

  create(newItem: SetOptional<T, TIDField>): T {
    const cloned = cloneDeep(newItem)
    const idField = this.idField
    if (idField && this.autoGenerateId) {
      cloned[idField] = uniqueId() as T[TIDField] // TODO -- support non-string IDs
    } else if (idField && !cloned[idField]) {
      throw new Error(
        `autoGenerateId is not true, but attempted to create new object with idField: ${String(
          idField,
        )} and id: ${cloned[idField]}`,
      )
    }

    this.data.push(cloned as T)
    return cloned as T
  }

  update(id: T[keyof T], data: T, strategy: 'merge' | 'replace' = 'replace') {
    const idField = this.idField
    if (!idField) {
      throw new Error('idField is not defined')
    }

    this.data = this.data.map(item => {
      if (isEqual(item[idField], id)) {
        if (strategy === 'merge') {
          item = { ...item, ...data }
        } else if (strategy === 'replace') {
          item = data
        }
        // ensure the ID isn't dropped or overwritten
        item[idField] = id as T[TIDField]
      }
      return item
    })

    return this.getOneById(id)
  }

  delete(id: T[keyof T]): void {
    const idField = this.idField
    if (!idField) {
      throw new Error('idField is not defined')
    }

    this.data = this.data.filter(item => !isEqual(item[idField], id))
  }

  clear(): void {
    this.data = []
  }
}
