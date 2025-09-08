import { MCQQuestion } from '@/types/mcq';

export const osMockExamQuestions: MCQQuestion[] = [
  {
    id: 'os-mock-1',
    question: 'Which statement about the kernel is MOST accurate?',
    type: 'single',
    options: [
      { id: 'a', text: 'Kernel includes all system programs shipped with the OS', isCorrect: false },
      { id: 'b', text: 'Kernel is the one program running at all times on the computer', isCorrect: true },
      { id: 'c', text: 'Kernel handles only hardware interrupts, not software interrupts', isCorrect: false },
      { id: 'd', text: 'Kernel operates exclusively in user mode for security', isCorrect: false }
    ],
    explanation: 'The kernel is the core component of the operating system that runs continuously and manages system resources. It handles both hardware and software interrupts and operates in kernel mode for privileged operations.'
  },
  {
    id: 'os-mock-2',
    question: 'In a system with both synchronous and asynchronous I/O, what is the PRIMARY advantage of asynchronous I/O?',
    type: 'single',
    options: [
      { id: 'a', text: "It's simpler to implement than synchronous I/O", isCorrect: false },
      { id: 'b', text: 'It guarantees faster I/O completion times', isCorrect: false },
      { id: 'c', text: 'It allows CPU to continue processing while I/O operations execute', isCorrect: true },
      { id: 'd', text: 'It requires fewer system resources', isCorrect: false }
    ],
    explanation: 'Asynchronous I/O allows the CPU to continue executing other tasks while I/O operations are in progress, improving overall system throughput and responsiveness.'
  },
  {
    id: 'os-mock-3',
    question: 'Which sequence correctly represents the storage hierarchy from fastest to slowest?',
    type: 'single',
    options: [
      { id: 'a', text: 'Cache → Registers → Main Memory → Secondary Storage', isCorrect: false },
      { id: 'b', text: 'Registers → Cache → Main Memory → Secondary Storage', isCorrect: true },
      { id: 'c', text: 'Main Memory → Cache → Registers → Secondary Storage', isCorrect: false },
      { id: 'd', text: 'Secondary Storage → Main Memory → Cache → Registers', isCorrect: false }
    ],
    explanation: 'The storage hierarchy from fastest to slowest is: Registers (fastest, smallest), Cache (very fast, small), Main Memory (fast, medium size), Secondary Storage (slowest, largest capacity).'
  },
  {
    id: 'os-mock-4',
    question: 'What happens when a timer interrupt occurs in a protected system?',
    type: 'single',
    options: [
      { id: 'a', text: 'The current process continues execution indefinitely', isCorrect: false },
      { id: 'b', text: 'The system switches to kernel mode and handles the interrupt', isCorrect: true },
      { id: 'c', text: 'Only user-mode processes can handle timer interrupts', isCorrect: false },
      { id: 'd', text: 'The interrupt is ignored to prevent system instability', isCorrect: false }
    ],
    explanation: 'Timer interrupts are handled by the operating system kernel, which switches to kernel mode to process the interrupt and potentially perform context switching or scheduling decisions.'
  },
  {
    id: 'os-mock-5',
    question: 'In dual-mode operation, which statement is FALSE?',
    type: 'single',
    options: [
      { id: 'a', text: 'Privileged instructions can only be executed in kernel mode', isCorrect: false },
      { id: 'b', text: 'System calls cause a mode switch from user to kernel mode', isCorrect: false },
      { id: 'c', text: 'The mode bit is set by user programs to request kernel services', isCorrect: true },
      { id: 'd', text: 'User processes cannot directly access hardware resources', isCorrect: false }
    ],
    explanation: 'The mode bit is controlled by the operating system, not by user programs. User programs make system calls to request kernel services, which then switch to kernel mode.'
  },
  {
    id: 'os-mock-6',
    question: 'Which parameter passing method for system calls is MOST efficient for large amounts of data?',
    type: 'single',
    options: [
      { id: 'a', text: 'Passing parameters in registers', isCorrect: false },
      { id: 'b', text: 'Passing parameters on the stack', isCorrect: false },
      { id: 'c', text: 'Passing parameters in a memory block with address in register', isCorrect: true },
      { id: 'd', text: 'Passing parameters through global variables', isCorrect: false }
    ],
    explanation: 'For large amounts of data, passing a pointer to a memory block containing the data is most efficient, as it avoids copying large amounts of data and works within register limitations.'
  },
  {
    id: 'os-mock-7',
    question: 'In the linker-loader process, what happens during the relocation phase?',
    type: 'single',
    options: [
      { id: 'a', text: 'Source code is compiled into object files', isCorrect: false },
      { id: 'b', text: 'Object files are combined with libraries', isCorrect: false },
      { id: 'c', text: 'Final memory addresses are assigned to the program', isCorrect: true },
      { id: 'd', text: 'The program is executed for the first time', isCorrect: false }
    ],
    explanation: 'Relocation is the process of adjusting memory addresses in the program to reflect the actual memory locations where the program will be loaded and executed.'
  },
  {
    id: 'os-mock-8',
    question: 'Which OS structure provides the BEST performance but is hardest to maintain?',
    type: 'single',
    options: [
      { id: 'a', text: 'Microkernel', isCorrect: false },
      { id: 'b', text: 'Layered approach', isCorrect: false },
      { id: 'c', text: 'Monolithic structure', isCorrect: true },
      { id: 'd', text: 'Loadable kernel modules', isCorrect: false }
    ],
    explanation: 'Monolithic kernels provide the best performance due to direct function calls between components, but they are harder to maintain and debug due to tight coupling between all system components.'
  },
  {
    id: 'os-mock-9',
    question: 'What is the main disadvantage of the layered OS approach?',
    type: 'single',
    options: [
      { id: 'a', text: 'Difficult to debug', isCorrect: false },
      { id: 'b', text: 'Poor modularity', isCorrect: false },
      { id: 'c', text: 'Performance overhead due to layer transitions', isCorrect: true },
      { id: 'd', text: 'Lack of flexibility', isCorrect: false }
    ],
    explanation: 'The layered approach introduces performance overhead because requests must pass through multiple layers, each adding processing time and potential delays.'
  },
  {
    id: 'os-mock-10',
    question: "In Android's architecture, which component runs Java applications?",
    type: 'single',
    options: [
      { id: 'a', text: 'Linux Kernel', isCorrect: false },
      { id: 'b', text: 'Libraries', isCorrect: false },
      { id: 'c', text: 'Android Runtime (Dalvik VM)', isCorrect: true },
      { id: 'd', text: 'Application Framework', isCorrect: false }
    ],
    explanation: 'The Android Runtime (originally Dalvik VM, now ART) is responsible for executing Java applications by converting Java bytecode to native machine code.'
  },
  {
    id: 'os-mock-11',
    question: 'What distinguishes a process from a program?',
    type: 'single',
    options: [
      { id: 'a', text: 'A process is stored on disk, a program is in memory', isCorrect: false },
      { id: 'b', text: 'A program is active, a process is passive', isCorrect: false },
      { id: 'c', text: 'A process is a program in execution (active), a program is passive', isCorrect: true },
      { id: 'd', text: 'There is no difference between a process and a program', isCorrect: false }
    ],
    explanation: 'A program is a passive entity stored on disk, while a process is an active entity - a program in execution with its own memory space, registers, and execution state.'
  },
  {
    id: 'os-mock-12',
    question: 'In the process state diagram, which transition is NOT possible?',
    type: 'single',
    options: [
      { id: 'a', text: 'Running → Ready', isCorrect: false },
      { id: 'b', text: 'Ready → Running', isCorrect: false },
      { id: 'c', text: 'New → Running', isCorrect: true },
      { id: 'd', text: 'Waiting → Running', isCorrect: false }
    ],
    explanation: 'A new process must first be admitted to the ready queue before it can be scheduled to run. The transition New → Running bypasses the Ready state, which is not allowed.'
  },
  {
    id: 'os-mock-13',
    question: 'What information is NOT stored in a Process Control Block (PCB)?',
    type: 'single',
    options: [
      { id: 'a', text: 'Process state and program counter', isCorrect: false },
      { id: 'b', text: 'CPU registers and scheduling information', isCorrect: false },
      { id: 'c', text: 'Source code of the program', isCorrect: true },
      { id: 'd', text: 'Memory management information', isCorrect: false }
    ],
    explanation: 'The PCB contains process metadata like state, registers, and scheduling info, but not the actual source code, which is stored separately in the program file.'
  },
  {
    id: 'os-mock-14',
    question: 'In the producer-consumer problem with a circular buffer of size 10, if `in = 5` and `out = 3`, how many items are currently in the buffer?',
    type: 'single',
    options: [
      { id: 'a', text: '2', isCorrect: true },
      { id: 'b', text: '3', isCorrect: false },
      { id: 'c', text: '5', isCorrect: false },
      { id: 'd', text: '8', isCorrect: false }
    ],
    explanation: 'Using the formula: (in - out + BUFFER_SIZE) % BUFFER_SIZE = (5-3+10)%10 = 12%10 = 2 items in the buffer.'
  },
  {
    id: 'os-mock-15',
    question: 'Which system call creates an exact duplicate of the calling process?',
    type: 'single',
    options: [
      { id: 'a', text: 'exec()', isCorrect: false },
      { id: 'b', text: 'wait()', isCorrect: false },
      { id: 'c', text: 'fork()', isCorrect: true },
      { id: 'd', text: 'exit()', isCorrect: false }
    ],
    explanation: 'fork() creates a new process that is an exact duplicate of the calling process, including memory space, file descriptors, and execution state.'
  },
  {
    id: 'os-mock-16',
    question: 'In message passing, what is the difference between blocking and non-blocking send?',
    type: 'single',
    options: [
      { id: 'a', text: 'Blocking send waits for message to be received; non-blocking continues immediately', isCorrect: true },
      { id: 'b', text: "Non-blocking send waits for acknowledgment; blocking send doesn't", isCorrect: false },
      { id: 'c', text: 'There is no difference in functionality', isCorrect: false },
      { id: 'd', text: 'Blocking send is faster than non-blocking send', isCorrect: false }
    ],
    explanation: 'Blocking send waits until the message is received by the destination process, while non-blocking send returns immediately regardless of whether the message was received.'
  },
  {
    id: 'os-mock-17',
    question: 'What is a zombie process?',
    type: 'single',
    options: [
      { id: 'a', text: 'A process that has been killed by the OS', isCorrect: false },
      { id: 'b', text: 'A process that runs in the background', isCorrect: false },
      { id: 'c', text: "A terminated process whose parent hasn't called wait()", isCorrect: true },
      { id: 'd', text: 'A process that consumes too many resources', isCorrect: false }
    ],
    explanation: 'A zombie process is a terminated process whose parent has not yet called wait() to read its exit status. The process entry remains in the process table until the parent collects it.'
  },
  {
    id: 'os-mock-18',
    question: 'Which scheduling algorithm provides the minimum average waiting time?',
    type: 'single',
    options: [
      { id: 'a', text: 'First-Come, First-Served (FCFS)', isCorrect: false },
      { id: 'b', text: 'Shortest Job First (SJF)', isCorrect: true },
      { id: 'c', text: 'Round Robin (RR)', isCorrect: false },
      { id: 'd', text: 'Priority Scheduling', isCorrect: false }
    ],
    explanation: 'SJF is proven to provide the minimum average waiting time among all scheduling algorithms, as it always selects the shortest job next, minimizing total waiting time.'
  },
  {
    id: 'os-mock-19',
    question: 'In Round Robin scheduling with time quantum = 4ms, what happens if a process completes in 3ms?',
    type: 'single',
    options: [
      { id: 'a', text: 'The process waits for the remaining 1ms', isCorrect: false },
      { id: 'b', text: 'The process is immediately moved to the next queue', isCorrect: false },
      { id: 'c', text: 'The CPU is allocated to the next process immediately', isCorrect: true },
      { id: 'd', text: 'The system crashes due to early completion', isCorrect: false }
    ],
    explanation: 'When a process completes before its time quantum expires, the CPU is immediately allocated to the next process in the ready queue, maximizing CPU utilization.'
  },
  {
    id: 'os-mock-20',
    question: 'The convoy effect is primarily associated with which scheduling algorithm?',
    type: 'single',
    options: [
      { id: 'a', text: 'Shortest Job First', isCorrect: false },
      { id: 'b', text: 'Round Robin', isCorrect: false },
      { id: 'c', text: 'First-Come, First-Served', isCorrect: true },
      { id: 'd', text: 'Priority Scheduling', isCorrect: false }
    ],
    explanation: 'The convoy effect occurs in FCFS when a long process holds the CPU, causing all shorter processes to wait behind it, leading to poor average waiting times.'
  },
  {
    id: 'os-mock-21',
    question: 'In the exponential averaging formula τₙ₊₁ = α × tₙ + (1-α) × τₙ, what does α typically equal?',
    type: 'single',
    options: [
      { id: 'a', text: '0.1', isCorrect: false },
      { id: 'b', text: '0.5', isCorrect: true },
      { id: 'c', text: '0.8', isCorrect: false },
      { id: 'd', text: '1.0', isCorrect: false }
    ],
    explanation: 'α = 0.5 is commonly used as it provides a good balance between giving weight to recent burst times and historical data in predicting future burst times.'
  },
  {
    id: 'os-mock-22',
    question: 'Which scheduling algorithm can suffer from starvation?',
    type: 'single',
    options: [
      { id: 'a', text: 'Round Robin', isCorrect: false },
      { id: 'b', text: 'FCFS', isCorrect: false },
      { id: 'c', text: 'Priority Scheduling', isCorrect: true },
      { id: 'd', text: 'Shortest Job First', isCorrect: false }
    ],
    explanation: 'Priority scheduling can cause starvation when low-priority processes never get CPU time because higher-priority processes keep arriving. SJF can also cause starvation for long processes.'
  },
  {
    id: 'os-mock-23',
    question: 'In multilevel feedback queue, what typically happens to a process that doesn\'t complete in its time quantum?',
    type: 'single',
    options: [
      { id: 'a', text: 'It gets a longer time quantum in the same queue', isCorrect: false },
      { id: 'b', text: 'It is terminated', isCorrect: false },
      { id: 'c', text: 'It is demoted to a lower priority queue', isCorrect: true },
      { id: 'd', text: 'It is promoted to a higher priority queue', isCorrect: false }
    ],
    explanation: 'In multilevel feedback queues, processes that don\'t complete within their time quantum are moved to lower priority queues with longer time quanta, giving preference to shorter jobs.'
  },
  {
    id: 'os-mock-24',
    question: 'For Round Robin, the rule of thumb is that what percentage of CPU bursts should be shorter than the time quantum?',
    type: 'single',
    options: [
      { id: 'a', text: '60%', isCorrect: false },
      { id: 'b', text: '70%', isCorrect: false },
      { id: 'c', text: '80%', isCorrect: true },
      { id: 'd', text: '90%', isCorrect: false }
    ],
    explanation: 'The 80% rule ensures that most processes complete within one time quantum, minimizing context switching overhead while maintaining good response times.'
  },
  {
    id: 'os-mock-25',
    question: 'Given processes P1(8), P2(4), P3(9), P4(5) arriving at time 0 with SJF scheduling, what is the waiting time for P3?',
    type: 'single',
    options: [
      { id: 'a', text: '17', isCorrect: true },
      { id: 'b', text: '13', isCorrect: false },
      { id: 'c', text: '9', isCorrect: false },
      { id: 'd', text: '12', isCorrect: false }
    ],
    explanation: 'SJF order: P2(4) → P4(5) → P1(8) → P3(9). P3 waits for P2(4) + P4(5) + P1(8) = 17 time units.'
  },
  {
    id: 'os-mock-26',
    question: 'What is a race condition?',
    type: 'single',
    options: [
      { id: 'a', text: 'A competition between processes for CPU time', isCorrect: false },
      { id: 'b', text: 'When multiple processes access shared data and the outcome depends on execution timing', isCorrect: true },
      { id: 'c', text: 'A deadlock situation between processes', isCorrect: false },
      { id: 'd', text: 'A scheduling conflict in the ready queue', isCorrect: false }
    ],
    explanation: 'A race condition occurs when multiple processes access shared resources concurrently, and the final result depends on the unpredictable timing of their execution.'
  },
  {
    id: 'os-mock-27',
    question: 'Which requirement of the critical section problem ensures that if no process is in the critical section and some processes want to enter, the selection cannot be postponed indefinitely?',
    type: 'single',
    options: [
      { id: 'a', text: 'Mutual Exclusion', isCorrect: false },
      { id: 'b', text: 'Progress', isCorrect: true },
      { id: 'c', text: 'Bounded Waiting', isCorrect: false },
      { id: 'd', text: 'Atomicity', isCorrect: false }
    ],
    explanation: 'The Progress requirement ensures that when no process is in the critical section and some processes want to enter, the selection of which process enters cannot be postponed indefinitely.'
  },
  {
    id: 'os-mock-28',
    question: 'What is the main problem with Peterson\'s solution on modern architectures?',
    type: 'single',
    options: [
      { id: 'a', text: 'It doesn\'t provide mutual exclusion', isCorrect: false },
      { id: 'b', text: 'It violates the progress requirement', isCorrect: false },
      { id: 'c', text: 'Instruction reordering by compilers/processors can cause issues', isCorrect: true },
      { id: 'd', text: 'It only works for two processes', isCorrect: false }
    ],
    explanation: 'Modern processors and compilers can reorder instructions for optimization, which can break the assumptions that Peterson\'s solution relies on for correctness.'
  },
  {
    id: 'os-mock-29',
    question: 'In the test-and-set instruction implementation, what value does the instruction return?',
    type: 'single',
    options: [
      { id: 'a', text: 'Always returns true', isCorrect: false },
      { id: 'b', text: 'Always returns false', isCorrect: false },
      { id: 'c', text: 'Returns the original value of the target', isCorrect: true },
      { id: 'd', text: 'Returns the new value of the target', isCorrect: false }
    ],
    explanation: 'Test-and-set atomically sets the target to true and returns the original value, allowing processes to check if they successfully acquired the lock.'
  },
  {
    id: 'os-mock-30',
    question: 'What is the main disadvantage of mutex locks?',
    type: 'single',
    options: [
      { id: 'a', text: 'They don\'t provide mutual exclusion', isCorrect: false },
      { id: 'b', text: 'They require busy waiting (spinlock)', isCorrect: true },
      { id: 'c', text: 'They can only be used by one process', isCorrect: false },
      { id: 'd', text: 'They are not atomic', isCorrect: false }
    ],
    explanation: 'Mutex locks typically use busy waiting (spinning), which wastes CPU cycles while a process waits for the lock to become available.'
  },
  {
    id: 'os-mock-31',
    question: 'In semaphore implementation without busy waiting, what happens when wait(S) is called and S->value < 0?',
    type: 'single',
    options: [
      { id: 'a', text: 'The process continues execution', isCorrect: false },
      { id: 'b', text: 'The process is terminated', isCorrect: false },
      { id: 'c', text: 'The process is added to the waiting queue and blocked', isCorrect: true },
      { id: 'd', text: 'The semaphore value is reset to 0', isCorrect: false }
    ],
    explanation: 'When a semaphore value is negative, it indicates how many processes are waiting. The calling process is blocked and added to the waiting queue.'
  },
  {
    id: 'os-mock-32',
    question: 'In the bounded buffer problem, if `empty = 0`, what does this indicate?',
    type: 'single',
    options: [
      { id: 'a', text: 'The buffer is completely empty', isCorrect: false },
      { id: 'b', text: 'The buffer is completely full', isCorrect: true },
      { id: 'c', text: 'There are no consumers waiting', isCorrect: false },
      { id: 'd', text: 'The buffer size is 0', isCorrect: false }
    ],
    explanation: 'When empty = 0, it means there are no empty slots in the buffer, indicating the buffer is completely full.'
  },
  {
    id: 'os-mock-33',
    question: 'In the readers-writers problem (first version), what potential issue can occur?',
    type: 'single',
    options: [
      { id: 'a', text: 'Multiple readers cannot read simultaneously', isCorrect: false },
      { id: 'b', text: 'Writers may suffer from starvation', isCorrect: true },
      { id: 'c', text: 'The solution doesn\'t provide mutual exclusion', isCorrect: false },
      { id: 'd', text: 'Deadlock between readers and writers', isCorrect: false }
    ],
    explanation: 'In the first readers-writers solution, readers have priority, which can cause writers to wait indefinitely if readers keep arriving.'
  },
  {
    id: 'os-mock-34',
    question: 'In the dining philosophers problem, what causes deadlock?',
    type: 'single',
    options: [
      { id: 'a', text: 'All philosophers pick up their left chopstick simultaneously', isCorrect: true },
      { id: 'b', text: 'Philosophers eat for too long', isCorrect: false },
      { id: 'c', text: 'There are not enough chopsticks', isCorrect: false },
      { id: 'd', text: 'The semaphores are initialized incorrectly', isCorrect: false }
    ],
    explanation: 'Deadlock occurs when all philosophers pick up their left chopstick first, then wait indefinitely for their right chopstick, which is held by the philosopher to their right.'
  },
  {
    id: 'os-mock-35',
    question: 'Which incorrect semaphore usage pattern can lead to deadlock?',
    type: 'single',
    options: [
      { id: 'a', text: 'signal(mutex) ... wait(mutex)', isCorrect: false },
      { id: 'b', text: 'wait(mutex) ... wait(mutex)', isCorrect: true },
      { id: 'c', text: 'Omitting wait(mutex)', isCorrect: false },
      { id: 'd', text: 'All of the above', isCorrect: false }
    ],
    explanation: 'Calling wait(mutex) twice on the same semaphore by the same process will cause the process to block on the second wait, creating a deadlock situation.'
  },
  {
    id: 'os-mock-36',
    question: 'If a system uses preemptive scheduling and a high-priority process arrives while a low-priority process is in its critical section, what should happen?',
    type: 'single',
    options: [
      { id: 'a', text: 'The high-priority process should immediately preempt', isCorrect: false },
      { id: 'b', text: 'The low-priority process should complete its critical section first', isCorrect: true },
      { id: 'c', text: 'Both processes should be blocked', isCorrect: false },
      { id: 'd', text: 'The system should switch to non-preemptive mode', isCorrect: false }
    ],
    explanation: 'Priority inversion should be avoided. The low-priority process should complete its critical section to prevent deadlock and ensure system stability.'
  },
  {
    id: 'os-mock-37',
    question: 'In a system with both multiprogramming and time-sharing, which statement is MOST accurate?',
    type: 'single',
    options: [
      { id: 'a', text: 'Multiprogramming and time-sharing are mutually exclusive', isCorrect: false },
      { id: 'b', text: 'Time-sharing is a form of multiprogramming with short time slices', isCorrect: true },
      { id: 'c', text: 'Multiprogramming requires time-sharing to function', isCorrect: false },
      { id: 'd', text: 'Time-sharing eliminates the need for multiprogramming', isCorrect: false }
    ],
    explanation: 'Time-sharing is essentially multiprogramming with very short time slices, allowing multiple users to interact with the system simultaneously.'
  },
  {
    id: 'os-mock-38',
    question: 'Which combination would provide the BEST response time for interactive processes?',
    type: 'single',
    options: [
      { id: 'a', text: 'FCFS with large time quantum', isCorrect: false },
      { id: 'b', text: 'SJF with non-preemptive scheduling', isCorrect: false },
      { id: 'c', text: 'Round Robin with small time quantum', isCorrect: true },
      { id: 'd', text: 'Priority scheduling without aging', isCorrect: false }
    ],
    explanation: 'Round Robin with small time quantum provides the best response time for interactive processes by ensuring frequent CPU allocation and quick response to user input.'
  },
  {
    id: 'os-mock-39',
    question: 'If a process fork()s and then exec()s, what happens to the Process Control Block (PCB)?',
    type: 'single',
    options: [
      { id: 'a', text: 'A new PCB is created, the old one is destroyed', isCorrect: false },
      { id: 'b', text: 'The PCB is modified to reflect the new program', isCorrect: true },
      { id: 'c', text: 'Two identical PCBs exist', isCorrect: false },
      { id: 'd', text: 'The PCB is temporarily suspended', isCorrect: false }
    ],
    explanation: 'exec() replaces the current process image with a new program but keeps the same PCB, modifying it to reflect the new program\'s memory layout and entry point.'
  },
  {
    id: 'os-mock-40',
    question: 'In shared memory IPC, why is synchronization crucial?',
    type: 'single',
    options: [
      { id: 'a', text: 'To prevent memory leaks', isCorrect: false },
      { id: 'b', text: 'To ensure data consistency and prevent race conditions', isCorrect: true },
      { id: 'c', text: 'To allocate memory efficiently', isCorrect: false },
      { id: 'd', text: 'To enable process creation', isCorrect: false }
    ],
    explanation: 'Synchronization is essential in shared memory IPC to prevent race conditions and ensure that processes access shared data in a controlled, consistent manner.'
  },
  {
    id: 'os-mock-41',
    question: 'Which scenario would MOST likely benefit from asynchronous I/O?',
    type: 'single',
    options: [
      { id: 'a', text: 'A calculator program waiting for user input', isCorrect: false },
      { id: 'b', text: 'A web server handling multiple client requests', isCorrect: true },
      { id: 'c', text: 'A single-threaded text editor', isCorrect: false },
      { id: 'd', text: 'A batch processing system with sequential operations', isCorrect: false }
    ],
    explanation: 'Web servers benefit greatly from asynchronous I/O as they can handle multiple client requests concurrently without blocking on individual I/O operations.'
  },
  {
    id: 'os-mock-42',
    question: 'In a layered OS architecture, if Layer 3 needs to access hardware, which path must it take?',
    type: 'single',
    options: [
      { id: 'a', text: 'Direct access to Layer 0 (hardware)', isCorrect: false },
      { id: 'b', text: 'Through Layers 2, 1, then 0', isCorrect: true },
      { id: 'c', text: 'Through any lower-numbered layer', isCorrect: false },
      { id: 'd', text: 'It cannot access hardware at all', isCorrect: false }
    ],
    explanation: 'In layered architecture, each layer can only access services from the layer directly below it, so Layer 3 must go through Layers 2, 1, and 0 to reach hardware.'
  },
  {
    id: 'os-mock-43',
    question: 'What is the primary reason modern operating systems use hybrid architectures instead of pure microkernel or monolithic designs?',
    type: 'single',
    options: [
      { id: 'a', text: 'Hybrid architectures are easier to implement', isCorrect: false },
      { id: 'b', text: 'They balance performance and maintainability', isCorrect: true },
      { id: 'c', text: 'They require less memory', isCorrect: false },
      { id: 'd', text: 'They are more secure', isCorrect: false }
    ],
    explanation: 'Hybrid architectures combine the performance benefits of monolithic kernels with the modularity and maintainability advantages of microkernels.'
  },
  {
    id: 'os-mock-44',
    question: 'If a system call fails, what information is typically returned to the calling process?',
    type: 'single',
    options: [
      { id: 'a', text: 'The system shuts down', isCorrect: false },
      { id: 'b', text: 'A status code indicating the type of error', isCorrect: true },
      { id: 'c', text: 'Nothing is returned', isCorrect: false },
      { id: 'd', text: 'The process is terminated', isCorrect: false }
    ],
    explanation: 'Failed system calls return error codes that indicate the specific type of failure, allowing the calling process to handle the error appropriately.'
  },
  {
    id: 'os-mock-45',
    question: 'In producer-consumer with bounded buffer, what happens if a producer tries to add an item when the buffer is full?',
    type: 'single',
    options: [
      { id: 'a', text: 'The oldest item is overwritten', isCorrect: false },
      { id: 'b', text: 'The producer blocks until space is available', isCorrect: true },
      { id: 'c', text: 'The new item is discarded', isCorrect: false },
      { id: 'd', text: 'A larger buffer is allocated', isCorrect: false }
    ],
    explanation: 'In a bounded buffer implementation, producers block when the buffer is full, waiting for consumers to free up space before adding new items.'
  },
  {
    id: 'os-mock-46',
    question: 'Which interrupt type would occur when a process attempts to divide by zero?',
    type: 'single',
    options: [
      { id: 'a', text: 'Hardware interrupt', isCorrect: false },
      { id: 'b', text: 'Timer interrupt', isCorrect: false },
      { id: 'c', text: 'Software interrupt (trap)', isCorrect: true },
      { id: 'd', text: 'I/O interrupt', isCorrect: false }
    ],
    explanation: 'Division by zero generates a software interrupt (trap) that is triggered by the CPU when it encounters an invalid operation during instruction execution.'
  },
  {
    id: 'os-mock-47',
    question: 'In SRTF (Shortest Remaining Time First) scheduling, when is the scheduling decision re-evaluated?',
    type: 'single',
    options: [
      { id: 'a', text: 'Only when the current process completes', isCorrect: false },
      { id: 'b', text: 'At fixed time intervals', isCorrect: false },
      { id: 'c', text: 'When a new process arrives', isCorrect: true },
      { id: 'd', text: 'Never, once decided', isCorrect: false }
    ],
    explanation: 'SRTF is preemptive, so scheduling decisions are re-evaluated whenever a new process arrives, potentially preempting the current process if the new one has a shorter remaining time.'
  },
  {
    id: 'os-mock-48',
    question: 'What is the main advantage of loadable kernel modules over a pure monolithic kernel?',
    type: 'single',
    options: [
      { id: 'a', text: 'Better performance', isCorrect: false },
      { id: 'b', text: 'Flexibility to add/remove functionality without recompiling kernel', isCorrect: true },
      { id: 'c', text: 'Smaller memory footprint', isCorrect: false },
      { id: 'd', text: 'Improved security', isCorrect: false }
    ],
    explanation: 'Loadable kernel modules allow adding or removing kernel functionality at runtime without recompiling the entire kernel, providing flexibility and modularity.'
  },
  {
    id: 'os-mock-49',
    question: 'In the context of cache coherency in multiprocessor systems, what is the primary challenge?',
    type: 'single',
    options: [
      { id: 'a', text: 'Cache size limitations', isCorrect: false },
      { id: 'b', text: 'Ensuring all processors see the most recent value of data', isCorrect: true },
      { id: 'c', text: 'Memory allocation conflicts', isCorrect: false },
      { id: 'd', text: 'Processor synchronization timing', isCorrect: false }
    ],
    explanation: 'Cache coherency ensures that all processors in a multiprocessor system see a consistent view of shared data, preventing stale data issues.'
  },
  {
    id: 'os-mock-50',
    question: 'Which statement about context switching is MOST accurate?',
    type: 'single',
    options: [
      { id: 'a', text: 'Context switching is pure overhead with no useful work performed', isCorrect: true },
      { id: 'b', text: 'Context switching only occurs in preemptive systems', isCorrect: false },
      { id: 'c', text: 'Context switching time is negligible in modern systems', isCorrect: false },
      { id: 'd', text: 'Context switching improves overall system performance', isCorrect: false }
    ],
    explanation: 'Context switching is pure overhead - it involves saving and restoring process state but doesn\'t perform any useful computation for the user.'
  },
  {
    id: 'os-mock-51',
    question: 'A system has 3 processes with arrival times and burst times: P1(0,8), P2(1,4), P3(2,9). Using SRTF, what is the completion time of P2?',
    type: 'single',
    options: [
      { id: 'a', text: '5', isCorrect: true },
      { id: 'b', text: '6', isCorrect: false },
      { id: 'c', text: '7', isCorrect: false },
      { id: 'd', text: '8', isCorrect: false }
    ],
    explanation: 'P1 starts at 0, at time 1 P2 arrives (shorter remaining time), P2 runs from 1-5, completing at time 5.'
  },
  {
    id: 'os-mock-52',
    question: 'In a dining philosophers implementation, if philosopher 4 (in a 5-philosopher system) picks up chopstick[4] first, which chopstick will they pick up next?',
    type: 'single',
    options: [
      { id: 'a', text: 'chopstick[3]', isCorrect: false },
      { id: 'b', text: 'chopstick[0]', isCorrect: true },
      { id: 'c', text: 'chopstick[5]', isCorrect: false },
      { id: 'd', text: 'chopstick[1]', isCorrect: false }
    ],
    explanation: 'Right chopstick is (i+1)%5 = (4+1)%5 = 0'
  },
  {
    id: 'os-mock-53',
    question: 'If a semaphore S is initialized to 2 and three processes call wait(S) simultaneously, what will be the final value of S?',
    type: 'single',
    options: [
      { id: 'a', text: '-1', isCorrect: true },
      { id: 'b', text: '0', isCorrect: false },
      { id: 'c', text: '1', isCorrect: false },
      { id: 'd', text: '2', isCorrect: false }
    ],
    explanation: 'S starts at 2, after three wait() operations: 2-1-1-1 = -1'
  },
  {
    id: 'os-mock-54',
    question: 'In round-robin scheduling with quantum = 3, given processes [P1(10), P2(4), P3(2)], what is the waiting time for P1?',
    type: 'single',
    options: [
      { id: 'a', text: '6', isCorrect: false },
      { id: 'b', text: '7', isCorrect: true },
      { id: 'c', text: '9', isCorrect: false },
      { id: 'd', text: '10', isCorrect: false }
    ],
    explanation: 'P1 runs 0-3, waits during 3-7 (P2 runs 3-6, P3 runs 6-8, but P2 continues 8-9), then P1 runs 7-10'
  },
  {
    id: 'os-mock-55',
    question: 'If fork() is called in a program and both parent and child processes call printf("Hello"), how many "Hello" messages will be printed?',
    type: 'single',
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '2', isCorrect: true },
      { id: 'c', text: '3', isCorrect: false },
      { id: 'd', text: '4', isCorrect: false }
    ],
    explanation: 'fork() creates a child process, so both parent and child execute printf("Hello") once each'
  },
  {
    id: 'os-mock-56',
    question: 'In a system where compare_and_swap(&lock, 0, 1) returns 1, what does this indicate?',
    type: 'single',
    options: [
      { id: 'a', text: 'The lock was successfully acquired', isCorrect: false },
      { id: 'b', text: 'The lock was already held by another process', isCorrect: true },
      { id: 'c', text: 'The lock operation failed', isCorrect: false },
      { id: 'd', text: 'The lock was released', isCorrect: false }
    ],
    explanation: 'Return value 1 means lock was already 1 (held), not 0 (free)'
  },
  {
    id: 'os-mock-57',
    question: 'Which sequence of events would cause a process to transition from Running → Waiting → Ready → Running?',
    type: 'single',
    options: [
      { id: 'a', text: 'Time slice expires → I/O completes → Gets CPU', isCorrect: false },
      { id: 'b', text: 'I/O request → I/O completes → Scheduled by CPU scheduler', isCorrect: true },
      { id: 'c', text: 'System call → Timer interrupt → Context switch', isCorrect: false },
      { id: 'd', text: 'Page fault → Memory allocated → Process continues', isCorrect: false }
    ],
    explanation: 'I/O request → I/O completes → Scheduled by CPU scheduler'
  },
  {
    id: 'os-mock-58',
    question: 'In a bounded buffer problem with semaphores mutex=1, full=0, empty=5, after a producer adds one item, what are the semaphore values?',
    type: 'single',
    options: [
      { id: 'a', text: 'mutex=1, full=1, empty=4', isCorrect: true },
      { id: 'b', text: 'mutex=0, full=1, empty=4', isCorrect: false },
      { id: 'c', text: 'mutex=1, full=1, empty=5', isCorrect: false },
      { id: 'd', text: 'mutex=1, full=0, empty=4', isCorrect: false }
    ],
    explanation: 'Producer does wait(empty), wait(mutex), add item, signal(mutex), signal(full)'
  },
  {
    id: 'os-mock-59',
    question: 'If a system uses priority scheduling with aging, what happens to the priority of a process that waits for a long time?',
    type: 'single',
    options: [
      { id: 'a', text: 'Priority decreases (gets lower priority)', isCorrect: false },
      { id: 'b', text: 'Priority increases (gets higher priority)', isCorrect: true },
      { id: 'c', text: 'Priority remains constant', isCorrect: false },
      { id: 'd', text: 'Process is terminated', isCorrect: false }
    ],
    explanation: 'Aging increases priority of waiting processes to prevent starvation'
  },
  {
    id: 'os-mock-60',
    question: 'In readers-writers problem, if 3 readers are currently reading and a writer arrives, what happens in the first readers-writers problem solution?',
    type: 'single',
    options: [
      { id: 'a', text: 'Writer immediately preempts readers', isCorrect: false },
      { id: 'b', text: 'Writer waits for all readers to finish', isCorrect: false },
      { id: 'c', text: 'New readers can still start reading', isCorrect: true },
      { id: 'd', text: 'System deadlocks', isCorrect: false }
    ],
    explanation: 'In first R-W problem, readers have priority; writer must wait, and new readers can join'
  },
  {
    id: 'os-mock-61',
    question: 'Consider a system where fork() is called twice in sequence. How many total processes will exist after both fork() calls complete?',
    type: 'single',
    options: [
      { id: 'a', text: '2', isCorrect: false },
      { id: 'b', text: '3', isCorrect: false },
      { id: 'c', text: '4', isCorrect: true },
      { id: 'd', text: '8', isCorrect: false }
    ],
    explanation: 'First fork() creates 2 processes, then both call fork() again: 2×2 = 4 processes total'
  },
  {
    id: 'os-mock-62',
    question: 'In Peterson\'s solution, if Process 0 sets flag[0]=true and turn=1, but Process 1 never sets flag[1]=true, what happens?',
    type: 'single',
    options: [
      { id: 'a', text: 'Process 0 enters critical section immediately', isCorrect: true },
      { id: 'b', text: 'Process 0 waits indefinitely', isCorrect: false },
      { id: 'c', text: 'Both processes enter critical section', isCorrect: false },
      { id: 'd', text: 'System deadlocks', isCorrect: false }
    ],
    explanation: 'P0\'s while condition: while(flag[1] && turn==1) - since flag[1] is false, condition fails, P0 enters CS'
  },
  {
    id: 'os-mock-63',
    question: 'If a multilevel feedback queue has 3 levels with time quantums [4ms, 8ms, 12ms], and a process needs 20ms total CPU time, through which queues will it pass?',
    type: 'single',
    options: [
      { id: 'a', text: 'Only Q0', isCorrect: false },
      { id: 'b', text: 'Q0, then Q1', isCorrect: false },
      { id: 'c', text: 'Q0, Q1, then Q2', isCorrect: true },
      { id: 'd', text: 'All three queues multiple times', isCorrect: false }
    ],
    explanation: 'Uses 4ms in Q0, demoted to Q1, uses 8ms more, demoted to Q2, uses remaining 8ms'
  },
  {
    id: 'os-mock-64',
    question: 'In a compare-and-swap based solution for critical section, what is the primary advantage over test-and-set?',
    type: 'single',
    options: [
      { id: 'a', text: 'compare-and-swap is faster', isCorrect: false },
      { id: 'b', text: 'compare-and-swap can implement bounded waiting more easily', isCorrect: true },
      { id: 'c', text: 'compare-and-swap uses less memory', isCorrect: false },
      { id: 'd', text: 'compare-and-swap doesn\'t require atomic operations', isCorrect: false }
    ],
    explanation: 'compare-and-swap can implement bounded waiting more easily'
  },
  {
    id: 'os-mock-65',
    question: 'If a process in shared memory IPC executes the sequence: counter++, counter++, counter--, what is the minimum number of memory accesses to the \'counter\' variable?',
    type: 'single',
    options: [
      { id: 'a', text: '3', isCorrect: false },
      { id: 'b', text: '6', isCorrect: false },
      { id: 'c', text: '9', isCorrect: true },
      { id: 'd', text: '12', isCorrect: false }
    ],
    explanation: 'Each operation requires load-modify-store: 3 accesses × 3 operations = 9 total'
  }
];