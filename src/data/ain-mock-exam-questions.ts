import { MCQQuestion } from '@/types/mcq';

export const ainMockExamQuestions: MCQQuestion[] = [
  // STP (Spanning Tree Protocol) - Questions 1-10
  {
    id: 'mock-1',
    question: 'Which of the following correctly describes the Bridge ID components in order of precedence for Root Bridge election?',
    options: [
      { id: 'a', text: 'MAC Address → Extended System ID → Bridge Priority', isCorrect: false },
      { id: 'b', text: 'Bridge Priority → Extended System ID → MAC Address', isCorrect: true },
      { id: 'c', text: 'Extended System ID → Bridge Priority → MAC Address', isCorrect: false },
      { id: 'd', text: 'Bridge Priority → MAC Address → Extended System ID', isCorrect: false }
    ],
    explanation: 'Bridge ID consists of Bridge Priority (2 bytes) + Extended System ID (12 bits) + MAC Address (36 bits). The Bridge Priority is the most significant component for Root Bridge election.',
    type: 'single'
  },
  {
    id: 'mock-2',
    question: 'A switch has a base priority of 32768 and is configured for VLAN 10. What will be the actual priority value displayed?',
    options: [
      { id: 'a', text: '32768', isCorrect: false },
      { id: 'b', text: '32778', isCorrect: true },
      { id: 'c', text: '10', isCorrect: false },
      { id: 'd', text: '32758', isCorrect: false }
    ],
    explanation: 'The actual priority is calculated as base priority + VLAN ID. So 32768 + 10 = 32778.',
    type: 'single'
  },
  {
    id: 'mock-3',
    question: 'In RSTP, which port role serves as a backup path to the root bridge?',
    options: [
      { id: 'a', text: 'Root Port', isCorrect: false },
      { id: 'b', text: 'Designated Port', isCorrect: false },
      { id: 'c', text: 'Alternate Port', isCorrect: true },
      { id: 'd', text: 'Backup Port', isCorrect: false }
    ],
    explanation: 'Alternate Port is a backup path to the root bridge. It provides redundancy and can quickly take over if the Root Port fails.',
    type: 'single'
  },
  {
    id: 'mock-4',
    question: 'What is the total convergence time for traditional STP assuming default timers?',
    options: [
      { id: 'a', text: '20 seconds', isCorrect: false },
      { id: 'b', text: '30 seconds', isCorrect: false },
      { id: 'c', text: '35 seconds', isCorrect: false },
      { id: 'd', text: '50 seconds', isCorrect: true }
    ],
    explanation: 'Traditional STP convergence time = Max Age (20s) + Listening (15s) + Learning (15s) = 50 seconds total.',
    type: 'single'
  },
  {
    id: 'mock-5',
    question: 'Which STP enhancement should NEVER be configured on trunk ports?',
    options: [
      { id: 'a', text: 'BPDU Guard', isCorrect: false },
      { id: 'b', text: 'PortFast', isCorrect: true },
      { id: 'c', text: 'Root Guard', isCorrect: false },
      { id: 'd', text: 'Loop Guard', isCorrect: false }
    ],
    explanation: 'PortFast should only be used on access ports connected to end devices. Using it on trunk ports can cause loops.',
    type: 'single'
  },
  {
    id: 'mock-6',
    question: 'What happens when a port configured with BPDU Guard receives a BPDU?',
    options: [
      { id: 'a', text: 'The port transitions to blocking state', isCorrect: false },
      { id: 'b', text: 'The port is placed in errdisable state', isCorrect: true },
      { id: 'c', text: 'The port ignores the BPDU', isCorrect: false },
      { id: 'd', text: 'The port forwards the BPDU', isCorrect: false }
    ],
    explanation: 'BPDU Guard immediately places the port in errdisable state when it receives a BPDU, preventing potential loops.',
    type: 'single'
  },
  {
    id: 'mock-7',
    question: 'In PVST+, how many STP instances run on a switch with VLANs 1, 10, 20, and 30?',
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '3', isCorrect: false },
      { id: 'c', text: '4', isCorrect: true },
      { id: 'd', text: '5', isCorrect: false }
    ],
    explanation: 'PVST+ runs one STP instance per VLAN. With 4 VLANs (1, 10, 20, 30), there are 4 STP instances.',
    type: 'single'
  },
  {
    id: 'mock-8',
    question: 'What is the default port cost for a 1 Gbps link in STP?',
    options: [
      { id: 'a', text: '2', isCorrect: false },
      { id: 'b', text: '4', isCorrect: true },
      { id: 'c', text: '19', isCorrect: false },
      { id: 'd', text: '100', isCorrect: false }
    ],
    explanation: 'The default STP cost for a 1 Gbps (1000 Mbps) link is 4.',
    type: 'single'
  },
  {
    id: 'mock-9',
    question: 'Which of the following is NOT a problem caused by Layer 2 loops?',
    options: [
      { id: 'a', text: 'Broadcast storms', isCorrect: false },
      { id: 'b', text: 'MAC address table instability', isCorrect: false },
      { id: 'c', text: 'High TTL values', isCorrect: true },
      { id: 'd', text: 'Unknown unicast flooding', isCorrect: false }
    ],
    explanation: 'Layer 2 has no TTL mechanism, so high TTL values are not a Layer 2 loop problem. TTL is a Layer 3 concept.',
    type: 'single'
  },
  {
    id: 'mock-10',
    question: 'In the Root Port election process, if path costs are equal, what is the next tiebreaker?',
    options: [
      { id: 'a', text: 'Lowest sender port priority', isCorrect: false },
      { id: 'b', text: 'Lowest sender BID', isCorrect: true },
      { id: 'c', text: 'Lowest sender port ID', isCorrect: false },
      { id: 'd', text: 'Highest sender BID', isCorrect: false }
    ],
    explanation: 'Root Port election tiebreakers: 1) Lowest path cost, 2) Lowest sender BID, 3) Lowest sender port priority, 4) Lowest sender port ID.',
    type: 'single'
  },

  // VLAN and VTP - Questions 11-20
  {
    id: 'mock-11',
    question: 'What is the primary risk when adding a new VTP-enabled switch to an existing domain?',
    options: [
      { id: 'a', text: 'VLAN database corruption', isCorrect: false },
      { id: 'b', text: 'Higher revision number wiping existing configs', isCorrect: true },
      { id: 'c', text: 'Trunk negotiation failure', isCorrect: false },
      { id: 'd', text: 'STP recalculation', isCorrect: false }
    ],
    explanation: 'A new switch with a higher VTP revision number can overwrite the existing VLAN database, potentially wiping out all VLAN configurations.',
    type: 'single'
  },
  {
    id: 'mock-12',
    question: 'Which VTP mode is recommended as Cisco best practice?',
    options: [
      { id: 'a', text: 'Server', isCorrect: false },
      { id: 'b', text: 'Client', isCorrect: false },
      { id: 'c', text: 'Transparent', isCorrect: true },
      { id: 'd', text: 'Off', isCorrect: false }
    ],
    explanation: 'VTP Transparent mode is recommended as it prevents accidental VLAN database overwrites while still allowing VTP advertisements to pass through.',
    type: 'single'
  },
  {
    id: 'mock-13',
    question: 'What happens to switch ports when their assigned VLAN is deleted from a VTP server?',
    options: [
      { id: 'a', text: 'Ports are reassigned to VLAN 1', isCorrect: false },
      { id: 'b', text: 'Ports become inactive until reassigned', isCorrect: true },
      { id: 'c', text: 'Ports are automatically shut down', isCorrect: false },
      { id: 'd', text: 'Ports continue forwarding traffic', isCorrect: false }
    ],
    explanation: 'When a VLAN is deleted, ports assigned to that VLAN become inactive and cannot forward traffic until they are reassigned to a valid VLAN.',
    type: 'single'
  },
  {
    id: 'mock-14',
    question: 'Which VLANs cannot be deleted from a Cisco switch?',
    options: [
      { id: 'a', text: 'VLAN 1 only', isCorrect: false },
      { id: 'b', text: 'VLANs 1, 10, 20', isCorrect: false },
      { id: 'c', text: 'VLANs 1, 1002-1005', isCorrect: true },
      { id: 'd', text: 'All VLANs can be deleted', isCorrect: false }
    ],
    explanation: 'VLANs 1 (default) and 1002-1005 (reserved for Token Ring and FDDI) cannot be deleted from Cisco switches.',
    type: 'single'
  },
  {
    id: 'mock-15',
    question: 'In VTP transparent mode, what happens to VTP advertisements received from other switches?',
    options: [
      { id: 'a', text: 'They are processed and stored locally', isCorrect: false },
      { id: 'b', text: 'They are forwarded but not processed', isCorrect: true },
      { id: 'c', text: 'They are discarded', isCorrect: false },
      { id: 'd', text: 'They are modified before forwarding', isCorrect: false }
    ],
    explanation: 'VTP Transparent mode forwards VTP advertisements to other switches but does not process or store them locally.',
    type: 'single'
  },
  {
    id: 'mock-16',
    question: 'Inter-VLAN routing requires which layer of the OSI model?',
    options: [
      { id: 'a', text: 'Layer 2', isCorrect: false },
      { id: 'b', text: 'Layer 3', isCorrect: true },
      { id: 'c', text: 'Layer 4', isCorrect: false },
      { id: 'd', text: 'Layer 7', isCorrect: false }
    ],
    explanation: 'Inter-VLAN routing requires Layer 3 functionality to route traffic between different VLANs.',
    type: 'single'
  },
  {
    id: 'mock-17',
    question: 'What is the main advantage of using SVIs over router-on-a-stick?',
    options: [
      { id: 'a', text: 'Lower cost', isCorrect: false },
      { id: 'b', text: 'Better security', isCorrect: false },
      { id: 'c', text: 'Faster performance and no single link limitation', isCorrect: true },
      { id: 'd', text: 'Easier configuration', isCorrect: false }
    ],
    explanation: 'SVIs provide faster performance and eliminate the single link bottleneck that exists with router-on-a-stick configurations.',
    type: 'single'
  },
  {
    id: 'mock-18',
    question: 'Which command is used to delete VLAN 50 from a switch?',
    options: [
      { id: 'a', text: 'delete vlan 50', isCorrect: false },
      { id: 'b', text: 'no vlan 50', isCorrect: true },
      { id: 'c', text: 'remove vlan 50', isCorrect: false },
      { id: 'd', text: 'vlan 50 shutdown', isCorrect: false }
    ],
    explanation: 'The correct command to delete a VLAN is "no vlan 50" in VLAN configuration mode.',
    type: 'single'
  },
  {
    id: 'mock-19',
    question: 'What determines which VLAN database a VTP domain uses?',
    options: [
      { id: 'a', text: 'Server priority', isCorrect: false },
      { id: 'b', text: 'Configuration revision number', isCorrect: true },
      { id: 'c', text: 'MAC address', isCorrect: false },
      { id: 'd', text: 'Switch uptime', isCorrect: false }
    ],
    explanation: 'VTP uses the configuration revision number to determine which VLAN database is the most current and should be used by all switches in the domain.',
    type: 'single'
  },
  {
    id: 'mock-20',
    question: 'A routed port on a multilayer switch has which characteristic?',
    options: [
      { id: 'a', text: "It's associated with a specific VLAN", isCorrect: false },
      { id: 'b', text: 'It supports STP', isCorrect: false },
      { id: 'c', text: 'It acts like a router interface', isCorrect: true },
      { id: 'd', text: 'It requires sub-interfaces', isCorrect: false }
    ],
    explanation: 'A routed port on a multilayer switch acts like a router interface and is not associated with any VLAN.',
    type: 'single'
  },

  // IPv6 - Questions 21-30
  {
    id: 'mock-21',
    question: 'How many bits are in an IPv6 address?',
    options: [
      { id: 'a', text: '32', isCorrect: false },
      { id: 'b', text: '64', isCorrect: false },
      { id: 'c', text: '96', isCorrect: false },
      { id: 'd', text: '128', isCorrect: true }
    ],
    explanation: 'IPv6 addresses are 128 bits long, compared to IPv4 addresses which are 32 bits long.',
    type: 'single'
  },
  {
    id: 'mock-22',
    question: 'Which IPv6 address type replaces IPv4 broadcast?',
    options: [
      { id: 'a', text: 'Unicast', isCorrect: false },
      { id: 'b', text: 'Multicast', isCorrect: true },
      { id: 'c', text: 'Anycast', isCorrect: false },
      { id: 'd', text: 'Broadcast', isCorrect: false }
    ],
    explanation: 'IPv6 does not have broadcast addresses. Multicast addresses are used instead to reach multiple hosts.',
    type: 'single'
  },
  {
    id: 'mock-23',
    question: 'What is the range for Link-Local addresses?',
    options: [
      { id: 'a', text: 'FE80::/64', isCorrect: false },
      { id: 'b', text: 'FE80::/10', isCorrect: true },
      { id: 'c', text: 'FF00::/8', isCorrect: false },
      { id: 'd', text: '2000::/3', isCorrect: false }
    ],
    explanation: 'Link-Local addresses use the FE80::/10 prefix and are automatically assigned to interfaces.',
    type: 'single'
  },
  {
    id: 'mock-24',
    question: 'In the EUI-64 process, what is inserted in the middle of the MAC address?',
    options: [
      { id: 'a', text: 'FFFF', isCorrect: false },
      { id: 'b', text: 'FFFE', isCorrect: true },
      { id: 'c', text: '0000', isCorrect: false },
      { id: 'd', text: 'AAAA', isCorrect: false }
    ],
    explanation: 'In EUI-64, FFFE is inserted in the middle of the MAC address to create a 64-bit interface identifier.',
    type: 'single'
  },
  {
    id: 'mock-25',
    question: 'Which bit is flipped in the EUI-64 process?',
    options: [
      { id: 'a', text: '6th bit', isCorrect: false },
      { id: 'b', text: '7th bit', isCorrect: true },
      { id: 'c', text: '8th bit', isCorrect: false },
      { id: 'd', text: '16th bit', isCorrect: false }
    ],
    explanation: 'The 7th bit (U/L bit) is flipped in the EUI-64 process to indicate a locally administered address.',
    type: 'single'
  },
  {
    id: 'mock-26',
    question: 'How many subnets can be created with a /48 global routing prefix using 16-bit subnet IDs?',
    options: [
      { id: 'a', text: '256', isCorrect: false },
      { id: 'b', text: '4,096', isCorrect: false },
      { id: 'c', text: '16,384', isCorrect: false },
      { id: 'd', text: '65,536', isCorrect: true }
    ],
    explanation: 'With 16 bits for subnet IDs, you can create 2^16 = 65,536 subnets.',
    type: 'single'
  },
  {
    id: 'mock-27',
    question: 'Which SLAAC option uses RA messages only?',
    options: [
      { id: 'a', text: 'SLAAC + DHCPv6', isCorrect: false },
      { id: 'b', text: 'DHCPv6 Only', isCorrect: false },
      { id: 'c', text: 'SLAAC Only', isCorrect: true },
      { id: 'd', text: 'Manual Configuration', isCorrect: false }
    ],
    explanation: 'SLAAC Only uses Router Advertisement (RA) messages to provide network configuration information to hosts.',
    type: 'single'
  },
  {
    id: 'mock-28',
    question: 'What is the IPv6 loopback address?',
    options: [
      { id: 'a', text: '::1/128', isCorrect: true },
      { id: 'b', text: '127.0.0.1', isCorrect: false },
      { id: 'c', text: 'FE80::1', isCorrect: false },
      { id: 'd', text: '::0/128', isCorrect: false }
    ],
    explanation: 'The IPv6 loopback address is ::1/128, equivalent to 127.0.0.1 in IPv4.',
    type: 'single'
  },
  {
    id: 'mock-29',
    question: 'Which protocol is mandatory in IPv6 but optional in IPv4?',
    options: [
      { id: 'a', text: 'DHCP', isCorrect: false },
      { id: 'b', text: 'DNS', isCorrect: false },
      { id: 'c', text: 'IPSec', isCorrect: true },
      { id: 'd', text: 'NAT', isCorrect: false }
    ],
    explanation: 'IPSec is mandatory in IPv6 but optional in IPv4, providing built-in security features.',
    type: 'single'
  },
  {
    id: 'mock-30',
    question: 'How many times can "::" be used in a single IPv6 address?',
    options: [
      { id: 'a', text: 'Unlimited', isCorrect: false },
      { id: 'b', text: 'Once only', isCorrect: true },
      { id: 'c', text: 'Twice', isCorrect: false },
      { id: 'd', text: 'Three times', isCorrect: false }
    ],
    explanation: 'The "::" notation can only be used once in an IPv6 address to represent consecutive zeros.',
    type: 'single'
  },

  // OSPF - Questions 31-40
  {
    id: 'mock-31',
    question: 'What is the administrative distance of OSPF?',
    options: [
      { id: 'a', text: '90', isCorrect: false },
      { id: 'b', text: '100', isCorrect: false },
      { id: 'c', text: '110', isCorrect: true },
      { id: 'd', text: '120', isCorrect: false }
    ],
    explanation: 'OSPF has an administrative distance of 110, making it more trusted than RIP (120) but less trusted than EIGRP (90).',
    type: 'single'
  },
  {
    id: 'mock-32',
    question: 'In Router ID selection, which has the highest priority?',
    options: [
      { id: 'a', text: 'Highest physical interface IP', isCorrect: false },
      { id: 'b', text: 'Highest loopback IP', isCorrect: false },
      { id: 'c', text: 'Manually configured router-id', isCorrect: true },
      { id: 'd', text: 'Lowest interface IP', isCorrect: false }
    ],
    explanation: 'Router ID selection priority: 1) Manually configured, 2) Highest loopback IP, 3) Highest physical interface IP.',
    type: 'single'
  },
  {
    id: 'mock-33',
    question: 'What is the default reference bandwidth for OSPF cost calculation?',
    options: [
      { id: 'a', text: '10 Mbps', isCorrect: false },
      { id: 'b', text: '100 Mbps', isCorrect: true },
      { id: 'c', text: '1000 Mbps', isCorrect: false },
      { id: 'd', text: '10000 Mbps', isCorrect: false }
    ],
    explanation: 'The default OSPF reference bandwidth is 100 Mbps. Cost = Reference Bandwidth / Interface Bandwidth.',
    type: 'single'
  },
  {
    id: 'mock-34',
    question: 'Which OSPF area must all other areas connect to?',
    options: [
      { id: 'a', text: 'Area 1', isCorrect: false },
      { id: 'b', text: 'Area 0 (Backbone)', isCorrect: true },
      { id: 'c', text: 'Area 255', isCorrect: false },
      { id: 'd', text: 'Any area', isCorrect: false }
    ],
    explanation: 'Area 0 is the backbone area and all other areas must connect to it for proper OSPF operation.',
    type: 'single'
  },
  {
    id: 'mock-35',
    question: 'What determines the DR in an OSPF election?',
    options: [
      { id: 'a', text: 'Lowest Router ID', isCorrect: false },
      { id: 'b', text: 'Highest Priority, then highest Router ID', isCorrect: true },
      { id: 'c', text: 'Fastest interface', isCorrect: false },
      { id: 'd', text: 'First router to come online', isCorrect: false }
    ],
    explanation: 'DR election: 1) Highest priority (default 1), 2) Highest Router ID if priorities are equal.',
    type: 'single'
  },
  {
    id: 'mock-36',
    question: 'How often are OSPF Hello packets sent on broadcast networks?',
    options: [
      { id: 'a', text: 'Every 5 seconds', isCorrect: false },
      { id: 'b', text: 'Every 10 seconds', isCorrect: true },
      { id: 'c', text: 'Every 30 seconds', isCorrect: false },
      { id: 'd', text: 'Every 40 seconds', isCorrect: false }
    ],
    explanation: 'OSPF Hello packets are sent every 10 seconds on broadcast and point-to-point networks.',
    type: 'single'
  },
  {
    id: 'mock-37',
    question: 'Which OSPF router type has interfaces in multiple areas?',
    options: [
      { id: 'a', text: 'Internal Router (IR)', isCorrect: false },
      { id: 'b', text: 'Area Border Router (ABR)', isCorrect: true },
      { id: 'c', text: 'Backbone Router (BR)', isCorrect: false },
      { id: 'd', text: 'AS Boundary Router (ASBR)', isCorrect: false }
    ],
    explanation: 'Area Border Routers (ABRs) have interfaces in multiple areas and connect areas to the backbone.',
    type: 'single'
  },
  {
    id: 'mock-38',
    question: 'What is the OSPF Dead interval on broadcast networks?',
    options: [
      { id: 'a', text: '10 seconds', isCorrect: false },
      { id: 'b', text: '30 seconds', isCorrect: false },
      { id: 'c', text: '40 seconds', isCorrect: true },
      { id: 'd', text: '120 seconds', isCorrect: false }
    ],
    explanation: 'The OSPF Dead interval is 40 seconds on broadcast networks (4 times the Hello interval).',
    type: 'single'
  },
  {
    id: 'mock-39',
    question: 'In which OSPF state do routers exchange Database Description packets?',
    options: [
      { id: 'a', text: 'Init', isCorrect: false },
      { id: 'b', text: '2-Way', isCorrect: false },
      { id: 'c', text: 'ExStart', isCorrect: false },
      { id: 'd', text: 'Exchange', isCorrect: true }
    ],
    explanation: 'In the Exchange state, routers exchange Database Description (DBD) packets to describe their LSDB.',
    type: 'single'
  },
  {
    id: 'mock-40',
    question: 'Which multicast address is used by all OSPF routers?',
    options: [
      { id: 'a', text: '224.0.0.5', isCorrect: true },
      { id: 'b', text: '224.0.0.6', isCorrect: false },
      { id: 'c', text: '224.0.0.9', isCorrect: false },
      { id: 'd', text: '224.0.0.10', isCorrect: false }
    ],
    explanation: '224.0.0.5 is the AllSPFRouters multicast address used by all OSPF routers.',
    type: 'single'
  },

  // EtherChannel and FHRP - Questions 41-50
  {
    id: 'mock-41',
    question: 'What is the maximum number of ports in an EtherChannel?',
    options: [
      { id: 'a', text: '4', isCorrect: false },
      { id: 'b', text: '6', isCorrect: false },
      { id: 'c', text: '8', isCorrect: true },
      { id: 'd', text: '16', isCorrect: false }
    ],
    explanation: 'The maximum number of ports in an EtherChannel is 8, providing up to 8 Gbps of bandwidth.',
    type: 'single'
  },
  {
    id: 'mock-42',
    question: 'Which PAgP mode combination will NOT form an EtherChannel?',
    options: [
      { id: 'a', text: 'Desirable - Desirable', isCorrect: false },
      { id: 'b', text: 'Desirable - Auto', isCorrect: false },
      { id: 'c', text: 'Auto - Auto', isCorrect: true },
      { id: 'd', text: 'Auto - Desirable', isCorrect: false }
    ],
    explanation: 'Auto - Auto combination will not form an EtherChannel because both sides are passive and waiting for the other to initiate.',
    type: 'single'
  },
  {
    id: 'mock-43',
    question: 'Which LACP mode combination will successfully form an EtherChannel?',
    options: [
      { id: 'a', text: 'Passive - Passive', isCorrect: false },
      { id: 'b', text: 'Active - Passive', isCorrect: true },
      { id: 'c', text: 'On - Active', isCorrect: false },
      { id: 'd', text: 'Off - Active', isCorrect: false }
    ],
    explanation: 'Active - Passive combination will form an EtherChannel because the Active side initiates LACP negotiations.',
    type: 'single'
  },
  {
    id: 'mock-44',
    question: 'What is the default HSRP priority?',
    options: [
      { id: 'a', text: '50', isCorrect: false },
      { id: 'b', text: '100', isCorrect: true },
      { id: 'c', text: '150', isCorrect: false },
      { id: 'd', text: '200', isCorrect: false }
    ],
    explanation: 'The default HSRP priority is 100. Higher priority routers become the active router.',
    type: 'single'
  },
  {
    id: 'mock-45',
    question: 'What must be enabled for a higher priority HSRP router to take over when it comes online?',
    options: [
      { id: 'a', text: 'Load balancing', isCorrect: false },
      { id: 'b', text: 'Authentication', isCorrect: false },
      { id: 'c', text: 'Preemption', isCorrect: true },
      { id: 'd', text: 'Tracking', isCorrect: false }
    ],
    explanation: 'Preemption must be enabled for a higher priority router to take over the active role when it comes online.',
    type: 'single'
  },
  {
    id: 'mock-46',
    question: 'What is the default HSRP Hello timer?',
    options: [
      { id: 'a', text: '1 second', isCorrect: false },
      { id: 'b', text: '3 seconds', isCorrect: true },
      { id: 'c', text: '5 seconds', isCorrect: false },
      { id: 'd', text: '10 seconds', isCorrect: false }
    ],
    explanation: 'The default HSRP Hello timer is 3 seconds, with a hold time of 10 seconds.',
    type: 'single'
  },
  {
    id: 'mock-47',
    question: 'Which EtherChannel configuration error is most common?',
    options: [
      { id: 'a', text: 'Speed mismatch', isCorrect: false },
      { id: 'b', text: 'VLAN mismatch', isCorrect: true },
      { id: 'c', text: 'Duplex mismatch', isCorrect: false },
      { id: 'd', text: 'MTU mismatch', isCorrect: false }
    ],
    explanation: 'VLAN mismatch is the most common EtherChannel configuration error, preventing the channel from forming.',
    type: 'single'
  },
  {
    id: 'mock-48',
    question: 'In HSRP, what happens when the active router fails?',
    options: [
      { id: 'a', text: 'Network traffic stops', isCorrect: false },
      { id: 'b', text: 'Standby router takes over automatically', isCorrect: true },
      { id: 'c', text: 'All routers re-elect', isCorrect: false },
      { id: 'd', text: 'Manual intervention required', isCorrect: false }
    ],
    explanation: 'When the active HSRP router fails, the standby router automatically takes over to maintain connectivity.',
    type: 'single'
  },
  {
    id: 'mock-49',
    question: 'Which command shows a one-line summary of all EtherChannels?',
    options: [
      { id: 'a', text: 'show etherchannel detail', isCorrect: false },
      { id: 'b', text: 'show etherchannel summary', isCorrect: true },
      { id: 'c', text: 'show interface port-channel', isCorrect: false },
      { id: 'd', text: 'show channel-group', isCorrect: false }
    ],
    explanation: 'The "show etherchannel summary" command provides a concise overview of all EtherChannel configurations.',
    type: 'single'
  },
  {
    id: 'mock-50',
    question: 'What does GLBP provide that HSRP does not?',
    options: [
      { id: 'a', text: 'Redundancy', isCorrect: false },
      { id: 'b', text: 'Load balancing', isCorrect: true },
      { id: 'c', text: 'Authentication', isCorrect: false },
      { id: 'd', text: 'Faster convergence', isCorrect: false }
    ],
    explanation: 'GLBP provides load balancing across multiple routers, while HSRP only provides redundancy with one active router.',
    type: 'single'
  },

  // Network Scaling and Architecture - Questions 51-60
  {
    id: 'mock-51',
    question: 'In the hierarchical network model, which layer provides endpoints direct network access?',
    options: [
      { id: 'a', text: 'Core', isCorrect: false },
      { id: 'b', text: 'Distribution', isCorrect: false },
      { id: 'c', text: 'Access', isCorrect: true },
      { id: 'd', text: 'Service', isCorrect: false }
    ],
    explanation: 'The Access layer provides direct network access to endpoints like computers, phones, and other devices.',
    type: 'single'
  },
  {
    id: 'mock-52',
    question: 'What is the main purpose of the Distribution layer?',
    options: [
      { id: 'a', text: 'High-speed backbone connectivity', isCorrect: false },
      { id: 'b', text: 'Endpoint connectivity', isCorrect: false },
      { id: 'c', text: 'Aggregation and policy enforcement', isCorrect: true },
      { id: 'd', text: 'Internet connectivity', isCorrect: false }
    ],
    explanation: 'The Distribution layer aggregates traffic from Access layer switches and enforces network policies.',
    type: 'single'
  },
  {
    id: 'mock-53',
    question: 'Which design principle uses modular equipment for easy expansion?',
    options: [
      { id: 'a', text: 'Hierarchical design', isCorrect: false },
      { id: 'b', text: 'Expandable equipment', isCorrect: true },
      { id: 'c', text: 'Address strategy', isCorrect: false },
      { id: 'd', text: 'Layer 3 control', isCorrect: false }
    ],
    explanation: 'Expandable equipment design uses modular components that can be easily upgraded or expanded as needed.',
    type: 'single'
  },
  {
    id: 'mock-54',
    question: 'What is a failure domain?',
    options: [
      { id: 'a', text: 'Area of network protected by redundancy', isCorrect: false },
      { id: 'b', text: 'Physical location of failed equipment', isCorrect: false },
      { id: 'c', text: 'Area impacted when critical device fails', isCorrect: true },
      { id: 'd', text: 'Backup system activation zone', isCorrect: false }
    ],
    explanation: 'A failure domain is the area of the network that is impacted when a critical device or link fails.',
    type: 'single'
  },
  {
    id: 'mock-55',
    question: 'Which switching characteristic defines the number of ports on a single switch?',
    options: [
      { id: 'a', text: 'Forwarding rate', isCorrect: false },
      { id: 'b', text: 'Form factor', isCorrect: false },
      { id: 'c', text: 'Port density', isCorrect: true },
      { id: 'd', text: 'Power consumption', isCorrect: false }
    ],
    explanation: 'Port density refers to the number of ports available on a single switch, affecting how many devices can be connected.',
    type: 'single'
  },
  {
    id: 'mock-56',
    question: 'What does PoE provide through Ethernet cabling?',
    options: [
      { id: 'a', text: 'Higher data speeds', isCorrect: false },
      { id: 'b', text: 'Power delivery', isCorrect: true },
      { id: 'c', text: 'Better security', isCorrect: false },
      { id: 'd', text: 'Longer cable runs', isCorrect: false }
    ],
    explanation: 'Power over Ethernet (PoE) provides electrical power to devices through the same Ethernet cable used for data transmission.',
    type: 'single'
  },
  {
    id: 'mock-57',
    question: 'When is out-of-band management typically used?',
    options: [
      { id: 'a', text: 'Normal network operations', isCorrect: false },
      { id: 'b', text: 'High-traffic periods', isCorrect: false },
      { id: 'c', text: 'Initial configuration or network failure', isCorrect: true },
      { id: 'd', text: 'Remote monitoring', isCorrect: false }
    ],
    explanation: 'Out-of-band management is used for initial device configuration or when the primary network path has failed.',
    type: 'single'
  },
  {
    id: 'mock-58',
    question: 'Which router type is designed for branch office connectivity?',
    options: [
      { id: 'a', text: 'Service Provider Router', isCorrect: false },
      { id: 'b', text: 'Network Edge Router', isCorrect: false },
      { id: 'c', text: 'Branch Router', isCorrect: true },
      { id: 'd', text: 'Core Router', isCorrect: false }
    ],
    explanation: 'Branch routers are designed to provide connectivity for branch offices to the main corporate network.',
    type: 'single'
  },
  {
    id: 'mock-59',
    question: 'What is the main advantage of modular over fixed configuration switches?',
    options: [
      { id: 'a', text: 'Lower cost', isCorrect: false },
      { id: 'b', text: 'Higher performance', isCorrect: false },
      { id: 'c', text: 'Interface flexibility', isCorrect: true },
      { id: 'd', text: 'Smaller size', isCorrect: false }
    ],
    explanation: 'Modular switches offer interface flexibility by allowing different types of modules to be added as needed.',
    type: 'single'
  },
  {
    id: 'mock-60',
    question: 'In enterprise architecture, which component connects the enterprise to external resources?',
    options: [
      { id: 'a', text: 'Enterprise Campus', isCorrect: false },
      { id: 'b', text: 'Enterprise Edge', isCorrect: true },
      { id: 'c', text: 'Service Provider Edge', isCorrect: false },
      { id: 'd', text: 'Remote', isCorrect: false }
    ],
    explanation: 'The Enterprise Edge connects the enterprise network to external resources like the Internet and partner networks.',
    type: 'single'
  }
];
