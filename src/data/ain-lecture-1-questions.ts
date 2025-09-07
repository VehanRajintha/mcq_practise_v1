import { MCQQuestion } from '@/types/mcq';

export const ainLecture1Questions: MCQQuestion[] = [
  {
    id: 'q1',
    question: 'A mechanism to extend access layer connectivity to host devices in a network design:',
    type: 'single',
    options: [
      { id: 'a', text: 'Configuring EtherChannel', isCorrect: false },
      { id: 'b', text: 'Configuring wireless connectivity', isCorrect: true },
      { id: 'c', text: 'Configuring redundancy', isCorrect: false },
      { id: 'd', text: 'Configuring routing protocols', isCorrect: false },
      { id: 'e', text: 'Configuring VLANs', isCorrect: false }
    ],
    explanation: 'Wireless connectivity extends access layer connectivity to host devices by providing flexibility, lower cost, and easier growth. It allows devices to connect without physical cables.'
  },
  {
    id: 'q2',
    question: 'Which layer in the hierarchical design model is responsible for aggregating access layer traffic and providing routing and filtering?',
    type: 'single',
    options: [
      { id: 'a', text: 'Access Layer', isCorrect: false },
      { id: 'b', text: 'Distribution Layer', isCorrect: true },
      { id: 'c', text: 'Core Layer', isCorrect: false },
      { id: 'd', text: 'Edge Layer', isCorrect: false }
    ],
    explanation: 'The Distribution Layer aggregates access layer traffic and provides routing, filtering, and policy enforcement. It acts as an intermediary between the access and core layers.'
  },
  {
    id: 'q3',
    question: 'What are the main advantages of using Link Aggregation (EtherChannel)? (Select all that apply)',
    type: 'multiple',
    options: [
      { id: 'a', text: 'Higher bandwidth', isCorrect: true },
      { id: 'b', text: 'Load balancing', isCorrect: true },
      { id: 'c', text: 'Cheaper than upgrades', isCorrect: true },
      { id: 'd', text: 'Reduces latency', isCorrect: false },
      { id: 'e', text: 'Improves security', isCorrect: false }
    ],
    explanation: 'Link Aggregation combines multiple physical links into one logical link, providing higher bandwidth, load balancing across links, and is more cost-effective than upgrading to higher-speed interfaces.'
  },
  {
    id: 'q4',
    question: 'The __________ is the area of a network that is impacted when a critical network device or network service experiences problems.',
    type: 'single',
    options: [
      { id: 'a', text: 'Collapsed domain', isCorrect: false },
      { id: 'b', text: 'Failure domain', isCorrect: true },
      { id: 'c', text: 'Broadcast domain', isCorrect: false },
      { id: 'd', text: 'Cost domain', isCorrect: false },
      { id: 'e', text: 'Collision domain', isCorrect: false }
    ],
    explanation: 'A failure domain is the area of a network that is impacted when a critical network device or network service experiences problems. Minimizing failure domains is important for network reliability.'
  },
  {
    id: 'q5',
    question: 'Which two methods help to prevent the disruption of network services? (Choose two.)',
    type: 'multiple',
    options: [
      { id: 'a', text: 'Installing duplicate equipment to provide failover services', isCorrect: true },
      { id: 'b', text: 'Using redundant connections to provide alternate physical paths', isCorrect: true },
      { id: 'c', text: 'Using VLANs to segment network traffic', isCorrect: false },
      { id: 'd', text: 'Changing the routing protocols at regular intervals', isCorrect: false },
      { id: 'e', text: 'Removing switches which cause loops', isCorrect: false }
    ],
    explanation: 'Redundancy through duplicate equipment and redundant connections provides failover capabilities and alternate paths, preventing single points of failure and ensuring network availability.'
  },
  {
    id: 'q6',
    question: 'PoE (Power over Ethernet) is used to allow:',
    type: 'single',
    options: [
      { id: 'a', text: 'A Layer three switch to forward IP packets at a rate close to that of Layer two switching', isCorrect: false },
      { id: 'b', text: 'A switch to disable redundant Layer two paths in the topology', isCorrect: false },
      { id: 'c', text: 'Many physical switch ports to be aggregated together', isCorrect: false },
      { id: 'd', text: 'Phones, switches and wireless access points to receive power over existing Ethernet cables', isCorrect: true }
    ],
    explanation: 'PoE allows devices like IP phones, wireless access points, and other network equipment to receive power over the same Ethernet cable used for data transmission, eliminating the need for separate power cables.'
  },
  {
    id: 'q7',
    question: 'Out-of-band network device management requires:',
    type: 'single',
    options: [
      { id: 'a', text: 'Telnet, SSH, or HTTP to access a network device', isCorrect: false },
      { id: 'b', text: 'A terminal emulation client', isCorrect: true },
      { id: 'c', text: 'At least one network interface on the device to be connected and operational', isCorrect: false },
      { id: 'd', text: 'A direct connection to a network interface', isCorrect: false }
    ],
    explanation: 'Out-of-band management uses console or AUX ports with a terminal emulation client. This method is used when the network is down or for initial device configuration.'
  },
  {
    id: 'q8',
    question: 'How much traffic is a 24-port gigabit switch capable of switching when operating at full wire speed?',
    type: 'single',
    options: [
      { id: 'a', text: '1 Gb/s, because data can only be forwarded from one port at a time', isCorrect: false },
      { id: 'b', text: '24 Gb/s, by providing full bandwidth to each port', isCorrect: false },
      { id: 'c', text: '24 Gb/s, due to overhead requirements', isCorrect: false },
      { id: 'd', text: '20 Gb/s, due to overhead requirements', isCorrect: false },
      { id: 'e', text: '48 Gb/s, because this is the maximum forwarding rate on a switch', isCorrect: true }
    ],
    explanation: 'A 24-port gigabit switch can handle 48 Gb/s of traffic (24 ports × 2 Gb/s per port - full duplex). This represents the maximum forwarding rate when all ports are operating at full capacity.'
  },
  {
    id: 'q9',
    question: 'What are the two expected features of modern enterprise networks? (Choose two.)',
    type: 'multiple',
    options: [
      { id: 'a', text: 'Support for limited growth', isCorrect: false },
      { id: 'b', text: 'Support diverse business needs', isCorrect: true },
      { id: 'c', text: 'Support for distributed administrative control', isCorrect: false },
      { id: 'd', text: 'Support for converged network traffic', isCorrect: true },
      { id: 'e', text: 'Support for 75 percent reliability', isCorrect: false }
    ],
    explanation: 'Modern enterprise networks must support diverse business needs and converged network traffic (voice, video, data) to meet the requirements of contemporary organizations.'
  },
  {
    id: 'q10',
    question: 'Which of the following best describes the Core Layer in a hierarchical network design?',
    type: 'single',
    options: [
      { id: 'a', text: 'Provides connectivity to end devices', isCorrect: false },
      { id: 'b', text: 'Aggregates access layer traffic', isCorrect: false },
      { id: 'c', text: 'Provides high-speed backbone connectivity', isCorrect: true },
      { id: 'd', text: 'Implements security policies', isCorrect: false }
    ],
    explanation: 'The Core Layer provides high-speed backbone connectivity and is designed for high availability and redundancy. It should not perform any packet manipulation that could slow down switching.'
  },
  {
    id: 'q11',
    question: 'What is the primary purpose of redundancy in network design?',
    type: 'single',
    options: [
      { id: 'a', text: 'To reduce network costs', isCorrect: false },
      { id: 'b', text: 'To prevent single points of failure', isCorrect: true },
      { id: 'c', text: 'To increase network speed', isCorrect: false },
      { id: 'd', text: 'To simplify network management', isCorrect: false }
    ],
    explanation: 'Redundancy involves installing duplicate equipment and links to prevent single points of failure, ensuring network availability and reliability.'
  },
  {
    id: 'q12',
    question: 'Which factor is most important when selecting Layer 2 Switch equipment for a corporate network?',
    type: 'single',
    options: [
      { id: 'a', text: 'Thickness of the switch', isCorrect: false },
      { id: 'b', text: 'Frame Buffers', isCorrect: true },
      { id: 'c', text: 'Color of the switch', isCorrect: false },
      { id: 'd', text: 'Number of serial ports', isCorrect: false }
    ],
    explanation: 'Frame buffers are important for handling traffic bursts and preventing packet loss during high traffic periods, making them a critical factor in switch selection.'
  },
  {
    id: 'q13',
    question: 'What is the main advantage of using modular switches over fixed switches?',
    type: 'single',
    options: [
      { id: 'a', text: 'Lower cost', isCorrect: false },
      { id: 'b', text: 'Higher port density', isCorrect: true },
      { id: 'c', text: 'Better performance', isCorrect: false },
      { id: 'd', text: 'Easier configuration', isCorrect: false }
    ],
    explanation: 'Modular switches provide higher port density by allowing additional modules to be added, making them suitable for growing networks that need more ports.'
  },
  {
    id: 'q14',
    question: 'In-band network device management uses which of the following protocols? (Select all that apply)',
    type: 'multiple',
    options: [
      { id: 'a', text: 'Telnet', isCorrect: true },
      { id: 'b', text: 'SSH', isCorrect: true },
      { id: 'c', text: 'HTTP/HTTPS', isCorrect: true },
      { id: 'd', text: 'Console port', isCorrect: false },
      { id: 'e', text: 'AUX port', isCorrect: false }
    ],
    explanation: 'In-band management uses network protocols like Telnet, SSH, and HTTP/HTTPS over the network infrastructure, while console and AUX ports are used for out-of-band management.'
  },
  {
    id: 'q15',
    question: 'What is the primary goal of network scalability design?',
    type: 'single',
    options: [
      { id: 'a', text: 'To reduce network complexity', isCorrect: false },
      { id: 'b', text: 'To support growth and expansion', isCorrect: true },
      { id: 'c', text: 'To improve security', isCorrect: false },
      { id: 'd', text: 'To reduce costs', isCorrect: false }
    ],
    explanation: 'Network scalability design aims to support growth and expansion by using modular and expandable devices, hierarchical addressing, and Layer 3 devices for better control.'
  },
  {
    id: 'q16',
    question: 'Which layer aggregates multiple access layer switches?',
    type: 'single',
    options: [
      { id: 'a', text: 'Core', isCorrect: false },
      { id: 'b', text: 'Access', isCorrect: false },
      { id: 'c', text: 'Distribution', isCorrect: true },
      { id: 'd', text: 'Edge', isCorrect: false }
    ],
    explanation: 'The Distribution layer aggregates multiple access layer switches and provides routing, filtering, and policy enforcement between access and core layers.'
  },
  {
    id: 'q17',
    question: 'Two-tier network combines:',
    type: 'single',
    options: [
      { id: 'a', text: 'Access + Distribution', isCorrect: false },
      { id: 'b', text: 'Core + Distribution', isCorrect: true },
      { id: 'c', text: 'Core + Access', isCorrect: false },
      { id: 'd', text: 'Edge + Core', isCorrect: false }
    ],
    explanation: 'A two-tier network design combines the Core and Distribution layers into a single layer, simplifying the network architecture while maintaining functionality.'
  },
  {
    id: 'q18',
    question: 'If a switch fails, which domain is impacted?',
    type: 'single',
    options: [
      { id: 'a', text: 'Entire enterprise', isCorrect: false },
      { id: 'b', text: 'Local users only', isCorrect: true },
      { id: 'c', text: 'All VLANs', isCorrect: false },
      { id: 'd', text: 'Remote sites', isCorrect: false }
    ],
    explanation: 'When a switch fails, only the local users connected to that specific switch are impacted, not the entire enterprise network or remote sites.'
  },
  {
    id: 'q19',
    question: 'Which technique prevents a single point of failure?',
    type: 'single',
    options: [
      { id: 'a', text: 'VLAN segmentation', isCorrect: false },
      { id: 'b', text: 'Redundancy', isCorrect: true },
      { id: 'c', text: 'EtherChannel', isCorrect: false },
      { id: 'd', text: 'PoE', isCorrect: false }
    ],
    explanation: 'Redundancy prevents single points of failure by providing backup equipment and alternate paths, ensuring network availability even when primary components fail.'
  },
  {
    id: 'q20',
    question: 'Link aggregation combines multiple links to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Reduce MAC addresses', isCorrect: false },
      { id: 'b', text: 'Increase bandwidth and provide load balancing', isCorrect: true },
      { id: 'c', text: 'Enable VLANs', isCorrect: false },
      { id: 'd', text: 'Replace STP', isCorrect: false }
    ],
    explanation: 'Link aggregation (EtherChannel) combines multiple physical links into one logical link to increase bandwidth and provide load balancing across the links.'
  },
  {
    id: 'q21',
    question: 'PoE is used to power:',
    type: 'single',
    options: [
      { id: 'a', text: 'Routers', isCorrect: false },
      { id: 'b', text: 'IP Phones and Access Points', isCorrect: true },
      { id: 'c', text: 'Core switches', isCorrect: false },
      { id: 'd', text: 'Servers', isCorrect: false }
    ],
    explanation: 'Power over Ethernet (PoE) is used to power devices like IP phones and wireless access points over the same Ethernet cable used for data transmission.'
  },
  {
    id: 'q22',
    question: 'Out-of-band management uses:',
    type: 'single',
    options: [
      { id: 'a', text: 'Telnet', isCorrect: false },
      { id: 'b', text: 'SSH', isCorrect: false },
      { id: 'c', text: 'Console/AUX port', isCorrect: true },
      { id: 'd', text: 'HTTP', isCorrect: false }
    ],
    explanation: 'Out-of-band management uses console or AUX ports with a terminal emulation client, providing access when the network is down or for initial configuration.'
  },
  {
    id: 'q23',
    question: 'In-band management uses:',
    type: 'single',
    options: [
      { id: 'a', text: 'Console', isCorrect: false },
      { id: 'b', text: 'Telnet/SSH', isCorrect: true },
      { id: 'c', text: 'AUX port', isCorrect: false },
      { id: 'd', text: 'Powerline', isCorrect: false }
    ],
    explanation: 'In-band management uses network protocols like Telnet and SSH over the network infrastructure to manage devices remotely.'
  },
  {
    id: 'q24',
    question: 'Forwarding rate < port capacity means:',
    type: 'single',
    options: [
      { id: 'a', text: 'Full wire speed achieved', isCorrect: false },
      { id: 'b', text: 'Cannot run at full wire speed', isCorrect: true },
      { id: 'c', text: 'VLANs fail', isCorrect: false },
      { id: 'd', text: 'PoE fails', isCorrect: false }
    ],
    explanation: 'When the forwarding rate is less than the port capacity, the switch cannot run at full wire speed, indicating a potential bottleneck in the switching fabric.'
  },
  {
    id: 'q25',
    question: 'Wireless expansion is preferred because:',
    type: 'single',
    options: [
      { id: 'a', text: 'Reduces security', isCorrect: false },
      { id: 'b', text: 'Adds flexibility and lowers cost', isCorrect: true },
      { id: 'c', text: 'Slows network', isCorrect: false },
      { id: 'd', text: 'Requires no NIC', isCorrect: false }
    ],
    explanation: 'Wireless expansion adds flexibility by allowing devices to connect without physical cables and lowers cost by reducing the need for extensive cabling infrastructure.'
  },
  {
    id: 'q26',
    question: 'Core layer is mainly responsible for:',
    type: 'single',
    options: [
      { id: 'a', text: 'End-device connectivity', isCorrect: false },
      { id: 'b', text: 'Aggregating traffic', isCorrect: false },
      { id: 'c', text: 'High-speed backbone', isCorrect: true },
      { id: 'd', text: 'Wireless coverage', isCorrect: false }
    ],
    explanation: 'The Core layer provides high-speed backbone connectivity and is designed for high availability and redundancy, serving as the network\'s central highway.'
  },
  {
    id: 'q27',
    question: 'Distribution layer features include:',
    type: 'single',
    options: [
      { id: 'a', text: 'Routing and filtering', isCorrect: true },
      { id: 'b', text: 'Accessing endpoints', isCorrect: false },
      { id: 'c', text: 'Internet access', isCorrect: false },
      { id: 'd', text: 'Wireless bridging', isCorrect: false }
    ],
    explanation: 'The Distribution layer provides routing, filtering, and policy enforcement, acting as an intermediary between access and core layers.'
  },
  {
    id: 'q28',
    question: 'Access layer connects:',
    type: 'single',
    options: [
      { id: 'a', text: 'Switches', isCorrect: false },
      { id: 'b', text: 'Routers', isCorrect: false },
      { id: 'c', text: 'End devices', isCorrect: true },
      { id: 'd', text: 'Core devices', isCorrect: false }
    ],
    explanation: 'The Access layer connects end devices like computers, phones, and printers to the network, providing the entry point for user traffic.'
  },
  {
    id: 'q29',
    question: 'Modular switch advantages include:',
    type: 'single',
    options: [
      { id: 'a', text: 'Fixed port count', isCorrect: false },
      { id: 'b', text: 'Expandable and scalable', isCorrect: true },
      { id: 'c', text: 'Always stackable', isCorrect: false },
      { id: 'd', text: 'Lower forwarding rate', isCorrect: false }
    ],
    explanation: 'Modular switches are expandable and scalable, allowing additional modules to be added for more ports or different interface types as network needs grow.'
  },
  {
    id: 'q30',
    question: 'Stackable switches are mainly used to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Increase physical distance', isCorrect: false },
      { id: 'b', text: 'Simplify management and increase port density', isCorrect: true },
      { id: 'c', text: 'Replace core switches', isCorrect: false },
      { id: 'd', text: 'Avoid VLANs', isCorrect: false }
    ],
    explanation: 'Stackable switches simplify management by acting as a single logical unit and increase port density by combining multiple switches into one manageable entity.'
  },
  {
    id: 'q31',
    question: 'Campus LAN switch examples include:',
    type: 'single',
    options: [
      { id: 'a', text: 'Nexus', isCorrect: false },
      { id: 'b', text: '2960, 3560, 3650', isCorrect: true },
      { id: 'c', text: 'Meraki', isCorrect: false },
      { id: 'd', text: 'ASR routers', isCorrect: false }
    ],
    explanation: 'Campus LAN switches include models like Cisco 2960, 3560, and 3650 series, which are designed for enterprise campus environments.'
  },
  {
    id: 'q32',
    question: 'Which network connects remote offices?',
    type: 'single',
    options: [
      { id: 'a', text: 'LAN', isCorrect: false },
      { id: 'b', text: 'Campus', isCorrect: false },
      { id: 'c', text: 'Remote networks', isCorrect: true },
      { id: 'd', text: 'Enterprise core', isCorrect: false }
    ],
    explanation: 'Remote networks connect remote offices and branch locations to the main enterprise network, typically using WAN technologies.'
  },
  {
    id: 'q33',
    question: 'Service provider edge provides:',
    type: 'single',
    options: [
      { id: 'a', text: 'LAN services', isCorrect: false },
      { id: 'b', text: 'WAN, Internet, phone services', isCorrect: true },
      { id: 'c', text: 'VLAN routing', isCorrect: false },
      { id: 'd', text: 'EtherChannel', isCorrect: false }
    ],
    explanation: 'The Service Provider Edge provides WAN, Internet, and phone services, connecting enterprise networks to external service providers.'
  },
  {
    id: 'q34',
    question: 'Redundancy improves:',
    type: 'single',
    options: [
      { id: 'a', text: 'IP addressing', isCorrect: false },
      { id: 'b', text: 'Network availability', isCorrect: true },
      { id: 'c', text: 'VLAN segmentation', isCorrect: false },
      { id: 'd', text: 'Wireless coverage', isCorrect: false }
    ],
    explanation: 'Redundancy improves network availability by providing backup equipment and alternate paths, ensuring the network remains operational even when components fail.'
  },
  {
    id: 'q35',
    question: 'Minimizing failure domains is achieved by:',
    type: 'single',
    options: [
      { id: 'a', text: 'Larger broadcast domains', isCorrect: false },
      { id: 'b', text: 'Redundancy and smaller domains', isCorrect: true },
      { id: 'c', text: 'Using only Layer 2 switches', isCorrect: false },
      { id: 'd', text: 'Removing VLANs', isCorrect: false }
    ],
    explanation: 'Minimizing failure domains is achieved through redundancy and creating smaller, more isolated domains, limiting the impact of any single failure.'
  },
  {
    id: 'q36',
    question: 'Hierarchical IPv4/IPv6 addressing helps in:',
    type: 'single',
    options: [
      { id: 'a', text: 'Slowing routing', isCorrect: false },
      { id: 'b', text: 'Easier growth and scalability', isCorrect: true },
      { id: 'c', text: 'Avoiding PoE', isCorrect: false },
      { id: 'd', text: 'Preventing loops', isCorrect: false }
    ],
    explanation: 'Hierarchical addressing makes network growth and scalability easier by organizing addresses in a structured manner that supports efficient routing and management.'
  },
  {
    id: 'q37',
    question: 'Using Layer 3 devices at distribution layer helps:',
    type: 'single',
    options: [
      { id: 'a', text: 'Increase broadcast traffic', isCorrect: false },
      { id: 'b', text: 'Control and reduce traffic', isCorrect: true },
      { id: 'c', text: 'Remove VLANs', isCorrect: false },
      { id: 'd', text: 'Power APs', isCorrect: false }
    ],
    explanation: 'Layer 3 devices at the distribution layer help control and reduce traffic by providing routing, filtering, and policy enforcement capabilities.'
  },
  {
    id: 'q38',
    question: 'A 48-port Gigabit switch requires how much bandwidth to run full wire speed?',
    type: 'single',
    options: [
      { id: 'a', text: '1 Gbps', isCorrect: false },
      { id: 'b', text: '48 Gbps', isCorrect: false },
      { id: 'c', text: '96 Gbps', isCorrect: true },
      { id: 'd', text: '100 Mbps', isCorrect: false }
    ],
    explanation: 'A 48-port Gigabit switch requires 96 Gbps (48 ports × 2 Gbps per port for full duplex) to run at full wire speed.'
  },
  {
    id: 'q39',
    question: 'Link aggregation avoids:',
    type: 'single',
    options: [
      { id: 'a', text: 'VLAN segmentation', isCorrect: false },
      { id: 'b', text: 'STP blocking', isCorrect: true },
      { id: 'c', text: 'IP addressing errors', isCorrect: false },
      { id: 'd', text: 'Routing loops', isCorrect: false }
    ],
    explanation: 'Link aggregation avoids STP blocking by combining multiple links into one logical link, allowing all links to be active simultaneously.'
  },
  {
    id: 'q40',
    question: 'Campus switches with remote web management:',
    type: 'single',
    options: [
      { id: 'a', text: 'Cisco 2960', isCorrect: false },
      { id: 'b', text: 'Meraki', isCorrect: true },
      { id: 'c', text: 'Catalyst 6500', isCorrect: false },
      { id: 'd', text: 'Nexus', isCorrect: false }
    ],
    explanation: 'Meraki switches provide cloud-based remote web management, allowing administrators to manage switches through a web interface from anywhere.'
  },
  {
    id: 'q41',
    question: 'Fixed-form factor switches:',
    type: 'single',
    options: [
      { id: 'a', text: 'Expandable', isCorrect: false },
      { id: 'b', text: 'Not expandable', isCorrect: true },
      { id: 'c', text: 'Modular', isCorrect: false },
      { id: 'd', text: 'Always stackable', isCorrect: false }
    ],
    explanation: 'Fixed-form factor switches have a predetermined number of ports and are not expandable, unlike modular switches that can accept additional modules.'
  },
  {
    id: 'q42',
    question: 'Distribution layer routing is done mainly using:',
    type: 'single',
    options: [
      { id: 'a', text: 'Layer 2 switches', isCorrect: false },
      { id: 'b', text: 'Layer 3 switches', isCorrect: true },
      { id: 'c', text: 'End devices', isCorrect: false },
      { id: 'd', text: 'Access points', isCorrect: false }
    ],
    explanation: 'The distribution layer uses Layer 3 switches to provide routing functionality between VLANs and network segments.'
  },
  {
    id: 'q43',
    question: 'Core layer failure impacts:',
    type: 'single',
    options: [
      { id: 'a', text: 'Local users', isCorrect: false },
      { id: 'b', text: 'Entire network', isCorrect: true },
      { id: 'c', text: 'Single VLAN', isCorrect: false },
      { id: 'd', text: 'Only access switches', isCorrect: false }
    ],
    explanation: 'A core layer failure impacts the entire network because the core provides the backbone connectivity for all network traffic.'
  },
  {
    id: 'q44',
    question: 'Wireless NIC is required for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Core switches', isCorrect: false },
      { id: 'b', text: 'Wireless clients', isCorrect: true },
      { id: 'c', text: 'Distribution switches', isCorrect: false },
      { id: 'd', text: 'PoE phones', isCorrect: false }
    ],
    explanation: 'Wireless clients require a wireless NIC (Network Interface Card) to connect to wireless networks and communicate with access points.'
  },
  {
    id: 'q45',
    question: 'Goal of scaling networks includes:',
    type: 'single',
    options: [
      { id: 'a', text: 'Reducing IP addresses', isCorrect: false },
      { id: 'b', text: 'Availability, scalability, easy management', isCorrect: true },
      { id: 'c', text: 'Increasing STP timers', isCorrect: false },
      { id: 'd', text: 'Removing VLANs', isCorrect: false }
    ],
    explanation: 'The goals of scaling networks include ensuring availability, providing scalability for growth, and enabling easy management of the network infrastructure.'
  },
  {
    id: 'q46',
    question: 'Campus network covers:',
    type: 'single',
    options: [
      { id: 'a', text: 'Single device', isCorrect: false },
      { id: 'b', text: 'One building/floor', isCorrect: false },
      { id: 'c', text: 'Multiple LANs in one area', isCorrect: true },
      { id: 'd', text: 'Global offices', isCorrect: false }
    ],
    explanation: 'A campus network covers multiple LANs in one geographic area, typically connecting buildings within a campus or corporate facility.'
  },
  {
    id: 'q47',
    question: 'Enterprise campus includes:',
    type: 'single',
    options: [
      { id: 'a', text: 'Access points', isCorrect: false },
      { id: 'b', text: 'Data centers, server farms, services', isCorrect: true },
      { id: 'c', text: 'VPN users', isCorrect: false },
      { id: 'd', text: 'ISP backbone', isCorrect: false }
    ],
    explanation: 'An enterprise campus includes data centers, server farms, and various services that support the organization\'s operations and applications.'
  },
  {
    id: 'q48',
    question: 'Edge layer includes:',
    type: 'single',
    options: [
      { id: 'a', text: 'Core backbone', isCorrect: false },
      { id: 'b', text: 'Routers connecting to Internet & WAN', isCorrect: true },
      { id: 'c', text: 'Access switches', isCorrect: false },
      { id: 'd', text: 'Servers', isCorrect: false }
    ],
    explanation: 'The edge layer includes routers that connect the enterprise network to the Internet and WAN services, serving as the boundary between internal and external networks.'
  },
  {
    id: 'q49',
    question: 'Remote office connectivity uses:',
    type: 'single',
    options: [
      { id: 'a', text: 'EtherChannel', isCorrect: false },
      { id: 'b', text: 'VPN or WAN links', isCorrect: true },
      { id: 'c', text: 'Layer 2 trunking', isCorrect: false },
      { id: 'd', text: 'STP', isCorrect: false }
    ],
    explanation: 'Remote office connectivity typically uses VPN (Virtual Private Network) or WAN links to securely connect remote locations to the main enterprise network.'
  },
  {
    id: 'q50',
    question: 'Redundant links provide:',
    type: 'single',
    options: [
      { id: 'a', text: 'Faster STP recalculation', isCorrect: true },
      { id: 'b', text: 'Reduced IP addresses', isCorrect: false },
      { id: 'c', text: 'VLAN segmentation', isCorrect: false },
      { id: 'd', text: 'PoE', isCorrect: false }
    ],
    explanation: 'Redundant links provide faster STP recalculation by offering alternate paths, allowing the network to quickly recover from link failures.'
  },
  {
    id: 'q51',
    question: 'Using wireless connectivity reduces:',
    type: 'single',
    options: [
      { id: 'a', text: 'Need for APs', isCorrect: false },
      { id: 'b', text: 'Cost of physical cabling', isCorrect: true },
      { id: 'c', text: 'VLAN creation', isCorrect: false },
      { id: 'd', text: 'Redundancy', isCorrect: false }
    ],
    explanation: 'Wireless connectivity reduces the cost of physical cabling by eliminating the need to run cables to every device, making it more cost-effective for many deployments.'
  },
  {
    id: 'q52',
    question: 'Core + Distribution combined layer is called:',
    type: 'single',
    options: [
      { id: 'a', text: 'Three-tier', isCorrect: false },
      { id: 'b', text: 'Two-tier', isCorrect: true },
      { id: 'c', text: 'Flat', isCorrect: false },
      { id: 'd', text: 'Access', isCorrect: false }
    ],
    explanation: 'When the Core and Distribution layers are combined into a single layer, the network design is called a two-tier architecture.'
  },
  {
    id: 'q53',
    question: 'High port density is found in:',
    type: 'single',
    options: [
      { id: 'a', text: 'Modular switches', isCorrect: true },
      { id: 'b', text: 'Fixed small switches', isCorrect: false },
      { id: 'c', text: 'Wireless APs', isCorrect: false },
      { id: 'd', text: 'Routers', isCorrect: false }
    ],
    explanation: 'Modular switches provide high port density by allowing multiple modules to be added, each containing additional ports for connecting devices.'
  },
  {
    id: 'q54',
    question: 'Forwarding rate is measured in:',
    type: 'single',
    options: [
      { id: 'a', text: 'Gbps per port', isCorrect: false },
      { id: 'b', text: 'Packets per second', isCorrect: true },
      { id: 'c', text: 'VLANs', isCorrect: false },
      { id: 'd', text: 'Trunks', isCorrect: false }
    ],
    explanation: 'Forwarding rate is measured in packets per second (pps), indicating how many packets the switch can process and forward in a given time period.'
  },
  {
    id: 'q55',
    question: 'Typical campus LAN switch examples include:',
    type: 'single',
    options: [
      { id: 'a', text: 'Nexus, 6500', isCorrect: false },
      { id: 'b', text: '2960, 3560, 3850', isCorrect: true },
      { id: 'c', text: 'IRDP routers', isCorrect: false },
      { id: 'd', text: 'GLBP devices', isCorrect: false }
    ],
    explanation: 'Typical campus LAN switches include Cisco 2960, 3560, and 3850 series, which are commonly used in enterprise campus environments for access and distribution layers.'
  }
];
