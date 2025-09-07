import { Module } from '@/types/mcq';
import { ainLecture1Questions } from './ain-lecture-1-questions';
import { ainLecture2Questions } from './ain-lecture-2-questions';
import { ainLecture3Questions } from './ain-lecture-3-questions';
import { ainLecture4Questions } from './ain-lecture-4-questions';
import { ainLecture5Questions } from './ain-lecture-5-questions';
import { ainLecture6Questions } from './ain-lecture-6-questions';

export const modules: Module[] = [
  {
    id: 'ain',
    name: 'AIN',
    fullName: 'Advanced Internetworking',
    description: 'Advanced networking concepts, protocols, and technologies',
    lectures: [
      {
        id: 'ain-lecture-1',
        title: 'Introduction to Scaling Networks',
        description: 'Network architecture, hierarchical design, and scalability concepts',
        questions: ainLecture1Questions
      },
      {
        id: 'ain-lecture-2',
        title: 'IPv6',
        description: 'IPv6 addressing, configuration, and transition mechanisms',
        questions: ainLecture2Questions
      },
      {
        id: 'ain-lecture-3',
        title: 'VLANs & Trunks',
        description: 'VLAN configuration, trunking, and inter-VLAN routing',
        questions: ainLecture3Questions
      },
      {
        id: 'ain-lecture-4',
        title: 'STP & RSTP',
        description: 'Spanning Tree Protocol, Rapid STP, and loop prevention',
        questions: ainLecture4Questions
      },
      {
        id: 'ain-lecture-5',
        title: 'EtherChannel & FHRP',
        description: 'Link aggregation, redundancy protocols, and gateway failover',
        questions: ainLecture5Questions
      },
      {
        id: 'ain-lecture-6',
        title: 'OSPF & Routing Protocols',
        description: 'Open Shortest Path First, routing protocol comparison, and area types',
        questions: ainLecture6Questions
      },
      {
        id: 'ain-lecture-7',
        title: 'IPv6',
        description: 'IPv6 addressing, configuration, and transition mechanisms',
        questions: []
      }
    ]
  },
  {
    id: 'csa',
    name: 'CSA',
    fullName: 'Computer System Administration',
    description: 'System administration, server management, and network services',
    lectures: []
  },
  {
    id: 'os',
    name: 'OS',
    fullName: 'Operating Systems',
    description: 'Operating system concepts, processes, and memory management',
    lectures: []
  },
  {
    id: 'ps',
    name: 'PS',
    fullName: 'Professional Skills',
    description: 'Communication, teamwork, and professional development',
    lectures: []
  },
  {
    id: 'es',
    name: 'ES',
    fullName: 'Embedded Systems',
    description: 'Microcontrollers, embedded programming, and hardware interfaces',
    lectures: []
  }
];
