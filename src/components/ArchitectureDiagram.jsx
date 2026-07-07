import React from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MarkerType,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom Node component
const CustomNode = ({ data }) => {
  return (
    <div className="px-6 py-4 rounded-xl bg-[#12151a]/90 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] min-w-[250px] max-w-[300px] text-center group hover:border-[#00E5FF]/50 transition-colors duration-300">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-[#00E5FF] border-none" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-[#00E5FF] border-none" />
      
      {data.isCore ? (
        <div className="text-[#D9A01B] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">System Core</div>
      ) : null}
      
      <div className="text-white font-bold text-lg mb-1">{data.label}</div>
      
      {data.role && (
        <div className="text-white/60 text-xs leading-relaxed mt-3 opacity-80 group-hover:opacity-100 transition-opacity">
          {data.role}
        </div>
      )}
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const ArchitectureDiagram = ({ architecture = [], projectName = "System" }) => {
  
  const initialNodes = [
    {
      id: 'core',
      type: 'custom',
      position: { x: 400, y: 50 },
      data: { label: `${projectName} Application`, isCore: true },
    }
  ];

  const initialEdges = [];

  architecture.forEach((item, index) => {
    // Lay them out in a grid below the core
    const columns = 2;
    const row = Math.floor(index / columns);
    const col = index % columns;
    
    // spacing logic
    const xSpacing = 400;
    const ySpacing = 250;
    
    const x = 200 + (col * xSpacing);
    const y = 200 + (row * ySpacing);

    initialNodes.push({
      id: `node-${index}`,
      type: 'custom',
      position: { x, y },
      data: { label: item.name, role: item.role },
    });

    initialEdges.push({
      id: `edge-${index}`,
      source: 'core',
      target: `node-${index}`,
      animated: true,
      style: { stroke: '#00E5FF', strokeWidth: 2, opacity: 0.6 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#00E5FF',
      },
    });
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  if (!architecture || architecture.length === 0) return null;

  return (
    <div className="w-full h-[600px] rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-[#0a0c0f] to-[#12151a] overflow-hidden shadow-2xl relative">
      <div className="absolute top-8 left-10 z-10 pointer-events-none">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-widest text-white/90">LIVE ARCHITECTURE</h3>
        <p className="text-[#00E5FF] text-xs uppercase tracking-[0.2em] font-bold mt-2">Interactive Data Flow</p>
      </div>
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        colorMode="dark"
        minZoom={0.5}
        maxZoom={1.5}
        className="touch-none"
      >
        <Background color="#ffffff" gap={32} size={1} opacity={0.03} />
        <Controls showInteractive={false} className="bg-[#1D2024] border-white/10 fill-white shadow-2xl" />
      </ReactFlow>
    </div>
  );
};

export default ArchitectureDiagram;
