import { MCQQuestion } from '@/types/mcq';

export const ainLecture6Questions: MCQQuestion[] = [
  {
    id: 'q1',
    question: 'OSPF stands for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Open Shortest Path First', isCorrect: true },
      { id: 'b', text: 'Open Source Path Forwarding', isCorrect: false },
      { id: 'c', text: 'Open Standard Path Filtering', isCorrect: false },
      { id: 'd', text: 'Optimized Shortest Path Frame', isCorrect: false }
    ],
    explanation: 'OSPF stands for Open Shortest Path First, which is a link-state routing protocol that uses Dijkstra\'s algorithm to find the shortest path to destinations.'
  },
  {
    id: 'q2',
    question: 'OSPF is a:',
    type: 'single',
    options: [
      { id: 'a', text: 'Distance Vector protocol', isCorrect: false },
      { id: 'b', text: 'Link-State protocol', isCorrect: true },
      { id: 'c', text: 'Path Vector protocol', isCorrect: false },
      { id: 'd', text: 'Hybrid protocol', isCorrect: false }
    ],
    explanation: 'OSPF is a Link-State protocol that builds a complete topology database and uses Dijkstra\'s algorithm to calculate the shortest path to all destinations.'
  },
  {
    id: 'q3',
    question: 'OSPF protocol type in IP header =',
    type: 'single',
    options: [
      { id: 'a', text: '87', isCorrect: false },
      { id: 'b', text: '88', isCorrect: false },
      { id: 'c', text: '89', isCorrect: true },
      { id: 'd', text: '90', isCorrect: false }
    ],
    explanation: 'OSPF uses IP protocol type 89 in the IP header, which identifies OSPF packets at the network layer.'
  },
  {
    id: 'q4',
    question: 'OSPF metric is based on:',
    type: 'single',
    options: [
      { id: 'a', text: 'Hop Count', isCorrect: false },
      { id: 'b', text: 'Bandwidth', isCorrect: true },
      { id: 'c', text: 'Delay', isCorrect: false },
      { id: 'd', text: 'Reliability', isCorrect: false }
    ],
    explanation: 'OSPF metric (cost) is based on bandwidth, with the formula: Cost = 10^8 / Bandwidth (in bps). Higher bandwidth links have lower costs.'
  },
  {
    id: 'q5',
    question: 'OSPF area 0 is called:',
    type: 'single',
    options: [
      { id: 'a', text: 'Core area', isCorrect: false },
      { id: 'b', text: 'Backbone area', isCorrect: false },
      { id: 'c', text: 'Transit area', isCorrect: false },
      { id: 'd', text: 'Both a and b', isCorrect: true }
    ],
    explanation: 'OSPF area 0 is called both the Core area and the Backbone area, serving as the central area that all other areas must connect to.'
  },
  {
    id: 'q6',
    question: 'OSPF router ID is:',
    type: 'single',
    options: [
      { id: 'a', text: 'Lowest IP', isCorrect: false },
      { id: 'b', text: 'Highest loopback IP if available', isCorrect: true },
      { id: 'c', text: 'MAC address', isCorrect: false },
      { id: 'd', text: 'Random number', isCorrect: false }
    ],
    explanation: 'OSPF Router ID is the highest loopback IP address if available, otherwise the highest physical IP address on the router.'
  },
  {
    id: 'q7',
    question: 'OSPF Hello interval default (broadcast network) =',
    type: 'single',
    options: [
      { id: 'a', text: '10 sec', isCorrect: true },
      { id: 'b', text: '30 sec', isCorrect: false },
      { id: 'c', text: '60 sec', isCorrect: false },
      { id: 'd', text: '1 sec', isCorrect: false }
    ],
    explanation: 'The default OSPF Hello interval is 10 seconds on broadcast networks, used to maintain neighbor relationships.'
  },
  {
    id: 'q8',
    question: 'OSPF Dead interval =',
    type: 'single',
    options: [
      { id: 'a', text: '20 sec', isCorrect: false },
      { id: 'b', text: '40 sec', isCorrect: true },
      { id: 'c', text: '60 sec', isCorrect: false },
      { id: 'd', text: '120 sec', isCorrect: false }
    ],
    explanation: 'The default OSPF Dead interval is 40 seconds (4 times the Hello interval), after which a neighbor is considered down if no Hello packets are received.'
  },
  {
    id: 'q9',
    question: 'Two routers become neighbors if:',
    type: 'multiple',
    options: [
      { id: 'a', text: 'Same OSPF area', isCorrect: true },
      { id: 'b', text: 'Same Hello/Dead timers', isCorrect: true },
      { id: 'c', text: 'Same subnet', isCorrect: true },
      { id: 'd', text: 'Different router IDs', isCorrect: false }
    ],
    explanation: 'OSPF routers become neighbors if they are in the same area, have matching Hello/Dead timers, are on the same subnet, and have different router IDs.'
  },
  {
    id: 'q10',
    question: 'OSPF administrative distance =',
    type: 'single',
    options: [
      { id: 'a', text: '100', isCorrect: false },
      { id: 'b', text: '110', isCorrect: true },
      { id: 'c', text: '90', isCorrect: false },
      { id: 'd', text: '120', isCorrect: false }
    ],
    explanation: 'OSPF has an administrative distance of 110, which is used to compare routes from different routing protocols when multiple paths exist.'
  },
  {
    id: 'q11',
    question: 'OSPF neighbor states in order:',
    type: 'single',
    options: [
      { id: 'a', text: 'Down → Init → 2-Way → ExStart → Exchange → Loading → Full', isCorrect: true },
      { id: 'b', text: 'Init → Down → Exchange → Full', isCorrect: false },
      { id: 'c', text: 'Full → Exchange → Loading', isCorrect: false },
      { id: 'd', text: 'Listen → Learn → Forward', isCorrect: false }
    ],
    explanation: 'OSPF neighbor states progress through: Down → Init → 2-Way → ExStart → Exchange → Loading → Full, with Full being the final operational state.'
  },
  {
    id: 'q12',
    question: 'DR stands for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Default Router', isCorrect: false },
      { id: 'b', text: 'Designated Router', isCorrect: true },
      { id: 'c', text: 'Direct Router', isCorrect: false },
      { id: 'd', text: 'Dynamic Router', isCorrect: false }
    ],
    explanation: 'DR stands for Designated Router, which is elected on multi-access networks to reduce LSA flooding and maintain the network topology.'
  },
  {
    id: 'q13',
    question: 'DR election based on:',
    type: 'single',
    options: [
      { id: 'a', text: 'Lowest priority', isCorrect: false },
      { id: 'b', text: 'Highest priority', isCorrect: true },
      { id: 'c', text: 'Lowest IP', isCorrect: false },
      { id: 'd', text: 'Random number', isCorrect: false }
    ],
    explanation: 'DR election is based on the highest priority (default 1), with the router ID as the tie-breaker if priorities are equal.'
  },
  {
    id: 'q14',
    question: 'DR/BDR election tie-breaker =',
    type: 'single',
    options: [
      { id: 'a', text: 'Lowest MAC', isCorrect: false },
      { id: 'b', text: 'Highest router ID', isCorrect: true },
      { id: 'c', text: 'Lowest router ID', isCorrect: false },
      { id: 'd', text: 'VLAN ID', isCorrect: false }
    ],
    explanation: 'If DR/BDR priorities are equal, the router with the highest router ID becomes the DR, and the second highest becomes the BDR.'
  },
  {
    id: 'q15',
    question: 'OSPF DR sends LSAs to:',
    type: 'single',
    options: [
      { id: 'a', text: 'All routers', isCorrect: false },
      { id: 'b', text: 'All neighbors via multicast', isCorrect: true },
      { id: 'c', text: 'Only BDR', isCorrect: false },
      { id: 'd', text: 'Only core switches', isCorrect: false }
    ],
    explanation: 'The DR sends LSAs to all neighbors using multicast address 224.0.0.5 (AllSPFRouters) to maintain the network topology.'
  },
  {
    id: 'q16',
    question: 'OSPF LSA Type 1 =',
    type: 'single',
    options: [
      { id: 'a', text: 'Router LSA', isCorrect: true },
      { id: 'b', text: 'Network LSA', isCorrect: false },
      { id: 'c', text: 'Summary LSA', isCorrect: false },
      { id: 'd', text: 'External LSA', isCorrect: false }
    ],
    explanation: 'LSA Type 1 is Router LSA, which describes the router\'s links and is flooded within the area where it originates.'
  },
  {
    id: 'q17',
    question: 'OSPF LSA Type 2 =',
    type: 'single',
    options: [
      { id: 'a', text: 'Network LSA', isCorrect: true },
      { id: 'b', text: 'Router LSA', isCorrect: false },
      { id: 'c', text: 'External LSA', isCorrect: false },
      { id: 'd', text: 'ASBR Summary LSA', isCorrect: false }
    ],
    explanation: 'LSA Type 2 is Network LSA, generated by the DR to describe the multi-access network and all routers connected to it.'
  },
  {
    id: 'q18',
    question: 'OSPF LSA Type 3 =',
    type: 'single',
    options: [
      { id: 'a', text: 'Summary LSA (ABR)', isCorrect: true },
      { id: 'b', text: 'External LSA', isCorrect: false },
      { id: 'c', text: 'NSSA LSA', isCorrect: false },
      { id: 'd', text: 'Router LSA', isCorrect: false }
    ],
    explanation: 'LSA Type 3 is Summary LSA, generated by ABRs to advertise inter-area routes between areas.'
  },
  {
    id: 'q19',
    question: 'OSPF LSA Type 5 =',
    type: 'single',
    options: [
      { id: 'a', text: 'External LSA', isCorrect: true },
      { id: 'b', text: 'Network LSA', isCorrect: false },
      { id: 'c', text: 'Summary LSA', isCorrect: false },
      { id: 'd', text: 'Router LSA', isCorrect: false }
    ],
    explanation: 'LSA Type 5 is External LSA, generated by ASBRs to advertise routes learned from other routing protocols or static routes.'
  },
  {
    id: 'q20',
    question: 'OSPF LSA Type 7 used in:',
    type: 'single',
    options: [
      { id: 'a', text: 'Normal areas', isCorrect: false },
      { id: 'b', text: 'NSSA areas', isCorrect: true },
      { id: 'c', text: 'Stub areas', isCorrect: false },
      { id: 'd', text: 'Backbone only', isCorrect: false }
    ],
    explanation: 'LSA Type 7 is used in NSSA (Not-So-Stubby Area) to allow external routes within the area, which are then converted to Type 5 LSAs by the ABR.'
  },
  {
    id: 'q21',
    question: 'Stub area:',
    type: 'single',
    options: [
      { id: 'a', text: 'No Type 5 LSAs', isCorrect: true },
      { id: 'b', text: 'No Type 3 LSAs', isCorrect: false },
      { id: 'c', text: 'No Type 1 LSAs', isCorrect: false },
      { id: 'd', text: 'No Type 2 LSAs', isCorrect: false }
    ],
    explanation: 'Stub areas block Type 5 (External) LSAs and use a default route to reach external destinations, reducing LSA flooding and memory usage.'
  },
  {
    id: 'q22',
    question: 'Totally Stubby Area blocks:',
    type: 'single',
    options: [
      { id: 'a', text: 'Type 5 only', isCorrect: false },
      { id: 'b', text: 'Type 3 & 5', isCorrect: true },
      { id: 'c', text: 'Type 1 & 2', isCorrect: false },
      { id: 'd', text: 'Type 7', isCorrect: false }
    ],
    explanation: 'Totally Stubby Areas block both Type 3 (Summary) and Type 5 (External) LSAs, using only a default route for all inter-area and external destinations.'
  },
  {
    id: 'q23',
    question: 'NSSA allows:',
    type: 'single',
    options: [
      { id: 'a', text: 'External routes inside', isCorrect: true },
      { id: 'b', text: 'No LSAs', isCorrect: false },
      { id: 'c', text: 'Type 5 only', isCorrect: false },
      { id: 'd', text: 'Type 3 only', isCorrect: false }
    ],
    explanation: 'NSSA (Not-So-Stubby Area) allows external routes to be injected within the area using Type 7 LSAs, which are converted to Type 5 by the ABR.'
  },
  {
    id: 'q24',
    question: 'OSPF virtual links used when:',
    type: 'single',
    options: [
      { id: 'a', text: 'Two non-backbone areas connect', isCorrect: true },
      { id: 'b', text: 'Stub area misconfigured', isCorrect: false },
      { id: 'c', text: 'DR/BDR fails', isCorrect: false },
      { id: 'd', text: 'LSA flooded', isCorrect: false }
    ],
    explanation: 'OSPF virtual links are used when a non-backbone area cannot directly connect to area 0, creating a logical connection through another area.'
  },
  {
    id: 'q25',
    question: 'OSPF ABR connects:',
    type: 'single',
    options: [
      { id: 'a', text: 'One area only', isCorrect: false },
      { id: 'b', text: 'Multiple areas', isCorrect: true },
      { id: 'c', text: 'Stub to backbone only', isCorrect: false },
      { id: 'd', text: 'One router to one switch', isCorrect: false }
    ],
    explanation: 'An ABR (Area Border Router) connects multiple OSPF areas and is responsible for exchanging routing information between areas.'
  },
  {
    id: 'q26',
    question: 'RIP hop count limit =',
    type: 'single',
    options: [
      { id: 'a', text: '10', isCorrect: false },
      { id: 'b', text: '15', isCorrect: true },
      { id: 'c', text: '16', isCorrect: false },
      { id: 'd', text: '20', isCorrect: false }
    ],
    explanation: 'RIP has a maximum hop count of 15, with 16 being considered unreachable, which limits RIP to networks with a maximum diameter of 15 hops.'
  },
  {
    id: 'q27',
    question: 'EIGRP metric uses:',
    type: 'single',
    options: [
      { id: 'a', text: 'Bandwidth & Delay', isCorrect: true },
      { id: 'b', text: 'Hop count only', isCorrect: false },
      { id: 'c', text: 'Reliability only', isCorrect: false },
      { id: 'd', text: 'MTU only', isCorrect: false }
    ],
    explanation: 'EIGRP uses a composite metric based primarily on bandwidth and delay, with the formula: Metric = (K1 × Bandwidth) + (K3 × Delay).'
  },
  {
    id: 'q28',
    question: 'EIGRP administrative distance =',
    type: 'single',
    options: [
      { id: 'a', text: '100', isCorrect: false },
      { id: 'b', text: '90', isCorrect: true },
      { id: 'c', text: '110', isCorrect: false },
      { id: 'd', text: '120', isCorrect: false }
    ],
    explanation: 'EIGRP has an administrative distance of 90 for internal routes, making it more preferred than OSPF (110) when multiple routing protocols are running.'
  },
  {
    id: 'q29',
    question: 'OSPF vs EIGRP convergence:',
    type: 'single',
    options: [
      { id: 'a', text: 'EIGRP slower', isCorrect: false },
      { id: 'b', text: 'OSPF slower than EIGRP', isCorrect: true },
      { id: 'c', text: 'Same speed', isCorrect: false },
      { id: 'd', text: 'OSPF faster always', isCorrect: false }
    ],
    explanation: 'EIGRP generally converges faster than OSPF because it maintains backup routes and can quickly switch to alternate paths without recalculating the entire topology.'
  },
  {
    id: 'q30',
    question: 'RIP update interval =',
    type: 'single',
    options: [
      { id: 'a', text: '15 sec', isCorrect: false },
      { id: 'b', text: '30 sec', isCorrect: true },
      { id: 'c', text: '60 sec', isCorrect: false },
      { id: 'd', text: '90 sec', isCorrect: false }
    ],
    explanation: 'RIP sends periodic updates every 30 seconds, broadcasting the entire routing table to all neighbors.'
  },
  {
    id: 'q31',
    question: 'OSPF sends updates:',
    type: 'single',
    options: [
      { id: 'a', text: 'Periodically', isCorrect: false },
      { id: 'b', text: 'Only when topology changes', isCorrect: true },
      { id: 'c', text: 'Every 30 sec', isCorrect: false },
      { id: 'd', text: 'On demand only', isCorrect: false }
    ],
    explanation: 'OSPF sends updates only when topology changes occur, making it more efficient than distance vector protocols that send periodic updates.'
  },
  {
    id: 'q32',
    question: 'Link-State protocols build:',
    type: 'single',
    options: [
      { id: 'a', text: 'Topology database', isCorrect: true },
      { id: 'b', text: 'Routing table directly', isCorrect: false },
      { id: 'c', text: 'ARP table', isCorrect: false },
      { id: 'd', text: 'VLAN table', isCorrect: false }
    ],
    explanation: 'Link-state protocols like OSPF build a complete topology database (LSDB) and then run an algorithm to calculate the shortest paths to all destinations.'
  },
  {
    id: 'q33',
    question: 'Dijkstra algorithm used in:',
    type: 'single',
    options: [
      { id: 'a', text: 'OSPF', isCorrect: true },
      { id: 'b', text: 'RIP', isCorrect: false },
      { id: 'c', text: 'EIGRP', isCorrect: false },
      { id: 'd', text: 'BGP', isCorrect: false }
    ],
    explanation: 'OSPF uses Dijkstra\'s Shortest Path First (SPF) algorithm to calculate the shortest path to all destinations based on the link-state database.'
  },
  {
    id: 'q34',
    question: 'BGP protocol type =',
    type: 'single',
    options: [
      { id: 'a', text: 'Distance vector', isCorrect: false },
      { id: 'b', text: 'Path vector', isCorrect: true },
      { id: 'c', text: 'Link state', isCorrect: false },
      { id: 'd', text: 'Hybrid', isCorrect: false }
    ],
    explanation: 'BGP is a Path Vector protocol that maintains the complete path (AS-Path) to destinations, preventing routing loops by checking the AS-Path attribute.'
  },
  {
    id: 'q35',
    question: 'BGP uses metric:',
    type: 'single',
    options: [
      { id: 'a', text: 'AS-Path', isCorrect: true },
      { id: 'b', text: 'Hop count', isCorrect: false },
      { id: 'c', text: 'Bandwidth', isCorrect: false },
      { id: 'd', text: 'Delay', isCorrect: false }
    ],
    explanation: 'BGP uses AS-Path as its primary metric, preferring routes with shorter AS-Path lengths (fewer autonomous systems to traverse).'
  }
];
