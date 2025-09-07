import { MCQQuestion } from '@/types/mcq';

export const ainLecture5Questions: MCQQuestion[] = [
  {
    id: 'q1',
    question: 'EtherChannel combines:',
    type: 'single',
    options: [
      { id: 'a', text: 'Multiple IP addresses', isCorrect: false },
      { id: 'b', text: 'Multiple physical links into one logical link', isCorrect: true },
      { id: 'c', text: 'VLANs', isCorrect: false },
      { id: 'd', text: 'Spanning Tree ports', isCorrect: false }
    ],
    explanation: 'EtherChannel combines multiple physical links into one logical link, providing increased bandwidth and redundancy while appearing as a single interface to STP.'
  },
  {
    id: 'q2',
    question: 'Purpose of EtherChannel:',
    type: 'single',
    options: [
      { id: 'a', text: 'Reduce VLANs', isCorrect: false },
      { id: 'b', text: 'Increase bandwidth & provide redundancy', isCorrect: true },
      { id: 'c', text: 'Elect root bridge', isCorrect: false },
      { id: 'd', text: 'Assign IP addresses', isCorrect: false }
    ],
    explanation: 'EtherChannel increases bandwidth by combining multiple links and provides redundancy by allowing traffic to continue flowing even if some links fail.'
  },
  {
    id: 'q3',
    question: 'Max number of interfaces in one EtherChannel =',
    type: 'single',
    options: [
      { id: 'a', text: '4', isCorrect: false },
      { id: 'b', text: '6', isCorrect: false },
      { id: 'c', text: '8', isCorrect: true },
      { id: 'd', text: '10', isCorrect: false }
    ],
    explanation: 'The maximum number of interfaces that can be combined in one EtherChannel is 8, providing up to 8 times the bandwidth of a single link.'
  },
  {
    id: 'q4',
    question: 'EtherChannel avoids STP blocking because:',
    type: 'single',
    options: [
      { id: 'a', text: 'Each link is separate', isCorrect: false },
      { id: 'b', text: 'STP sees all links as one logical link', isCorrect: true },
      { id: 'c', text: 'STP disabled', isCorrect: false },
      { id: 'd', text: 'VLANs removed', isCorrect: false }
    ],
    explanation: 'EtherChannel avoids STP blocking because STP sees all the physical links as one logical link, so there are no redundant paths to block.'
  },
  {
    id: 'q5',
    question: 'EtherChannel bandwidth =',
    type: 'single',
    options: [
      { id: 'a', text: 'Only one link', isCorrect: false },
      { id: 'b', text: 'Sum of all member links', isCorrect: true },
      { id: 'c', text: '100 Mbps fixed', isCorrect: false },
      { id: 'd', text: 'VLAN-dependent', isCorrect: false }
    ],
    explanation: 'EtherChannel bandwidth equals the sum of all member links, so 4 Gigabit links provide 4 Gbps of total bandwidth.'
  },
  {
    id: 'q6',
    question: 'Switch support: Catalyst 2960 can have up to:',
    type: 'single',
    options: [
      { id: 'a', text: '2 EtherChannels', isCorrect: false },
      { id: 'b', text: '4', isCorrect: false },
      { id: 'c', text: '6', isCorrect: true },
      { id: 'd', text: '8', isCorrect: false }
    ],
    explanation: 'The Catalyst 2960 switch can support up to 6 EtherChannels, allowing for multiple logical link aggregations.'
  },
  {
    id: 'q7',
    question: 'Interfaces in EtherChannel must match:',
    type: 'single',
    options: [
      { id: 'a', text: 'Speed & duplex', isCorrect: true },
      { id: 'b', text: 'IP addresses', isCorrect: false },
      { id: 'c', text: 'Router model', isCorrect: false },
      { id: 'd', text: 'VLAN only', isCorrect: false }
    ],
    explanation: 'All interfaces in an EtherChannel must have matching speed and duplex settings to ensure proper load balancing and operation.'
  },
  {
    id: 'q8',
    question: 'EtherChannel Layer 2 restriction:',
    type: 'single',
    options: [
      { id: 'a', text: 'All ports must be Layer 3', isCorrect: false },
      { id: 'b', text: 'All ports must be Layer 2', isCorrect: true },
      { id: 'c', text: 'Mix Layer 2 & 3 allowed', isCorrect: false },
      { id: 'd', text: 'Only VLAN 1', isCorrect: false }
    ],
    explanation: 'For Layer 2 EtherChannels, all ports must be configured as Layer 2 ports and cannot mix Layer 2 and Layer 3 configurations.'
  },
  {
    id: 'q9',
    question: 'PAgP is:',
    type: 'single',
    options: [
      { id: 'a', text: 'IEEE standard', isCorrect: false },
      { id: 'b', text: 'Cisco proprietary', isCorrect: true },
      { id: 'c', text: 'Open-source', isCorrect: false },
      { id: 'd', text: 'STP enhancement', isCorrect: false }
    ],
    explanation: 'PAgP (Port Aggregation Protocol) is a Cisco proprietary protocol used for automatic EtherChannel formation and negotiation.'
  },
  {
    id: 'q10',
    question: 'PAgP modes:',
    type: 'single',
    options: [
      { id: 'a', text: 'On, Desirable, Auto', isCorrect: true },
      { id: 'b', text: 'Active, Passive', isCorrect: false },
      { id: 'c', text: 'Auto only', isCorrect: false },
      { id: 'd', text: 'None', isCorrect: false }
    ],
    explanation: 'PAgP has three modes: On (forces channel), Desirable (actively negotiates), and Auto (passively negotiates).'
  },
  {
    id: 'q11',
    question: 'If both PAgP ends = Auto →',
    type: 'single',
    options: [
      { id: 'a', text: 'Channel forms', isCorrect: false },
      { id: 'b', text: 'No channel', isCorrect: true },
      { id: 'c', text: 'STP fails', isCorrect: false },
      { id: 'd', text: 'VLAN deleted', isCorrect: false }
    ],
    explanation: 'If both ends are in Auto mode, no channel forms because neither side actively initiates the negotiation process.'
  },
  {
    id: 'q12',
    question: 'LACP =',
    type: 'single',
    options: [
      { id: 'a', text: 'Cisco proprietary', isCorrect: false },
      { id: 'b', text: 'IEEE standard', isCorrect: true },
      { id: 'c', text: 'STP enhancement', isCorrect: false },
      { id: 'd', text: 'VLAN protocol', isCorrect: false }
    ],
    explanation: 'LACP (Link Aggregation Control Protocol) is an IEEE 802.3ad standard protocol for automatic EtherChannel formation.'
  },
  {
    id: 'q13',
    question: 'LACP modes:',
    type: 'single',
    options: [
      { id: 'a', text: 'Active, Passive, On', isCorrect: true },
      { id: 'b', text: 'Desirable, Auto, On', isCorrect: false },
      { id: 'c', text: 'Auto only', isCorrect: false },
      { id: 'd', text: 'Active only', isCorrect: false }
    ],
    explanation: 'LACP has three modes: Active (actively negotiates), Passive (passively negotiates), and On (forces channel without negotiation).'
  },
  {
    id: 'q14',
    question: 'Both LACP ends = Passive →',
    type: 'single',
    options: [
      { id: 'a', text: 'Channel forms', isCorrect: false },
      { id: 'b', text: 'No channel', isCorrect: true },
      { id: 'c', text: 'BPDU Guard triggers', isCorrect: false },
      { id: 'd', text: 'PortFast disabled', isCorrect: false }
    ],
    explanation: 'If both LACP ends are in Passive mode, no channel forms because neither side actively initiates the LACP negotiation.'
  },
  {
    id: 'q15',
    question: 'Port channel configuration command:',
    type: 'single',
    options: [
      { id: 'a', text: 'interface range fa0/1-2; channel-group X mode [active/passive/desirable/auto]', isCorrect: true },
      { id: 'b', text: 'ip ospf cost', isCorrect: false },
      { id: 'c', text: 'vlan 10', isCorrect: false },
      { id: 'd', text: 'spanning-tree portfast', isCorrect: false }
    ],
    explanation: 'The correct command sequence is to select the interface range and then configure the channel-group with the appropriate mode.'
  },
  {
    id: 'q16',
    question: 'Verification command for EtherChannel:',
    type: 'single',
    options: [
      { id: 'a', text: 'show etherchannel summary', isCorrect: true },
      { id: 'b', text: 'show vlan brief', isCorrect: false },
      { id: 'c', text: 'show running-config', isCorrect: false },
      { id: 'd', text: 'show ip route', isCorrect: false }
    ],
    explanation: 'The "show etherchannel summary" command displays the status of all EtherChannels, including their member ports and operational state.'
  },
  {
    id: 'q17',
    question: 'Common EtherChannel issue:',
    type: 'single',
    options: [
      { id: 'a', text: 'Speed mismatch', isCorrect: true },
      { id: 'b', text: 'VLAN 1 only', isCorrect: false },
      { id: 'c', text: 'Wrong MAC', isCorrect: false },
      { id: 'd', text: 'STP disabled', isCorrect: false }
    ],
    explanation: 'Speed mismatch between interfaces is a common EtherChannel issue that prevents proper channel formation and load balancing.'
  },
  {
    id: 'q18',
    question: 'Maximum Gigabit EtherChannel bandwidth (8 links) =',
    type: 'single',
    options: [
      { id: 'a', text: '1 Gbps', isCorrect: false },
      { id: 'b', text: '4 Gbps', isCorrect: false },
      { id: 'c', text: '8 Gbps', isCorrect: true },
      { id: 'd', text: '16 Gbps', isCorrect: false }
    ],
    explanation: 'With 8 Gigabit links in an EtherChannel, the maximum bandwidth is 8 Gbps (8 × 1 Gbps = 8 Gbps).'
  },
  {
    id: 'q19',
    question: 'FHRP =',
    type: 'single',
    options: [
      { id: 'a', text: 'First Hop Redundancy Protocol', isCorrect: true },
      { id: 'b', text: 'Fast Host Routing Protocol', isCorrect: false },
      { id: 'c', text: 'Forwarding Hub Router Protocol', isCorrect: false },
      { id: 'd', text: 'Firewall Host Routing Protocol', isCorrect: false }
    ],
    explanation: 'FHRP stands for First Hop Redundancy Protocol, which provides redundancy for the default gateway in a network.'
  },
  {
    id: 'q20',
    question: 'Problem FHRP solves:',
    type: 'single',
    options: [
      { id: 'a', text: 'VLAN mismatch', isCorrect: false },
      { id: 'b', text: 'Default gateway failure', isCorrect: true },
      { id: 'c', text: 'EtherChannel failure', isCorrect: false },
      { id: 'd', text: 'STP loops', isCorrect: false }
    ],
    explanation: 'FHRP solves the problem of default gateway failure by providing redundant gateways that can take over if the primary gateway fails.'
  },
  {
    id: 'q21',
    question: 'Concept of virtual router:',
    type: 'single',
    options: [
      { id: 'a', text: 'Logical IP/MAC shared by multiple routers', isCorrect: true },
      { id: 'b', text: 'IP address for VLAN 1', isCorrect: false },
      { id: 'c', text: 'Root bridge', isCorrect: false },
      { id: 'd', text: 'SVI interface', isCorrect: false }
    ],
    explanation: 'A virtual router is a logical IP and MAC address shared by multiple physical routers, providing seamless failover for hosts.'
  },
  {
    id: 'q22',
    question: 'Active router =',
    type: 'single',
    options: [
      { id: 'a', text: 'Monitors only', isCorrect: false },
      { id: 'b', text: 'Forwards traffic', isCorrect: true },
      { id: 'c', text: 'Blocked', isCorrect: false },
      { id: 'd', text: 'Disabled', isCorrect: false }
    ],
    explanation: 'The Active router is the one currently forwarding traffic for the virtual router, handling all packets destined for the virtual IP address.'
  },
  {
    id: 'q23',
    question: 'Standby router =',
    type: 'single',
    options: [
      { id: 'a', text: 'Currently forwarding', isCorrect: false },
      { id: 'b', text: 'Backup, takes over if Active fails', isCorrect: true },
      { id: 'c', text: 'Root bridge', isCorrect: false },
      { id: 'd', text: 'Switch trunk', isCorrect: false }
    ],
    explanation: 'The Standby router is the backup that monitors the Active router and takes over forwarding if the Active router fails.'
  },
  {
    id: 'q24',
    question: 'HSRP is:',
    type: 'single',
    options: [
      { id: 'a', text: 'IEEE standard', isCorrect: false },
      { id: 'b', text: 'Cisco proprietary', isCorrect: true },
      { id: 'c', text: 'Open-source', isCorrect: false },
      { id: 'd', text: 'Layer 2 protocol', isCorrect: false }
    ],
    explanation: 'HSRP (Hot Standby Router Protocol) is a Cisco proprietary FHRP that provides redundancy for the default gateway.'
  },
  {
    id: 'q25',
    question: 'HSRP election default =',
    type: 'single',
    options: [
      { id: 'a', text: 'Highest priority', isCorrect: false },
      { id: 'b', text: 'Highest IPv4 address', isCorrect: true },
      { id: 'c', text: 'Lowest MAC', isCorrect: false },
      { id: 'd', text: 'Lowest VLAN', isCorrect: false }
    ],
    explanation: 'HSRP election defaults to the router with the highest IPv4 address when all routers have the same priority (default 100).'
  },
  {
    id: 'q26',
    question: 'HSRP default priority =',
    type: 'single',
    options: [
      { id: 'a', text: '50', isCorrect: false },
      { id: 'b', text: '100', isCorrect: true },
      { id: 'c', text: '150', isCorrect: false },
      { id: 'd', text: '200', isCorrect: false }
    ],
    explanation: 'The default HSRP priority is 100, with higher priority values making a router more likely to become the Active router.'
  },
  {
    id: 'q27',
    question: 'HSRP preemption =',
    type: 'single',
    options: [
      { id: 'a', text: 'Allow higher-priority router to take over', isCorrect: true },
      { id: 'b', text: 'Disable standby', isCorrect: false },
      { id: 'c', text: 'Blocks root port', isCorrect: false },
      { id: 'd', text: 'Enables BPDU', isCorrect: false }
    ],
    explanation: 'HSRP preemption allows a higher-priority router to take over the Active role when it comes online, even if another router is currently Active.'
  },
  {
    id: 'q28',
    question: 'HSRP states order =',
    type: 'single',
    options: [
      { id: 'a', text: 'Down → Init → Listen → Speak → Standby → Active', isCorrect: true },
      { id: 'b', text: 'Init → Down → Standby → Active', isCorrect: false },
      { id: 'c', text: 'Listen → Learn → Forward', isCorrect: false },
      { id: 'd', text: 'Forwarding → Blocking → Listening', isCorrect: false }
    ],
    explanation: 'HSRP states progress through: Down → Init → Listen → Speak → Standby → Active, with each state serving a specific purpose in the election process.'
  },
  {
    id: 'q29',
    question: 'HSRP default Hello Timer =',
    type: 'single',
    options: [
      { id: 'a', text: '1 s', isCorrect: false },
      { id: 'b', text: '3 s', isCorrect: true },
      { id: 'c', text: '5 s', isCorrect: false },
      { id: 'd', text: '10 s', isCorrect: false }
    ],
    explanation: 'The default HSRP Hello Timer is 3 seconds, which is how often HSRP messages are sent between routers.'
  },
  {
    id: 'q30',
    question: 'HSRP default Hold Timer =',
    type: 'single',
    options: [
      { id: 'a', text: '3 s', isCorrect: false },
      { id: 'b', text: '5 s', isCorrect: false },
      { id: 'c', text: '10 s', isCorrect: true },
      { id: 'd', text: '15 s', isCorrect: false }
    ],
    explanation: 'The default HSRP Hold Timer is 10 seconds, which is how long a router waits for Hello messages before considering the Active router down.'
  },
  {
    id: 'q31',
    question: 'VRRP =',
    type: 'single',
    options: [
      { id: 'a', text: 'Cisco proprietary', isCorrect: false },
      { id: 'b', text: 'Open standard', isCorrect: true },
      { id: 'c', text: 'Layer 2 protocol', isCorrect: false },
      { id: 'd', text: 'EtherChannel mode', isCorrect: false }
    ],
    explanation: 'VRRP (Virtual Router Redundancy Protocol) is an open standard (RFC 3768) FHRP that provides similar functionality to HSRP but is vendor-neutral.'
  },
  {
    id: 'q32',
    question: 'GLBP =',
    type: 'single',
    options: [
      { id: 'a', text: 'Cisco FHRP with load balancing', isCorrect: true },
      { id: 'b', text: 'Standard STP', isCorrect: false },
      { id: 'c', text: 'VLAN protocol', isCorrect: false },
      { id: 'd', text: 'Passive standby only', isCorrect: false }
    ],
    explanation: 'GLBP (Gateway Load Balancing Protocol) is a Cisco FHRP that provides both redundancy and load balancing across multiple gateways.'
  },
  {
    id: 'q33',
    question: 'IRDP =',
    type: 'single',
    options: [
      { id: 'a', text: 'Modern FHRP', isCorrect: false },
      { id: 'b', text: 'Legacy ICMP-based FHRP', isCorrect: true },
      { id: 'c', text: 'Layer 3 switch feature', isCorrect: false },
      { id: 'd', text: 'EtherChannel protocol', isCorrect: false }
    ],
    explanation: 'IRDP (ICMP Router Discovery Protocol) is a legacy ICMP-based FHRP that allows hosts to discover routers automatically.'
  },
  {
    id: 'q34',
    question: 'Preemption allows takeover if:',
    type: 'single',
    options: [
      { id: 'a', text: 'IP higher', isCorrect: false },
      { id: 'b', text: 'Priority higher', isCorrect: true },
      { id: 'c', text: 'MAC lower', isCorrect: false },
      { id: 'd', text: 'VLAN matches', isCorrect: false }
    ],
    explanation: 'Preemption allows a router with higher priority to take over the Active role, ensuring the most preferred router is always Active when available.'
  },
  {
    id: 'q35',
    question: 'FHRP provides seamless failover by:',
    type: 'single',
    options: [
      { id: 'a', text: 'Changing VLANs', isCorrect: false },
      { id: 'b', text: 'Sharing virtual IP/MAC', isCorrect: true },
      { id: 'c', text: 'Blocking trunk', isCorrect: false },
      { id: 'd', text: 'Using STP', isCorrect: false }
    ],
    explanation: 'FHRP provides seamless failover by sharing a virtual IP and MAC address among multiple routers, so hosts don\'t need to change their default gateway configuration.'
  }
];
