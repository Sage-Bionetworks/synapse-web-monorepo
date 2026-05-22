// Generic DAG primitives used by HierarchyWidget. No topic-specific knowledge.

export type Node = {
  id: string
  name: string
  parentIds: string[]
}

export type Graph = {
  node: (id: string) => Node | undefined
  parents: (id: string) => string[]
  children: (id: string) => string[]
  depth: (id: string) => number
  roots: string[]
  allIds: string[]
}

function nodeIdNum(id: string): number {
  const m = id.match(/(\d+)$/)
  return m ? Number(m[1]) : 0
}

export function buildGraph(nodes: Node[]): Graph {
  const byId: Record<string, Node> = {}
  const parentsOf: Record<string, string[]> = {}
  const childrenOf: Record<string, string[]> = {}
  const roots: string[] = []

  for (const n of nodes) byId[n.id] = n

  for (const n of nodes) {
    const parents = n.parentIds.filter(p => byId[p])
    parentsOf[n.id] = parents
    if (parents.length === 0) roots.push(n.id)
    for (const p of parents) (childrenOf[p] ??= []).push(n.id)
  }

  // Stable ID-ascending sort for both child order and root order.
  for (const p in childrenOf) {
    childrenOf[p].sort((a, b) => nodeIdNum(a) - nodeIdNum(b))
  }
  roots.sort((a, b) => nodeIdNum(a) - nodeIdNum(b))

  const depthOf: Record<string, number> = {}
  const computing = new Set<string>()
  function depth(id: string): number {
    if (depthOf[id] !== undefined) return depthOf[id]
    if (computing.has(id)) return 0
    computing.add(id)
    const parents = parentsOf[id] ?? []
    const d = parents.length === 0 ? 0 : 1 + Math.max(...parents.map(depth))
    computing.delete(id)
    depthOf[id] = d
    return d
  }
  for (const id in byId) depth(id)

  return {
    node: id => byId[id],
    parents: id => parentsOf[id] ?? [],
    children: id => childrenOf[id] ?? [],
    depth,
    roots,
    allIds: Object.keys(byId),
  }
}

// ----------------------------------------------------------------------------
// Unfolding: DFS from each root, emitting one {nodeId, depth} per visit.
// Multi-parent nodes appear multiple times — once per path that reaches them.
// ----------------------------------------------------------------------------

export type UnfoldingRow = {
  nodeId: string
  depth: number
  // Ancestor path from a root down to this row's parent (exclusive of self).
  // [] for depth-0 rows. Used to derive position-key and breadcrumb info.
  pathToParent: string[]
}

export function fullUnfolding(graph: Graph): UnfoldingRow[] {
  const out: UnfoldingRow[] = []
  function walk(id: string, depth: number, pathToParent: string[]) {
    out.push({ nodeId: id, depth, pathToParent })
    const nextPath = [...pathToParent, id]
    for (const c of graph.children(id)) walk(c, depth + 1, nextPath)
  }
  for (const r of graph.roots) walk(r, 0, [])
  return out
}
