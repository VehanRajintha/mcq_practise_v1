import { Module } from '@/types/mcq';
import { ainLecture1Questions } from './ain-lecture-1-questions';
import { ainLecture2Questions } from './ain-lecture-2-questions';
import { ainLecture3Questions } from './ain-lecture-3-questions';
import { ainLecture4Questions } from './ain-lecture-4-questions';
import { ainLecture5Questions } from './ain-lecture-5-questions';
import { ainLecture6Questions } from './ain-lecture-6-questions';
import { ainMockExamQuestions } from './ain-mock-exam-questions';
import { osMockExamQuestions } from './os-mock-exam-questions';
import { csaMockExamQuestions } from './csa-mock-exam-questions';
import { esMockExamQuestions } from './es-mock-exam-questions';

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
        id: 'ain-mock-exam',
        title: 'IE2040 Mock Exam - 60 Questions',
        description: 'Comprehensive mock exam covering STP, VLANs, IPv6, OSPF, EtherChannel, FHRP, and Network Architecture',
        questions: ainMockExamQuestions
      }
    ]
  },
  {
    id: 'csa',
    name: 'CSA',
    fullName: 'Computer System Administration',
    description: 'System administration, server management, and network services',
    lectures: [
      {
        id: 'csa-mock-exam',
        title: 'CSA Comprehensive Mock Exam - 70 Questions',
        description: 'Comprehensive mock exam covering UNIX/Linux Fundamentals, Virtualization, Network Servers, Regular Expressions, and System Concepts',
        questions: csaMockExamQuestions
      }
    ]
  },
  {
    id: 'os',
    name: 'OS',
    fullName: 'Operating Systems',
    description: 'Operating system concepts, processes, and memory management',
    lectures: [
      {
        id: 'os-mock-exam',
        title: 'OS Comprehensive Mock Exam - 65 Questions',
        description: 'Comprehensive mock exam covering OS concepts from Chapters 1-5: Introduction, OS Services, Processes, CPU Scheduling, and Process Synchronization',
        questions: osMockExamQuestions
      }
    ]
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
    lectures: [
      {
        id: 'es-mock-exam',
        title: 'IE2070 Embedded Systems Mock Exam - 100 Questions',
        description: 'Comprehensive mock exam covering Introduction to Embedded Systems, AVR Architecture and Assembly Programming, Jump/Call/Control Flow, Interrupts, and Advanced Concepts',
        questions: esMockExamQuestions
      }
    ]
  }
];
