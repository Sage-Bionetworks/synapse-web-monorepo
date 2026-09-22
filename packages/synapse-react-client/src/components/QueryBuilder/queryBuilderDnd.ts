/** Droppable id for a group's drop zone, kept distinct from the group's own id. */
export function groupDropZoneId(groupId: string): string {
  return `${groupId}::dropzone`
}
