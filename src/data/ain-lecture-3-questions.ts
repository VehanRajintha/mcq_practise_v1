import { MCQQuestion } from '@/types/mcq';

export const ainLecture3Questions: MCQQuestion[] = [
  {
    id: 'q1',
    question: 'VLAN stands for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Virtual Local Area Network', isCorrect: true },
      { id: 'b', text: 'Variable LAN', isCorrect: false },
      { id: 'c', text: 'Virtual Link Access', isCorrect: false },
      { id: 'd', text: 'Very Large Area Network', isCorrect: false }
    ],
    explanation: 'VLAN stands for Virtual Local Area Network, which allows logical segmentation of a physical network into multiple broadcast domains.'
  },
  {
    id: 'q2',
    question: 'VLANs improve network performance by:',
    type: 'single',
    options: [
      { id: 'a', text: 'Reducing broadcast traffic', isCorrect: true },
      { id: 'b', text: 'Increasing MAC addresses', isCorrect: false },
      { id: 'c', text: 'Replacing routers', isCorrect: false },
      { id: 'd', text: 'Removing STP', isCorrect: false }
    ],
    explanation: 'VLANs improve network performance by reducing broadcast traffic through logical segmentation, creating smaller broadcast domains and improving overall network efficiency.'
  },
  {
    id: 'q3',
    question: 'VLANs improve security because:',
    type: 'single',
    options: [
      { id: 'a', text: 'They use NAT', isCorrect: false },
      { id: 'b', text: 'Traffic is isolated per VLAN', isCorrect: true },
      { id: 'c', text: 'Switches forward all traffic', isCorrect: false },
      { id: 'd', text: 'They increase bandwidth', isCorrect: false }
    ],
    explanation: 'VLANs improve security by isolating traffic per VLAN, preventing devices in different VLANs from communicating directly without routing, creating security boundaries.'
  },
  {
    id: 'q4',
    question: 'VLANs improve manageability by:',
    type: 'single',
    options: [
      { id: 'a', text: 'Reducing IP addresses', isCorrect: false },
      { id: 'b', text: 'Allowing logical grouping independent of physical location', isCorrect: true },
      { id: 'c', text: 'Eliminating routers', isCorrect: false },
      { id: 'd', text: 'Disabling STP', isCorrect: false }
    ],
    explanation: 'VLANs improve manageability by allowing logical grouping of devices independent of their physical location, making network administration more flexible and organized.'
  },
  {
    id: 'q5',
    question: 'A trunk link:',
    type: 'single',
    options: [
      { id: 'a', text: 'Connects end devices', isCorrect: false },
      { id: 'b', text: 'Carries multiple VLANs between switches', isCorrect: true },
      { id: 'c', text: 'Connects router to server only', isCorrect: false },
      { id: 'd', text: 'Provides PoE', isCorrect: false }
    ],
    explanation: 'A trunk link carries multiple VLANs between switches, allowing VLAN traffic to traverse across the network infrastructure while maintaining VLAN separation.'
  },
  {
    id: 'q6',
    question: 'VLAN tagging protocol commonly used is:',
    type: 'single',
    options: [
      { id: 'a', text: 'IEEE 802.1Q', isCorrect: true },
      { id: 'b', text: 'EtherChannel', isCorrect: false },
      { id: 'c', text: 'RSTP', isCorrect: false },
      { id: 'd', text: 'HSRP', isCorrect: false }
    ],
    explanation: 'IEEE 802.1Q is the standard VLAN tagging protocol that adds a 4-byte tag to Ethernet frames to identify which VLAN the frame belongs to.'
  },
  {
    id: 'q7',
    question: 'VTP is:',
    type: 'single',
    options: [
      { id: 'a', text: 'IEEE standard', isCorrect: false },
      { id: 'b', text: 'Cisco proprietary', isCorrect: true },
      { id: 'c', text: 'Open-source VLAN protocol', isCorrect: false },
      { id: 'd', text: 'Layer 3 routing protocol', isCorrect: false }
    ],
    explanation: 'VTP (VLAN Trunking Protocol) is a Cisco proprietary protocol that synchronizes VLAN information across switches in the same VTP domain.'
  },
  {
    id: 'q8',
    question: 'VTP server can:',
    type: 'single',
    options: [
      { id: 'a', text: 'Only receive VLAN info', isCorrect: false },
      { id: 'b', text: 'Create, modify, delete VLANs', isCorrect: true },
      { id: 'c', text: 'Ignore VLANs', isCorrect: false },
      { id: 'd', text: 'Forward packets', isCorrect: false }
    ],
    explanation: 'VTP server mode allows switches to create, modify, and delete VLANs, and advertise these changes to other switches in the VTP domain.'
  },
  {
    id: 'q9',
    question: 'VTP client can:',
    type: 'single',
    options: [
      { id: 'a', text: 'Create VLANs', isCorrect: false },
      { id: 'b', text: 'Modify VLANs', isCorrect: false },
      { id: 'c', text: 'Receive VLAN database from server', isCorrect: true },
      { id: 'd', text: 'Store VLAN info in NVRAM', isCorrect: false }
    ],
    explanation: 'VTP client mode allows switches to receive VLAN information from VTP servers but cannot create, modify, or delete VLANs locally.'
  },
  {
    id: 'q10',
    question: 'VTP transparent mode:',
    type: 'single',
    options: [
      { id: 'a', text: 'Participates in advertisements', isCorrect: false },
      { id: 'b', text: 'Does not participate, forwards locally configured VLANs', isCorrect: true },
      { id: 'c', text: 'Deletes VLANs automatically', isCorrect: false },
      { id: 'd', text: 'Only stores VLAN info in NVRAM', isCorrect: false }
    ],
    explanation: 'VTP transparent mode does not participate in VTP advertisements but forwards them to other switches while maintaining locally configured VLANs.'
  },
  {
    id: 'q11',
    question: 'VTP advertisement contains:',
    type: 'single',
    options: [
      { id: 'a', text: 'VLAN info + subnet mask', isCorrect: false },
      { id: 'b', text: 'Domain name + revision number', isCorrect: true },
      { id: 'c', text: 'MAC addresses only', isCorrect: false },
      { id: 'd', text: 'IP addresses', isCorrect: false }
    ],
    explanation: 'VTP advertisements contain the domain name and revision number, which are used to determine if the VLAN database is newer and should be synchronized.'
  },
  {
    id: 'q12',
    question: 'Dangerous VTP scenario:',
    type: 'single',
    options: [
      { id: 'a', text: 'Switch with lower revision number joins domain', isCorrect: false },
      { id: 'b', text: 'Switch with higher revision number joins domain', isCorrect: true },
      { id: 'c', text: 'Two servers in VTP server mode', isCorrect: false },
      { id: 'd', text: 'VLAN 1 configured', isCorrect: false }
    ],
    explanation: 'A switch with a higher revision number joining a VTP domain can overwrite the entire VLAN database of other switches, potentially deleting all VLANs.'
  },
  {
    id: 'q13',
    question: 'Dynamic Trunking Protocol (DTP) is:',
    type: 'single',
    options: [
      { id: 'a', text: 'IEEE standard', isCorrect: false },
      { id: 'b', text: 'Cisco proprietary', isCorrect: true },
      { id: 'c', text: 'VLAN routing protocol', isCorrect: false },
      { id: 'd', text: 'STP enhancement', isCorrect: false }
    ],
    explanation: 'DTP (Dynamic Trunking Protocol) is a Cisco proprietary protocol that automatically negotiates trunk formation between switches.'
  },
  {
    id: 'q14',
    question: 'DTP dynamic auto mode:',
    type: 'single',
    options: [
      { id: 'a', text: 'Actively forms trunk', isCorrect: false },
      { id: 'b', text: 'Waits to respond, does not initiate', isCorrect: true },
      { id: 'c', text: 'Forces access', isCorrect: false },
      { id: 'd', text: 'Forces trunk', isCorrect: false }
    ],
    explanation: 'DTP dynamic auto mode waits for the other side to initiate trunk formation but does not actively send DTP messages to form a trunk.'
  },
  {
    id: 'q15',
    question: 'Two dynamic auto ports result in:',
    type: 'single',
    options: [
      { id: 'a', text: 'Trunk formed', isCorrect: false },
      { id: 'b', text: 'Access mode (no trunk)', isCorrect: true },
      { id: 'c', text: 'STP failure', isCorrect: false },
      { id: 'd', text: 'VLAN deletion', isCorrect: false }
    ],
    explanation: 'Two ports in dynamic auto mode will not form a trunk because neither actively initiates trunk formation, resulting in access mode.'
  },
  {
    id: 'q16',
    question: 'Inter-VLAN routing requires:',
    type: 'single',
    options: [
      { id: 'a', text: 'Layer 2 switch', isCorrect: false },
      { id: 'b', text: 'Layer 3 device', isCorrect: true },
      { id: 'c', text: 'VLAN trunk only', isCorrect: false },
      { id: 'd', text: 'EtherChannel', isCorrect: false }
    ],
    explanation: 'Inter-VLAN routing requires a Layer 3 device (router or Layer 3 switch) to route traffic between different VLANs since VLANs are separate broadcast domains.'
  },
  {
    id: 'q17',
    question: 'Router-on-a-stick uses:',
    type: 'single',
    options: [
      { id: 'a', text: 'Multiple physical interfaces', isCorrect: false },
      { id: 'b', text: 'Single physical interface with subinterfaces per VLAN', isCorrect: true },
      { id: 'c', text: 'Layer 2 switching only', isCorrect: false },
      { id: 'd', text: 'EtherChannel', isCorrect: false }
    ],
    explanation: 'Router-on-a-stick uses a single physical interface with multiple subinterfaces, each assigned to a different VLAN for inter-VLAN routing.'
  },
  {
    id: 'q18',
    question: 'SVI (Switch Virtual Interface) advantage:',
    type: 'single',
    options: [
      { id: 'a', text: 'Slower than router-on-a-stick', isCorrect: false },
      { id: 'b', text: 'Faster, can use EtherChannel', isCorrect: true },
      { id: 'c', text: 'Requires separate physical ports', isCorrect: false },
      { id: 'd', text: 'Only Layer 2', isCorrect: false }
    ],
    explanation: 'SVI provides faster inter-VLAN routing than router-on-a-stick and can utilize EtherChannel for increased bandwidth and redundancy.'
  },
  {
    id: 'q19',
    question: 'Routed port is:',
    type: 'single',
    options: [
      { id: 'a', text: 'Physical Layer 2 port', isCorrect: false },
      { id: 'b', text: 'Physical port configured as Layer 3 interface', isCorrect: true },
      { id: 'c', text: 'VLAN trunk', isCorrect: false },
      { id: 'd', text: 'SVI', isCorrect: false }
    ],
    explanation: 'A routed port is a physical port configured as a Layer 3 interface, allowing direct routing without VLAN association.'
  },
  {
    id: 'q20',
    question: 'VLAN 1 cannot be:',
    type: 'single',
    options: [
      { id: 'a', text: 'Deleted', isCorrect: true },
      { id: 'b', text: 'Used for end devices', isCorrect: false },
      { id: 'c', text: 'Trunked', isCorrect: false },
      { id: 'd', text: 'Tagged', isCorrect: false }
    ],
    explanation: 'VLAN 1 is the default VLAN and cannot be deleted, renamed, or removed from the switch configuration.'
  },
  {
    id: 'q21',
    question: 'Default VTP mode is:',
    type: 'single',
    options: [
      { id: 'a', text: 'Client', isCorrect: false },
      { id: 'b', text: 'Transparent', isCorrect: false },
      { id: 'c', text: 'Server', isCorrect: true },
      { id: 'd', text: 'Auto', isCorrect: false }
    ],
    explanation: 'The default VTP mode is server, which allows switches to create, modify, and delete VLANs and advertise changes to other switches.'
  },
  {
    id: 'q22',
    question: 'Best practice VTP mode for security:',
    type: 'single',
    options: [
      { id: 'a', text: 'Server', isCorrect: false },
      { id: 'b', text: 'Client', isCorrect: false },
      { id: 'c', text: 'Transparent', isCorrect: true },
      { id: 'd', text: 'Auto', isCorrect: false }
    ],
    explanation: 'VTP transparent mode is the best practice for security as it prevents accidental VLAN database overwrites and maintains local VLAN control.'
  },
  {
    id: 'q23',
    question: 'VTP revision number is stored in:',
    type: 'single',
    options: [
      { id: 'a', text: 'RAM', isCorrect: false },
      { id: 'b', text: 'NVRAM', isCorrect: true },
      { id: 'c', text: 'Flash', isCorrect: false },
      { id: 'd', text: 'ROM', isCorrect: false }
    ],
    explanation: 'VTP revision number is stored in NVRAM, making it persistent across reboots and critical for VTP domain synchronization.'
  },
  {
    id: 'q24',
    question: 'Common VLAN misconfiguration:',
    type: 'single',
    options: [
      { id: 'a', text: 'Wrong IP address on SVI', isCorrect: false },
      { id: 'b', text: 'Wrong VLAN assigned to router link', isCorrect: true },
      { id: 'c', text: 'PortFast enabled', isCorrect: false },
      { id: 'd', text: 'EtherChannel mismatch', isCorrect: false }
    ],
    explanation: 'A common VLAN misconfiguration is assigning the wrong VLAN to a router link, which prevents proper inter-VLAN routing and connectivity.'
  },
  {
    id: 'q25',
    question: 'Trunk link requirement:',
    type: 'single',
    options: [
      { id: 'a', text: 'Must connect only routers', isCorrect: false },
      { id: 'b', text: 'Must use VLAN tagging protocol', isCorrect: true },
      { id: 'c', text: 'Must disable STP', isCorrect: false },
      { id: 'd', text: 'Must be Layer 3', isCorrect: false }
    ],
    explanation: 'Trunk links must use a VLAN tagging protocol (like 802.1Q) to identify which VLAN each frame belongs to when carrying multiple VLANs.'
  }
];
