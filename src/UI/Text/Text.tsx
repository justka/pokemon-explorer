export function Text({ children, tag }: { children: string; tag?: 'h1'|'span' }) {

  switch(tag) {
    case 'h1':
      return <h1>{children}</h1>;
    case 'span' :
    default:
      return <span>{children}</span>;
  }
}