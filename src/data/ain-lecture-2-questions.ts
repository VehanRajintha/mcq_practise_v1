import { MCQQuestion } from '@/types/mcq';

export const ainLecture2Questions: MCQQuestion[] = [
  {
    id: 'q1',
    question: 'IPv6 address space is:',
    type: 'single',
    options: [
      { id: 'a', text: '32-bit', isCorrect: false },
      { id: 'b', text: '64-bit', isCorrect: false },
      { id: 'c', text: '128-bit', isCorrect: true },
      { id: 'd', text: '256-bit', isCorrect: false }
    ],
    explanation: 'IPv6 uses 128-bit addresses, providing a vastly larger address space compared to IPv4\'s 32-bit addresses. This allows for approximately 3.4 × 10³⁸ unique addresses.'
  },
  {
    id: 'q2',
    question: 'IPv4 address depletion occurs because:',
    type: 'single',
    options: [
      { id: 'a', text: '2³² addresses only', isCorrect: true },
      { id: 'b', text: '2¹²⁸ addresses', isCorrect: false },
      { id: 'c', text: 'NAT prevents addressing', isCorrect: false },
      { id: 'd', text: 'Routers are slow', isCorrect: false }
    ],
    explanation: 'IPv4 address depletion occurs because IPv4 only provides 2³² (approximately 4.3 billion) addresses, which is insufficient for the growing number of internet-connected devices.'
  },
  {
    id: 'q3',
    question: 'Which IPv6 address type is used for local link communication only?',
    type: 'single',
    options: [
      { id: 'a', text: 'Global unicast', isCorrect: false },
      { id: 'b', text: 'Link-local', isCorrect: true },
      { id: 'c', text: 'Anycast', isCorrect: false },
      { id: 'd', text: 'Multicast', isCorrect: false }
    ],
    explanation: 'Link-local addresses (FE80::/10) are used for communication within a single network segment and are not routable beyond the local link.'
  },
  {
    id: 'q4',
    question: 'Loopback address in IPv6 is:',
    type: 'single',
    options: [
      { id: 'a', text: '::1/128', isCorrect: true },
      { id: 'b', text: 'FE80::/10', isCorrect: false },
      { id: 'c', text: '0.0.0.0', isCorrect: false },
      { id: 'd', text: '::/128', isCorrect: false }
    ],
    explanation: 'The IPv6 loopback address is ::1/128, equivalent to IPv4\'s 127.0.0.1, used for testing local network stack functionality.'
  },
  {
    id: 'q5',
    question: 'Unspecified IPv6 address is:',
    type: 'single',
    options: [
      { id: 'a', text: '::1', isCorrect: false },
      { id: 'b', text: 'FE80::', isCorrect: false },
      { id: 'c', text: '::/128', isCorrect: true },
      { id: 'd', text: '2001::/64', isCorrect: false }
    ],
    explanation: 'The unspecified IPv6 address is ::/128, equivalent to IPv4\'s 0.0.0.0, indicating the absence of an address or used as a source address during address configuration.'
  },
  {
    id: 'q6',
    question: 'Multicast in IPv6 replaces:',
    type: 'single',
    options: [
      { id: 'a', text: 'Unicast', isCorrect: false },
      { id: 'b', text: 'Broadcast', isCorrect: true },
      { id: 'c', text: 'Anycast', isCorrect: false },
      { id: 'd', text: 'Link-local', isCorrect: false }
    ],
    explanation: 'IPv6 eliminates broadcast addresses and uses multicast instead. Multicast provides more efficient and targeted communication compared to broadcast.'
  },
  {
    id: 'q7',
    question: 'Anycast address delivers packets to:',
    type: 'single',
    options: [
      { id: 'a', text: 'All devices', isCorrect: false },
      { id: 'b', text: 'Nearest device', isCorrect: true },
      { id: 'c', text: 'Loopback interface', isCorrect: false },
      { id: 'd', text: 'Router only', isCorrect: false }
    ],
    explanation: 'Anycast addresses deliver packets to the nearest device with that address, typically used for load balancing and redundancy in services like DNS.'
  },
  {
    id: 'q8',
    question: 'IPv6 does not require NAT because:',
    type: 'single',
    options: [
      { id: 'a', text: 'Smaller addresses', isCorrect: false },
      { id: 'b', text: 'Larger address space', isCorrect: true },
      { id: 'c', text: 'Uses VLANs', isCorrect: false },
      { id: 'd', text: 'Requires DHCPv6', isCorrect: false }
    ],
    explanation: 'IPv6\'s vast address space eliminates the need for NAT, allowing for true end-to-end connectivity and restoring the original internet design principles.'
  },
  {
    id: 'q9',
    question: 'SLAAC relies on:',
    type: 'single',
    options: [
      { id: 'a', text: 'DHCPv4', isCorrect: false },
      { id: 'b', text: 'ICMPv6 Router Advertisement', isCorrect: true },
      { id: 'c', text: 'NAT', isCorrect: false },
      { id: 'd', text: 'VLAN trunking', isCorrect: false }
    ],
    explanation: 'SLAAC (Stateless Address Autoconfiguration) relies on ICMPv6 Router Advertisement messages to provide network prefix information for automatic address configuration.'
  },
  {
    id: 'q10',
    question: 'SLAAC options include:',
    type: 'single',
    options: [
      { id: 'a', text: 'SLAAC only / SLAAC + DHCPv6 / DHCPv6 only', isCorrect: true },
      { id: 'b', text: 'IPv4 only', isCorrect: false },
      { id: 'c', text: 'EtherChannel', isCorrect: false },
      { id: 'd', text: 'STP', isCorrect: false }
    ],
    explanation: 'IPv6 supports three address configuration methods: SLAAC only, SLAAC combined with DHCPv6, or DHCPv6 only, providing flexibility in network configuration.'
  },
  {
    id: 'q11',
    question: 'DHCPv6 provides:',
    type: 'single',
    options: [
      { id: 'a', text: 'IP addresses only', isCorrect: false },
      { id: 'b', text: 'IP + DNS info', isCorrect: true },
      { id: 'c', text: 'NAT translation', isCorrect: false },
      { id: 'd', text: 'VLAN assignment', isCorrect: false }
    ],
    explanation: 'DHCPv6 can provide both IP addresses and additional configuration information like DNS server addresses, domain names, and other network parameters.'
  },
  {
    id: 'q12',
    question: 'EUI-64 creates Interface ID by:',
    type: 'single',
    options: [
      { id: 'a', text: 'Using MAC directly', isCorrect: false },
      { id: 'b', text: 'Flipping 7th bit + inserting FFFE', isCorrect: true },
      { id: 'c', text: 'Random only', isCorrect: false },
      { id: 'd', text: 'IPv4 conversion', isCorrect: false }
    ],
    explanation: 'EUI-64 creates a 64-bit Interface ID by taking the 48-bit MAC address, flipping the 7th bit (U/L bit), and inserting FFFE in the middle to create a 64-bit identifier.'
  },
  {
    id: 'q13',
    question: 'Random Interface IDs are used for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Privacy in newer OSs', isCorrect: true },
      { id: 'b', text: 'Faster routing', isCorrect: false },
      { id: 'c', text: 'NAT', isCorrect: false },
      { id: 'd', text: 'Loopback testing', isCorrect: false }
    ],
    explanation: 'Random Interface IDs are used for privacy protection in newer operating systems, preventing tracking based on MAC address-derived identifiers.'
  },
  {
    id: 'q14',
    question: 'IPv6 header is simpler because:',
    type: 'single',
    options: [
      { id: 'a', text: 'More fields', isCorrect: false },
      { id: 'b', text: 'Fewer fields', isCorrect: true },
      { id: 'c', text: 'NAT required', isCorrect: false },
      { id: 'd', text: 'VLAN dependent', isCorrect: false }
    ],
    explanation: 'The IPv6 header is simpler with fewer fields compared to IPv4, removing fields like checksum, fragmentation, and options, making packet processing more efficient.'
  },
  {
    id: 'q15',
    question: 'IPv6 supports which built-in security?',
    type: 'single',
    options: [
      { id: 'a', text: 'SSL', isCorrect: false },
      { id: 'b', text: 'IPsec', isCorrect: true },
      { id: 'c', text: 'TLS', isCorrect: false },
      { id: 'd', text: 'NAT', isCorrect: false }
    ],
    explanation: 'IPv6 has built-in support for IPsec, providing authentication and encryption capabilities at the network layer, though it\'s not mandatory to use.'
  },
  {
    id: 'q16',
    question: 'Address 2001:0DB8:0000:1111:0000:0000:0000:0200 compressed as:',
    type: 'single',
    options: [
      { id: 'a', text: '2001:DB8:0:1111::200', isCorrect: true },
      { id: 'b', text: '2001::DB8:0:1111:200', isCorrect: false },
      { id: 'c', text: '2001:DB8::1111::200', isCorrect: false },
      { id: 'd', text: '2001:DB8:0:1111:0:0:0:200', isCorrect: false }
    ],
    explanation: 'The correct compression removes leading zeros and replaces the longest sequence of zeros with :: (but only once). 2001:DB8:0:1111::200 is the properly compressed form.'
  },
  {
    id: 'q17',
    question: 'FE80::/10 is reserved for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Global unicast', isCorrect: false },
      { id: 'b', text: 'Link-local', isCorrect: true },
      { id: 'c', text: 'Loopback', isCorrect: false },
      { id: 'd', text: 'Multicast', isCorrect: false }
    ],
    explanation: 'FE80::/10 is reserved for link-local addresses, used for communication within a single network segment and not routable beyond the local link.'
  },
  {
    id: 'q18',
    question: 'IPv6 supports how many addresses approximately?',
    type: 'single',
    options: [
      { id: 'a', text: '4.3 billion', isCorrect: false },
      { id: 'b', text: '2³²', isCorrect: false },
      { id: 'c', text: '3.4 × 10³⁸', isCorrect: true },
      { id: 'd', text: '10⁶', isCorrect: false }
    ],
    explanation: 'IPv6 supports approximately 3.4 × 10³⁸ addresses (2¹²⁸), providing an enormous address space that should last for the foreseeable future.'
  },
  {
    id: 'q19',
    question: 'IPv6 eliminates broadcasts by using:',
    type: 'single',
    options: [
      { id: 'a', text: 'Anycast', isCorrect: false },
      { id: 'b', text: 'Multicast', isCorrect: true },
      { id: 'c', text: 'VLANs', isCorrect: false },
      { id: 'd', text: 'EtherChannel', isCorrect: false }
    ],
    explanation: 'IPv6 eliminates broadcast addresses and uses multicast instead, providing more efficient and targeted communication with better network performance.'
  },
  {
    id: 'q20',
    question: 'IPv6 Autoconfiguration is:',
    type: 'single',
    options: [
      { id: 'a', text: 'Manual only', isCorrect: false },
      { id: 'b', text: 'Plug-and-play', isCorrect: true },
      { id: 'c', text: 'Router-on-a-stick', isCorrect: false },
      { id: 'd', text: 'Layer 2 only', isCorrect: false }
    ],
    explanation: 'IPv6 autoconfiguration provides plug-and-play functionality, allowing devices to automatically configure their addresses without manual intervention.'
  },
  {
    id: 'q21',
    question: 'Transition mechanisms include:',
    type: 'single',
    options: [
      { id: 'a', text: 'NAT only', isCorrect: false },
      { id: 'b', text: 'Dual stack, 6to4 tunneling, translation', isCorrect: true },
      { id: 'c', text: 'VLANs', isCorrect: false },
      { id: 'd', text: 'STP', isCorrect: false }
    ],
    explanation: 'IPv6 transition mechanisms include dual stack (running both IPv4 and IPv6), tunneling (6to4, Teredo), and translation (NAT64) to facilitate migration from IPv4.'
  },
  {
    id: 'q22',
    question: 'IPv6 global unicast interface ID is usually:',
    type: 'single',
    options: [
      { id: 'a', text: '32 bits', isCorrect: false },
      { id: 'b', text: '64 bits', isCorrect: true },
      { id: 'c', text: '128 bits', isCorrect: false },
      { id: 'd', text: '48 bits', isCorrect: false }
    ],
    explanation: 'IPv6 global unicast addresses typically use a 64-bit interface ID, with the first 64 bits used for the network prefix and subnet ID.'
  },
  {
    id: 'q23',
    question: 'IPv6 address shortening rule 1:',
    type: 'single',
    options: [
      { id: 'a', text: 'Compress all zeros', isCorrect: false },
      { id: 'b', text: 'Omit leading zeros', isCorrect: true },
      { id: 'c', text: 'Use subnet mask', isCorrect: false },
      { id: 'd', text: 'Replace with :: multiple times', isCorrect: false }
    ],
    explanation: 'IPv6 address shortening rule 1: omit leading zeros in each hextet. For example, 2001:0DB8 becomes 2001:DB8.'
  },
  {
    id: 'q24',
    question: 'IPv6 address shortening rule 2:',
    type: 'single',
    options: [
      { id: 'a', text: 'Omit zeros anywhere', isCorrect: false },
      { id: 'b', text: 'Compress longest zero string with :: (once)', isCorrect: true },
      { id: 'c', text: 'Remove MAC addresses', isCorrect: false },
      { id: 'd', text: 'Only for link-local addresses', isCorrect: false }
    ],
    explanation: 'IPv6 address shortening rule 2: replace the longest sequence of consecutive zeros with :: (but only once per address).'
  },
  {
    id: 'q25',
    question: 'Global unicast addresses are similar to:',
    type: 'single',
    options: [
      { id: 'a', text: 'IPv4 private', isCorrect: false },
      { id: 'b', text: 'IPv4 public', isCorrect: true },
      { id: 'c', text: 'NAT addresses', isCorrect: false },
      { id: 'd', text: 'Multicast', isCorrect: false }
    ],
    explanation: 'Global unicast addresses are similar to IPv4 public addresses, as they are globally routable and unique across the entire internet.'
  },
  {
    id: 'q26',
    question: 'IPv6 supports mobility via:',
    type: 'single',
    options: [
      { id: 'a', text: 'NAT', isCorrect: false },
      { id: 'b', text: 'Mobile IP', isCorrect: true },
      { id: 'c', text: 'VLANs', isCorrect: false },
      { id: 'd', text: 'EtherChannel', isCorrect: false }
    ],
    explanation: 'IPv6 supports mobility through Mobile IPv6, allowing devices to maintain connectivity while moving between different networks.'
  },
  {
    id: 'q27',
    question: 'IPv6 SLAAC can be combined with DHCPv6 to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Provide IP only', isCorrect: false },
      { id: 'b', text: 'Provide DNS info', isCorrect: true },
      { id: 'c', text: 'Enable STP', isCorrect: false },
      { id: 'd', text: 'Reduce bandwidth', isCorrect: false }
    ],
    explanation: 'SLAAC can be combined with DHCPv6 to provide additional configuration information like DNS server addresses while SLAAC handles the IP address assignment.'
  },
  {
    id: 'q28',
    question: 'IPv6\'s key advantage over IPv4 is:',
    type: 'single',
    options: [
      { id: 'a', text: 'Smaller headers', isCorrect: false },
      { id: 'b', text: 'Vast address pool', isCorrect: true },
      { id: 'c', text: 'Fewer routers', isCorrect: false },
      { id: 'd', text: 'VLAN segregation', isCorrect: false }
    ],
    explanation: 'IPv6\'s key advantage is its vast address pool (3.4 × 10³⁸ addresses), solving the IPv4 address exhaustion problem and enabling true end-to-end connectivity.'
  },
  {
    id: 'q29',
    question: 'Link-local addresses are:',
    type: 'single',
    options: [
      { id: 'a', text: 'Routable globally', isCorrect: false },
      { id: 'b', text: 'Required on every interface', isCorrect: true },
      { id: 'c', text: 'Only on routers', isCorrect: false },
      { id: 'd', text: 'Optional', isCorrect: false }
    ],
    explanation: 'Link-local addresses are automatically configured and required on every IPv6 interface, providing local network communication capabilities.'
  },
  {
    id: 'q30',
    question: 'IPv6 eliminates NAT to restore:',
    type: 'single',
    options: [
      { id: 'a', text: 'Security', isCorrect: false },
      { id: 'b', text: 'End-to-end connectivity', isCorrect: true },
      { id: 'c', text: 'VLAN management', isCorrect: false },
      { id: 'd', text: 'EtherChannel', isCorrect: false }
    ],
    explanation: 'IPv6 eliminates the need for NAT, restoring true end-to-end connectivity that was part of the original internet design, allowing direct communication between any two devices.'
  }
];
