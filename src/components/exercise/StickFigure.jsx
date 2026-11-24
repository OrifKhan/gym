const LIMB = { stroke: '#8a8a8a', strokeWidth: 4 }
const LIMB2 = { stroke: '#5c5c5c', strokeWidth: 4 }

function Equipment({ type, points }) {
  const { hand, hand2, shoulder } = points
  switch (type) {
    case 'barbell':
      return (
        <g>
          <line x1={hand[0] - 16} y1={hand[1]} x2={hand[0] + 16} y2={hand[1]} stroke="#8a8a8a" strokeWidth={3} />
          <circle cx={hand[0] - 16} cy={hand[1]} r={4} fill="#5c5c5c" />
          <circle cx={hand[0] + 16} cy={hand[1]} r={4} fill="#5c5c5c" />
        </g>
      )
    case 'dumbbell':
      return (
        <g>
          <line x1={hand[0] - 5} y1={hand[1]} x2={hand[0] + 5} y2={hand[1]} stroke="#8a8a8a" strokeWidth={2.5} />
          <circle cx={hand[0] - 5} cy={hand[1]} r={3} fill="#5c5c5c" />
          <circle cx={hand[0] + 5} cy={hand[1]} r={3} fill="#5c5c5c" />
        </g>
      )
    case 'kettlebell':
      return (
        <g>
          <path d={`M ${hand[0] - 3} ${hand[1] - 5} Q ${hand[0]} ${hand[1] - 10} ${hand[0] + 3} ${hand[1] - 5}`} stroke="#8a8a8a" strokeWidth={2} fill="none" />
          <circle cx={hand[0]} cy={hand[1]} r={5} fill="#5c5c5c" />
        </g>
      )
    case 'pullupbar':
      return <line x1={20} y1={8} x2={80} y2={8} stroke="#5c5c5c" strokeWidth={3} />
    case 'bag':
      return (
        <g>
          <line x1={83} y1={2} x2={83} y2={14} stroke="#5c5c5c" strokeWidth={1.5} />
          <rect x={78} y={14} width={10} height={38} rx={4} fill="#242424" stroke="#3a3a3a" strokeWidth={1.5} />
        </g>
      )
    case 'rope':
      return (
        <g fill="none" stroke="#5c5c5c" strokeWidth={2}>
          <path d={`M ${hand[0]} ${hand[1]} Q ${(hand[0] + 50) / 2} ${hand[1] - 10} 50 98`} />
          {hand2 && <path d={`M ${hand2[0]} ${hand2[1]} Q ${(hand2[0] + 50) / 2} ${hand2[1] - 10} 50 98`} />}
        </g>
      )
    case 'bench':
      return <rect x={16} y={82} width={62} height={6} rx={2} fill="#242424" stroke="#3a3a3a" />
    default:
      return null
  }
}

export default function StickFigure({ pose, equipment, highlight, width = '100%', showHighlight = true }) {
  const { head, shoulder, elbow, hand, hip, knee, foot, knee2, foot2, elbow2, hand2 } = pose

  return (
    <svg viewBox="0 0 100 100" width={width} className="overflow-visible">
      <line x1={8} y1={94} x2={92} y2={94} stroke="#242424" strokeWidth={1.5} />

      {showHighlight && highlight && (
        <circle cx={highlight.x} cy={highlight.y} r={highlight.r} fill="#39FF6E" opacity={0.18} />
      )}

      <Equipment type={equipment} points={{ hand, hand2, shoulder }} />

      {knee2 && foot2 && <polyline points={`${hip.join(',')} ${knee2.join(',')} ${foot2.join(',')}`} fill="none" {...LIMB2} strokeLinecap="round" />}
      <polyline points={`${hip.join(',')} ${knee.join(',')} ${foot.join(',')}`} fill="none" {...LIMB} strokeLinecap="round" />

      <polyline points={`${shoulder.join(',')} ${hip.join(',')}`} fill="none" stroke="#b5b5b5" strokeWidth={5} strokeLinecap="round" />

      {elbow2 && hand2 && <polyline points={`${shoulder.join(',')} ${elbow2.join(',')} ${hand2.join(',')}`} fill="none" {...LIMB2} strokeLinecap="round" />}
      <polyline points={`${shoulder.join(',')} ${elbow.join(',')} ${hand.join(',')}`} fill="none" {...LIMB} strokeLinecap="round" />

      <line x1={head[0]} y1={head[1] + 6} x2={shoulder[0]} y2={shoulder[1]} stroke="#b5b5b5" strokeWidth={4} />
      <circle cx={head[0]} cy={head[1]} r={6} fill="#dcdcdc" />
    </svg>
  )
}
