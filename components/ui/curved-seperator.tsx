export default function CurvedSeperator({ color = "black", flipped, className, children }:
    { color?: string, flipped?: boolean, className?: string, children?: React.ReactNode }) {

    flipped = flipped || false;
    return (
        <div className={className}>
            {
                flipped ? (
                    <svg width="w-screen" height="80" viewBox="0 0 500 80" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
                        <path d="M0,0 L0,40 Q250,100 500,40 L500,0 Z" fill={color} />
                    </svg>
                ) : (
                    <svg width="w-screen" height="80" viewBox="0 0 500 80" preserveAspectRatio="none">
                        <path d="M0,80 L0,40 Q250,-20 500,40 L500,80 Z" fill="black" />
                    </svg>
                )
            }
            {children ? children : null}
        </div>
    )
}