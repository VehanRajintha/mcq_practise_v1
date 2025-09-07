import { MCQQuestion } from '@/types/mcq';

export const ainLecture4Questions: MCQQuestion[] = [
  {
    id: 'q1',
    question: 'STP stands for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Spanning Tree Protocol', isCorrect: true },
      { id: 'b', text: 'Switch Trunk Protocol', isCorrect: false },
      { id: 'c', text: 'Shortest Path Tree', isCorrect: false },
      { id: 'd', text: 'Standard Tree Protocol', isCorrect: false }
    ],
    explanation: 'STP stands for Spanning Tree Protocol, which prevents Layer 2 loops in switched networks by creating a loop-free logical topology.'
  },
  {
    id: 'q2',
    question: 'Why STP is needed:',
    type: 'single',
    options: [
      { id: 'a', text: 'Increases broadcast traffic', isCorrect: false },
      { id: 'b', text: 'Prevents Layer 2 loops', isCorrect: true },
      { id: 'c', text: 'Enables VLAN tagging', isCorrect: false },
      { id: 'd', text: 'Provides IP addressing', isCorrect: false }
    ],
    explanation: 'STP is needed to prevent Layer 2 loops that can cause broadcast storms, MAC address table instability, and network performance degradation.'
  },
  {
    id: 'q3',
    question: 'Effects of loops include:',
    type: 'single',
    options: [
      { id: 'a', text: 'MAC address table instability', isCorrect: true },
      { id: 'b', text: 'Faster routing', isCorrect: false },
      { id: 'c', text: 'Reduced broadcasts', isCorrect: false },
      { id: 'd', text: 'PoE failure', isCorrect: false }
    ],
    explanation: 'Layer 2 loops cause MAC address table instability as switches continuously update their MAC tables with conflicting information from the same MAC address appearing on multiple ports.'
  },
  {
    id: 'q4',
    question: 'STP was designed by:',
    type: 'single',
    options: [
      { id: 'a', text: 'Vint Cerf', isCorrect: false },
      { id: 'b', text: 'Radia Perlman', isCorrect: true },
      { id: 'c', text: 'Tim Berners-Lee', isCorrect: false },
      { id: 'd', text: 'Bill Gates', isCorrect: false }
    ],
    explanation: 'STP was designed by Radia Perlman, who is known as the "mother of the internet" for her work on network protocols and spanning tree algorithm.'
  },
  {
    id: 'q5',
    question: 'Root Bridge is chosen based on:',
    type: 'single',
    options: [
      { id: 'a', text: 'Lowest IP', isCorrect: false },
      { id: 'b', text: 'Lowest MAC', isCorrect: false },
      { id: 'c', text: 'Lowest Bridge ID', isCorrect: true },
      { id: 'd', text: 'Highest VLAN ID', isCorrect: false }
    ],
    explanation: 'The Root Bridge is chosen based on the lowest Bridge ID, which consists of priority (default 32768) plus the switch MAC address.'
  },
  {
    id: 'q6',
    question: 'Bridge ID =',
    type: 'single',
    options: [
      { id: 'a', text: 'MAC only', isCorrect: false },
      { id: 'b', text: 'Priority + Extended System ID + MAC', isCorrect: true },
      { id: 'c', text: 'VLAN + MAC', isCorrect: false },
      { id: 'd', text: 'IP + VLAN', isCorrect: false }
    ],
    explanation: 'Bridge ID consists of Priority (4 bits), Extended System ID (12 bits for VLAN), and MAC address (48 bits), totaling 64 bits.'
  },
  {
    id: 'q7',
    question: 'Default STP priority =',
    type: 'single',
    options: [
      { id: 'a', text: '100', isCorrect: false },
      { id: 'b', text: '32768', isCorrect: true },
      { id: 'c', text: '1', isCorrect: false },
      { id: 'd', text: '0', isCorrect: false }
    ],
    explanation: 'The default STP priority is 32768, which is the middle value of the priority range (0-65535), allowing for both higher and lower priorities to be configured.'
  },
  {
    id: 'q8',
    question: 'Root Port on a non-root switch:',
    type: 'single',
    options: [
      { id: 'a', text: 'Closest port to root bridge', isCorrect: true },
      { id: 'b', text: 'Random port', isCorrect: false },
      { id: 'c', text: 'Always blocked', isCorrect: false },
      { id: 'd', text: 'For end devices only', isCorrect: false }
    ],
    explanation: 'The Root Port is the port on a non-root switch that has the lowest cost path to the Root Bridge, making it the closest port to the root.'
  },
  {
    id: 'q9',
    question: 'Default STP port cost for 100 Mbps =',
    type: 'single',
    options: [
      { id: 'a', text: '4', isCorrect: false },
      { id: 'b', text: '19', isCorrect: true },
      { id: 'c', text: '100', isCorrect: false },
      { id: 'd', text: '1', isCorrect: false }
    ],
    explanation: 'The default STP port cost for 100 Mbps (Fast Ethernet) is 19, with lower costs for higher bandwidth links (Gigabit = 4, 10 Gigabit = 2).'
  },
  {
    id: 'q10',
    question: 'Designated Port:',
    type: 'single',
    options: [
      { id: 'a', text: 'Blocks traffic', isCorrect: false },
      { id: 'b', text: 'Forwards traffic toward root', isCorrect: true },
      { id: 'c', text: 'Only listens for BPDUs', isCorrect: false },
      { id: 'd', text: 'Disabled port', isCorrect: false }
    ],
    explanation: 'A Designated Port forwards traffic toward the root bridge and is elected on each network segment to provide the best path to the root.'
  },
  {
    id: 'q11',
    question: 'Alternate/Blocked Port:',
    type: 'single',
    options: [
      { id: 'a', text: 'Forwarding traffic', isCorrect: false },
      { id: 'b', text: 'Prevents loops', isCorrect: true },
      { id: 'c', text: 'Root port', isCorrect: false },
      { id: 'd', text: 'Designated port', isCorrect: false }
    ],
    explanation: 'Alternate/Blocked ports prevent loops by blocking traffic, ensuring only one path exists between any two network segments.'
  },
  {
    id: 'q12',
    question: 'BPDU stands for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Bridge Protocol Data Unit', isCorrect: true },
      { id: 'b', text: 'Broadcast Protocol Device Unit', isCorrect: false },
      { id: 'c', text: 'Bridge Packet Distribution Unit', isCorrect: false },
      { id: 'd', text: 'Basic Protocol Data Unit', isCorrect: false }
    ],
    explanation: 'BPDU stands for Bridge Protocol Data Unit, which are messages exchanged between switches to build and maintain the spanning tree topology.'
  },
  {
    id: 'q13',
    question: 'Default STP Hello Timer =',
    type: 'single',
    options: [
      { id: 'a', text: '1 s', isCorrect: false },
      { id: 'b', text: '2 s', isCorrect: true },
      { id: 'c', text: '5 s', isCorrect: false },
      { id: 'd', text: '10 s', isCorrect: false }
    ],
    explanation: 'The default STP Hello Timer is 2 seconds, which is how often the Root Bridge sends BPDUs to maintain the spanning tree topology.'
  },
  {
    id: 'q14',
    question: 'Forward Delay Timer =',
    type: 'single',
    options: [
      { id: 'a', text: '10 s', isCorrect: false },
      { id: 'b', text: '15 s per state', isCorrect: true },
      { id: 'c', text: '20 s', isCorrect: false },
      { id: 'd', text: '30 s per state', isCorrect: false }
    ],
    explanation: 'The Forward Delay Timer is 15 seconds per state (Listening and Learning), totaling 30 seconds for a port to transition from Blocking to Forwarding.'
  },
  {
    id: 'q15',
    question: 'Max Age Timer =',
    type: 'single',
    options: [
      { id: 'a', text: '10 s', isCorrect: false },
      { id: 'b', text: '15 s', isCorrect: false },
      { id: 'c', text: '20 s', isCorrect: true },
      { id: 'd', text: '30 s', isCorrect: false }
    ],
    explanation: 'The Max Age Timer is 20 seconds, which is how long a switch waits for BPDUs before considering the topology information stale and starting convergence.'
  },
  {
    id: 'q16',
    question: 'STP port states include:',
    type: 'single',
    options: [
      { id: 'a', text: 'Blocking, Listening, Learning, Forwarding, Disabled', isCorrect: true },
      { id: 'b', text: 'Down, Init, Full', isCorrect: false },
      { id: 'c', text: 'Active, Standby', isCorrect: false },
      { id: 'd', text: 'Up, Down, Listen', isCorrect: false }
    ],
    explanation: 'STP has five port states: Blocking (20s), Listening (15s), Learning (15s), Forwarding, and Disabled, with each state serving a specific purpose in loop prevention.'
  },
  {
    id: 'q17',
    question: 'PVST+ is:',
    type: 'single',
    options: [
      { id: 'a', text: 'Standard STP', isCorrect: false },
      { id: 'b', text: 'Cisco enhancement, per VLAN', isCorrect: true },
      { id: 'c', text: 'RSTP', isCorrect: false },
      { id: 'd', text: 'Layer 3 routing', isCorrect: false }
    ],
    explanation: 'PVST+ (Per-VLAN Spanning Tree Plus) is a Cisco enhancement that runs a separate STP instance for each VLAN, providing better load balancing and redundancy.'
  },
  {
    id: 'q18',
    question: 'RSTP port states:',
    type: 'single',
    options: [
      { id: 'a', text: 'Blocking, Listening, Learning, Forwarding', isCorrect: false },
      { id: 'b', text: 'Discarding, Learning, Forwarding', isCorrect: true },
      { id: 'c', text: 'Down, Init, 2-Way', isCorrect: false },
      { id: 'd', text: 'Active, Standby', isCorrect: false }
    ],
    explanation: 'RSTP (Rapid Spanning Tree Protocol) has three port states: Discarding (combines Blocking and Listening), Learning, and Forwarding, providing faster convergence.'
  },
  {
    id: 'q19',
    question: 'PortFast is used to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Make trunk ports fast', isCorrect: false },
      { id: 'b', text: 'Make access ports go directly to forwarding', isCorrect: true },
      { id: 'c', text: 'Prevent loops on core switches', isCorrect: false },
      { id: 'd', text: 'Elect root bridge', isCorrect: false }
    ],
    explanation: 'PortFast allows access ports to transition directly to Forwarding state, bypassing the Listening and Learning states, reducing convergence time for end devices.'
  },
  {
    id: 'q20',
    question: 'BPDU Guard:',
    type: 'single',
    options: [
      { id: 'a', text: 'Forces port to forward immediately', isCorrect: false },
      { id: 'b', text: 'Shuts down port on BPDU receipt', isCorrect: true },
      { id: 'c', text: 'Enables RSTP', isCorrect: false },
      { id: 'd', text: 'Creates VLAN automatically', isCorrect: false }
    ],
    explanation: 'BPDU Guard shuts down a PortFast-enabled port if it receives a BPDU, preventing unauthorized switches from connecting to access ports and potentially disrupting the spanning tree.'
  },
  {
    id: 'q21',
    question: 'STP algorithm =',
    type: 'single',
    options: [
      { id: 'a', text: 'Dijkstra\'s Algorithm', isCorrect: false },
      { id: 'b', text: 'Spanning Tree Algorithm (STA)', isCorrect: true },
      { id: 'c', text: 'SPF', isCorrect: false },
      { id: 'd', text: 'Bellman-Ford', isCorrect: false }
    ],
    explanation: 'STP uses the Spanning Tree Algorithm (STA) to create a loop-free logical topology by electing a root bridge and determining the best paths while blocking redundant paths.'
  },
  {
    id: 'q22',
    question: 'Default STP type on Cisco =',
    type: 'single',
    options: [
      { id: 'a', text: 'RSTP', isCorrect: false },
      { id: 'b', text: 'PVST+', isCorrect: true },
      { id: 'c', text: 'MSTP', isCorrect: false },
      { id: 'd', text: 'STP 802.1D only', isCorrect: false }
    ],
    explanation: 'The default STP type on Cisco switches is PVST+ (Per-VLAN Spanning Tree Plus), which runs a separate STP instance for each VLAN.'
  },
  {
    id: 'q23',
    question: 'Broadcast storm occurs due to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Correct STP configuration', isCorrect: false },
      { id: 'b', text: 'Loops in Layer 2', isCorrect: true },
      { id: 'c', text: 'VLAN misconfiguration', isCorrect: false },
      { id: 'd', text: 'EtherChannel', isCorrect: false }
    ],
    explanation: 'Broadcast storms occur due to Layer 2 loops where broadcast frames circulate indefinitely, consuming bandwidth and causing network performance degradation.'
  },
  {
    id: 'q24',
    question: 'RSTP extra port roles include:',
    type: 'single',
    options: [
      { id: 'a', text: 'Root, Designated', isCorrect: false },
      { id: 'b', text: 'Alternate, Backup', isCorrect: true },
      { id: 'c', text: 'Standby', isCorrect: false },
      { id: 'd', text: 'Active', isCorrect: false }
    ],
    explanation: 'RSTP introduces additional port roles: Alternate (backup root port) and Backup (backup designated port), providing faster convergence when topology changes occur.'
  },
  {
    id: 'q25',
    question: 'STP convergence is faster with:',
    type: 'single',
    options: [
      { id: 'a', text: 'PVST', isCorrect: false },
      { id: 'b', text: 'RSTP', isCorrect: true },
      { id: 'c', text: 'VLAN 1', isCorrect: false },
      { id: 'd', text: 'PortFast', isCorrect: false }
    ],
    explanation: 'RSTP provides faster convergence than traditional STP by reducing port states from 5 to 3 and using proposal/agreement mechanism for rapid topology changes.'
  }
];
