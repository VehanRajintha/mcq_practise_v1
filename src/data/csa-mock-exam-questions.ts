import { MCQQuestion } from '@/types/mcq';

export const csaMockExamQuestions: MCQQuestion[] = [
  // UNIX/LINUX FUNDAMENTALS (Questions 1-20)
  {
    id: 'csa-mock-1',
    question: 'Which of the following BEST describes the Linux philosophy regarding program design?',
    type: 'single',
    options: [
      { id: 'a', text: 'Each program should handle multiple tasks efficiently to reduce system overhead', isCorrect: false },
      { id: 'b', text: 'Programs should be designed with graphical interfaces for better user experience', isCorrect: false },
      { id: 'c', text: 'Each program does ONE thing well, with output becoming input for another program', isCorrect: true },
      { id: 'd', text: 'Programs should be self-contained without dependencies on other tools', isCorrect: false }
    ],
    explanation: 'The Linux philosophy emphasizes that each program should do one thing well, and programs should work together by having output from one program become input for another.'
  },
  {
    id: 'csa-mock-2',
    question: 'In the Linux system architecture, which kernel component is responsible for assigning unique PIDs?',
    type: 'single',
    options: [
      { id: 'a', text: 'File Management', isCorrect: false },
      { id: 'b', text: 'Process Management', isCorrect: true },
      { id: 'c', text: 'Memory Management', isCorrect: false },
      { id: 'd', text: 'Device Drivers', isCorrect: false }
    ],
    explanation: 'Process Management is responsible for creating, scheduling, and managing processes, including assigning unique Process IDs (PIDs).'
  },
  {
    id: 'csa-mock-3',
    question: 'What does the \'x\' in the password field of /etc/passwd indicate?',
    type: 'single',
    options: [
      { id: 'a', text: 'The user account is expired', isCorrect: false },
      { id: 'b', text: 'The user has execute permissions', isCorrect: false },
      { id: 'c', text: 'The password is stored in /etc/shadow', isCorrect: true },
      { id: 'd', text: 'The user account is locked', isCorrect: false }
    ],
    explanation: 'The \'x\' in the password field indicates that the actual password hash is stored in the /etc/shadow file for security reasons.'
  },
  {
    id: 'csa-mock-4',
    question: 'Which UID range is reserved for system accounts in Linux?',
    type: 'single',
    options: [
      { id: 'a', text: 'UID 0 only', isCorrect: false },
      { id: 'b', text: 'UID 0-99', isCorrect: false },
      { id: 'c', text: 'UID 1-99', isCorrect: true },
      { id: 'd', text: 'UID 100-999', isCorrect: false }
    ],
    explanation: 'UID 1-99 is reserved for system accounts, while UID 0 is reserved for root and UID 100+ is typically used for regular users.'
  },
  {
    id: 'csa-mock-5',
    question: 'What is the PRIMARY difference between \'su\' and \'su -\' commands?',
    type: 'single',
    options: [
      { id: 'a', text: '\'su -\' requires root password while \'su\' doesn\'t', isCorrect: false },
      { id: 'b', text: '\'su -\' switches user with environment variables, \'su\' doesn\'t', isCorrect: true },
      { id: 'c', text: '\'su\' is temporary while \'su -\' is permanent', isCorrect: false },
      { id: 'd', text: 'There is no functional difference', isCorrect: false }
    ],
    explanation: '\'su -\' provides a complete login environment with the target user\'s environment variables, while \'su\' maintains the current environment.'
  },
  {
    id: 'csa-mock-6',
    question: 'Which file system location contains essential binaries required for system boot?',
    type: 'single',
    options: [
      { id: 'a', text: '/usr/bin', isCorrect: false },
      { id: 'b', text: '/sbin', isCorrect: false },
      { id: 'c', text: '/bin', isCorrect: true },
      { id: 'd', text: '/boot', isCorrect: false }
    ],
    explanation: '/bin contains essential user binaries required for system boot and single-user mode, while /sbin contains system binaries.'
  },
  {
    id: 'csa-mock-7',
    question: 'The message displayed at login is controlled by which file?',
    type: 'single',
    options: [
      { id: 'a', text: '/etc/passwd', isCorrect: false },
      { id: 'b', text: '/etc/motd', isCorrect: true },
      { id: 'c', text: '/etc/login', isCorrect: false },
      { id: 'd', text: '/etc/issue', isCorrect: false }
    ],
    explanation: '/etc/motd (Message of the Day) displays a message to users after they log in successfully.'
  },
  {
    id: 'csa-mock-8',
    question: 'Which shell is the DEFAULT shell in most Linux distributions?',
    type: 'single',
    options: [
      { id: 'a', text: 'Tcsh', isCorrect: false },
      { id: 'b', text: 'Zsh', isCorrect: false },
      { id: 'c', text: 'Bash', isCorrect: true },
      { id: 'd', text: 'Csh', isCorrect: false }
    ],
    explanation: 'Bash (Bourne Again Shell) is the default shell in most Linux distributions and is widely used for scripting and interactive use.'
  },
  {
    id: 'csa-mock-9',
    question: 'In Linux file types, what are named pipes also known as?',
    type: 'single',
    options: [
      { id: 'a', text: 'Symbolic links', isCorrect: false },
      { id: 'b', text: 'FIFO', isCorrect: true },
      { id: 'c', text: 'Special files', isCorrect: false },
      { id: 'd', text: 'Device files', isCorrect: false }
    ],
    explanation: 'Named pipes are also called FIFO (First In, First Out) and allow communication between processes through a named file.'
  },
  {
    id: 'csa-mock-10',
    question: 'What does the kernel version command \'uname -r\' display?',
    type: 'single',
    options: [
      { id: 'a', text: 'Only the kernel major version', isCorrect: false },
      { id: 'b', text: 'The complete kernel version with build information', isCorrect: true },
      { id: 'c', text: 'Only the kernel release date', isCorrect: false },
      { id: 'd', text: 'The kernel architecture type', isCorrect: false }
    ],
    explanation: '\'uname -r\' displays the complete kernel release version including major, minor, patch, and build information.'
  },
  {
    id: 'csa-mock-11',
    question: 'Which layer in Linux architecture handles the interface between kernel and hardware?',
    type: 'single',
    options: [
      { id: 'a', text: 'System Call Interface', isCorrect: false },
      { id: 'b', text: 'Application User Interface', isCorrect: false },
      { id: 'c', text: 'Device Drivers', isCorrect: true },
      { id: 'd', text: 'Kernel Core', isCorrect: false }
    ],
    explanation: 'Device Drivers provide the interface between the kernel and hardware devices, handling hardware-specific operations.'
  },
  {
    id: 'csa-mock-12',
    question: 'SWAP space management is handled by which kernel component?',
    type: 'single',
    options: [
      { id: 'a', text: 'File Management', isCorrect: false },
      { id: 'b', text: 'Process Management', isCorrect: false },
      { id: 'c', text: 'Memory Management', isCorrect: true },
      { id: 'd', text: 'Device Drivers', isCorrect: false }
    ],
    explanation: 'Memory Management handles SWAP space, which is used as virtual memory when physical RAM is insufficient.'
  },
  {
    id: 'csa-mock-13',
    question: 'What is the PRIMARY advantage of RAM over secondary storage?',
    type: 'single',
    options: [
      { id: 'a', text: 'RAM is larger in capacity', isCorrect: false },
      { id: 'b', text: 'RAM is faster but smaller', isCorrect: true },
      { id: 'c', text: 'RAM is non-volatile', isCorrect: false },
      { id: 'd', text: 'RAM is cheaper per byte', isCorrect: false }
    ],
    explanation: 'RAM is much faster than secondary storage but has smaller capacity and is volatile (loses data when power is off).'
  },
  {
    id: 'csa-mock-14',
    question: 'Which directory contains variable data that changes during system operation?',
    type: 'single',
    options: [
      { id: 'a', text: '/tmp', isCorrect: false },
      { id: 'b', text: '/var', isCorrect: true },
      { id: 'c', text: '/home', isCorrect: false },
      { id: 'd', text: '/dev', isCorrect: false }
    ],
    explanation: '/var contains variable data that changes during system operation, such as logs, spool files, and temporary data.'
  },
  {
    id: 'csa-mock-15',
    question: 'What does the System Call Interface (API) provide?',
    type: 'single',
    options: [
      { id: 'a', text: 'Direct hardware access', isCorrect: false },
      { id: 'b', text: 'User interface components', isCorrect: false },
      { id: 'c', text: 'Interface between applications and kernel', isCorrect: true },
      { id: 'd', text: 'Network connectivity', isCorrect: false }
    ],
    explanation: 'The System Call Interface provides a controlled interface between user applications and the kernel, allowing applications to request kernel services.'
  },
  {
    id: 'csa-mock-16',
    question: 'In the file system hierarchy, what does /dev contain?',
    type: 'single',
    options: [
      { id: 'a', text: 'Development tools', isCorrect: false },
      { id: 'b', text: 'Device files', isCorrect: true },
      { id: 'c', text: 'Debugging information', isCorrect: false },
      { id: 'd', text: 'Default configurations', isCorrect: false }
    ],
    explanation: '/dev contains device files that represent hardware devices and allow programs to interact with them.'
  },
  {
    id: 'csa-mock-17',
    question: 'Which command shows the current working directory?',
    type: 'single',
    options: [
      { id: 'a', text: 'whoami', isCorrect: false },
      { id: 'b', text: 'pwd', isCorrect: true },
      { id: 'c', text: 'cd', isCorrect: false },
      { id: 'd', text: 'ls', isCorrect: false }
    ],
    explanation: 'pwd (print working directory) displays the current working directory path.'
  },
  {
    id: 'csa-mock-18',
    question: 'What is the PURPOSE of the /boot directory?',
    type: 'single',
    options: [
      { id: 'a', text: 'Contains user boot scripts', isCorrect: false },
      { id: 'b', text: 'Contains boot files and kernel', isCorrect: true },
      { id: 'c', text: 'Contains system boot logs', isCorrect: false },
      { id: 'd', text: 'Contains boot recovery tools', isCorrect: false }
    ],
    explanation: '/boot contains boot loader files, kernel images, and other files needed for system boot.'
  },
  {
    id: 'csa-mock-19',
    question: 'Which of the following is NOT a type of Linux file?',
    type: 'single',
    options: [
      { id: 'a', text: 'Ordinary files', isCorrect: false },
      { id: 'b', text: 'Directories', isCorrect: false },
      { id: 'c', text: 'Compressed files', isCorrect: true },
      { id: 'd', text: 'Named pipes', isCorrect: false }
    ],
    explanation: 'Compressed files are ordinary files that happen to be compressed, not a separate file type. Linux file types include ordinary files, directories, device files, named pipes, symbolic links, and sockets.'
  },
  {
    id: 'csa-mock-20',
    question: 'The Linux philosophy emphasizes using tools to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Create complex monolithic applications', isCorrect: false },
      { id: 'b', text: 'Automate tasks', isCorrect: true },
      { id: 'c', text: 'Replace manual system administration', isCorrect: false },
      { id: 'd', text: 'Eliminate the need for scripting', isCorrect: false }
    ],
    explanation: 'The Linux philosophy emphasizes using small, focused tools that can be combined to automate tasks and solve complex problems.'
  },
  // VIRTUALIZATION (Questions 21-30)
  {
    id: 'csa-mock-21',
    question: 'What is the core component that monitors and enforces policy on VMs?',
    type: 'single',
    options: [
      { id: 'a', text: 'Virtual Machine', isCorrect: false },
      { id: 'b', text: 'Hypervisor/VMM', isCorrect: true },
      { id: 'c', text: 'Host Operating System', isCorrect: false },
      { id: 'd', text: 'Guest Operating System', isCorrect: false }
    ],
    explanation: 'The Hypervisor/VMM (Virtual Machine Monitor) is the core component that monitors and enforces policies on virtual machines.'
  },
  {
    id: 'csa-mock-22',
    question: 'Which virtualization approach provides the HIGHEST efficiency?',
    type: 'single',
    options: [
      { id: 'a', text: 'Application-Level', isCorrect: false },
      { id: 'b', text: 'OS-Level (Hosted)', isCorrect: false },
      { id: 'c', text: 'Hardware-Level (Bare-Metal)', isCorrect: true },
      { id: 'd', text: 'Container-based', isCorrect: false }
    ],
    explanation: 'Hardware-Level (Bare-Metal) virtualization provides the highest efficiency as it runs directly on hardware without a host OS layer.'
  },
  {
    id: 'csa-mock-23',
    question: 'VMware ESX is an example of which virtualization type?',
    type: 'single',
    options: [
      { id: 'a', text: 'OS-Level virtualization', isCorrect: false },
      { id: 'b', text: 'Application-Level virtualization', isCorrect: false },
      { id: 'c', text: 'Hardware-Level virtualization', isCorrect: true },
      { id: 'd', text: 'Network virtualization', isCorrect: false }
    ],
    explanation: 'VMware ESX is a Type 1 hypervisor that provides hardware-level virtualization, running directly on bare metal.'
  },
  {
    id: 'csa-mock-24',
    question: 'Which characteristic is SPECIFIC to OS-Level virtualization?',
    type: 'single',
    options: [
      { id: 'a', text: 'Direct hardware interaction', isCorrect: false },
      { id: 'b', text: 'Runs as an application on host OS', isCorrect: true },
      { id: 'c', text: 'Platform independence', isCorrect: false },
      { id: 'd', text: 'Lean virtualization kernel', isCorrect: false }
    ],
    explanation: 'OS-Level virtualization runs as an application on the host operating system, sharing the host OS kernel.'
  },
  {
    id: 'csa-mock-25',
    question: 'Java VM is an example of which virtualization approach?',
    type: 'single',
    options: [
      { id: 'a', text: 'Hardware-Level', isCorrect: false },
      { id: 'b', text: 'OS-Level', isCorrect: false },
      { id: 'c', text: 'Application-Level', isCorrect: true },
      { id: 'd', text: 'Network-Level', isCorrect: false }
    ],
    explanation: 'Java VM is an application-level virtual machine that runs Java bytecode on top of the host operating system.'
  },
  {
    id: 'csa-mock-26',
    question: 'What is a PRIMARY disadvantage of hosted virtualization?',
    type: 'single',
    options: [
      { id: 'a', text: 'Limited hardware support', isCorrect: false },
      { id: 'b', text: 'Requires dedicated hardware', isCorrect: false },
      { id: 'c', text: 'Relies on host OS performance', isCorrect: true },
      { id: 'd', text: 'Cannot run multiple VMs', isCorrect: false }
    ],
    explanation: 'Hosted virtualization depends on the host OS performance and stability, which can impact VM performance and reliability.'
  },
  {
    id: 'csa-mock-27',
    question: 'Which virtualization type has the broadest device support?',
    type: 'single',
    options: [
      { id: 'a', text: 'Bare-Metal', isCorrect: false },
      { id: 'b', text: 'Hosted', isCorrect: true },
      { id: 'c', text: 'Application-Level', isCorrect: false },
      { id: 'd', text: 'Container-based', isCorrect: false }
    ],
    explanation: 'Hosted virtualization can leverage the host OS\'s device drivers, providing broader device support than bare-metal hypervisors.'
  },
  {
    id: 'csa-mock-28',
    question: 'Microsoft Hyper-V is classified as:',
    type: 'single',
    options: [
      { id: 'a', text: 'Hosted virtualization', isCorrect: false },
      { id: 'b', text: 'Application virtualization', isCorrect: false },
      { id: 'c', text: 'Bare-metal virtualization', isCorrect: true },
      { id: 'd', text: 'Container virtualization', isCorrect: false }
    ],
    explanation: 'Microsoft Hyper-V is a Type 1 hypervisor that provides bare-metal virtualization, running directly on hardware.'
  },
  {
    id: 'csa-mock-29',
    question: 'The PRIMARY function of a hypervisor is to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Manage physical hardware directly', isCorrect: false },
      { id: 'b', text: 'Provide user interfaces for VMs', isCorrect: false },
      { id: 'c', text: 'Monitor and manage VM resources', isCorrect: true },
      { id: 'd', text: 'Install operating systems', isCorrect: false }
    ],
    explanation: 'The primary function of a hypervisor is to monitor and manage virtual machine resources, including CPU, memory, and I/O allocation.'
  },
  {
    id: 'csa-mock-30',
    question: 'VirtualBox is an example of:',
    type: 'single',
    options: [
      { id: 'a', text: 'Type 1 hypervisor', isCorrect: false },
      { id: 'b', text: 'Type 2 hypervisor', isCorrect: true },
      { id: 'c', text: 'Bare-metal virtualization', isCorrect: false },
      { id: 'd', text: 'Application virtualization', isCorrect: false }
    ],
    explanation: 'VirtualBox is a Type 2 hypervisor that runs as an application on top of a host operating system.'
  },
  // NETWORK SERVERS (Questions 31-50)
  {
    id: 'csa-mock-31',
    question: 'In DNS hierarchy, how many root servers exist globally?',
    type: 'single',
    options: [
      { id: 'a', text: '10', isCorrect: false },
      { id: 'b', text: '13', isCorrect: true },
      { id: 'c', text: '16', isCorrect: false },
      { id: 'd', text: '20', isCorrect: false }
    ],
    explanation: 'There are 13 root DNS servers globally, labeled A through M, which form the top of the DNS hierarchy.'
  },
  {
    id: 'csa-mock-32',
    question: 'What does a DNS CNAME record contain?',
    type: 'single',
    options: [
      { id: 'a', text: 'IP address mapping', isCorrect: false },
      { id: 'b', text: 'Canonical name for an alias', isCorrect: true },
      { id: 'c', text: 'Mail server information', isCorrect: false },
      { id: 'd', text: 'Name server details', isCorrect: false }
    ],
    explanation: 'CNAME (Canonical Name) records provide an alias for a domain name, pointing to the canonical (real) name.'
  },
  {
    id: 'csa-mock-33',
    question: 'In the DHCP process, what does DORA stand for?',
    type: 'single',
    options: [
      { id: 'a', text: 'Discover, Offer, Request, Acknowledge', isCorrect: true },
      { id: 'b', text: 'Discover, Open, Request, Accept', isCorrect: false },
      { id: 'c', text: 'Define, Offer, Request, Assign', isCorrect: false },
      { id: 'd', text: 'Detect, Offer, Reserve, Activate', isCorrect: false }
    ],
    explanation: 'DORA represents the DHCP process: Discover (client broadcasts), Offer (server responds), Request (client requests), Acknowledge (server confirms).'
  },
  {
    id: 'csa-mock-34',
    question: 'Which port does the DHCP client use?',
    type: 'single',
    options: [
      { id: 'a', text: 'UDP 67', isCorrect: false },
      { id: 'b', text: 'UDP 68', isCorrect: true },
      { id: 'c', text: 'TCP 67', isCorrect: false },
      { id: 'd', text: 'TCP 68', isCorrect: false }
    ],
    explanation: 'DHCP clients use UDP port 68, while DHCP servers use UDP port 67.'
  },
  {
    id: 'csa-mock-35',
    question: 'What happens when a DHCP lease reaches 50% of its duration?',
    type: 'single',
    options: [
      { id: 'a', text: 'The lease is automatically renewed', isCorrect: false },
      { id: 'b', text: 'The client attempts renewal', isCorrect: true },
      { id: 'c', text: 'The lease expires', isCorrect: false },
      { id: 'd', text: 'The server sends a new offer', isCorrect: false }
    ],
    explanation: 'At 50% of the lease duration, the client attempts to renew the lease by sending a DHCP Request to the server.'
  },
  {
    id: 'csa-mock-36',
    question: 'A recursive DNS lookup means:',
    type: 'single',
    options: [
      { id: 'a', text: 'The server responds with what it knows', isCorrect: false },
      { id: 'b', text: 'The server searches completely for the answer', isCorrect: true },
      { id: 'c', text: 'The query loops back to the client', isCorrect: false },
      { id: 'd', text: 'The server forwards to another server', isCorrect: false }
    ],
    explanation: 'In a recursive lookup, the DNS server takes full responsibility for finding the answer and searching through the DNS hierarchy.'
  },
  {
    id: 'csa-mock-37',
    question: 'Which DNS record type identifies a domain\'s mail server?',
    type: 'single',
    options: [
      { id: 'a', text: 'A record', isCorrect: false },
      { id: 'b', text: 'CNAME record', isCorrect: false },
      { id: 'c', text: 'NS record', isCorrect: false },
      { id: 'd', text: 'MX record', isCorrect: true }
    ],
    explanation: 'MX (Mail Exchange) records specify the mail servers responsible for accepting email messages for a domain.'
  },
  {
    id: 'csa-mock-38',
    question: 'What is the PRIMARY purpose of DNS caching?',
    type: 'single',
    options: [
      { id: 'a', text: 'To store IP addresses permanently', isCorrect: false },
      { id: 'b', text: 'To reduce repeated lookups', isCorrect: true },
      { id: 'c', text: 'To backup DNS records', isCorrect: false },
      { id: 'd', text: 'To encrypt DNS queries', isCorrect: false }
    ],
    explanation: 'DNS caching stores recent query results to reduce the number of DNS lookups and improve response times.'
  },
  {
    id: 'csa-mock-39',
    question: 'Zone transfer in DNS uses which protocol for reliability?',
    type: 'single',
    options: [
      { id: 'a', text: 'UDP', isCorrect: false },
      { id: 'b', text: 'TCP', isCorrect: true },
      { id: 'c', text: 'ICMP', isCorrect: false },
      { id: 'd', text: 'HTTP', isCorrect: false }
    ],
    explanation: 'Zone transfers use TCP for reliability, as they involve transferring large amounts of DNS data that must be delivered accurately.'
  },
  {
    id: 'csa-mock-40',
    question: 'What does DHCPNAK indicate?',
    type: 'single',
    options: [
      { id: 'a', text: 'Request acknowledged', isCorrect: false },
      { id: 'b', text: 'Cannot satisfy the request', isCorrect: true },
      { id: 'c', text: 'IP address already in use', isCorrect: false },
      { id: 'd', text: 'Lease terminated', isCorrect: false }
    ],
    explanation: 'DHCPNAK (DHCP Negative Acknowledgment) indicates that the server cannot satisfy the client\'s request.'
  },
  {
    id: 'csa-mock-41',
    question: 'Which message terminates a DHCP lease?',
    type: 'single',
    options: [
      { id: 'a', text: 'DHCPNAK', isCorrect: false },
      { id: 'b', text: 'DHCPDECLINE', isCorrect: false },
      { id: 'c', text: 'DHCPRELEASE', isCorrect: true },
      { id: 'd', text: 'DHCPINFORM', isCorrect: false }
    ],
    explanation: 'DHCPRELEASE is sent by the client to terminate a DHCP lease and release the IP address back to the server.'
  },
  {
    id: 'csa-mock-42',
    question: 'A reverse proxy appears as:',
    type: 'single',
    options: [
      { id: 'a', text: 'A client to the server', isCorrect: false },
      { id: 'b', text: 'The origin server to clients', isCorrect: true },
      { id: 'c', text: 'An intermediary service', isCorrect: false },
      { id: 'd', text: 'A caching mechanism', isCorrect: false }
    ],
    explanation: 'A reverse proxy appears as the origin server to clients, hiding the actual backend servers from the client.'
  },
  {
    id: 'csa-mock-43',
    question: 'What is a PRIMARY liability of proxy servers?',
    type: 'single',
    options: [
      { id: 'a', text: 'Increased bandwidth usage', isCorrect: false },
      { id: 'b', text: 'Single point of failure', isCorrect: true },
      { id: 'c', text: 'Limited caching capability', isCorrect: false },
      { id: 'd', text: 'Poor security features', isCorrect: false }
    ],
    explanation: 'Proxy servers can become a single point of failure, as all client requests must pass through them.'
  },
  {
    id: 'csa-mock-44',
    question: 'Which protocol does a web server primarily use?',
    type: 'single',
    options: [
      { id: 'a', text: 'FTP', isCorrect: false },
      { id: 'b', text: 'SMTP', isCorrect: false },
      { id: 'c', text: 'HTTP', isCorrect: true },
      { id: 'd', text: 'POP', isCorrect: false }
    ],
    explanation: 'Web servers primarily use HTTP (HyperText Transfer Protocol) to serve web pages and content to clients.'
  },
  {
    id: 'csa-mock-45',
    question: 'Mail server protocols include all EXCEPT:',
    type: 'single',
    options: [
      { id: 'a', text: 'SMTP', isCorrect: false },
      { id: 'b', text: 'POP', isCorrect: false },
      { id: 'c', text: 'IMAP', isCorrect: false },
      { id: 'd', text: 'HTTP', isCorrect: true }
    ],
    explanation: 'HTTP is a web protocol, not a mail protocol. Mail servers use SMTP (sending), POP3, and IMAP (receiving) protocols.'
  },
  {
    id: 'csa-mock-46',
    question: 'What does CGI support in web servers provide?',
    type: 'single',
    options: [
      { id: 'a', text: 'Static content delivery', isCorrect: false },
      { id: 'b', text: 'Dynamic content generation', isCorrect: true },
      { id: 'c', text: 'File compression', isCorrect: false },
      { id: 'd', text: 'User authentication', isCorrect: false }
    ],
    explanation: 'CGI (Common Gateway Interface) allows web servers to execute programs and generate dynamic content based on user requests.'
  },
  {
    id: 'csa-mock-47',
    question: 'An application server\'s PRIMARY function is:',
    type: 'single',
    options: [
      { id: 'a', text: 'File storage management', isCorrect: false },
      { id: 'b', text: 'Handling operations between users and backend', isCorrect: true },
      { id: 'c', text: 'Network routing', isCorrect: false },
      { id: 'd', text: 'Database administration', isCorrect: false }
    ],
    explanation: 'Application servers handle business logic and operations between client applications and backend systems like databases.'
  },
  {
    id: 'csa-mock-48',
    question: 'NAS devices are examples of:',
    type: 'single',
    options: [
      { id: 'a', text: 'Print servers', isCorrect: false },
      { id: 'b', text: 'Web servers', isCorrect: false },
      { id: 'c', text: 'File servers', isCorrect: true },
      { id: 'd', text: 'Mail servers', isCorrect: false }
    ],
    explanation: 'NAS (Network Attached Storage) devices are specialized file servers that provide centralized file storage over a network.'
  },
  {
    id: 'csa-mock-49',
    question: 'Which protocol is used for network printing?',
    type: 'single',
    options: [
      { id: 'a', text: 'HTTP only', isCorrect: false },
      { id: 'b', text: 'FTP only', isCorrect: false },
      { id: 'c', text: 'IPP, LPD, NetBIOS', isCorrect: true },
      { id: 'd', text: 'SMTP only', isCorrect: false }
    ],
    explanation: 'Network printing uses multiple protocols including IPP (Internet Printing Protocol), LPD (Line Printer Daemon), and NetBIOS.'
  },
  {
    id: 'csa-mock-50',
    question: 'Iterative servers handle requests:',
    type: 'single',
    options: [
      { id: 'a', text: 'Simultaneously for multiple clients', isCorrect: false },
      { id: 'b', text: 'One at a time sequentially', isCorrect: true },
      { id: 'c', text: 'Through load balancing', isCorrect: false },
      { id: 'd', text: 'Using parallel processing', isCorrect: false }
    ],
    explanation: 'Iterative servers process one request at a time sequentially, while concurrent servers can handle multiple requests simultaneously.'
  },
  // REGULAR EXPRESSIONS (Questions 51-65)
  {
    id: 'csa-mock-51',
    question: 'What does the regex pattern [^abc] match?',
    type: 'single',
    options: [
      { id: 'a', text: 'Characters a, b, or c', isCorrect: false },
      { id: 'b', text: 'Any character except a, b, or c', isCorrect: true },
      { id: 'c', text: 'Beginning of line with abc', isCorrect: false },
      { id: 'd', text: 'End of line with abc', isCorrect: false }
    ],
    explanation: '[^abc] is a negated character class that matches any character except a, b, or c.'
  },
  {
    id: 'csa-mock-52',
    question: 'In regex, what does the + quantifier represent?',
    type: 'single',
    options: [
      { id: 'a', text: 'Zero or more occurrences', isCorrect: false },
      { id: 'b', text: 'One or more occurrences', isCorrect: true },
      { id: 'c', text: 'Zero or one occurrence', isCorrect: false },
      { id: 'd', text: 'Exactly one occurrence', isCorrect: false }
    ],
    explanation: 'The + quantifier matches one or more occurrences of the preceding element.'
  },
  {
    id: 'csa-mock-53',
    question: 'The regex anchor ^ represents:',
    type: 'single',
    options: [
      { id: 'a', text: 'End of line', isCorrect: false },
      { id: 'b', text: 'Start of line', isCorrect: true },
      { id: 'c', text: 'Word boundary', isCorrect: false },
      { id: 'd', text: 'Any character', isCorrect: false }
    ],
    explanation: 'The ^ anchor matches the start of a line in regex patterns.'
  },
  {
    id: 'csa-mock-54',
    question: 'What does {n,m} quantifier specify?',
    type: 'single',
    options: [
      { id: 'a', text: 'Exactly n occurrences', isCorrect: false },
      { id: 'b', text: 'At least n occurrences', isCorrect: false },
      { id: 'c', text: 'Between n and m occurrences', isCorrect: true },
      { id: 'd', text: 'At most m occurrences', isCorrect: false }
    ],
    explanation: '{n,m} quantifier matches between n and m occurrences (inclusive) of the preceding element.'
  },
  {
    id: 'csa-mock-55',
    question: 'Which POSIX character class matches digits?',
    type: 'single',
    options: [
      { id: 'a', text: '[:alnum:]', isCorrect: false },
      { id: 'b', text: '[:digit:]', isCorrect: true },
      { id: 'c', text: '[:numeric:]', isCorrect: false },
      { id: 'd', text: '[:number:]', isCorrect: false }
    ],
    explanation: '[:digit:] is the POSIX character class that matches decimal digits (0-9).'
  },
  {
    id: 'csa-mock-56',
    question: 'The regex metacharacter . (dot) matches:',
    type: 'single',
    options: [
      { id: 'a', text: 'Literal period only', isCorrect: false },
      { id: 'b', text: 'Any character except newline', isCorrect: true },
      { id: 'c', text: 'Word boundaries', isCorrect: false },
      { id: 'd', text: 'Whitespace characters', isCorrect: false }
    ],
    explanation: 'The dot (.) metacharacter matches any character except newline by default.'
  },
  {
    id: 'csa-mock-57',
    question: 'To match a literal metacharacter, you must:',
    type: 'single',
    options: [
      { id: 'a', text: 'Use parentheses', isCorrect: false },
      { id: 'b', text: 'Use square brackets', isCorrect: false },
      { id: 'c', text: 'Use backslash escape', isCorrect: true },
      { id: 'd', text: 'Use curly braces', isCorrect: false }
    ],
    explanation: 'To match a literal metacharacter, you must escape it with a backslash (e.g., \\. to match a literal period).'
  },
  {
    id: 'csa-mock-58',
    question: 'In vi editor, what does :s/old/new/g do?',
    type: 'single',
    options: [
      { id: 'a', text: 'Replace first occurrence in line', isCorrect: false },
      { id: 'b', text: 'Replace all occurrences in line', isCorrect: true },
      { id: 'c', text: 'Replace all occurrences in file', isCorrect: false },
      { id: 'd', text: 'Replace in selected lines only', isCorrect: false }
    ],
    explanation: ':s/old/new/g replaces all occurrences of "old" with "new" in the current line (g flag means global).'
  },
  {
    id: 'csa-mock-59',
    question: 'The sed command \'s/old/new/\' replaces:',
    type: 'single',
    options: [
      { id: 'a', text: 'All occurrences in the file', isCorrect: false },
      { id: 'b', text: 'First occurrence in each line', isCorrect: true },
      { id: 'c', text: 'All occurrences in each line', isCorrect: false },
      { id: 'd', text: 'Only the first occurrence in the file', isCorrect: false }
    ],
    explanation: 'sed \'s/old/new/\' replaces the first occurrence of "old" with "new" in each line by default.'
  },
  {
    id: 'csa-mock-60',
    question: 'What does grep -v \'pattern\' file do?',
    type: 'single',
    options: [
      { id: 'a', text: 'Search for pattern with verbose output', isCorrect: false },
      { id: 'b', text: 'Search for pattern case-insensitively', isCorrect: false },
      { id: 'c', text: 'Show lines that do NOT match pattern', isCorrect: true },
      { id: 'd', text: 'Search for pattern in multiple files', isCorrect: false }
    ],
    explanation: 'grep -v inverts the match, showing lines that do NOT contain the specified pattern.'
  },
  {
    id: 'csa-mock-61',
    question: 'Backreferences in regex use:',
    type: 'single',
    options: [
      { id: 'a', text: 'Forward slashes', isCorrect: false },
      { id: 'b', text: 'Backslash and numbers', isCorrect: true },
      { id: 'c', text: 'Square brackets', isCorrect: false },
      { id: 'd', text: 'Curly braces', isCorrect: false }
    ],
    explanation: 'Backreferences use backslash followed by a number (e.g., \\1, \\2) to refer to captured groups.'
  },
  {
    id: 'csa-mock-62',
    question: 'The regex pattern [a-z] matches:',
    type: 'single',
    options: [
      { id: 'a', text: 'Literal string "a-z"', isCorrect: false },
      { id: 'b', text: 'Any lowercase letter', isCorrect: true },
      { id: 'c', text: 'Range from a to z literally', isCorrect: false },
      { id: 'd', text: 'Characters a, dash, and z', isCorrect: false }
    ],
    explanation: '[a-z] is a character class that matches any single lowercase letter from a to z.'
  },
  {
    id: 'csa-mock-63',
    question: 'Which grep option enables extended regex?',
    type: 'single',
    options: [
      { id: 'a', text: '-i', isCorrect: false },
      { id: 'b', text: '-v', isCorrect: false },
      { id: 'c', text: '-E', isCorrect: true },
      { id: 'd', text: '-r', isCorrect: false }
    ],
    explanation: 'grep -E enables extended regular expressions, allowing the use of additional metacharacters like +, ?, |, and {}.'
  },
  {
    id: 'csa-mock-64',
    question: 'In the pattern (\\w+) (\\w+), what do the parentheses create?',
    type: 'single',
    options: [
      { id: 'a', text: 'Character classes', isCorrect: false },
      { id: 'b', text: 'Quantifier groups', isCorrect: false },
      { id: 'c', text: 'Capture groups', isCorrect: true },
      { id: 'd', text: 'Alternation groups', isCorrect: false }
    ],
    explanation: 'Parentheses create capture groups that can be referenced later using backreferences.'
  },
  {
    id: 'csa-mock-65',
    question: 'The [:punct:] POSIX class matches:',
    type: 'single',
    options: [
      { id: 'a', text: 'Punctuation characters', isCorrect: true },
      { id: 'b', text: 'Printable characters', isCorrect: false },
      { id: 'c', text: 'Alphanumeric characters', isCorrect: false },
      { id: 'd', text: 'Whitespace characters', isCorrect: false }
    ],
    explanation: '[:punct:] matches punctuation characters like !, @, #, $, %, etc.'
  },
  // SYSTEM CONCEPTS (Questions 66-70)
  {
    id: 'csa-mock-66',
    question: 'What is the minimum percentage required to pass the IE2060 module?',
    type: 'single',
    options: [
      { id: 'a', text: '40%', isCorrect: false },
      { id: 'b', text: '45%', isCorrect: true },
      { id: 'c', text: '50%', isCorrect: false },
      { id: 'd', text: '55%', isCorrect: false }
    ],
    explanation: 'The minimum percentage required to pass the IE2060 (Computer Systems Administration) module is 45%.'
  },
  {
    id: 'csa-mock-67',
    question: 'The assignment component includes:',
    type: 'single',
    options: [
      { id: 'a', text: 'Written report only', isCorrect: false },
      { id: 'b', text: 'Practical project only', isCorrect: false },
      { id: 'c', text: 'Report and viva', isCorrect: true },
      { id: 'd', text: 'Group presentation', isCorrect: false }
    ],
    explanation: 'The assignment component includes both a written report and a viva (oral examination) to assess understanding.'
  },
  {
    id: 'csa-mock-68',
    question: 'Which assessment has the highest weightage?',
    type: 'single',
    options: [
      { id: 'a', text: 'Mid Examination (10%)', isCorrect: false },
      { id: 'b', text: 'Assignment (30%)', isCorrect: false },
      { id: 'c', text: 'Quiz (10%)', isCorrect: false },
      { id: 'd', text: 'Semester End Examination (50%)', isCorrect: true }
    ],
    explanation: 'The Semester End Examination has the highest weightage at 50% of the total module assessment.'
  },
  {
    id: 'csa-mock-69',
    question: 'File permissions rwxrwxrwx represent permissions for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Owner, group, others', isCorrect: true },
      { id: 'b', text: 'Read, write, execute for owner only', isCorrect: false },
      { id: 'c', text: 'All users with full permissions', isCorrect: false },
      { id: 'd', text: 'System, user, guest', isCorrect: false }
    ],
    explanation: 'rwxrwxrwx represents permissions for owner (rwx), group (rwx), and others (rwx) respectively.'
  },
  {
    id: 'csa-mock-70',
    question: 'The /etc/resolv.conf file contains:',
    type: 'single',
    options: [
      { id: 'a', text: 'User account information', isCorrect: false },
      { id: 'b', text: 'DNS server information', isCorrect: true },
      { id: 'c', text: 'Network interface configuration', isCorrect: false },
      { id: 'd', text: 'System log settings', isCorrect: false }
    ],
    explanation: '/etc/resolv.conf contains DNS resolver configuration including nameserver addresses and search domains.'
  }
];
