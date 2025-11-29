export function Badge({children}: {children: string}) {
    return <span style={{padding: '4px 8px', backgroundColor: '#eee', borderRadius: '4px'}}>{children}</span>;
}