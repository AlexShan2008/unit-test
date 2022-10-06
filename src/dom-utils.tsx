export function remove(node) {
  node.parentNode.removeChild(node);
}

export function addEventListener(node, type, listener) {
  node.addEventListener(type, listener);
}
